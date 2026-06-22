# Chart Component

::: info Tujuan
**Chart Component** digunakan untuk memaparkan data dalam bentuk carta seperti bar chart, line chart, pie chart, doughnut chart dan area chart.

Gunakan component ini apabila page perlu menunjukkan ringkasan data, trend, perbandingan nilai atau visual report.
:::

::: warning Nota
Gunakan Chart Component apabila anda ingin:
- Memaparkan data dalam bentuk carta
- Membina dashboard ringkas
- Menunjukkan trend bulanan atau tahunan
- Membandingkan jumlah antara kategori
- Memaparkan pecahan data dalam bentuk peratusan
- Menyediakan visual report yang lebih mudah difahami

:::
--- 

Contoh penggunaan:
| Situasi                            | Chart Type Yang Sesuai |
| ---------------------------------- | ---------------------- |
| Trend jualan bulanan               | Line                   |
| Jumlah item mengikut kategori      | Bar                    |
| Pecahan status rekod               | Pie                    |
| Pecahan peratusan yang lebih moden | Doughnut               |
| Trend dengan kawasan berwarna      | Area                   |

----

| Ruangan | Penerangan                                            |
| ------- | ----------------------------------------------------- |
| Title   | Nama component yang dipaparkan dalam Page Studio.     |
| Name    | Nama teknikal component dalam sistem.                 |
| Type    | Jenis component. Untuk carta, pilih **Chart**.        |
| Status  | Menentukan sama ada component aktif atau tidak aktif. |
:::

### Tetapan Layout / Mode
::: info Layout / Mode
Bahagian Layout / Mode digunakan untuk mengawal cara chart dipaparkan dalam page.

| Tetapan                             | Kegunaan                                                        |
| ----------------------------------- | --------------------------------------------------------------- |
| Modal / Dialog                      | Menentukan sama ada chart dipaparkan dalam bentuk modal/dialog. |
| SM / MD / LG / XL / Max             | Menentukan saiz paparan chart jika menggunakan modal.           |
| Half / 1/3 / Full                   | Menentukan lebar chart dalam layout page.                       |
| No Border / Shadow / Flat / Compact | Mengawal gaya card atau kotak chart.                            |
| Hidden                              | Menyembunyikan component daripada paparan.                      |
| No Print                            | Tidak memaparkan chart semasa print.                            |
| Print Only                          | Chart hanya dipaparkan semasa print.                            |

:::

### SQL Query
::: info SQL Query

Bahagian SQL Query digunakan untuk mengambil data yang akan dipaparkan dalam chart.

Chart memerlukan data dalam bentuk column tertentu. Biasanya, query perlu menyediakan:

- Column label, contohnya bulan atau kategori
- Column value, contohnya jumlah atau bilangan

Contoh:
```sql
SELECT 
    DATE_FORMAT(sale_date, '%Y-%m') AS Month,
    SUM(total) AS Revenue
FROM sales
GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY Month;
```

- Pastikan query menghasilkan column yang jelas untuk label dan nilai.
- Nama column dalam query perlu sama dengan tetapan Label Column dan Value Columns.
:::

### Chart Configuration
::: info Chart Configuration

| Ruangan          | Penerangan                                      |
| ---------------- | ----------------------------------------------- |
| Chart Type       | Jenis carta yang ingin digunakan.               |
| Title            | Tajuk chart yang dipaparkan kepada pengguna.    |
| Height (px)      | Ketinggian chart dalam pixel.                   |
| Label Column     | Column yang digunakan sebagai label pada chart. |
| Value Columns    | Column nilai yang akan dipaparkan dalam chart.  |
| Series Labels    | Nama siri data yang dipaparkan dalam chart.     |
| Colors           | Warna chart dalam format hex.                   |
| Show Legend      | Memaparkan legend chart.                        |
| Show Data Labels | Memaparkan nilai pada chart.                    |
| Horizontal Bar   | Menukar bar chart kepada paparan horizontal.    |
| Stacked          | Menjadikan data dipaparkan secara bertingkat.   |
| Auto-refresh     | Menetapkan masa refresh automatik dalam saat.   |


:::

### Jenis Chart
::: info Chart Type
| Chart Type | Kegunaan                                                          |
| ---------- | ----------------------------------------------------------------- |
| Bar        | Sesuai untuk membandingkan nilai antara kategori.                 |
| Line       | Sesuai untuk menunjukkan trend mengikut masa.                     |
| Pie        | Sesuai untuk menunjukkan pecahan data.                            |
| Doughnut   | Sama seperti Pie, tetapi paparan lebih moden.                     |
| Area       | Sesuai untuk trend yang ingin dipaparkan dengan kawasan berwarna. |
:::

## Contoh Tetapan Chart
::: tip Contoh: Monthly Revenue Trend

| Tetapan          | Nilai                                        |
| ---------------- | -------------------------------------------- |
| Title            | Monthly Revenue Trend                        |
| Type             | Chart                                        |
| Chart Type       | Line                                         |
| Height           | 300                                          |
| Label Column     | Month                                        |
| Value Columns    | Revenue                                      |
| Series Labels    | Total                                        |
| Show Legend      | Ya, jika ada lebih daripada satu series      |
| Show Data Labels | Pilihan, jika mahu paparkan nilai pada chart |
:::

Contoh query:
```sql
SELECT 
    DATE_FORMAT(sale_date, '%Y-%m') AS Month,
    SUM(total) AS Revenue
FROM sales
GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY Month;
```
---

### Display

::: info Display 
| Ruangan     | Penerangan                                          |
| ----------- | --------------------------------------------------- |
| Position    | Kedudukan chart dalam page.                         |
| Collapsible | Menentukan sama ada chart boleh dibuka dan ditutup. |

:::

::: warning Nota
- Pastikan SQL Query menghasilkan column yang sesuai untuk chart.
- Label Column mesti sama dengan nama column label dalam query.
- Value Columns mesti sama dengan nama column nilai dalam query.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji paparan chart.
:::