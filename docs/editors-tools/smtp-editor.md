# SMTP Configuration

::: info Tujuan
Membantu pentadbir menetapkan dan mengurus konfigurasi SMTP untuk penghantaran emel sistem. Panduan ini mengikuti struktur `Guide & Usage` dengan ringkasan, penggunaan, aliran penghantaran, dan petua penyedia.
:::

## Overview

Halaman SMTP Configuration menunjukkan konfigurasi SMTP yang tersedia dan status mereka. Sistem menggunakan konfigurasi aktif untuk menghantar semua emel sistem. Hanya satu konfigurasi boleh menjadi default pada satu masa bagi setiap peranan.

### Komponen Utama
- **Default**: digunakan secara automatik oleh emel sistem dan sebarang panggilan `flc_mail()` yang tidak menyatakan konfigurasi.
- **Fallback**: dicuba apabila konfigurasi default gagal, sebelum menyerah kepada `mail()` asli PHP.
- **Log Mailer**: konfigurasi untuk menangkap email secara senyap dan menulisnya ke log untuk pembangunan atau pentadbiran.
- **Mail Log**: setiap percubaan penghantaran direkodkan dalam `SYS_MAIL_LOG` untuk debugging dan pemeriksaan.

## flc_mail() Usage

`flc_mail()` adalah fungsi yang sistem gunakan untuk menghantar emel. Jika anda tidak memilih konfigurasi secara langsung, ia akan menggunakan konfigurasi SMTP yang ditetapkan sebagai default.

Contoh kegunaan:
- `flc_mail()`: penghantaran emel biasa menggunakan konfigurasi default.
- Konfigurasi default mesti aktif (`SMTP_STATUS = 1`) supaya emel dihantar.

## Async / Queue

Sistem boleh mengendalikan penghantaran emel secara asynchronous atau beratur jika konfigurasi menyokong queue. Penggunaan `Queue` membantu memisahkan penghantaran emel dari proses utama aplikasi.

### Kelebihan Async / Queue
- Mengurangkan masa tunggu pengguna.
- Mengelakkan masalah timeout pada permintaan web.
- Membolehkan retry secara automatik apabila penghantaran gagal.

## Delivery Flow

Aliran penghantaran emel biasanya seperti berikut:

1. Pilih konfigurasi default.
2. Hantar emel menggunakan `flc_mail()`.
3. Jika penghantaran gagal, cuba konfigurasi fallback (jika ditetapkan).
4. Jika masih gagal, sistem boleh cuba `mail()` asli atau merekodkan ralat dalam log.
5. Semak `Mail Log` untuk melihat status penghantaran, subjek, penerima dan ralat.

## Quick Actions

### Add Config
1) Klik **New SMTP Config**.
2) Pilih preset seperti Gmail, Outlook, Office 365, SendGrid, Mailgun atau Amazon SES.
3) Isi medan konfigurasi termasuk `Config Name`, `SMTP Host`, `Port`, `Encryption`, `SMTP Username`, `SMTP Password`, `From Email`, dan `From Name`.
4) Tandakan **Set as default** jika mahu menggunakan konfigurasi ini untuk semua emel sistem.
5) Tandakan **Set as fallback** jika mahu konfigurasi digunakan apabila default gagal.
6) Klik **Save**.

### Test Delivery
1) Klik butang **Test** pada baris konfigurasi.
2) Masukkan alamat emel penerima.
3) Klik **Send Test** untuk menghantar emel percubaan.

### Set Default / Fallback
1) Edit konfigurasi yang ada.
2) Pilih kotak semak **Set as default** untuk menjadikannya konfigurasi utama.
3) Pilih kotak semak **Set as fallback** untuk menjadikannya pilihan sekunder.
4) Klik **Save**.

### Dev Mode
Gunakan konfigurasi **Dev Log** apabila anda sedang membangunkan atau menguji sistem. Konfigurasi ini merekod emel tanpa meninggalkan server.

## Tips & Providers

- Gunakan preset yang sesuai untuk penyedia SMTP anda supaya medan konfigurasi terisi dengan betul.
- Untuk Gmail, gunakan `smtp.gmail.com` dengan port `587` dan `STARTTLS` atau `465` dengan `SSL` jika diperlukan.
- Untuk persekitaran pembangunan, pilih `Dev Log` supaya emel tidak dihantar ke alamat sebenar.
- Sentiasa semak `Mail Log` jika emel gagal atau jika anda ingin melihat butiran penghantaran.
- Pastikan kata laluan SMTP atau kunci API selamat dan tidak diletakkan dalam respons API.

## Mail Log

Klik butang **Mail Log** untuk membuka log penghantaran emel. Anda boleh melihat:
- tarikh penghantaran
- konfigurasi yang digunakan
- status (logged, failed)
- penerima email
- subjek emel
- mesej ralat

::: warning Nota
- Hanya satu konfigurasi default aktif pada satu masa.
- Konfigurasi tidak aktif diabaikan oleh mailer tetapi kekal dalam senarai untuk rujukan.
- Jangan kongsi kata laluan SMTP atau kunci API dalam dokumentasi umum.
:::
