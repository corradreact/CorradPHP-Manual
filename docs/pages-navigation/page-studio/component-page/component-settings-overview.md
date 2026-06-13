# Component Settings Overview

::: info Tujuan

Bahagian ini menerangkan panel tetapan component yang dipaparkan di sebelah kanan Page Studio.

Setiap component mempunyai tetapan yang berbeza mengikut jenis component. Sebaliknya, tetapan component diterangkan mengikut kategori supaya pengguna lebih mudah memahami fungsi setiap bahagian.

Contohnya:

- **Form** mempunyai kategori seperti Data Binding dan Form Behaviour.
- **Datatable** mempunyai kategori seperti Datatable Config dan Column Definitions.

:::
---

## Ringkasan Component Mengikut Kategori
::: info Jadual Ringkasan

Jadual di bawah menunjukkan kategori tetapan utama yang biasa digunakan oleh setiap component.

| Component        | Kategori Tetapan Utama                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| Custom HTML      | General, Layout / Mode, Custom Path, Display Condition, Triggers                                                      |
| Datatable        | General, Datatable Config, Column Definitions, Display Condition, Triggers                                            |
| Form             | General, Data Binding, Form Behaviour, Processing, Display Condition, Triggers                                        |
| Stat / KPI Cards | General, Stat KPI Cards Configuration, Display Condition, Triggers                                                    |
| Chart            | General, SQL Query, Chart Configuration, Display Condition, Triggers                                                  |
| Wizard           | General, Data Binding, Wizard Configuration, Display Condition, Triggers                                              |
| Gantt Chart      | General, SQL Query, Gantt Configuration, Display Condition, Triggers                                                  |
| Master-Detail    | General, Master-Detail Configuration, Display Condition, Triggers                                                     |
| Tree Browser     | General, Tree Browser Configuration, Display Condition, Triggers                                                      |
| Dashboard        | General, Dashboard Configuration, Display Condition, Triggers                                                         |
| GEO Map          | General, SQL Query, Geographic Map Configuration, Display Condition, Triggers                                         |
| Import Wizard    | General, Data Binding, Import Wizard Configuration, Display Condition, Triggers                                       |
| Profile View     | General, Profile View Configuration, Display Condition, Triggers                                                      |
| iFrame           | General, Custom Path, Display Condition, Triggers                                                                     |
| Project Timeline | General, SQL Query, Timeline Configuration, Display Condition, Triggers                                               |
| Card Gallery     | General, Card Gallery Configuration, Display Condition, Triggers                                                      |
| Report           | General, Data Source, SQL Query, Snippets, Processing, Listing, Default Sort, Appearance, Display Condition, Triggers |
| Tabular          | General, Data Source, Listing, Processing, Display Condition, Triggers                                                |
:::
---

##  Kategori Tetapan Umum

Kategori di bawah ialah tetapan yang biasa muncul pada kebanyakan component.
:::
---

### 1. General
::: info General

Bahagian General digunakan untuk menetapkan maklumat asas component.

Ruangan	Penerangan
Title	Nama component yang dipaparkan dalam Page Studio.
Name	Nama teknikal component dalam sistem.
Type	Jenis component yang digunakan.
Status	Status component sama ada aktif atau tidak aktif.

Contoh penggunaan:

Menukar nama component daripada Chart kepada Monthly Revenue Trend.
Menukar status component kepada Active atau Inactive.
Menyemak jenis component seperti Form, Datatable, Report atau Chart.

:::
--- 

### 2. Layout / Mode
::: info Layout / Mode

Bahagian Layout / Mode digunakan untuk mengawal cara component dipaparkan dalam page.

Tetapan	Penerangan
Modal	Memaparkan component dalam bentuk modal/dialog.
SM / MD / LG / XL / Max	Menentukan saiz modal.
Half	Component menggunakan separuh lebar page.
1/3	Component menggunakan satu per tiga lebar page.
Full	Component menggunakan lebar penuh page.

Contoh penggunaan:

