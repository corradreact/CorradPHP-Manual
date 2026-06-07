# LDAP Editor

## Purpose

LDAP Editor memungkinkan administrator untuk mengkonfigurasi integrasi sistem dengan LDAP/Active Directory. Fitur ini memungkinkan user authentication melalui AD organisasi.

## When to Use

Gunakan fitur ini untuk:
- Setup LDAP/AD integration
- Test LDAP connection
- Map LDAP attributes ke sistem

## Steps

1. Buka **System Settings** > **LDAP Editor**
2. Anda akan melihat form konfigurasi LDAP
3. Isi field berikut:
   - **Enable LDAP**: Centang jika ingin mengaktifkan
   - **Server Address**: FQDN atau IP AD server
   - **Port**: Default 389 (atau 636 untuk LDAPS)
   - **Base DN**: Base distinguished name dari AD
   - **Bind DN**: Admin account untuk koneksi
   - **Bind Password**: Password untuk bind account
   - **User Search Filter**: Filter untuk cari user
   - **Email Attribute**: Attribute untuk email
   - **Display Name Attribute**: Attribute untuk display name
4. Klik tombol **Test Connection** untuk verifikasi
5. Jika berhasil, klik **Save**

## Screenshot

[Insert screenshot here]

## Important Notes

⚠️ **Perhatian:**
- Aktifkan LDAP hanya setelah testing berhasil
- Salah konfigurasi dapat membuat semua user tidak bisa login
- Pastikan AD server accessible dari aplikasi server

ℹ️ **Catatan:**
- LDAP password di-encrypt setelah disimpan
- Sebaiknya gunakan dedicated service account untuk LDAP bind
- Test di test environment dulu sebelum production

## Expected Result

User dapat login menggunakan AD/LDAP credentials mereka.

## Common Issues

### "Connection Failed"
- **Penyebab**: AD server tidak bisa diakses atau port salah
- **Solusi**: Cek network dan AD server status

### "Invalid Credentials"
- **Penyebab**: Bind DN atau password salah
- **Solusi**: Verifikasi credentials dengan AD administrator

### User Login Tapi Tidak Ada di Sistem
- **Penyebab**: User belum ada di database sistem
- **Solusi**: Buat user secara manual atau setup auto-provisioning
