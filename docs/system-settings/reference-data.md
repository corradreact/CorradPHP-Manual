# Reference Data

## Purpose

Reference Data mengelola data master/lookup yang digunakan di seluruh sistem. Data ini merupakan data dasar yang direferensikan oleh berbagai modul (seperti list status, kategori, dll).

## When to Use

Edit reference data saat:
- Menambah kategori atau status baru
- Mengubah nama status atau kategori
- Menghapus kategori yang sudah tidak digunakan
- Mengatur urutan data

## Steps

1. Buka **System Settings** > **Reference Data**
2. Pilih tipe data yang ingin dikelola dari dropdown/list:
   - Status Categories
   - Department List
   - Priority Levels
   - dll (sesuai sistem)
3. Anda akan melihat daftar data yang sudah ada
4. Untuk menambah data baru:
   - Klik tombol **Add New**
   - Isi form dengan detail data
   - Klik **Save**
5. Untuk mengedit:
   - Klik item yang ingin diubah
   - Ubah field yang diperlukan
   - Klik **Save**
6. Untuk menghapus:
   - Pilih item
   - Klik tombol **Delete**
   - Konfirmasi penghapusan

## Screenshot

[Insert screenshot here]

## Important Notes

⚠️ **Perhatian:**
- Jangan hapus reference data yang masih digunakan oleh data existing
- Perubahan reference data akan mempengaruhi semua modul yang menggunakan data ini

ℹ️ **Catatan:**
- Sistem mungkin tidak memberikan warning jika data masih digunakan
- Selalu test di development environment dulu

## Expected Result

Reference data tersimpan dengan benar dan dapat digunakan di seluruh sistem.

## Common Issues

### Tidak Bisa Hapus Reference Data
- **Penyebab**: Data masih digunakan oleh record lain
- **Solusi**: Cari dan ubah record yang menggunakan data ini terlebih dahulu

### Perubahan Data Tidak Muncul di Modul Lain
- **Penyebab**: Cache belum di-clear
- **Solusi**: Clear cache atau refresh halaman