Gunakan Full untuk Report atau Datatable yang mempunyai banyak column.
Gunakan Half untuk form kecil atau chart ringkas.
Gunakan Modal jika component hanya perlu dibuka dalam pop-up.

:::
---

### 3. Card Appearance
::: info Card Appearance

Bahagian Card Appearance digunakan untuk menetapkan gaya paparan component.

Tetapan	Penerangan
No Border	Component dipaparkan tanpa border.
Shadow	Component dipaparkan dengan kesan bayang.
Flat	Component dipaparkan dengan gaya rata.
Compact	Component dipaparkan dalam bentuk lebih padat.

Contoh penggunaan:

Gunakan Shadow untuk menjadikan component lebih jelas.
Gunakan Compact jika page mempunyai banyak component.
Gunakan No Border jika mahu paparan lebih ringkas.

:::
---

### 4. Visibility
::: info Visibility

Bahagian Visibility digunakan untuk mengawal keadaan paparan component.

Tetapan	Penerangan
Hidden	Component disembunyikan daripada paparan biasa.
No Print	Component tidak dipaparkan semasa print.
Print Only	Component hanya dipaparkan semasa print.

Contoh penggunaan:

Gunakan No Print untuk button atau component yang tidak perlu dicetak.
Gunakan Print Only untuk paparan khas semasa print.
Gunakan Hidden untuk component yang digunakan dalam proses dalaman sahaja.

:::
----

## Kategori Tetapan Data

Kategori ini digunakan oleh component yang melibatkan data seperti Form, Report, Tabular, Chart, Timeline dan Map.
---

### 5. Data Binding / Data Source

::: info Data Binding / Data Source

Bahagian Data Binding atau Data Source digunakan untuk menghubungkan component dengan sumber data seperti database, table atau view.

Ruangan	Penerangan
Connection	Sambungan database yang digunakan.
Database	Nama database yang digunakan.
Binding Type	Jenis binding, contohnya Table.
Source	Table atau view yang menjadi sumber data.
Table / View	Table atau view yang dipilih untuk menjana data.

Contoh penggunaan:

Form menggunakan Data Binding untuk insert atau update data.
Report menggunakan Data Source untuk memilih connection, database dan table/view.
Import Wizard menggunakan Data Binding untuk menentukan sumber data import.

:::
---

### 6. SQL Query

::: info SQL Query

Bahagian SQL Query digunakan untuk menulis query bagi mengambil data daripada database.

SQL Query biasanya digunakan oleh component seperti:

- Report
- Chart
- Gantt Chart
- GEO Map
- Project Timeline

Contoh query:
```sql
SELECT
    act_id    AS `ID`,
    act_title AS `Title`,
    act_date  AS `Date`
FROM ex_activity
ORDER BY act_date DESC;
```

Kegunaan SQL Query:

- Mengambil data daripada table.
- Menapis data menggunakan WHERE.
- Menggabungkan table menggunakan JOIN.
- Menyusun data menggunakan ORDER BY.
- Menghasilkan data untuk report, chart atau map.

:::
--- 

### 7. Snippets

::: info Snippets

Bahagian Snippets membantu pengguna memasukkan template SQL dengan lebih cepat.

| Snippet      | Kegunaan                                               |
| ------------ | ------------------------------------------------------ |
| WHERE Search | Menambah filter carian.                                |
| WHERE Status | Menambah filter status.                                |
| Date Range   | Menambah filter tarikh.                                |
| ORDER BY     | Menambah susunan data.                                 |
| GROUP BY     | Mengumpulkan data.                                     |
| INNER JOIN   | Menggabungkan table yang mempunyai padanan data.       |
| LEFT JOIN    | Menggabungkan table walaupun data sebelah kanan tiada. |
| Filter Hint  | Menambah panduan filter.                               |

Snippets biasanya dogunakan dalam report component.

:::
---

## Kategori Tetapan Component-Specific

Kategori ini hanya muncul pada component tertentu sahaja.
---

### 8. Database Config
::: info Datatable Config

