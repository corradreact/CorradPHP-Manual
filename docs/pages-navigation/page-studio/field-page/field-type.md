### Step 4: Menambah Field Dalam Form

::: info Tujuan

Field digunakan untuk menambah ruangan input atau paparan data ke dalam component form. Field membolehkan pengguna memasukkan maklumat seperti teks, nombor, email, tarikh, pilihan dropdown, upload fail, dan lain-lain.

Gunakan Step ini selepas component form berjaya dibuat, contohnya **Form (1 Column)** atau **Form (2 Columns)**.
:::

::: warning Nota
Tambah field apabila anda ingin:

- Membina ruangan input dalam form
- Menambah kolum atau item dalam component
- Menghubungkan ruangan form dengan kolum database
- Menambah pilihan seperti dropdown, checkbox atau radio button
- Menambah ruangan upload fail atau media
- Menambah ruangan read only untuk paparan maklumat
- Menetapkan validasi seperti Required, Unique atau Read Only
- Menetapkan paparan field berdasarkan syarat tertentu

:::

### Langkah - langkah 
::: tip Langkah 1

1. Buka menu **Halaman & Navigasi**.
2. Klik **Page Studio**.
3. Pilih page yang ingin dikemaskini.
4. Pastikan page tersebut sudah mempunyai component form.
5. Pada component form, klik ikon **+** untuk menambah field baharu.

![button +](/image/pagestudio/button+.png)

:::

::: tip Langkah 2

6. Paparan pop-up **Add Field** akan dipaparkan.
![Add Field](/image/pagestudio/addfield.png)

7. Masukkan nama field pada ruangan label.
**Contoh : Customer Name**

8. Pilih jenis field pada ruangan Field Type
**Contoh: Text Input**

9. Klik butang **Add** untuk menambah field dalam form.
![Add Field](/image/pagestudio/infofield.png)


:::
::: tip Langkah 3
10. Selepas field berjaya ditambah, field tersebut akan dipaparkan dalam component form.
11. Klik field tersebut untuk membuka panel tetapan field di sebelah kanan.
12. Semak dan lengkapkan maklumat **GENERAL** field seperti.
- Label
- Name
- Type
- Placeholder
- Hints
![General](/image/pagestudio/general.png)

--- 
13. Jika field perlu disimpan ke database, lengkapkan bahagian **DATA** seperti:

- DB Column
- Default Value
- Lookup Source

![Data](/image/pagestudio/data.png)

---
14. Tetapkan **VALIDATION** seperti:
- Required
- Unique
- Primary Key
- Read Only
- Disabled

![Validation](/image/pagestudio/validation.png)

---
15. Semak bahagian **DISPLAY** untuk tetapan paparan seperti:
- Status
- Width
- Label Width
- Text Size
- CSS Class
- Text Align
- Extra Attributes

![Display](/image/pagestudio/display.png)

16. Jika perlu, tetapkan bahagian **FORMULA**, **SHOW WHEN** atau **TRIGGERS**.
17. Klik **Save** selepas selesai membuat perubahan.
18. Klik **Preview** untuk menguji paparan field dalam form.
:::

::: info Keterangan Ruangan Add Field
| Ruangan    | Penerangan                                                   |
| ---------- | ------------------------------------------------------------ |
| Label      | Nama field yang akan dipaparkan kepada pengguna.             |
| Field Type | Jenis field yang menentukan bentuk input atau paparan field. |
| Add        | Menambah field ke dalam component form.                      |
| Cancel     | Membatalkan proses menambah field.                           |

:::

### Panduan Ringkas Memilih Field Type
::: info Panduan Memilih Field Type
| Kategori           | Contoh Field Type                                                                                      | Kegunaan                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Basic Inputs       | Text Input, Number, Email, Phone, Textarea, Password, URL Link                                         | Untuk input asas seperti nama, nombor, email, telefon, alamat atau catatan.          |
| Selection & Choice | Dropdown, Checkbox, Radio Button, List Box, Toggle Switch, Tags Input, LOV                             | Untuk pilihan daripada senarai seperti status, kategori, department atau role.       |
| Date & Time        | Date Picker, Date & Time, Date Range, Time Picker                                                      | Untuk tarikh dan masa seperti tarikh daftar, tarikh tamat atau masa mula.            |
| Files & Media      | File Upload, Dropzone, Image Display, Video Embed, Signature Pad                                       | Untuk upload fail, gambar, video atau tandatangan digital.                           |
| Display & Layout   | Label, Divider, Notice, Badge, Progress Bar, Section Header, Tabs, Timeline                            | Untuk paparan maklumat, susunan form, status atau makluman.                          |
| Rich & Advanced    | Rich Text Editor, JSON Editor, Code Editor, QR Code, Barcode, Chart, Data Table, Formula Field, Custom | Untuk fungsi advanced seperti editor, QR, barcode, chart, formula atau paparan khas. |

:::
