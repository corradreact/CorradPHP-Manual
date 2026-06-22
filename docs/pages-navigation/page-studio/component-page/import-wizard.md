# Data Import Wizard Component 
::: info Tujuan 

**Import Wizard Component** digunakan untuk memuat naik data secara pukal daripada fail CSV atau Excel ke dalam table database. Pengguna akan melalui beberapa langkah seperti memilih fail, memadankan column fail dengan column database, menyemak data dan mengesahkan proses import. 

Component ini sesuai digunakan untuk:
- Bulk data upload 
- Migrasi data 
- Import spreadsheet 
- Import senarai pekerja 
- Import data pelanggan 
- Import data produk atau inventori
:::

::: warning Nota 
Gunakan Import Wizard apabila anda ingin:

- Memasukkan banyak rekod dalam satu proses.
- Import data daripada fail CSV atau Excel.
- Memadankan column fail dengan column database.
- Menyemak data sebelum import.

Contoh Aliran:
Upload fail
↓
Map column
↓
Preview data
↓
Confirm import
↓
Data disimpan ke database
:::
----

### Data Binding
::: info Data Binding

Bahagian **Data Binding** digunakan untuk menentukan database dan table yang berkaitan dengan proses import.

| Ruangan      | Penerangan                                |
| ------------ | ----------------------------------------- |
| Connection   | Sambungan database yang digunakan.        |
| Database     | Nama database sasaran.                    |
| Binding Type | Jenis binding seperti Table.              |
| Source       | Table sumber atau sasaran yang berkaitan. |

Contoh:
| Ruangan      | Nilai                    |
| ------------ | ------------------------ |
| Connection   | `LOCALHOST`              |
| Database     | `corrad_showcase`        |
| Binding Type | `Table`                  |
| Source       | `showcase_import_target` |
:::
----

### Import Wizard Configuration
::: info Import Wizard Configuration
Bahagian Import Wizard Configuration digunakan untuk menetapkan table sasaran, column database dan peraturan import.

| Ruangan               | Penerangan                                                        |
| --------------------- | ----------------------------------------------------------------- |
| Target Table (INSERT) | Table yang akan menerima data import.                             |
| DB Columns            | Senarai column database yang boleh dipadankan dengan column fail. |
| Required Columns      | Column wajib yang mesti wujud dalam fail atau mapping.            |
| CSV Delimiter         | Pemisah column dalam fail CSV.                                    |
| Max Rows              | Jumlah maksimum row yang boleh diimport.                          |

:::
---

### Target Table
::: info Target Table
**Target Table (INSERT)** ialah table database tempat data akan disimpan selepas proses import disahkan.
Contoh:`corrad_showcase.showcase_import_target`

Pastikan table tersebut:

- Telah wujud dalam database.
- Mempunyai column yang betul.
- Boleh menerima operasi insert.
- Menggunakan database connection yang dipilih.
:::
----

### DB Columns

::: info DB Columns
DB Columns ialah senarai column database yang boleh dipadankan dengan header dalam fail CSV atau Excel.
Contoh: `name, email, department, phone, notes`

| Header Fail   | DB Column    |
| ------------- | ------------ |
| Full Name     | `name`       |
| Email Address | `email`      |
| Department    | `department` |
| Phone Number  | `phone`      |
| Remarks       | `notes`      |
Nama header fail tidak semestinya sama dengan nama column database kerana pengguna boleh membuat column mapping semasa proses import.

:::
---

### Required Columns
::: info Required Columns
**Required Columns** ialah column wajib yang perlu dipadankan sebelum proses import boleh diteruskan.

Contoh: `name, email`
Maksudnya:

- Setiap row mesti mempunyai nilai name.
- Setiap row mesti mempunyai nilai email.
- Import mungkin gagal atau ditolak jika column wajib tidak dipadankan atau nilainya kosong.

Gunakan Required Columns hanya untuk data yang benar-benar diperlukan

:::
---

### CSV Delimiter
::: info CSV Delimiter
**CSV Delimiter** menentukan simbol yang digunakan untuk memisahkan column dalam fail CSV.

Contoh pilihan:

