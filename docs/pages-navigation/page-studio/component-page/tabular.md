# Tabular Component

::: info Tujuan
**Tabular Component** digunakan untuk memaparkan data dalam bentuk jadual yang boleh diedit terus seperti spreadsheet. 
engguna boleh menambah, mengubah dan memadam row terus dalam jadual tanpa perlu membuka page edit yang berasingan. 

Component ini sesuai digunakan untuk budget lines, configuration tables, bulk editing , product listing dan data entry secara pukal.

:::

::: warning Nota 
Gunakan Tabular apabila anda ingin:

- Edit data terus dalam table.
- Menambah row baharu.
- Memadam row tertentu.
- Mengemaskini banyak rekod dalam satu page.
- Membina paparan data seperti spreadsheet.
- Mengelakkan penggunaan form edit berasingan..
:::
--- 

::: info Data Source
Bahagian Data Source digunakan untuk memilih database, table atau view yang akan digunakan oleh Tabular.

| Ruangan        | Penerangan                             |
| -------------- | -------------------------------------- |
| Connection     | Sambungan database yang digunakan.     |
| Database       | Nama database.                         |
| Table / View   | Table atau view yang mengandungi data. |
| SELECT *       | Menjana query untuk semua column.      |
| Select Columns | Memilih column tertentu sahaja.        |

Contoh:
| Ruangan      | Nilai               |
| ------------ | ------------------- |
| Connection   | `LOCALHOST`         |
| Database     | `corrad_showcase`   |
| Table / View | `showcase_products` |

:::
--- 

::: info Processing
Bahagian Processing menentukan proses yang dijalankan sebelum atau selepas data diproses.
| Ruangan           | Penerangan                                     |
| ----------------- | ---------------------------------------------- |
| Pre-Process       | Proses sebelum data dimuatkan.                 |
| Post-Process      | Proses selepas data disimpan atau dikemaskini. |
| Post Notification | Mesej selepas proses berjaya.                  |
Untuk penggunaan biasa, Post-Process boleh dibiarkan sebagai None jika tiada proses tambahan diperlukan.
:::
---

::: info Bahagian Listing digunakan untuk mengawal cara data dipaparkan.
| Ruangan           | Penerangan                           |
| ----------------- | ------------------------------------ |
| Enable Search Box | Membolehkan pengguna membuat carian. |
| Rows per Page     | Bilangan row dalam satu page.        |
| Max Fetch         | Jumlah maksimum rekod yang diambil.  |

Contoh:
| Ruangan           | Nilai  |
| ----------------- | ------ |
| Enable Search Box | Ya     |
| Rows per Page     | `10`   |
| Max Fetch         | `1000` |

:::
---

### Add Row
::: info Add Row
Bahagian Add Row digunakan untuk membenarkan pengguna menambah row baharu terus dalam table.
| Tetapan             | Penerangan                                       |
| ------------------- | ------------------------------------------------ |
| Allow Add Row       | Membenarkan row baharu ditambah.                 |
| Disabled by Default | Fungsi tambah row dinyahaktifkan secara default. |
| Add Row JS          | JavaScript tambahan apabila row baharu ditambah. |

Untuk membenarkan pengguna menambah data:

1. Tandakan Allow Add Row.
2. Pastikan Disabled by Default tidak dipilih.
3. Masukkan JavaScript pada Add Row JS jika tindakan tambahan diperlukan.

Contoh kegunaan Add Row JS:

1. Isi nilai default.
2. Jana nombor row.
3. Tetapkan tarikh semasa.
4. Jalankan validation tambahan.
:::
---

### Delete Row
::: info Delete Row

Bahagian Delete Row digunakan untuk membenarkan pengguna memadam row daripada table.
| Tetapan             | Penerangan                                            |
| ------------------- | ----------------------------------------------------- |
| Allow Delete Row    | Membenarkan row dipadam.                              |
| Disabled by Default | Fungsi delete dinyahaktifkan secara default.          |
| Delete Row JS       | JavaScript tambahan sebelum atau selepas row dipadam. |

Contoh kegunaan Delete Row JS:

1. Paparkan confirmation.
2. Halang delete berdasarkan status.
3. Semak permission pengguna.
4. Refresh jumlah atau summary.

:::
---


### Contoh Konfigurasi

::: tip Contoh Products Inline Edit
| Tetapan           | Nilai                  |
| ----------------- | ---------------------- |
| Title             | Products — Inline Edit |
| Type              | Tabular                |
| Connection        | LOCALHOST              |
| Database          | corrad_showcase        |
| Table / View      | showcase_products      |
| Pre-Process       | SELECT                 |
| Enable Search Box | Ya                     |
| Rows per Page     | 10                     |
| Max Fetch         | 1000                   |
| Allow Add Row     | Ya                     |
| Allow Delete Row  | Ya                     |

Dengan tetapan ini, pengguna boleh:

- Melihat senarai produk.
- Edit maklumat produk terus dalam row.
- Menambah produk baharu.
- Memadam produk.
- Membuat carian dalam table.

:::
---

::: info Hasil Yang Dijangka
Selepas Tabular dikonfigurasikan:

- Data dipaparkan dalam bentuk editable grid.
- Pengguna boleh edit data terus dalam table.
- ow baharu boleh ditambah.
- Row tertentu boleh dipadam.
- Search dan pagination boleh digunakan.
- Bulk editing boleh dilakukan dengan lebih mudah.
:::
----

::: warning Nota
- Pastikan Type dipilih sebagai Tabular.
- Pastikan table atau view yang dipilih adalah betul.
- Gunakan Select Columns jika tidak mahu paparkan semua column.
- Aktifkan **Add Row** hanya jika pengguna dibenarkan menambah data.
- Aktifkan **Delete Row** hanya jika pengguna dibenarkan memadam data.
- Gunakan confirmation sebelum delete jika data penting.
- Tetapkan Max Fetch supaya page tidak terlalu berat.
- Klik **Save** selepas selesai konfigurasi.
- Klik **Preview** untuk menguji inline edit.
:::
---

::: danger Isu Biasa
#### Data tidak keluar

Kemungkinan punca:
- Connection atau database salah.
- Table / View salah.
- Query tidak menghasilkan data.
- Permission database tidak mencukupi.

#### Tidak boleh edit row

Kemungkinan punca:

- Column ditetapkan sebagai read-only.
- Permission update tidak mencukupi.
- Primary key tidak dikenal pasti.
- Table tidak menyokong operasi update.

:::