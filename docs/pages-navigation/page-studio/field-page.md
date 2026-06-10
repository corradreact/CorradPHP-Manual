# Senario 5: Menambah Field Dalam Form

::: info Tujuan

Field digunakan untuk menambah ruangan input atau paparan data ke dalam component form. Field membolehkan pengguna memasukkan maklumat seperti teks, nombor, email, tarikh, pilihan dropdown, upload fail, dan lain-lain.

Gunakan senario ini selepas component form berjaya dibuat, contohnya **Form (1 Column)** atau **Form (2 Columns)**.

:::
::: Nota Penting 
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

:::

::: tip Langkah 2

6. Paparan pop-up ****Add Field** akan dipaparkan.
7. Masukkan nama field pada ruangan label.
Contoh : Customer Name 

8. Pilih jenis field pada ruangan Field Type
Contoh: Text Input

9. Klik butang **Add** untuk menambah field dalam form.

:::
::: tip Langkah 3
10. Selepas field berjaya ditambah, field tersebut akan dipaparkan dalam component form.
11. Klik field tersebut untuk membuka panel tetapan field di sebelah kanan.
12. Semak dan lengkapkan maklumat asas field seperti
- Label
- Name
- Type
- Placeholder
- Hints
---
13. Jika field perlu disimpan ke database, lengkapkan bahagian **DATA** seperti:

- DB Column
- Default Value
- Lookup Source

---
14. Tetapkan **VALIDATION** seperti:
- Required
- Unique
- Primary Key
- Read Only
- Disabled

---

15. Semak bahagian **DISPLAY** untuk tetapan paparan seperti:
- Status
- Width
- Label Width
- Text Size
- CSS Class
- Text Align
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

## Data Binding Dengan Database

::: info Apa itu Data Binding

- Data binding bermaksud field dalam form dihubungkan dengan kolum tertentu dalam database.
- Apabila pengguna mengisi form dan klik Save, nilai daripada field tersebut akan disimpan ke dalam kolum database yang telah ditetapkan. Apabila rekod dibuka semula, sistem akan membaca semula nilai daripada database dan memaparkannya dalam field tersebut.

**Secara ringkas: Field dalam form → DB Column → Database**
---

Contoh:
| Field Dalam Form | DB Column | Maksud                                         |
| ---------------- | --------- | ---------------------------------------------- |
| Customer Name    | CUST_NAME | Nama pelanggan disimpan dalam kolum CUST_NAME. |
| Email            | EMAIL     | Email pelanggan disimpan dalam kolum EMAIL.    |
| Phone            | PHONE_NO  | Nombor telefon disimpan dalam kolum PHONE_NO.  |
| Status           | STATUS    | Status pilihan disimpan dalam kolum STATUS.    |

:::

## Cara Menetapkan DB Column
::: tip Langkah Menetapkan DB Column

1. Klik field yang ingin dikonfigurasikan.
2. Pada panel kanan, pergi ke bahagian DATA.
3. Cari ruangan DB Column.
4. Masukkan atau pilih nama kolum database yang sesuai.
Contoh : CUST_NAME
5. Pastikan nama kolumn sama dengan struktur database.
6. Klik **Save**

:::
::: warning Nota
- Pastikan nama **DB Column** betul.
- Jika nama kolum salah, data mungkin tidak dapat disimpan atau tidak dapat dipaparkan semula.
- Untuk form yang menyimpan data, setiap field penting perlu dihubungkan kepada kolum database yang betul.
- Jika field hanya untuk paparan atau maklumat sementara, DB Column mungkin tidak diperlukan.

:::
---

### Lookup Source
::: info Apa itu Lookup Source?
Lookup Source digunakan untuk field yang mempunyai pilihan jawapan seperti **Dropdown, Radio Button, Checkbox, List Box, Tags Input atau LOV**

Lookup Source menentukan dari mana senarai pilihan akan diambil

Contoh:

- Dropdown **Department** mengambil senarai department daripada database.
- Dropdown **Status** mengambil senarai status daripada reference data.
- Radio Button **Gender** menggunakan pilihan tetap seperti Male dan Female.

:::

### Jenis Lookup Source
::: tip Jenis Lookup Source
| Lookup Source | Kegunaan                                                                                |
| ------------- | --------------------------------------------------------------------------------------- |
| None          | Pilihan dimasukkan secara manual atau tidak menggunakan sumber luar.                    |
| Reference     | Pilihan diambil daripada Reference Data / LOV yang telah dikonfigurasikan dalam sistem. |
| DB Table      | Pilihan diambil terus daripada jadual database.                                         |
| Custom SQL    | Pilihan diambil menggunakan query SQL khas.                                             |

