# Step 3: Menambah Komponen Dalam Page

::: info Tujuan

Komponen digunakan untuk membina struktur utama dalam page. Setiap Komponen mempunyai fungsi yang berbeza seperti membina form, memaparkan senarai data, membina dashboard, menyediakan report, atau membuat layout khas.

Gunakan Step ini selepas page berjaya dibuat dan paparan page masih kosong dengan mesej **No Component yet**.

:::

::: warning Nota Penting
Tambah Komponen apabila anda ingin:
- Membina struktur page
- Membina form input
- Memaparkan senarai data
- Membina dashboard
- Membina report
- Menambah layout khas dalam page
- Menyediakan kawasan untuk control atau ruangan input
:::

<!-- ### Langkah-langkah
::: tip Langkah 1

1. Buka menu **Halaman & Navigasi**.
2. Klik **Page Studio**.
3. Pilih menu atau page yang ingin dikemaskini.
4. Pastikan page telah berjaya dibuat.
5. Jika page masih kosong, sistem akan memaparkan mesej No Komponens yet.

6. Klik butang komponen pada toolbar atas.

:::
::: tip Langkah 2

7. Paparan pop-up **Add Komponen** akan dipaparkan.
8. Masukkan nama komponen pada ruangan **Title**.
Contoh: Customer Form

9. Pilih jenis komponen pada ruangan Type.
Contoh: Form (2 Columns)

10. Klik butang **Add** untuk menambah komponen ke dalam page.

:::
::: tip Langkah 3

11. Selepas Komponen berjaya ditambah, Komponen tersebut akan dipaparkan pada main canvas.

12. Semak nama dan jenis Komponen yang telah ditambah.
13. Jika perlu, tambah Control ke dalam komponen tersebut.
14. Klik **Save** selepas selesai membuat perubahan.
15. Klik **Preview** untuk melihat paparan page.

:::

::: info Keterangan Ruangan
| Ruangan | Penerangan |
|---|---|
| Title | Nama component yang akan dipaparkan dalam page. |
| Type | Jenis komponen yang menentukan fungsi dan layout Komponen tersebut. |

::: -->
### Panduan Memilih Komponen
::: info
Gunakan jadual di bawah untuk memilih Komponen berdasarkan tujuan page.
| Penggunaan                                   | Komponen yang sesuai                  |
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
| Komponen | Kegunaan                                                                      |
| --------- | ----------------------------------------------------------------------------- |
| Datatable | Sesuai untuk memaparkan senarai data yang boleh dicari, ditapis atau disusun. |
| Tabular   | Sesuai untuk paparan data dalam bentuk jadual ringkas.                        |
| Report    | Sesuai untuk laporan yang mempunyai filter dan hasil carian.                  |

:::
::: tip Kategori 3: Dashboard
Kategori ini digunakan untuk membina dashboard atau paparan ringkasan data
| Komponen         | Kegunaan                                                   |
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
| Komponen                | Kegunaan                                                           |
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
::: tip Kategori 5: Advanced Komponen
Kategori ini digunakan untuk keperluan lebih teknikal atau khas.
| Komponen          | Kegunaan                                                        |
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

::: tip Kategori 6: Profile / Detail
Kategori ini digunakan untuk memaparkan maklumat detail atau profil rekod
| Komponen                | Kegunaan                                                                    |
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

- Komponen berjaya ditambah ke dalam page.
- Komponen yang dipilih dipaparkan pada main canvas.
- Page mempunyai struktur asas untuk membina form, table, dashboard, report atau layout lain.
- Pengguna boleh meneruskan proses seterusnya seperti menambah Control, menetapkan layout, atau menyambungkan komponen kepada data source.
- Page boleh dipreview untuk memastikan paparan komponen adalah betul.

:::

::: warning Nota
- Untuk page form biasa, gunakan Form (1 Column) atau Form (2 Columns).
- Untuk page senarai data, gunakan Datatable.
- Untuk dashboard, gunakan Stats / KPI Cards, Chart atau Card Gallery.
- Untuk proses panjang yang mempunyai beberapa langkah, gunakan Multi-Step Wizard.
- Jangan tambah terlalu banyak komponen dalam satu page kerana ia boleh menyebabkan paparan menjadi terlalu padat dan sukar digunakan.
- Pastikan komponen diuji menggunakan Preview sebelum page digunakan oleh pengguna sebenar.

:::

::: danger Isu Biasa
Komponen tidak muncul selepas klik Add
Kemungkinan punca:

- Komponen belum berjaya disimpan.
- Page belum refresh.
- Terdapat ralat pada konfigurasi komponen.
- Jenis komponen belum dipilih dengan betul.
:::