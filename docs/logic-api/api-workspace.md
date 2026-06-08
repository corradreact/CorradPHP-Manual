# API Workspace

::: info Tujuan
Panduan ringkas untuk menggunakan API Workspace. Ia membantu pengguna membuat dan mengurus pakej API, titik hujung, kebenaran, serta ujian API dengan mudah.
:::

## Overview

API Workspace adalah persekitaran untuk mentakrif, mengurus dan menguji endpoint CORRAD API. API disusun dalam pakej, dan setiap endpoint boleh dikaitkan dengan Business Logic (BL).

### Apa yang anda lihat
- Statistik API seperti jumlah pakej, jumlah API, panggilan berjaya dan panggilan gagal.
- Panel pakej di sebelah kiri untuk memilih kumpulan API.
- Panel API di tengah untuk melihat endpoint dalam pakej terpilih.
- Borang API di kanan untuk melihat dan mengubah tetapan endpoint.

## Packages

### Mengurus Pakej API
- Klik **+ New** di panel Packages untuk tambah pakej baru.
- Pakej memudahkan anda mengumpulkan endpoint mengikut modul atau fungsi.
- Pilih pakej sedia ada untuk melihat API di dalamnya.

## APIs

### Menambah Endpoint Baru
- Klik **+ New** di panel APIs untuk membuat endpoint baru.
- Isi **API Name** dan **API URL**.
- Pilih **HTTP Method** seperti `POST`, dan **Return Format** seperti `JSON`.
- Pilih Business Logic dari menu **Business Logic**.
- Pilih status **Active** jika endpoint mahu dihidupkan.
- Klik **Save**.

## Permissions & Tester

### Permissions
- Buka tab **Permissions** untuk tetapkan akses endpoint.
- Pilih `Public` jika tiada pengesahan diperlukan.
- Jika perlu kawal akses, tulis peraturan iaitu API Key, Basic Auth atau JWT.
- Klik **Save Permissions**.

### API Tester
- Buka tab **APITester** untuk uji endpoint terus dari workspace.
- Pilih kaedah `GET` atau `POST`, masukkan URL, dan tekan **Send**.
- Gunakan tab **Params / Docs** untuk tambah parameter permintaan dan definisi respons.

## Params / Docs

### Definisi Parameter dan Respons
- Gunakan **+Add Param** untuk tambah parameter input.
- Isi `Name`, `Type`, `Required`, `Description`, dan nilai contoh.
- Gunakan **+Add Response** untuk tulis kod status dan contoh respons JSON.
- Klik **Save Params & Responses**.

## Ringkas Cara Guna

1. Pilih atau buat pakej API.
2. Tambah endpoint baru dan isi borang API.
3. Tetapkan kebenaran dalam tab Permissions.
4. Uji endpoint dalam tab APITester.
5. Dokumentasikan parameter dan respons dalam tab Params / Docs.

::: warning Nota
- Pastikan setiap endpoint dikaitkan dengan Business Logic yang betul.
- Gunakan `Public` hanya untuk endpoint yang tidak sensitif.
- Simpan perubahan sebelum menukar ke API lain.
:::
