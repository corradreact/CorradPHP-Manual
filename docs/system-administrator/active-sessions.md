# Active Sessions

## Purpose

Active Sessions menampilkan daftar semua pengguna yang sedang login ke sistem. Administrator dapat melihat detail login termasuk IP address, waktu login, dan browser yang digunakan. Administrator juga dapat logout pengguna tertentu jika diperlukan.

## When to Use

Gunakan fitur ini untuk:
- Memantau siapa saja yang login
- Mengidentifikasi sesi mencurigakan
- Logout pengguna yang lupa logout
- Audit keamanan

## Steps

1. Buka menu **System Administrator** dari sidebar
2. Klik submenu **Active Sessions**
3. Halaman akan menampilkan tabel daftar pengguna yang sedang login
4. Lihat informasi: Username, Login Time, IP Address, Browser/Device
5. Untuk logout pengguna tertentu:
   - Cari user pada tabel
   - Klik tombol **Logout** atau **Force Logout**
   - Konfirmasi action
6. Untuk menyegarkan data, klik tombol **Refresh**

## Screenshot

[Insert screenshot of active sessions here]

## Important Notes

⚠️ **Perhatian:**
- Force logout akan logout pengguna secara langsung tanpa notifikasi
- Gunakan dengan hati-hati untuk menghindari kehilangan data pengguna
- Catat waktu dan user sebelum melakukan force logout

ℹ️ **Catatan:**
- Data di-update secara berkala, bukan real-time
- Beberapa session mungkin dari automated process atau API

## Expected Result

Anda dapat melihat daftar lengkap pengguna yang aktif dan dapat logout user tertentu jika diperlukan.

## Common Issues

### Session User Tidak Hilang Setelah Force Logout
- **Penyebab**: User login ulang atau cache client
- **Solusi**: Coba force logout lagi atau hubungi user untuk logout manual

### Halaman Terlalu Lambat Saat Ada Banyak Session
- **Penyebab**: Terlalu banyak pengguna login
- **Solusi**: Gunakan filter atau pagination untuk membatasi data tampil

### Tidak Bisa Logout User Tertentu
- **Penyebab**: User tersebut adalah administrator atau system process
- **Solusi**: Hubungi super administrator jika perlu