Bahagian Datatable Config digunakan oleh Datatable Component.
| Ruangan                  | Penerangan                                     |
| ------------------------ | ---------------------------------------------- |
| Ajax URL                 | API atau endpoint untuk mengambil data.        |
| Post Params              | Parameter tambahan yang dihantar kepada API.   |
| Page Length              | Bilangan row dipaparkan setiap page.           |
| Length Options           | Pilihan jumlah row seperti 5, 10, 25, 50, 100. |
| Show Length Dropdown     | Memaparkan pilihan jumlah row.                 |
| Show Info                | Memaparkan maklumat jumlah rekod.              |
| Show Pagination          | Memaparkan pagination.                         |
| Filter                   | Jenis filter untuk carian data.                |
| Freeze Left / Right Cols | Membekukan column kiri atau kanan.             |

:::
----

### 9. Column Definitions
::: info Column Definitions

Bahagian Column Definitions digunakan untuk menetapkan column yang akan dipaparkan dalam Datatable.

| Ruangan  | Penerangan                          |
| -------- | ----------------------------------- |
| Title BM | Tajuk column dalam Bahasa Melayu.   |
| Title BI | Tajuk column dalam Bahasa Inggeris. |
| Class    | CSS class tambahan untuk column.    |
| Key      | Nama field daripada data API.       |
| Sort     | Tetapan sorting column.             |

Column Definitions juga boleh digunakan untuk menambah **Action Column** seperti View, Edit dan Delete.

:::
---

### 10. Form Behaviour
::: info Form Behaviour

Bahagian Form Behaviour digunakan oleh Form Component untuk menentukan cara form berfungsi.

| Ruangan           | Penerangan                                                |
| ----------------- | --------------------------------------------------------- |
| Form Mode         | Menentukan form digunakan untuk insert, update atau view. |
| Success Action    | Tindakan selepas form berjaya diproses.                   |
| Success Message   | Mesej yang dipaparkan selepas proses berjaya.             |
| Add Form Controls | Menambah control seperti Save, Reset atau Back.           |

Contoh Form Mode:
| Form Mode       | Kegunaan                      |
| --------------- | ----------------------------- |
| Insert Only     | Menambah rekod baharu.        |
| Update          | Mengemaskini rekod sedia ada. |
| Insert & Update | Tambah dan kemaskini data.    |
| View Only       | Paparan sahaja.               |

:::
---

### 11. Configuration
::: info Configuration

Bahagian Configuration ialah tetapan khas yang berubah mengikut jenis component.

| Component         | Configuration                |
| ----------------- | ---------------------------- |
| Chart             | Chart Configuration          |
| Wizard            | Wizard Configuration         |
| Gantt Chart       | Gantt Configuration          |
| Tree Browser      | Tree Browser Configuration   |
| Dashboard         | Dashboard Configuration      |
| GEO Map           | Geographic Map Configuration |
| Import Wizard     | Import Wizard Configuration  |
| Profile View      | Profile View Configuration   |
| Project Timeline  | Timeline Configuration       |
| Card Gallery      | Card Gallery Configuration   |
| Master-Detail     | Master-Detail Configuration  |
| Stats / KPI Cards | Stat KPI Cards Configuration |

:::
---- 

### 12. Custom Path
::: info Custom Path

Bahagian Custom Path digunakan oleh component seperti Custom HTML dan iFrame.

| Component   | Kegunaan Custom Path                                   |
| ----------- | ------------------------------------------------------ |
| Custom HTML | Memaparkan kandungan HTML khas.                        |
| iFrame      | Memaparkan halaman luar atau internal path dalam page. |

Contoh penggunaan:

- Embed page lain dalam iFrame.
- Paparkan HTML custom dalam component tertentu.

:::
---

## Kategori Tetapan Proses dan Listing

---

### 13. Processing

::: info Processing

Bahagian **Processing** digunakan untuk menetapkan proses tambahan sebelum atau selepas component dijalankan.

| Ruangan           | Penerangan                                         |
| ----------------- | -------------------------------------------------- |
| Pre-Process       | Proses yang dijalankan sebelum component diproses. |
| Post-Process      | Proses yang dijalankan selepas component diproses. |
| Post Notification | Mesej atau notifikasi selepas proses dijalankan.   |