| Delimiter     | Contoh                           |
| ------------- | -------------------------------- |
| Comma `,`     | `Ali,ali@email.com,IT`           |
| Semicolon `;` | `Ali;ali@email.com;IT`           |
| Tab           | Data dipisahkan menggunakan tab. |
:::
---

###  Max Rows
::: info Max Rows
- Max Rows digunakan untuk menghadkan jumlah rekod yang boleh diimport dalam satu proses.
- Contoh: `10000`
Maksudnya, pengguna hanya boleh mengimport maksimum 1,000 row pada satu masa.
:::
---

### Proses Import Data

::: tip Cara Menggunakan Import Wizard
Selepas component dikonfigurasikan:

1. Buka page **Import Wizard** melalui **Preview**.
2. Pilih fail CSV atau Excel.
3. Upload fail tersebut.
4. Sistem akan membaca header dan row daripada fail.
5. Padankan header fail dengan DB Columns.
6. Pastikan semua Required Columns telah dipadankan.
7. Semak data melalui bahagian Preview.
8. Betulkan mapping atau data jika terdapat kesalahan.
9. Klik butang confirm/import.
10. Sistem akan insert data ke Target Table.

:::
---

### Contoh Struktur Fail
::: info Contoh fail CSV.
```csv 
name,email,department,phone,notes
Ali Ahmad,ali@example.com,IT,0123456789,New staff
Siti Aminah,siti@example.com,Finance,0198765432,Transfer staff
```
| Ruangan          | Nilai                                    |
| ---------------- | ---------------------------------------- |
| Target Table     | `corrad_showcase.showcase_import_target` |
| DB Columns       | `name, email, department, phone, notes`  |
| Required Columns | `name, email`                            |
| CSV Delimiter    | `Comma (,)`                              |
| Max Rows         | `1000`                                   |

:::
---

### Column Mapping
::: info Column Mapping

Column Mapping digunakan untuk menghubungkan header dalam fail dengan column database.
Contoh:
```
Full Name → name
Email Address → email
Dept → department
Telephone → phone
Comment → notes
```
:::
---

### Preview Data
::: info Preview Data

Bahagian Preview digunakan untuk menyemak data sebelum dimasukkan ke database.

Semak perkara berikut:

- Nama column betul.
- Required Columns mempunyai nilai.
- Format email atau nombor sesuai.
- Tiada row kosong.
- Tiada data yang tersalah column.
- Jumlah row tidak melebihi Max Rows.

Preview membantu mengurangkan kesalahan sebelum import akhir dijalankan.

:::
---

::: info Hasil Yang Dijangka.
Selepas Import Wizard dikonfigurasikan:

- Pengguna boleh memuat naik fail CSV atau Excel.
- Header fail boleh dipadankan dengan column database.
- Required Columns akan disemak.
- Data boleh dipreview sebelum import.

:::
---

::: warning Nota

- Pastikan **Type** dipilih sebagai **Data Import Wizard**.
- Pastikan Connection, Database dan Target Table adalah betul.
- Gunakan nama column database yang sebenar dalam DB Columns.
- Pisahkan setiap column menggunakan koma.
- Pastikan Required Columns benar-benar wajib.
- Pilih CSV Delimiter mengikut format fail.
- Jangan tetapkan Max Rows terlalu tinggi.
- Semak data melalui Preview sebelum confirm import.
- Klik **Save** selepas selesai konfigurasi.
- Uji proses menggunakan fail kecil terlebih dahulu.
:::
---

::: danger Isu Biasa

#### Fail tidak boleh dibaca
Kemungkinan punca:
- Format fail tidak disokong.
- CSV Delimiter salah.
- Fail rosak atau kosong.
- Header fail tidak lengkap.

#### Required Column tidak dijumpai
Kemungk
- Column belum dipadankan.
- Nama header fail berbeza.
- Required Columns tersalah ejaan.
- Fail tidak mempunyai column tersebut.


#### Data tidak masuk ke database
Kemungkinan punca:
- Target Table salah.
- Nama DB Column tidak wujud.
- Jenis data tidak sepadan.
- Column wajib kosong.
- Permission insert tidak mencukupi.

#### Import berhenti atau terlalu lambat
Kemungkinan punca:
- Jumlah row terlalu banyak.
- Max Rows terlalu tinggi.
- Fail terlalu besar.
- Database connection perlahan.

:::