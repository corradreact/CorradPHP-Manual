# Stat / KPI Cards Component

::: info Tujuan

**Master-Detail Split View Component** digunakan untuk memaparkan dua bahagian dalam satu page: 
- Panel kiri memaparkan senarai rekod utama atau **master**.
- Panel kanan memaparkan maklumat penuh atau **detail** bagi rekod yang dipilih. 
Apabila pengguna memilih satu rekod pada panel master, sistem akan mengambil dan memaparkan detail berdasarkan ID rekod tersebut. 
Component ini sesuai digunakan untuk hubungan data parent-child seperti:
 - Order → Order Details 
 - Invoice → Invoice Entries 
 - Project → Project Tasks
 - Customer → Customer Information 
 - Department → Staff List
:::

::: warning Nota 
Gunakan component ini apabila anda ingin:
- Memaparkan senarai dan detail dalam satu page.
- Membolehkan pengguna memilih rekod tanpa membuka page baharu.
- Memaparkan hubungan parent-child.
- Memaparkan detail berdasarkan ID rekod yang dipilih.
- Membina page pengurusan order, invoice, customer atau projek.

:::
---

### SQL Query Master
::: info SQL Query 
```sql
SELECT
    id,
    order_no,
    customer_name,
    status
FROM corrad_showcase.showcase_orders
ORDER BY id;
```

Dalam contoh ini: 
| Column          | Kegunaan                         |
| --------------- | -------------------------------- |
| `id`            | ID unik bagi rekod master.       |
| `order_no`      | Tajuk utama dalam senarai.       |
| `customer_name` | Subtajuk atau maklumat tambahan. |
| `status`        | Status rekod untuk badge.        |

:::
--- 

### Master-Detail Configuration
::: info Configuration
Bahagian **Master-Detail Configuration** digunakan untuk menentukan bagaimana data master dan detail dipaparkan.

| Ruangan            | Penerangan                                     |
| ------------------ | ---------------------------------------------- |
| ID Column          | Column ID unik bagi rekod master.              |
| Title Column       | Column yang dipaparkan sebagai tajuk utama.    |
| Subtitle Column    | Column yang dipaparkan sebagai subtajuk.       |
| Badge Column       | Column yang digunakan untuk status atau badge. |
| Avatar Column      | Column untuk gambar atau avatar, jika ada.     |
| List Panel Width   | Lebar panel senarai master.                    |
| List Panel Height  | Tinggi panel senarai master.                   |
| Detail Placeholder | Mesej sebelum rekod dipilih.                   |
| Detail SQL         | Query untuk mengambil detail rekod.            |
| Detail Sections    | Susunan bahagian detail dalam format JSON.     |
| Badge Colors       | Warna badge berdasarkan nilai status.          |

:::
--- 

### Contoh Tetapan Master

::: tip Tetapan Panel Master
Berdasarkan query berikut:

```sql
SELECT
    id,
    order_no,
    customer_name,
    status
FROM corrad_showcase.showcase_orders
ORDER BY id;
```

Gunakan tetapan berikut:
| Ruangan           | Nilai                    |
| ----------------- | ------------------------ |
| ID Column         | `id`                     |
| Title Column      | `order_no`               |
| Subtitle Column   | `customer_name`          |
| Badge Column      | `status`                 |
| Avatar Column     | Kosong jika tiada gambar |
| List Panel Width  | `35%`                    |
| List Panel Height | `480px`                  |

:::
---

### Detail Placeholder

::: info Detail Placeholder
**Detail Placeholder** ialah mesej yang dipaparkan sebelum pengguna memilih rekod daripada panel master.
:::
---

### Detail SQL
::: info Detail SQL
**Detail SQL **digunakan untuk mengambil maklumat lengkap bagi rekod yang dipilih.
Gunakan placeholder : **:id**
Placeholder ini akan digantikan dengan ID rekod master yang dipilih.

