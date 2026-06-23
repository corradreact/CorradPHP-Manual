# BL Editor

::: info Tujuan
BL Editor membantu pengguna menulis dan mengurus Business Logic (BL) dalam CORRAD. Panduan ini menerangkan peranan BL, pilihan pakej, jenis BL, dan cara menggunakan editor dengan cepat.
:::

### Overview
::: info **PHP**
Dijalankan di server-side setiap kali request dipanggil.
Mempunyai akses penuh kepada fungsi CORRAD, sambungan database, dan data session.
:::
---

::: info **JS(JavaScript)**
Dijalankan di browser (client-side) selepas page dimuatkan.
Mempunyai akses kepada jQuery, komponen page, dan API JavaScript CORRAD.
:::
---

::: info **API**
BL berasaskan PHP yang didedahkan sebagai endpoint REST API.
Menggunakan konteks server-side yang sama seperti PHP BL, tetapi dipanggil melalui HTTP request.
:::
---

::: info **Konteks Pelaksanaan PHP BL**
- Kod PHP BL akan dibungkus sebagai fungsi semasa page dimuatkan
- Dijalankan menggunakan eval()
- Semua fungsi global CORRAD boleh digunakan

Fungsi tersedia:
- executeQueryV2()
- executeQueryOnConn()
- blGetDbConn()
:::
---

::: tip Langkah - Langkah Penggunaan
1. Klik **New BL** untuk buat fungsi baru
2. Masukkan nama di **BL Name**
3. Pilih Package (kumpulan fungsi)
4. Pilih jenis BL:
- PHP
- JS
- API
5. Set status ke **Active** jika ingin digunakan
6. Klik **Save**
:::
---

::: info Penggunaan Package
- Package ialah kumpulan fungsi berkaitan
- Digunakan untuk strukturkan Business Logic
- Boleh guna package sedia ada atau cipta bar
:::
---

### Menulis Kod
- Paparan tengah menunjukkan kod anda.
- Hanya tulis fungsi yang ringkas dan jelas.
- Gunakan menu **View** untuk hidupkan `Word wrap`, `Minimap`, atau akses `Keyboard shortcuts`.

### AI Assistant (BL Editor)
AI Assistant membantu pengguna menulis dan memahami Business Logic (PHP) secara automatik dalam CORRAD.
::: warning Funsi AI Assistant
- Jana kod PHP BL secara automatik
- Bantu tulis SQL query
- Explain dan debug code
- Betulkan error / improve code
:::

### Simpan dan Sejarah
- Klik **Save** untuk menyimpan perubahan.
- Jika ada sejarah, gunakan **Save with history** untuk rekod perubahan.
- Untuk buang fungsi, pilih **Delete this BL**.

### Tips Mudah
- Gunakan nama fungsi yang mudah ingat.
- Pilih pakej yang betul supaya fungsi lebih teratur.
- Sentiasa simpan selepas buat perubahan.

::: warning Nota
- Pastikan kod yang ditulis adalah betul sebelum simpan.
- Elakkan memadam fungsi tanpa semakan.
:::
---

::: danger Isu Biasa
#### BL tidak jalan selepas Save
Kemungkinan punca:

- Status tidak set ke Active
- Error dalam PHP code
- Function name duplicate

#### Database query error
Kemungkinan punca:
- Salah table / column name
- Connection tidak dipilih
- Parameter tidak dihantar

#### Save gagal
Kemungkinan punca:
- Syntax error dalam code
- Package tidak dipilih
- Server validation fail.

:::
