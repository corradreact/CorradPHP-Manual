import puppeteer from 'puppeteer';
import path from 'node:path';
import { promises as fs } from 'node:fs';
import PDFMerger from 'pdf-merger-js';

// URL VitePress dev
const BASE_URL = 'http://localhost:5173';

// ====== SENARAI ROUTE ======
// 👉 SINI kau isi sendiri ikut page mana untuk Staff & Admin
//    (tanpa .html, nanti script auto tambah)

const STAFF_ROUTES = [
  '/kakitangan/pengurusan-akaun/pendaftaran-pengguna',
  '/kakitangan/pengurusan-akaun/log-masuk',
  '/kakitangan/pengurusan-akaun/kemaskini-profil',
  '/kakitangan/pengurusan-permohonan/permohonan-latihan-luaran',
  '/kakitangan/pengurusan-permohonan/senarai-permohonan',
  '/kakitangan/latihan/daftar-kedatangan',
  '/kakitangan/latihan/daftar-ketidakhadiran',
  '/kakitangan/latihan/penilaian-latihan',
  '/kakitangan/latihan/cetak-sijil',
  '/kakitangan/latihan/senarai-latihan',


];

const ADMIN_ROUTES = [
  // contoh je – kau tukar ikut route manual admin
 '/admin/laporan-latihan/pengurusan-peserta',
  '/admin/laporan-latihan/pengurusan-penceramah',
  '/admin/laporan-latihan/pengurusan-penilaian',
  '/admin/pengurusan-permohonan/lihat-senarai',
  '/admin/pengurusan-permohonan/tempoh-permohonan',
  '/admin/pengurusan-pengguna/tambah-pengguna',
  '/admin/pengurusan-pengguna/kemaskini-pengguna',
  '/admin/pengurusan-emel/template-emel',
  '/admin/pengurusan-emel/Penghantaran-emel',
];

// =============================

const OUTPUT_DIR = path.join(process.cwd(), 'pdf-temp');

async function generatePdfForRoute(page, route, outPath) {
  const url = `${BASE_URL}${route}.html`;
  console.log('👉 Generate PDF dari', url);

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
  });

  console.log('✅ Siap:', outPath);
}

async function buildGroup(name, routes) {
  if (!routes || routes.length === 0) {
    console.log(`(Tiada route untuk group ${name})`);
    return;
  }

  const groupDir = path.join(OUTPUT_DIR, name);
  await fs.mkdir(groupDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const files = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const safeName = route
      .split('/')
      .filter(Boolean)
      .join('-'); // tukar / jadi -

    const filename = `${String(i + 1).padStart(2, '2')}-${safeName}.pdf`;
    const outPath = path.join(groupDir, filename);

    try {
      await generatePdfForRoute(page, route, outPath);
      files.push(outPath);
    } catch (err) {
      console.error(`❌ Gagal untuk ${route}:`, err.message);
    }
  }

  await browser.close();

  // Gabung semua PDF group ni
  const merger = new PDFMerger();
  for (const file of files) {
    await merger.add(file);
  }

  const finalPath = path.join(process.cwd(), `${name}-manual.pdf`);
  await merger.save(finalPath);
  console.log(`🎉 ${name.toUpperCase()} manual siap → ${finalPath}`);
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  await buildGroup('staff', STAFF_ROUTES);
  await buildGroup('admin', ADMIN_ROUTES);
}

main().catch(console.error);
