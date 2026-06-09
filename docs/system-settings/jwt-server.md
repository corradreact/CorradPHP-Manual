# JWT Server

::: info Tujuan
JWT (JSON Web Token) Server membolehkan sistem luar mengakses CORRAD API dengan selamat menggunakan token yang telah ditandatangani. Akses kepada API dikawal melalui empat HTTP header yang wajib disertakan dalam setiap request.
:::

## Langkah Ringkas (Setup Flow)

1. **Register Application** — daftar aplikasi/klien baru untuk menerima `Client ID` dan `Client Secret`.
2. **Issue Token** — hasilkan token untuk aplikasi tersebut; token mengandungi string token (`TOKEN_STR`) yang digunakan dalam setiap panggilan API.

## Applications (Pendaftaran Aplikasi)

- Klik **+ New Application** untuk mendaftarkan aplikasi baru.
- Isikan `Application Name`, (pilihan) `Redirect URL`, dan `Allowed Source IPs` untuk sekatan IP (satu IP atau subnet per baris).
- Sistem akan menjana `Client Secret` (salin dan simpan dengan selamat kerana ia hanya dipaparkan di senarai).
- Memadam aplikasi akan membatalkan semua token yang berkaitan.

## Tokens (Menerbit & Pengurusan)

- Klik **+ New Token** untuk menerbitkan token kepada aplikasi terdaftar.
- Pilih `Application`, `Algorithm` (contoh: `HS256`), dan `Expiry` (dalam saat).
- Token dihasilkan sebagai `TOKEN_STR` dan boleh disalin dari senarai token. Token boleh digunakan sehingga ia tamat tempoh atau dibatalkan.
- Disyorkan menggunakan tempoh luput panjang (contoh sehingga 1 tahun).

## Token Fields & Algoritma

- `Method / Algorithm`: pilihan termasuk `NONE` (tanpa tandatangan), `HS256`, `HS384`, `HS512` (HMAC), atau `RS256`/`RS512` (RSA - memerlukan kekunci persendirian).
- `Key`: kunci rahsia untuk HMAC atau kunci RSA untuk RSA. Jika menggunakan HMAC, pastikan `Client Secret` atau `Key` tersimpan selamat.
- `Expiry`: nilai dalam saat (contoh `3600` = 1 jam, `86400` = 1 hari, `31536000` = 1 tahun).

## API Usage (Header Required)

Semua panggilan API yang dilindungi JWT mesti menyertakan header HTTP berikut:

- Header: `Corrad-Jwt-Token`
- Value: string token JWT yang ditandatangani (`TOKEN_STR`)

Contoh cURL:

```
curl -X POST https://your-corrad-host/api_gateway.php \
  -H "Corrad-Jwt-Token: eyJhbGci..." \
  -d '{"param": "value"}'
```

## Security Notes

- Jangan simpan `TOKEN_STR` atau `Client Secret` dalam repositori awam. Gunakan pembolehubah persekitaran (`.env`) atau vault rahsia.
- Jika anda menggunakan `Allowed Source IPs`, pastikan panggilan API datang dari IP/CIDR yang dibenarkan.
- Token yang telah tamat tempoh akan menyebabkan ralat `401`.

## Quick Steps

1. Daftar aplikasi (`+ New Application`).
2. Salin `Client Secret` dan simpan di tempat selamat.
3. Jana token (`+ New Token`) pilih algoritma dan tempoh luput.
4. Hantar token dalam header `Corrad-Jwt-Token` pada setiap panggilan API.