:::

### Contoh Lookup Source
::: tip Contoh 1: Pilihan Manual.
Gunakan pilihan manual jika pilihan adalah tetap dan ringkas.
**Contoh : Active,Inactive**

Sesuai untuk:
- Status ringkas
- Yes / No
- Priority
- Gender

:::
---

::: tip Contoh 2: DB Table
Gunakan DB Table jika pilihan perlu diambil daripada jadual database.
Contoh: 
| Tetapan      | Contoh     |
| ------------ | ---------- |
| Table        | DEPARTMENT |
| ID Column    | DEPT_ID    |
| Label Column | DEPT_NAME  |

- Pengguna akan melihat nama department, tetapi sistem akan menyimpan DEPT_ID ke dalam database.

:::

::: tip Contoh 3: Custom SQL
Gunakan Custom SQL jika pilihan memerlukan filter atau condition khas.

Contoh:
SELECT DEPT_ID AS id, DEPT_NAME AS label
FROM DEPARTMENT
WHERE IS_ACTIVE = 1
ORDER BY DEPT_NAME

| Alias | Maksud                                     |
| ----- | ------------------------------------------ |
| id    | Nilai yang akan disimpan dalam database.   |
| label | Teks yang akan dipaparkan kepada pengguna. |

:::

### Validasi Field
::: info Validasi

| Validasi    | Kegunaan                                    |
| ----------- | ------------------------------------------- |
| Required    | Field wajib diisi.                          |
| Unique      | Nilai tidak boleh sama dengan rekod lain.   |
| Primary Key | Field digunakan sebagai ID utama rekod.     |
| Read Only   | Field dipaparkan tetapi tidak boleh diubah. |
| Disabled    | Field dinyahaktifkan.                       |
| Max Length  | Had maksimum karakter yang boleh ditaip.    |
| Min Chars   | Jumlah minimum karakter yang diperlukan.    |
| Max Chars   | Jumlah maksimum karakter yang dibenarkan.   |

:::

### Display Setting 
::: info Tetapan Paparan

Tetapan paparan digunakan untuk mengawal cara field dipaparkan dalam form.

| Tetapan          | Kegunaan                                    |
| ---------------- | ------------------------------------------- |
| Status           | Menentukan sama ada field aktif atau tidak. |
| Width            | Menentukan lebar field dalam layout form.   |
| Label Width      | Menentukan lebar label field.               |
| Text Size        | Menentukan saiz teks field.                 |
| CSS Class        | Class CSS tambahan untuk styling field.     |
| Text Align       | Menentukan penjajaran teks.                 |
| Extra Attributes | Atribut tambahan untuk field.               |

:::

### Formula Field
::: info Formula

[QTY] * [PRICE]

Contoh penggunaan:

Total amount
Discount value
Balance
Percentage
Calculated score

:::

### Show When
::: info Show When

Show When digunakan untuk memaparkan field berdasarkan syarat tertentu.

**Contoh: Field Reason hanya dipaparkan jika field Status bernilai Rejected.**

Maksudnya, field tertentu hanya akan muncul apabila syarat yang ditetapkan dipenuhi.

:::

::: tip Langkah Menetapkan Show When

1. Klik field yang ingin dikawal paparannya.
2. Pergi ke bahagian **SHOW WHEN**.
3. Pilih field rujukan pada ruangan **Show this field when**.
4. Pilih condition seperti **equals**.
5. Masukkan value yang perlu dipadankan.
6. Klik **Save**.
7. Klik **Preview** untuk menguji paparan field.

:::

### Triggers Field

::: info Triggers

Triggers digunakan jika field perlu menjalankan tindakan tertentu apabila berlaku event seperti nilai berubah, field diklik atau form diproses.

Contoh penggunaan:

- -Mengisi nilai field lain secara automatik
- Menjalankan validasi tambahan
- Memanggil API
- Menukar paparan field lain
- Menjalankan Business Logic

Untuk form biasa, triggers tidak wajib digunakan.

:::


---

### Hasil Yang Dijangka

::: info Hasil Yang Dijangka

- Field berjaya ditambah ke dalam component form.
- Field dipaparkan dalam form mengikut jenis field yang dipilih.
- Field boleh dihubungkan kepada kolum database menggunakan DB Column.
- Field yang mempunyai pilihan boleh menggunakan Lookup Source.
- Validasi boleh ditetapkan supaya data yang dimasukkan lebih terkawal.
- Paparan field boleh dikawal menggunakan Display, Formula, Show When dan Triggers.
- Form boleh diuji menggunakan Preview sebelum digunakan oleh pengguna sebenar.

:::