Contoh: 
```sql 
SELECT
    order_no AS Order,
    customer_name AS Customer,
    order_date AS Date,
    status AS Status,
    total_amount AS Total
FROM corrad_showcase.showcase_orders
WHERE id = :id;
```
:::
---

::: warning Aliran pilih proses:
Pengguna pilih rekod
↓
Sistem mengambil ID rekod
↓
:id digantikan dengan ID tersebut
↓
Detail SQL dijalankan
↓
Maklumat detail dipaparkan
:::
----


### Detail Sections JSON
::: info Detail Section JSON
- Detail Sections digunakan untuk mengatur maklumat detail kepada beberapa bahagian.
- Jika dibiarkan kosong: **[]**
- Sistem akan memaparkan semua column daripada Detail SQL.
- Jika ingin susun detail section, gumakan format seperti berikut:

```json
[
  {
    "label": "Order Information",
    "fields": ["Order", "Date", "Status"]
  },
  {
    "label": "Customer Information",
    "fields": ["Customer", "Total"]
  }
]
```
:::
---

### Badge Colors JSON
::: info Badge Colors
**Badge Colors** digunakan untuk menetapkan warna berdasarkan nilai status.

```json
{
  "Pending": "warning",
  "Shipped": "info",
  "Completed": "success",
  "Cancelled": "danger"
}
```
:::

### Contoh Konfigurasi Lengkap
::: tip Contoh Order Master-Detail

### SQL Query Master
```sql 
SELECT
    id,
    order_no,
    customer_name,
    status
FROM corrad_showcase.showcase_orders
ORDER BY id;
```

### Master Configuration
| Ruangan           | Nilai           |
| ----------------- | --------------- |
| ID Column         | `id`            |
| Title Column      | `order_no`      |
| Subtitle Column   | `customer_name` |
| Badge Column      | `status`        |
| List Panel Width  | `35%`           |
| List Panel Height | `480px`         |

### Detail SQL
```sql
SELECT
    order_no AS Order,
    customer_name AS Customer,
    order_date AS Date,
    status AS Status,
    total_amount AS Total
FROM corrad_showcase.showcase_orders
WHERE id = :id;
```

### Detail Sections
```json
[
  {
    "label": "Order Details",
    "fields": ["Order", "Date", "Status"]
  },
  {
    "label": "Customer Details",
    "fields": ["Customer", "Total"]
  }
]
```

### Badge Colors
```json

{
  "Pending": "warning",
  "Shipped": "info",
  "Completed": "success",
  "Cancelled": "danger"
}
```
:::
---

::: info Hasil Yang Dijangka
Selepas component dikonfigurasikan:
- Panel kiri memaparkan senarai rekod master.
- Panel kanan memaparkan detail rekod yang dipilih.
- Detail berubah secara automatik apabila pengguna memilih rekod lain.
- Status boleh dipaparkan menggunakan warna badge.
- Maklumat detail boleh disusun kepada beberapa section.
:::
----

::: warning Nota
- Pastikan ID Column wujud dalam SQL Query master.
- Pastikan ID tersebut unik bagi setiap rekod.
- Gunakan :id dalam Detail SQL.
- Jangan gunakan ID column yang tidak sepadan antara query master dan detail.
- Pastikan nama field dalam Detail Sections sama dengan alias dalam Detail SQL.
- Pastikan format JSON adalah sah.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji pemilihan rekod dan paparan detail.
:::
---

::: danger Isu Biasa
#### Senarai master tidak keluar
Kemungkinan punca:

- SQL Query salah.
- Query tidak menghasilkan data.
- ID Column tidak wujud.
- Nama table atau column salah.

##### Detail tidak keluar selepas rekod dipilih
Kemungkinan punca:

- Detail SQL tidak menggunakan :id.
- ID Column salah.
- Rekod detail tidak dijumpai.
- Query detail mempunyai error.

#### Detail Sections tidak dipaparkan
Kemungkinan punca:

- Nama field tidak sama dengan alias dalam Detail SQL.
- Format JSON salah.
- Tanda koma atau kurungan tidak lengkap.
:::