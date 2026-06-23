# Report Component

::: info Tujuan

**Report Component** digunakan untuk membina laporan berdasarkan data daripada database. Report sesuai digunakan apabila pengguna ingin melihat senarai data, membuat carian, menapis rekod, menyusun data dan memaparkan hasil dalam bentuk laporan.

Report boleh dibina menggunakan connection database seperti **Main DB**, **LOCALHOST**, **MSSQL**, **ORACLE** dan **POSTGRESQL**, bergantung kepada connection yang disediakan dalam sistem.
:::

::: warning Nota
Gunakan Report Component apabila anda ingin:

- Membina laporan daripada database
- Menulis SQL Query secara manual
- Mengambil data daripada table atau view
- Memaparkan data dalam bentuk listing
- Menambah fungsi search, sort dan filter
- Menghasilkan laporan berdasarkan connection database tertentu

:::
---

::: info Layout / Mode
Bahagian Layout / Mode digunakan untuk mengawal cara report dipaparkan dalam page.

| Tetapan                             | Kegunaan                                                       |
| ----------------------------------- | -------------------------------------------------------------- |
| Modal / Dialog                      | Menentukan sama ada report dipaparkan dalam modal atau dialog. |
| SM / MD / LG / XL / Max             | Menentukan saiz modal jika report menggunakan modal.           |
| Half / 1/3 / Full                   | Menentukan lebar report dalam page.                            |
| No Border / Shadow / Flat / Compact | Mengawal gaya card report.                                     |
| Hidden                              | Menyembunyikan report daripada paparan.                        |
| No Print                            | Report tidak dipaparkan semasa print.                          |
| Print Only                          | Report hanya dipaparkan semasa print.                          |

:::
---

::: info **Data Source**
Bahagian **Data Source** digunakan untuk menentukan sumber data report. Pengguna boleh memilih connection, database dan table/view yang ingin digunakan.

Report boleh dibina menggunakan beberapa jenis connection yang disediakan dalam sistem.

| Connection      | Kegunaan                                    |
| --------------- | ------------------------------------------- |
| Main DB         | Connection utama sistem.                    |
| LOCALHOST       | Connection database local atau development. |
| MSSQL           | Connection kepada Microsoft SQL Server.     |
| ORACLE          | Connection kepada Oracle Database.          |
| POSTGRESQL      | Connection kepada PostgreSQL Database.      |
:::

### Cara Pilih Data Source 
::: tip Langkah Data Source

1. Klik Report Component.
2. Pergi ke bahagian **DATA SOURCE**.
3. Pilih **Connection**.

**Contoh: MSSQL**
4. Pilih **Datatabase**
Contoh: rdsadmin

5. Pilih **Table / View** jika ingin generate SQL daripada table atau view.
6. Klik **SELECT** jika ingin sistem menjana query asas.
7. Klik Select Columns jika ingin memilih column tertentu sahaja.
8. Semak SQL Query yang dijana.
9. Klik **Save**.

:::
---

::: info **SQL Query**
Bahagian SQL Query digunakan untuk menulis atau mengubah query report.

Contoh query:
```sql
SELECT
    e.YEAR        AS `Year`,
    s.STAFF_NO   AS `Staff No`,
    s.STAFF_NAME AS `Staff Name`
FROM staff s
LEFT JOIN employment e ON e.STAFF_ID = s.STAFF_ID
ORDER BY e.YEAR DESC;
```
:::
---

::: info **Snippets**
Bahagian Snippets membantu pengguna memasukkan template SQL dengan lebih cepat.
| Snippet      | Kegunaan                                               |
| ------------ | ------------------------------------------------------ |
| WHERE Search | Menambah condition search.                             |
| WHERE Status | Menambah filter berdasarkan status.                    |
| Date Range   | Menambah filter tarikh.                                |
| ORDER BY     | Menambah susunan data.                                 |
| GROUP BY     | Mengumpulkan data.                                     |
| INNER JOIN   | Menggabungkan table yang mesti mempunyai padanan data. |
| LEFT JOIN    | Menggabungkan table walaupun data sebelah kanan tiada. |
| Filter Hint  | Menambah panduan filter.                               |
:::
---

::: info **Auto-detect Columns**
Butang **Auto-detect Columns from Query** digunakan untuk mengesan column daripada SQL Query secara automatik.

Gunakan fungsi ini selepas SQL Query siap ditulis.

Langkah ringkas:

1. Tulis SQL Query.
2. Klik A**uto-detect Columns from Query.**
3. Sistem akan membaca column daripada query.
4. Semak column yang dikesan.
5. Klik **Save**.

:::
---
::: info **Processing**
Bahagian **Processing** digunakan jika report perlu menjalankan proses tambahan sebelum atau selepas report dipaparkan.

| Ruangan           | Penerangan                                       |
| ----------------- | ------------------------------------------------ |
| Pre-Process       | Proses yang dijalankan sebelum report dimuatkan. |
| Post-Process      | Proses yang dijalankan selepas report diproses.  |
| Post Notification | Mesej atau notifikasi selepas proses dijalankan. |
:::
---
::: info **Listing**
Bahagian **Listing** digunakan untuk mengawal cara data report dipaparkan.

| Ruangan           | Penerangan                                    |    Nilai  |
| ----------------- | --------------------------------------------- |-----------|
| Enable Search Box | Membolehkan user membuat carian dalam report. |     Ya    |
| Rows per Page     | Bilangan row yang dipaparkan setiap page.     |    10     |
| Max Fetch         | Had maksimum data yang diambil.               |   1000    |
:::
---

::: info **Appearance**
| Tetapan                    | Kegunaan                                        |
| -------------------------- | ----------------------------------------------- |
| Striped Rows               | Memaparkan row berselang warna.                 |
| Bordered                   | Menambah border pada table.                     |
| Row Hover                  | Menambah kesan hover pada row.                  |
| Compact                    | Menjadikan table lebih padat.                   |
| Freeze First Column        | Membekukan column pertama.                      |
| Highlight Negative Numbers | Menandakan nombor negatif.                      |
| Empty State                | Paparan apabila tiada data.                     |
| Auto-refresh               | Refresh data secara automatik berdasarkan saat. |
:::
---

### Contoh Konfigurasi Report
::: tip Contoh Report Activity

Contoh ini digunakan untuk membina report aktiviti.
| Tetapan           | Nilai                                |
| ----------------- | ------------------------------------ |
| Title             | Report Activity                      |
| Type              | Report                               |
| Status            | Active                               |
| Connection        | MSSQL                                |
| Database          | rdsadmin                             |
| Table / View      | Pilih table atau view yang berkaitan |
| Enable Search Box | Ya                                   |
| Rows per Page     | 10                                   |
| Sort Direction    | ASC                                  |
| Appearance        | Striped Rows, Bordered               |

Contoh query:
```sql
SELECT
    e.YEAR      AS `Year`,
    s.STAFF_NO AS `Staff No`
FROM staff s
LEFT JOIN employment e ON e.STAFF_ID = s.STAFF_ID
ORDER BY e.YEAR DESC;
```
:::
---
::: warning Nota

- Pastikan Type dipilih sebagai Report.
- Pilih connection database yang betul.
- Pastikan SQL Query betul sebelum klik Save.
- Gunakan SELECT * untuk generate query asas daripada table.
- Gunakan Select Columns jika hanya mahu column tertentu.
- Gunakan Auto-detect Columns from Query selepas SQL Query siap.
- Gunakan Rows per Page supaya report tidak terlalu panjang.
- Klik Preview untuk menguji report.

:::