# Dashboard Grid Component

::: info Tujuan

**Dashboard Grid Component** digunakan untuk menggabungkan beberapa widget seperti stat card, chart dan KPI dalam satu paparan dashboard. Setiap widget dikonfigurasikan secara berasingan melalui tetapan JSON.

Component ini sesuai digunakan untuk management dashboard, monitoring portal, analytics summary atau page ringkasan prestasi.

:::

::: warning Nota 
Gunakan Dashboard Grid apabila anda ingin:

- Membina dashboard ringkasan dalam satu page.
- Memaparkan beberapa KPI dalam susunan grid.
- Menggabungkan stat card dan chart.
- Memaparkan data penting untuk pihak pengurusan.
- Membina monitoring page atau analytics overview.
:::

Contoh penggunaan:
| Situasi              | Kegunaan                                            |
| -------------------- | --------------------------------------------------- |
| Management Dashboard | Papar total sales, revenue, user dan status.        |
| Monitoring Portal    | Papar system health, queue status atau log summary. |
| Analytics Summary    | Papar chart dan KPI ringkas.                        |
| Sales Dashboard      | Papar total order, total revenue dan trend jualan.  |

----

### Dashboard Configuration
::: info Dashboard Configuration

Bahagian Dashboard Configuration digunakan untuk menetapkan susunan grid dan kandungan widget dalam dashboard.
| Ruangan        | Penerangan                                            |
| -------------- | ----------------------------------------------------- |
| Columns        | Bilangan column dalam satu baris dashboard.           |
| Gap (px)       | Jarak antara widget dalam dashboard.                  |
| Widgets (JSON) | Senarai widget yang ingin dipaparkan dalam dashboard. |

:::
----

### Columns 
::: info Columns

Columns menentukan bilangan widget yang dipaparkan dalam satu baris.

| Columns | Maksud                         |
| ------- | ------------------------------ |
| 2       | Dua widget dalam satu baris.   |
| 3       | Tiga widget dalam satu baris.  |
| 4       | Empat widget dalam satu baris. |
:::
---

### Gap (px)
::: info Gap

**Gap (px)** menentukan jarak antara widget dalam dashboard.

| Gap | Maksud             |
| --- | ------------------ |
| 8   | Jarak kecil.       |
| 16  | Jarak sederhana.   |
| 24  | Jarak lebih besar. |

:::
---


### Widget JSON

::: info Widgets JSON

**Widgets (JSON)** ialah senarai konfigurasi widget yang akan dipaparkan dalam dashboard.

| Tetapan | Penerangan                                        |
| ------- | ------------------------------------------------- |
| type    | Jenis widget seperti `stat`, `chart` atau `list`. |
| title   | Tajuk widget yang dipaparkan.                     |
| sql     | Query untuk mengambil data widget.                |
| icon    | Icon yang dipaparkan pada widget.                 |
| color   | Warna widget.                                     |
| format  | Format nilai seperti number atau currency.        |
| colspan | Bilangan column yang digunakan oleh widget.       |

:::
---

### Contoh Widget JSON

::: tip Contoh Dashboard Widget
Contoh ini memaparkan dua widget ringkas: total orders dan total revenue.

```sql 
[
  {
    "type": "stat",
    "title": "Total Orders",
    "icon": "fas fa-shopping-cart",
    "color": "primary",
    "sql": "SELECT COUNT(*) AS v FROM corrad_showcase.showcase_orders"
  },
  {
    "type": "stat",
    "title": "Total Revenue",
    "icon": "fas fa-dollar-sign",
    "color": "success",
    "format": "currency",
    "prefix": "RM ",
    "sql": "SELECT ROUND(SUM(total_amount), 2) AS v FROM corrad_showcase.showcase_orders"
  }
]

```

Maksudnya:
- Widget pertama memaparkan jumlah order.
- Widget kedua memaparkan jumlah revenue.
- Nilai widget diambil terus daripada SQL Query.
:::
---


### Link Column

::: info Link Column

Link Column digunakan jika card perlu boleh diklik dan membawa user ke page lain.

Contoh SQL Query dengan link:
```sql
SELECT
    product_name AS NAME,
    category AS CAT,
    price AS PRICE,
    image_url AS IMG
FROM corrad_showcase.showcase_products
ORDER BY rating DESC
```

Kemudian teteapkan :
| Ruangan     | Nilai  |
| ----------- | ------ |
| Link Column | `IMG` |

:::
---
### Widget (JSON)
::: info Widgets JSON
**Widgets (JSON)** ialah senarai konfigurasi widget yang akan dipaparkan dalam dashboard.

