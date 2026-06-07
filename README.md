# PHP84 CORRAD User Manual

Manual ini dibina sebagai laman dokumentasi statik menggunakan Markdown.

## Struktur projek

- `index.html` — laman utama dokumentasi.
- `style.css` — gaya reka bentuk.
- `script.js` — pemuatan Markdown, sidebar, carian dan navigasi.
- `docs/` — sumber Markdown untuk setiap halaman manual.

## Cara jalankan secara lokal

1. Buka `index.html` menggunakan VS Code Live Server.
2. Atau buka `index.html` secara terus dalam penyemak imbas.

> Jika halaman tidak dimuatkan apabila dibuka terus, gunakan Live Server untuk menyelesaikan sekatan fetch fail tempatan.

## Deploy ke Vercel

1. Sambungkan repositori ini ke Vercel.
2. Tiada build command diperlukan.
3. Vercel akan menerbitkan `index.html` secara automatik.

## Cara edit

- Ubah kandungan halaman di dalam folder `docs/`.
- Tambah halaman baru dalam folder yang sesuai.
- Kemaskini `script.js` jika anda mahu mengubah susunan sidebar.
