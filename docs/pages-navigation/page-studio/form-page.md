# Senario 3: Menambah Component Dalam Page

::: info Tujuan

Component digunakan untuk membina struktur utama dalam page. Setiap component mempunyai fungsi yang berbeza seperti membina form, memaparkan senarai data, membina dashboard, menyediakan report, atau membuat layout khas.

Gunakan senario ini selepas page berjaya dibuat dan paparan page masih kosong dengan mesej **No components yet**.

:::

::: warning Nota Penting
Tambah component apabila anda ingin:
- Membina struktur page
- Membina form input
- Memaparkan senarai data
- Membina dashboard
- Membina report
- Menambah layout khas dalam page
- Menyediakan kawasan untuk control atau ruangan input
:::

## Langkah-langkah
::: tip Langkah 1

1. Buka menu **Halaman & Navigasi**.
2. Klik **Page Studio**.
3. Pilih menu atau page yang ingin dikemaskini.
4. Pastikan page telah berjaya dibuat.
5. Jika page masih kosong, sistem akan memaparkan mesej No components yet.

6. Klik butang Component pada toolbar atas.

:::
::: tip Langkah 2

7. Paparan pop-up **Add Component** akan dipaparkan.
8. Masukkan nama component pada ruangan **Title**.
Contoh: Customer Form

9. Pilih jenis component pada ruangan Type.
Contoh:Form (2 Columns)

10. Klik butang **Add** untuk menambah component ke dalam page.

:::
::: tip Langkah 3

11. Selepas component berjaya ditambah, component tersebut akan dipaparkan pada main canvas.

12. Semak nama dan jenis component yang telah ditambah.
13. Jika perlu, tambah Control ke dalam component tersebut.
14. Klik **Save** selepas selesai membuat perubahan.
15. Klik **Preview** untuk melihat paparan page.

:::

::: info Keterangan Ruangan
| Ruangan | Penerangan |
|---|---|
| Title | Nama component yang. |
| Type | Jenis component yang menentukan fungsi dan layout component tersebut. |

:::
### Panduan Memilih Component
::: info Panduan Memilih Component
Gunakan jadual di bawah untuk memilih component berdasarkan tujuan page.
| Jika anda ingin...                           | Component yang sesuai                  |
| -------------------------------------------- | -------------------------------------- |
| Membina borang atau form input               | Form (1 Column), Form (2 Columns)      |
| Memaparkan senarai data                      | Datatable, Tabular                     |
| Membina report                               | Report                                 |
| Membina dashboard ringkasan                  | Stats / KPI Cards, Chart, Card Gallery |
| Membina proses berperingkat                  | Multi-Step Wizard                      |
| Import data daripada fail                    | Data Import Wizard                     |
| Memaparkan kandungan luar                    | iFrame                                 |
| Menambah paparan khas                        | Custom HTML                            |
| Memaparkan maklumat profil atau detail rekod | Profile / Detail Card                  |
| Memaparkan data berbentuk hierarki           | Tree / Hierarchy Browser               |
| Membina aliran kerja                         | Workflow                               |
| Membina paparan master-detail                | Master-Detail Split View               |

:::

### Kategori Komponen
::: tip Kategori 1: Form Layout
Kategori ini digunakan untuk membina form atau borang input.
| Komponen        | Kegunaan                                                                           |
| ---------------- | ---------------------------------------------------------------------------------- |
| Form (1 Column)  | Sesuai untuk form ringkas yang mempunyai sedikit ruangan input.                    |
| Form (2 Columns) | Sesuai untuk form yang mempunyai banyak ruangan dan perlu disusun dalam dua lajur. |
:::

::: tip Kategori 2: Data Display
Kategori ini digunakan untuk memaparkan data dalam bentuk senarai atau jadual
| Component | Kegunaan                                                                      |
| --------- | ----------------------------------------------------------------------------- |
| Datatable | Sesuai untuk memaparkan senarai data yang boleh dicari, ditapis atau disusun. |
| Tabular   | Sesuai untuk paparan data dalam bentuk jadual ringkas.                        |
| Report    | Sesuai untuk laporan yang mempunyai filter dan hasil carian.                  |