Setiap widget boleh mempunyai tetapan seperti:
| Tetapan | Penerangan                                        |
| ------- | ------------------------------------------------- |
| type    | Jenis widget seperti `stat`, `chart` atau `list`. |
| title   | Tajuk widget yang dipaparkan.                     |
| sql     | Query untuk mengambil data widget.                |
| icon    | Icon yang dipaparkan pada widget.                 |
| color   | Warna widget.                                     |
| format  | Format nilai seperti number atau currency.        |
| colspan | Bilangan column yang digunakan oleh widget.       |

:::
---

###  Contoh Widgets JSON

::: tip Contoh Dashboard Widget
Contoh ini memaparkan dua widget ringkas: total orders dan total revenue.
```sql
[
  {
    "type": "stat",
    "title": "Total Orders",
    "icon": "fas fa-shopping-cart",
    "color": "primary",
    "sql": "SELECT COUNT(*) AS v FROM corrad_showcase.showcase_orders"
  },
  {
    "type": "stat",
    "title": "Total Revenue",
    "icon": "fas fa-dollar-sign",
    "color": "success",
    "format": "currency",
    "prefix": "RM ",
    "sql": "SELECT ROUND(SUM(total_amount), 2) AS v FROM corrad_showcase.showcase_orders"
  }
]
```

Maksudnya:

- Widget pertama memaparkan jumlah order.
- Widget kedua memaparkan jumlah revenue.
- Nilai widget diambil terus daripada SQL Query.
:::
---

### Contoh Konfigurasi Dashboard
::: tip Contoh Dashboard Lengkap
Tetapan component:
| Ruangan  | Nilai          |
| -------- | -------------- |
| Title    | Dashboard      |
| Type     | Dashboard Grid |
| Columns  | `3`            |
| Gap (px) | `16`           |

Contoh Widgets JSON:
```sql

[
  {
    "type": "stat",
    "title": "Total Orders",
    "icon": "fas fa-shopping-cart",
    "color": "primary",
    "sql": "SELECT COUNT(*) AS v FROM corrad_showcase.showcase_orders"
  },
  {
    "type": "stat",
    "title": "Total Revenue",
    "icon": "fas fa-dollar-sign",
    "color": "success",
    "format": "currency",
    "prefix": "RM ",
    "sql": "SELECT ROUND(SUM(total_amount), 2) AS v FROM corrad_showcase.showcase_orders"
  },
  {
    "type": "stat",
    "title": "Total Products",
    "icon": "fas fa-box",
    "color": "info",
    "sql": "SELECT COUNT(*) AS v FROM corrad_showcase.showcase_products"
  }
]
```
---
### Format Nilai
::: info Format
Widget boleh memaparkan nilai dalam beberapa format.

| Format   | Kegunaan            |
| -------- | ------------------- |
| number   | Nilai nombor biasa. |
| currency | Nilai mata wang.    |
| percent  | Nilai peratus.      |
contoh currency:

```sql
{
  "type": "stat",
  "title": "Total Revenue",
  "format": "currency",
  "prefix": "RM ",
  "sql": "SELECT ROUND(SUM(total_amount), 2) AS v FROM corrad_showcase.showcase_orders"
}
```


::: info Hasil Yang Dijangka

Selepas Dashboard Grid dikonfigurasikan:

- Dashboard berjaya dipaparkan dalam page.
- Widget disusun mengikut jumlah column yang ditetapkan.
- Setiap widget memaparkan data daripada SQL Query.
- Dashboard boleh memaparkan KPI, chart atau ringkasan data.
- Page menjadi lebih sesuai untuk paparan management, monitoring atau analytics.

:::
---

::: warning Nota

- Pastikan Type dipilih sebagai Dashboard Grid.
- Pastikan format JSON adalah betul.
- Setiap widget perlu berada dalam array [].
- Pastikan setiap object widget dipisahkan dengan koma.
- Pastikan SQL Query betul dan menghasilkan data.
- Untuk stat widget, query biasanya perlu menghasilkan satu nilai dengan alias v.
- Gunakan Columns dan Gap supaya dashboard nampak kemas.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji dashboard.

:::
---

::: danger Isu Biasa

### Dashboard tidak muncul
Kemungkinan punca:

- JSON tidak valid.
- Ada koma berlebihan atau tertinggal.
- Type widget salah.
- Component status tidak aktif.

#### Widget tidak memaparkan nilai
Kemungkinan punca:

- SQL Query salah.
- Query tidak menghasilkan data.
- Alias v tidak digunakan untuk stat widget.
- Table atau column tidak wuj


### Chart tidak keluar
Kemungkinan punca:

- labelColumn atau valueColumns tidak sama dengan alias dalam query.
- chartType tidak sesuai.
- Query tidak menghasilkan data yang mencukupi.

:::