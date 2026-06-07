# Database Connections

## Purpose

Database Connections mengelola koneksi ke database yang digunakan oleh sistem PHP84 CORRAD. Administrator dapat menambah, mengedit, atau menghapus koneksi database sesuai kebutuhan.

## When to Use

Gunakan fitur ini untuk:
- Setup koneksi database utama
- Menambah koneksi secondary database
- Test koneksi database
- Mengubah parameter koneksi

## Steps

1. Buka **System Settings** > **Database Connections**
2. Anda akan melihat daftar koneksi database yang ada
3. Untuk menambah koneksi baru:
   - Klik tombol **Add New Connection**
   - Isi form dengan detail koneksi:
     - Connection Name
     - Database Type (MySQL, PostgreSQL, dll)
     - Host
     - Port
     - Username
     - Password
     - Database Name
   - Klik **Test Connection** untuk verifikasi
   - Klik **Save** jika koneksi berhasil
4. Untuk mengedit koneksi yang ada:
   - Klik tombol **Edit**
   - Ubah parameter yang diperlukan
   - Klik **Save**

## Screenshot

[Insert screenshot here]

## Important Notes

⚠️ **Perhatian:**
- Jangan ubah koneksi database utama tanpa backup data
- Password akan di-encrypt dan tidak ditampilkan setelah disimpan
- Pastikan database server dapat diakses dari aplikasi server

ℹ️ **Catatan:**
- Gunakan Test Connection sebelum Save untuk memastikan koneksi valid
- Port default: MySQL 3306, PostgreSQL 5432

## Expected Result

Sistem dapat terhubung ke database sesuai konfigurasi dan data dapat diakses dengan normal.

## Common Issues

### "Connection Failed" Saat Test
- **Penyebab**: Database server tidak bisa diakses atau parameter salah
- **Solusi**: 
  - Verifikasi host, port, username, password
  - Pastikan database server aktif
  - Periksa firewall rules

### Koneksi Timeout
- **Penyebab**: Network delay atau database server slow
- **Solusi**: Cek network connectivity dan database performance

### Permission Denied
- **Penyebab**: User database tidak memiliki privilege
- **Solusi**: Buat user baru dengan privilege penuh di database
