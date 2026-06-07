# System Configuration

## Purpose

System Configuration menyimpan semua pengaturan dasar sistem PHP84 CORRAD seperti nama organisasi, alamat, email, timezone, dan berbagai parameter teknis lainnya.

## When to Use

Edit konfigurasi sistem saat:
- Setup awal sistem
- Mengubah informasi organisasi
- Mengatur timezone atau format tanggal
- Mengubah parameter teknis sistem

## Steps

1. Buka **System Settings** > **System Configuration**
2. Anda akan melihat form dengan berbagai field konfigurasi
3. Edit field yang diperlukan:
   - Organization Name
   - Address
   - Email
   - Timezone
   - Date Format
   - Other parameters
4. Klik tombol **Save** untuk menyimpan perubahan
5. Sistem akan menampilkan pesan konfirmasi

## Screenshot

[Insert screenshot here]

## Important Notes

⚠️ **Perhatian:**
- Beberapa parameter hanya dapat diubah saat setup awal
- Perubahan timezone mungkin mempengaruhi waktu di sistem

ℹ️ **Catatan:**
- Backup konfigurasi lama sebelum melakukan perubahan
- Beberapa perubahan memerlukan restart aplikasi

## Expected Result

Sistem dikonfigurasi dengan informasi dan parameter yang benar.

## Common Issues

### Tidak Bisa Save Perubahan
- **Penyebab**: Ada field yang wajib tapi kosong
- **Solusi**: Isi semua field yang marked required (biasanya dengan *)

### Perubahan Tidak Berlaku Setelah Save
- **Penyebab**: Memerlukan restart aplikasi
- **Solusi**: Hubungi administrator untuk restart sistem