:::
::: tip Kategori 3: Dashboard
Kategori ini digunakan untuk membina dashboard atau paparan ringkasan data
| Component         | Kegunaan                                                   |
| ----------------- | ---------------------------------------------------------- |
| Stats / KPI Cards | Sesuai untuk memaparkan jumlah, status atau KPI ringkas.   |
| Chart             | Sesuai untuk memaparkan data dalam bentuk graf atau carta. |
| Card Gallery      | Sesuai untuk memaparkan maklumat dalam bentuk kad.         |

Contoh penggunaan:

- Total customer
- Jumlah permohonan
- Status summary
- Chart transaksi
- KPI dashboard
:::

::: tip Kategori 4: Special Layout
Kategori ini digunakan untuk page yang memerlukan layout atau aliran khas.
| Component                | Kegunaan                                                           |
| ------------------------ | ------------------------------------------------------------------ |
| Master-Detail Split View | Sesuai untuk paparan senarai dan maklumat detail dalam satu page.  |
| Multi-Step Wizard        | Sesuai untuk proses yang mempunyai beberapa langkah.               |
| Timeline                 | Sesuai untuk memaparkan aktiviti atau sejarah secara turutan masa. |

Contoh penggunaan:

- Page detail customer
- Proses permohonan berperingkat
- Sejarah status permohonan
- Paparan rekod dan detail

:::
::: tip Kategori 5: Advanced Component
Kategori ini digunakan untuk keperluan lebih teknikal atau khas.
| Component          | Kegunaan                                                        |
| ------------------ | --------------------------------------------------------------- |
| Data Import Wizard | Sesuai untuk proses import data menggunakan fail.               |
| Workflow           | Sesuai untuk proses yang melibatkan aliran kerja atau approval. |
| iFrame             | Sesuai untuk memaparkan halaman atau kandungan luar dalam page. |
| Custom HTML        | Sesuai untuk menambah kandungan HTML khas.                      |
| Geographic Map     | Sesuai untuk memaparkan data berkaitan lokasi atau peta.        |

Contoh penggunaan:

- Import data customer
- Approval workflow
- Paparan sistem luar
- HTML custom layout
- Paparan peta lokasi
:::

:: tip Kategori 6: Profile / Detail
Kategori ini digunakan untuk memaparkan maklumat detail atau profil rekod
| Component                | Kegunaan                                                                    |
| ------------------------ | --------------------------------------------------------------------------- |
| Profile / Detail Card    | Sesuai untuk memaparkan maklumat detail dalam bentuk kad.                   |
| Tree / Hierarchy Browser | Sesuai untuk memaparkan data berbentuk hierarki atau struktur parent-child. |

Contoh penggunaan:

- Profil pengguna
- Detail customer
- Detail transaksi
- Struktur organisasi
- Struktur menu atau kategori
:::

::: info Hasil Yang Dijangka

- Component berjaya ditambah ke dalam page.
- Component yang dipilih dipaparkan pada main canvas.
- Page mempunyai struktur asas untuk membina form, table, dashboard, report atau layout lain.
- Pengguna boleh meneruskan proses seterusnya seperti menambah Control, menetapkan layout, atau menyambungkan component kepada data source.
- Page boleh dipreview untuk memastikan paparan component adalah betul.

:::

::: warning Nota
- Untuk page form biasa, gunakan Form (1 Column) atau Form (2 Columns).
- Untuk page senarai data, gunakan Datatable.
- Untuk dashboard, gunakan Stats / KPI Cards, Chart atau Card Gallery.
- Untuk proses panjang yang mempunyai beberapa langkah, gunakan Multi-Step Wizard.
- Jangan tambah terlalu banyak component dalam satu page kerana ia boleh menyebabkan paparan menjadi terlalu padat dan sukar digunakan.
- Pastikan component diuji menggunakan Preview sebelum page digunakan oleh pengguna sebenar.

:::

::: danger Isu Biasa
Component tidak muncul selepas klik Add
Kemungkinan punca:

- Component belum berjaya disimpan.
- Page belum refresh.
- Terdapat ralat pada konfigurasi component.
- Jenis component belum dipilih dengan betul.
:::