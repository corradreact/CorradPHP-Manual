# Tree / Hierarchy Browser Component 

::: info Tujuan

**Tree / Hierarchy Browser Component** digunakan untuk memaparkan data berhierarki dalam bentuk struktur tree yang boleh dibuka dan ditutup.

Component ini menggunakan hubungan **parent-child** daripada satu table database untuk membina struktur seperti kategori, carta organisasi atau folder navigation. 
:::

::: warning Nota 
Gunakan Tree Browser apabila anda ingin:

- Memaparkan data parent-child.
- Menunjukkan struktur kategori.
- Membina carta organisasi.
- Memaparkan folder dan subfolder.
- Membina navigation berdasarkan hierarchy.
- Membolehkan pengguna expand atau collapse data.
:::

Contoh Struktur:

```text
Electronics
├── Computers
│   ├── Laptops
│   ├── Desktops
│   └── Displays
├── Audio
└── Accessories
```
---

::: info **SQL Query**
Bahagian SQL Query digunakan untuk mengambil semua rekod hierarchy daripada database.

Query perlu mempunyai sekurang-kurangnya:
- ID rekod
- Parent ID
-Label atau nama
- Query sepatutnya menghasilkan satu row sahaja.

```sql
SELECT
    id,
    parent_id,
    category_name AS NAME,
    category_code AS CODE,
    level
FROM corrad_showcase.showcase_categories
ORDER BY parent_id, category_name;
```

Dalam contoh ini: 
| Column      | Kegunaan                             |
| ----------- | ------------------------------------ |
| `id`        | ID unik bagi setiap rekod.           |
| `parent_id` | ID parent bagi rekod tersebut.       |
| `NAME`      | Nama yang dipaparkan dalam tree.     |
| `CODE`      | Nilai yang dipaparkan sebagai badge. |
| `level`     | Tahap hierarchy, jika diperlukan.    |

:::
--- 

::: info **Konsep Parent-Child**
Tree Browser membina hierarchy menggunakan dua column utama:

| Column        | Fungsi                                   |
| ------------- | ---------------------------------------- |
| ID Column     | Mengenal pasti setiap rekod secara unik. |
| Parent Column | Menentukan parent bagi sesuatu rekod.    |

Contoh data:
| id | parent_id | category_name |
| -- | --------- | ------------- |
| 1  | `NULL`    | Electronics   |
| 2  | 1         | Computers     |
| 3  | 2         | Laptops       |
| 4  | 2         | Desktops      |
| 5  | 1         | Audio         |

```text
Hasil hierarchy:
Electronics
├── Computers
│   ├── Laptops
│   └── Desktops
└── Audio
```

Rekod yang tiada parent biasanya menggunakan `NULL`, `0` atau nilai kosong, bergantung kepada struktur database
:::
---


::: info **Tree Browser Configuration**
Bahagian Tree Browser Configuration digunakan untuk menentukan column yang akan digunakan dalam struktur tree.
| Ruangan               | Penerangan                                                |
| --------------------- | --------------------------------------------------------- |
| ID Column             | Column ID unik bagi setiap rekod.                         |
| Parent Column         | Column yang menyimpan ID parent.                          |
| Label Column          | Column yang dipaparkan sebagai nama item.                 |
| Icon CSS Column       | Column yang menyimpan CSS icon bagi setiap item.          |
| Link Column           | Column yang digunakan sebagai pautan apabila item diklik. |
| Badge Column          | Column yang dipaparkan sebagai badge.                     |
| Badge Color Column    | Column atau nilai warna untuk badge.                      |
| Default Icon CSS      | Icon default bagi item parent.                            |
| Leaf Icon CSS         | Icon default bagi item paling bawah.                      |
| Expand All by Default | Membuka semua hierarchy secara automatik.                 |
:::
---

### Contoh Configuration
::: tip Contoh Product Category Hierarchy
Berdasarkan query berikut:

```sql
SELECT
    id,
    parent_id,
    category_name AS NAME,
    category_code AS CODE
FROM corrad_showcase.showcase_categories
ORDER BY parent_id, category_name;
```
Gunakan tetapan berikut:
| Ruangan               | Nilai                             |
| --------------------- | --------------------------------- |
| ID Column             | `id`                              |
| Parent Column         | `parent_id`                       |
| Label Column          | `NAME`                            |
| Icon CSS Column       | Kosong jika tiada column icon     |
| Link Column           | Kosong jika item tidak perlu link |
| Badge Column          | `CODE`                            |
| Badge Color Column    | `secondary`                       |
| Default Icon CSS      | `fas fa-folder`                   |
| Leaf Icon CSS         | `fas fa-tag`                      |
| Expand All by Default | Pilihan                           |


