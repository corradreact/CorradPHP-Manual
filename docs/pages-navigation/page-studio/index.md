
# Fungsi Toolbar

```md
| Button | Gambar | Penerangan |
|---|---|---|
| Preview | ![Preview Button](/image/pagestudio/button-preview.png) | Melihat paparan page sebelum digunakan oleh user. |
| Split View | ![Split View Button](/image/pagestudio/button-split-view.png) | Memaparkan page dan setting secara sebelah-menyebelah. |
| Quick Page | ![Quick Page Button](/image/pagestudio/button-quick-page.png) | Membantu create page dengan setting asas secara lebih cepat. |
| Duplicate Page | ![Duplicate Page Button](/image/pagestudio/button-duplicate-page.png) | Menyalin struktur page sedia ada. |
| Component | ![Component Button](/image/pagestudio/button-component.png) | Menambah layout, section atau container dalam page. |
| Control | ![Control Button](/image/pagestudio/button-control.png) | Menambah field, input, button atau kawalan dalam page. |
```

---

# Panel Setting Kanan

Panel setting kanan digunakan untuk mengubah maklumat menu dan page.

## Menu Setting

| Field | Penerangan |
|---|---|
| Menu Title | Nama menu yang dipaparkan dalam sistem. |
| Status | Menentukan sama ada menu/page aktif atau tidak aktif. |
| Icon | Icon untuk menu, jika diperlukan. |
| Notes | Catatan tambahan berkaitan menu/page. |

## Page Setting

| Field | Penerangan |
|---|---|
| Page Title | Tajuk page yang dipaparkan kepada user. |
| Breadcrumb | Laluan lokasi page dalam sistem. |
| Description | Penerangan ringkas tentang page. |
| Pre-Process | Proses yang dijalankan sebelum page dimuatkan, jika dikonfigurasi. |
| Post-Process | Proses yang dijalankan selepas tindakan tertentu, jika dikonfigurasi. |
| CSS Class | Class CSS khas untuk layout atau styling page. |

---

# Jenis Field Yang Biasa Digunakan

| Field Type | Kegunaan |
|---|---|
| Text | Input pendek seperti nama, kod, nombor atau tajuk. |
| Textarea | Input panjang seperti alamat, catatan atau penerangan. |
| Dropdown | Pilihan nilai daripada senarai. |
| Date | Pilihan tarikh sahaja. |
| Datetime | Pilihan tarikh dan masa. |
| Checkbox | Pilihan ya/tidak atau multiple selection. |
| File Upload | Upload dokumen atau attachment. |

---

# Amalan Terbaik

- Gunakan nama page yang jelas dan ringkas.
- Susun field mengikut kumpulan yang berkaitan.
- Elakkan terlalu banyak field dalam satu section.
- Gunakan dropdown untuk pilihan yang tetap.
- Gunakan readonly untuk field yang tidak sepatutnya diubah oleh user.
- Sentiasa klik **Preview** selepas membuat perubahan.
- Uji page menggunakan role user yang berbeza.
- Pastikan backend logic sudah siap sebelum page digunakan untuk data sebenar.
- Jangan release page kepada user sebelum CRUD/API/report diuji.

---

# Isu Biasa

## Page tidak muncul dalam sidebar

Kemungkinan punca:

- Status page tidak aktif.
- User tiada access permission.
- Menu belum reload.
- Page belum disimpan dengan betul.

## Field tidak menyimpan data

Kemungkinan punca:

- Backend logic belum dikonfigurasi.
- API belum disambungkan.
- Field name tidak sama dengan mapping backend.
- Validation gagal.

## Dashboard tidak memaparkan data

Kemungkinan punca:

- Data source belum dikonfigurasi.
- API tidak mengembalikan data.
- User tiada permission untuk melihat data tersebut.

## Report tidak boleh export

Kemungkinan punca:

- Fungsi export belum dikonfigurasi.
- Query report mempunyai error.
- User role tiada permission untuk export data.

---
