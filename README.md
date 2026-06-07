# PHP84 CORRAD User Manual

Dokumentasi ini dibina menggunakan VitePress dengan struktur Markdown yang jelas.

## Struktur projek

- `package.json` - skrip pembangunan.
- `docs/` - sumber dokumentasi berasaskan Markdown.
- `docs/.vitepress/` - konfigurasi VitePress dan tema.

## Cara jalankan secara lokal

```bash
npm install
npm run docs:dev
```

Buka `http://localhost:4173` untuk melihat dokumentasi.

## Cara bina untuk produksi

```bash
npm run docs:build
```

## Deploy ke Vercel

1. Hubungkan repositori ini ke Vercel.
2. Tetapkan build command: `npm install && npm run docs:build`.
3. Tetapkan output directory kepada `docs/.vitepress/dist` jika Vercel tidak mengesan secara automatik.

## Cara edit

- Edit setiap halaman Markdown dalam `docs/`.
- Tambah halaman baru dan kemas kini `docs/.vitepress/config.ts` jika perlu.