| Ruangan            | Nilai           |
| ------------------ | --------------- |
| Avatar Column      | `photo_url`     |
| Title Column       | `name`          |
| Subtitle Column    | `position`      |
| Badge Column       | `department`    |
| Badge Color Column | `primary`       |
| Avatar Size        | `Medium (80px)` |

Maksudnya:

- `id` mengenal pasti setiap item.
- `parent_id` menentukan hubungan parent-child.
- `NAME` dipaparkan sebagai nama kategori.
- `CODE` dipaparkan sebagai badge.
- Folder icon digunakan untuk parent.
- Tag icon digunakan untuk item paling bawah.

:::
---

::: info **Icon CSS**
Tree Browser boleh memaparkan icon menggunakan Font Awesome CSS class.

Contoh:
| Kegunaan       | CSS Class            |
| -------------- | -------------------- |
| Folder         | `fas fa-folder`      |
| Folder terbuka | `fas fa-folder-open` |
| Tag            | `fas fa-tag`         |
| Building       | `fas fa-building`    |
| User           | `fas fa-user`        |
| File           | `fas fa-file`        |

Jika Icon CSS Column dibiarkan kosong, sistem akan menggunakan:

- **Default Icon CSS** untuk item parent.
- **Leaf Icon CSS** untuk item tanpa child.

:::
---

::: info **Link Column**
Link Column digunakan jika item dalam tree perlu boleh diklik dan membawa pengguna ke page lain.
Contoh query:

```sql
SELECT
    id,
    parent_id,
    category_name AS NAME,
    category_code AS CODE,
    CONCAT('/category/detail?id=', id) AS LINK
FROM corrad_showcase.showcase_categories;
```
Kemudian tetapkan:
| Ruangan     | Nilai  |
| ----------- | ------ |
| Link Column | `LINK` |

Apabila pengguna klik item, sistem akan membuka page berdasarkan link tersebut.
:::
---

::: info **Badge Column**
Badge Column digunakan untuk memaparkan maklumat ringkas pada sebelah kanan item tree.

Contoh: 
```
CAT-ELEC
CAT-COMP
CAT-LAPT
```

Badge boleh digunakan untuk:

- Category code
- Department code
- Status
- Bilangan child
- Jenis item

Contoh Badge Color Column: `secondary`
:::
---

::: info **Expand All by Default**
Tetapan ini menentukan sama ada semua node tree dibuka secara automatik apabila page dimuatkan.

| Tetapan       | Kegunaan                                 |
| ------------- | ---------------------------------------- |
| Tidak ditanda | Pengguna perlu klik untuk membuka child. |
| Ditanda       | Semua parent dan child dipaparkan terus. |

Gunakan tetapan ini berdasarkan jumlah data:

- Jika hierarchy kecil, boleh aktifkan.
- Jika hierarchy besar, lebih baik biarkan collapse supaya page lebih kemas.
:::
---

::: info **Contoh Paparan Profile**
Selepas component dikonfigurasikan, Profile View boleh memaparkan:
- Avatar pengguna
- Nama penuh
- Jawatan
- Department
- Email
- Nombor telefon
- Tarikh mula bekerja
- Biodata ringkas
:::
---


::: info Hasil Yang Dijangka
Selepas configuration siap, Tree Browser boleh dipaparkan seperti berikut:

Electronics
├── Computers
│   ├── Laptops
│   ├── Desktops
│   └── Displays
├── Audio
├── Furniture
│   ├── Chairs
│   └── Desks
└── Accessories

Setiap item boleh mempunyai:

- Icon
- Label
- Badge
- Child item
- Link, jika dikonfigurasikan
:::
----

::: warning Nota
- Pastikan SQL Query menghasilkan semua rekod hierarchy.
- Pastikan setiap rekod mempunyai ID yang unik.
- Pastikan Parent Column merujuk kepada ID parent yang betul.
- Rekod root perlu menggunakan nilai parent yang sesuai seperti `NULL` atau `0`.
- Nama column dalam configuration mesti sama dengan alias dalam SQL Query.
- Jangan aktifkan Expand All jika hierarchy terlalu besar.
- Klik **Save** selepas selesai konfigurasi.
- Klik **Preview** untuk menguji struktur tree.
:::
---

::: danger Isu Biasa
#### Tree tidak memaparkan data
Kemungkinan punca:
- SQL Query salah.
- Query tidak menghasilkan rekod.
- ID Column atau Parent Column salah.
- Nama table atau column tidak betul.

##### Child item tidak keluar
Kemungkinan punca:
- Parent ID tidak sepadan dengan ID parent.
- Rekod child tidak dipulangkan oleh query.
- Struktur data parent-child tidak betul.

:::