:::
---

### 14. Listing
::: info Listing

Bahagian **Listing** digunakan oleh component yang memaparkan senarai data seperti Report dan Tabular.
| Ruangan           | Penerangan                           |
| ----------------- | ------------------------------------ |
| Enable Search Box | Membolehkan carian dalam senarai.    |
| Rows per Page     | Bilangan row dipaparkan setiap page. |
| Max Fetch         | Had maksimum data yang diambil.      |

::: 
---

### 15. Default Sort
::: info Default Sort

Bahagian Default Sort digunakan untuk menetapkan susunan data secara default.
| Ruangan        | Penerangan                        |
| -------------- | --------------------------------- |
| Sort Column    | Column yang digunakan untuk sort. |
| Sort Direction | Arah susunan data.                |

---- 
| Sort Direction | Maksud                                |
| -------------- | ------------------------------------- |
| ASC            | Susunan menaik seperti A-Z atau 0-9.  |
| DESC           | Susunan menurun seperti Z-A atau 9-0. |

:::

---

### 16.  Appearance
::: info Appearance

Bahagian Appearance digunakan untuk mengawal gaya paparan table atau listing.
| Tetapan                    | Penerangan                                    |
| -------------------------- | --------------------------------------------- |
| Striped Rows               | Row dipaparkan berselang warna.               |
| Bordered                   | Table mempunyai border.                       |
| Row Hover                  | Row berubah apabila cursor berada di atasnya. |
| Compact                    | Table dipaparkan lebih padat.                 |
| Freeze First Column        | Column pertama dibekukan.                     |
| Highlight Negative Numbers | Nombor negatif ditanda.                       |
| Empty State                | Paparan apabila tiada data.                   |
| Auto-refresh               | Refresh data secara automatik.                |

:::

---
## Kategori Tteapan Paparan dan Action
---

## 17. Display Condition
::: info Display Condition
Bahagian Display Condition digunakan untuk menentukan bila component perlu dipaparkan.

| Tetapan        | Maksud                                            |
| -------------- | ------------------------------------------------- |
| Always visible | Component sentiasa dipaparkan.                    |
| Show When      | Component dipaparkan berdasarkan syarat tertentu. |

Contoh Penggunaan:
- Paparkan chart hanya apabila filter tertentu dipilih.
- Paparkan form hanya apabila status tertentu dipilih.
- Sembunyikan component sehingga syarat dipenuhi.
:::

---

### 18. Display
::: info Display

Bahagian Display digunakan untuk mengawal kedudukan component dalam page.

| Ruangan     | Penerangan                                              |
| ----------- | ------------------------------------------------------- |
| Position    | Kedudukan component dalam page.                         |
| Collapsible | Menentukan sama ada component boleh dibuka dan ditutup. |
| Label Width | Lebar label untuk semua field dalam component.          |
| Text Size   | Saiz teks dalam component.                              |

:::
---

### 19. Triggers
::: info Triggers

Bahagian Triggers digunakan untuk menambah tindakan tambahan kepada component.

Triggers boleh menjalankan:
- JavaScript
- PHP Business Logic
- Validasi tambahan
- Refresh data
- Proses backend
- Tindakan selepas user klik atau ubah nilai

Gunakan Triggers jika fungsi standard component tidak mencukupi.

:::
---

::: warning Nota

- Tidak semua component mempunyai kategori tetapan yang sama.
- Panel kanan akan berubah mengikut component type yang dipilih.
- Jika component melibatkan data, semak bahagian - -Data Binding, Data Source atau SQL Query.
- Jika component mempunyai paparan khas, semak bahagian Configuration.
- Jika component perlu dipaparkan berdasarkan syarat, gunakan Display Condition.
- Jika component memerlukan tindakan tambahan, gunakan Triggers.
- Klik Save selepas selesai membuat perubahan.
- Gunakan Preview untuk menguji paparan component.

:::