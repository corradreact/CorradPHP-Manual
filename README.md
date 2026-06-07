# PHP84 CORRAD User Manual

Template manual pengguna ini dibina menggunakan VitePress.

## Struktur projek

- `package.json` - skrip pembangunan dan pembinaan.
- `docs/` - kandungan manual markdown.
- `docs/.vitepress/` - konfigurasi VitePress dan gaya tersuai.

## Cara jalankan secara lokal

1. Pasang dependencies:

```powershell
npm install
```

2. Jalankan dokumentasi secara lokal:

```powershell
npm run docs:dev
```

3. Buka `http://localhost:4173` dalam pelayar.

## Cara bina untuk produksi

```powershell
npm run docs:build
```

## Cara deploy ke Vercel

1. Pastikan anda mempunyai akaun Vercel.
2. Hubungkan repositori ini di Vercel.
3. Tetapkan folder build sebagai `docs/.vitepress/dist` jika perlu.
4. Gunakan arahan build berikut dalam tetapan Vercel:

```bash
npm install
npm run docs:build
```

> Nota: VitePress biasanya mengesan `docs` sebagai direktori sumber. Jika Vercel memerlukan tetapan khusus, gunakan `npm run docs:build` dan tetapkan folder keluaran.

## Pengeditan mudah

- Tambah tangkapan skrin ke dalam fail markdown menggunakan placeholder:

```markdown
::: tip Screenshot placeholder
[Insert screenshot here]
:::
```

- Ubah kandungan setiap seksyen di `docs/*.md`.
- Tambah halaman baru dan kemas kini `docs/.vitepress/sidebar.json` untuk mengemaskini menu sisi.
