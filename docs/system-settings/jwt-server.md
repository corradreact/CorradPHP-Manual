# JWT Server

## Purpose

JWT Server mengkonfigurasi JSON Web Token untuk API authentication dan security. Fitur ini penting untuk sistem API dan integrasi external.

## When to Use

Gunakan fitur ini untuk:
- Setup JWT secret dan algorithm
- Configure token expiration
- Setup token refresh mechanism
- Manage API keys

## Steps

1. Buka **System Settings** > **JWT Server**
2. Anda akan melihat form konfigurasi JWT
3. Isi/edit field berikut:
   - **JWT Secret**: Secret key untuk signing token (generate baru jika perlu)
   - **Algorithm**: HS256, RS256, dll
   - **Expiration Time**: Berapa lama token valid (dalam menit atau jam)
   - **Refresh Token Enabled**: Aktifkan token refresh
   - **Refresh Token Expiration**: Berapa lama refresh token valid
   - **Issuer**: Nama issuer (biasanya nama sistem)
   - **Audience**: Target audience untuk token
4. Klik tombol **Generate New Secret** jika ingin key baru
5. Klik **Save** untuk menyimpan

## Screenshot

[Insert screenshot here]

## Important Notes

⚠️ **Perhatian:**
- JWT Secret sangat rahasia - jangan bagikan kepada siapa pun
- Mengubah secret akan invalidate semua token yang ada
- Backup JWT configuration sebelum perubahan

ℹ️ **Catatan:**
- Gunakan RSA atau ECDSA untuk production (lebih secure dari HMAC)
- Set expiration time yang reasonable (bukan terlalu lama)
- Enable refresh token untuk better security

## Expected Result

API dapat di-secure menggunakan JWT dan token dapat di-validate dengan benar.

## Common Issues

### "Invalid Token" Error di API
- **Penyebab**: Token sudah expired atau secret berubah
- **Solusi**: Generate token baru atau request new token

### Refresh Token Tidak Bekerja
- **Penyebab**: Refresh token expired atau belum di-enable
- **Solusi**: Aktifkan refresh token di konfigurasi

### Token Validation Gagal di External System
- **Penyebab**: Algorithm atau secret tidak match
- **Solusi**: Verifikasi configuration dengan API client
