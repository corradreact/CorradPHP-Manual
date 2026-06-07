# PHP84 CORRAD User Manual

Laman manual pengguna statik ini dibina sebagai projek HTML/CSS/JS mudah.

## Struktur projek

- `index.html` - halaman utama manual.
- `style.css` - gaya reka bentuk.
- `script.js` - fungsi carian, smooth scroll dan active menu.
- `assets/` - ruang untuk simpan imej atau ikon jika diperlukan.

## Cara jalankan secara lokal

1. Buka `index.html` terus dalam pelayar.
2. Atau guna VS Code Live Server untuk pratonton segera.
3. Boleh juga gunakan Python server jika mahu:

```powershell
python -m http.server 8000
```

## Deploy ke Vercel

1. Pastikan `index.html` berada di root projek.
2. Deploy repositori ke Vercel seperti projek statik biasa.
3. Tiada build command diperlukan.

> Vercel akan terus menghidangkan `index.html` dari root, jadi tiada konfigurasi build khusus diperlukan.

## Penyuntingan mudah

- Tambah atau kemas kini kandungan terus dalam `index.html`.
- Untuk screenshot placeholder, gantikan teks di dalam kotak `"[Insert screenshot here]"`.
- Ubah gaya dalam `style.css` dan tingkatan fungsi carian dalam `script.js`.
