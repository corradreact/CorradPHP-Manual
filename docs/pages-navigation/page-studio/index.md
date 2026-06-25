
# Fungsi Toolbar

| Button | Gambar | Penerangan |
|---|---|---|
| Preview | ![Preview](/image/pagestudio/preview.png) | Melihat paparan page sebelum digunakan oleh pengguna. |
| Split View | ![Split View](/image/pagestudio/splitview.png) | Memaparkan page dan panel tetapan secara bersebelahan. |
| Quick Page | ![Quick Page](/image/pagestudio/quick.png) | Membantu membina page dengan tetapan asas dengan lebih cepat. |
| Duplicate Page | ![Duplicate Page](/image/pagestudio/duplicate.png) | Menyalin struktur dan tetapan page sedia ada. |
| Component | ![Tambah Component](/image/pagestudio/component.png) | Menambah component seperti form, datatable, chart atau report ke dalam page. |
| Control | ![Tambah Control](/image/pagestudio/controlbtn.png) | Menambah control seperti Save, Submit, Back, Delete atau Print. |
---

   
# Panel Setting Kanan

Panel setting kanan digunakan untuk mengubah maklumat menu dan page.

### Menu Setting

| Field | Penerangan |
|---|---|
| Menu Title | Nama menu yang dipaparkan dalam sistem. |
| Status | Menentukan sama ada menu/page aktif atau tidak aktif. |
| Icon | Icon untuk menu, jika diperlukan. |
| Notes | Catatan tambahan berkaitan menu/page. |
![Menu Settings](/image/pagestudio/menusettings.png)

### Page Setting

| Field | Penerangan |
|---|---|
| Page Title | Tajuk page yang dipaparkan kepada user. |
| Breadcrumb | Laluan lokasi page dalam sistem. |
| Description | Penerangan ringkas tentang page. |
| Pre-Process | Proses yang dijalankan sebelum page dimuatkan, jika dikonfigurasi. |
| Post-Process | Proses yang dijalankan selepas tindakan tertentu, jika dikonfigurasi. |
| CSS Class | Class CSS khas untuk layout atau styling page. |
![Page settings](/image/pagestudio/pagesettings.png)

---
::: warning Nota
- Gunakan nama page yang jelas dan ringkas.
- Susun field mengikut kumpulan yang berkaitan.
- Elakkan terlalu banyak field dalam satu section.
- Gunakan dropdown untuk pilihan yang tetap.
- Gunakan readonly untuk field yang tidak sepatutnya diubah oleh user.
- Sentiasa klik **Preview** selepas membuat perubahan.
- Uji page menggunakan role user yang berbeza.
- Pastikan backend logic sudah siap sebelum page digunakan untuk data sebenar.
- Jangan release page kepada user sebelum CRUD/API/report diuji.
:::
---

::: danger Isu Biasa
#### Page tidak muncul dalam sidebar
Kemungkinan punca:

- Status page tidak aktif.
- User tiada access permission.
- Menu belum reload.
- Page belum disimpan dengan betul.

#### Field tidak menyimpan data
Kemungkinan punca:

- Backend logic belum dikonfigurasi.
- API belum disambungkan.
- Field name tidak sama dengan mapping backend.
- Validation gagal.

#### Dashboard tidak memaparkan data
Kemungkinan punca:

- Data source belum dikonfigurasi.
- API tidak mengembalikan data.
- User tiada permission untuk melihat data tersebut.

#### Report tidak boleh export
Kemungkinan punca:

- Fungsi export belum dikonfigurasi.
- Query report mempunyai error.
- User role tiada permission untuk export data.
:::
---
