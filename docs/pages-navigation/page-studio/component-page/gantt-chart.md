# Gantt / Project Component

::: info Tujuan
**Gantt / Project Timeline Component** digunakan untuk memaparkan tugasan projek dalam bentuk bar mendatar berdasarkan tarikh mula dan tarikh tamat. Setiap bar mewakili satu tugasan, manakala warna boleh digunakan untuk menunjukkan status atau kategori tugasan. 

Component ini sesuai digunakan untuk: Pelan projek, jadual sprint, timeline pembangunan sistem, jadual sumber, pemantauan status tugasan dan perancangan aktiviti projek
:::

::: warning Nota 
Gunakan Card Gallery apabila anda ingin:

- Memaparkan tugasan mengikut tempoh masa.
- Membandingkan tarikh mula dan tamat tugasan.
- Menunjukkan tugasan yang sedang berjalan.
- Membezakan status tugasan menggunakan warna.
- Membina jadual projek atau sprint.
:::

Contoh:
```
Requirements Analysis  ─────
System Design               ───────
Development                        ─────────
Testing                                      ─────
Deployment                                         ───
```

----

### SQL Query
::: info SQL Query

Bahagian **SQL Query** digunakan untuk mengambil tugasan yang akan dipaparkan dalam Gantt Chart.

Query perlu menghasilkan sekurang-kurangnya:

- Nama tugasan
- Tarikh mula
- Tarikh tamat
- Status atau kategori

Contoh:
```sql
SELECT
    task_name,
    start_date,
    end_date,
    status,
    project_name
FROM corrad_showcase.showcase_tasks
ORDER BY start_date;
```
---

Contoh:
| Column         | Kegunaan                                      |
| -------------- | --------------------------------------------- |
| `task_name`    | Nama tugasan yang dipaparkan pada setiap row. |
| `start_date`   | Tarikh mula tugasan.                          |
| `end_date`     | Tarikh tamat tugasan.                         |
| `status`       | Digunakan sebagai kategori atau warna bar.    |
| `project_name` | Maklumat tambahan projek jika diperlukan.     |
:::
----

### Gantt Chart Configuration

::: info Gantt Configuration
Bahagian **Gantt Configuration** digunakan untuk menentukan column dan cara chart dipaparkan.

| Ruangan           | Penerangan                                      |
| ----------------- | ----------------------------------------------- |
| Task Column       | Column yang mengandungi nama tugasan.           |
| Start Date Column | Column tarikh mula tugasan.                     |
| End Date Column   | Column tarikh tamat tugasan.                    |
| Category Column   | Column status atau kategori untuk warna bar.    |
| Chart Height      | Tinggi keseluruhan chart dalam pixel.           |
| Row Height        | Tinggi setiap row tugasan.                      |
| Label Width       | Lebar ruang nama tugasan di sebelah kiri.       |
| Default Bar Color | Warna default bar dalam format hex.             |
| Date Format       | Format tarikh yang dipaparkan.                  |
| Show Today Line   | Memaparkan garisan tarikh hari ini.             |
| Category Colors   | Mapping warna berdasarkan status atau kategori. |


:::
---


### Contoh Configuration

::: tip Contoh Project Gantt Chart
Berdasarkan SQL Query berikut:

```sql
SELECT
    task_name,
    start_date,
    end_date,
    status
FROM corrad_showcase.showcase_tasks
ORDER BY start_date;
```

Tetapkan **Configuration** seperti berikut:

| Ruangan           | Nilai        |
| ----------------- | ------------ |
| Task Column       | `task_name`  |
| Start Date Column | `start_date` |
| End Date Column   | `end_date`   |
| Category Column   | `status`     |
| Chart Height      | `400`        |
| Row Height        | `36`         |
| Label Width       | `200`        |
| Default Bar Color | `#ba7ba7`    |
| Date Format       | `Y-m-d`      |
| Show Today Line   | Ya           |

:::
---

### Category Colors JSON
::: info Category Colors
**Category Colors** digunakan untuk menetapkan warna bar berdasarkan nilai status atau kategori.

```text
Contoh:
{
  "On Hold": "#e74a3b",
  "Pending": "#f6c23e",
  "Completed": "#1cc88a",
  "In Progress": "#4e73df"
}
````

Maksudnya:
| Status      | Warna  |
| ----------- | ------ |
| On Hold     | Merah  |
| Pending     | Kuning |
| Completed   | Hijau  |
| In Progress | Biru   |

Pastikan nilai dalam JSON sama dengan nilai yang dipulangkan oleh column status.
:::
---

### Saiz Chart
::: info Saiz Paparan
| Tetapan      | Kegunaan                                       |
| ------------ | ---------------------------------------------- |
| Chart Height | Menentukan tinggi keseluruhan chart.           |
| Row Height   | Menentukan tinggi setiap tugasan.              |
| Label Width  | Menentukan lebar nama tugasan di sebelah kiri. |

Contoh nilai yang sesuai:

- Chart Height: 400
- Row Height: 36
- Label Width: 200

Jika nama tugasan panjang, tingkatkan **Label Width**
:::
---

### Hasil Yang Dijangka
::: info Hasil Yang Dijangka

- Tugasan projek dipaparkan dalam bentuk timeline.
- Tarikh mula dan tamat dapat dilihat dengan jelas.
- Status tugasan dapat dibezakan menggunakan warna.
- Pengguna boleh memahami tempoh dan susunan projek dengan lebih mudah.
- Component sesuai digunakan untuk project planning dan monitoring.

:::
---

::: warning Nota

- Pastikan **Type** dipilih sebagai **Gantt / Project Timeline**.
- Pastikan query menghasilkan nama tugasan, tarikh mula dan tarikh tamat.
- Pastikan nama column dalam configuration sama dengan query.
- Gunakan Category Colors untuk membezakan status.
- Gunakan format hex seperti #1cc88a untuk warna.
- Jangan gunakan terlalu banyak row dalam satu chart.
- Klik **Save** selepas selesai configuration.
- Klik **Preview** untuk menguji paparan Gantt Chart.
:::
---

::: danger Isu Biasa
#### Gantt Chart tidak memaparkan data
Kemungkinan punca:

- SQL Query salah.
- Query tidak menghasilkan rekod.
- Nama column tidak sama dengan configuration.
- Tarikh mula atau tamat kosong.

#### Bar tidak keluar
Kemungkinan punca:
- Start Date atau End Date tidak sah.
- End Date lebih awal daripada Start Date.
- Date Format tidak sesuai.

#### Bar tidak keluar
Kemungkinan punca:

- Start Date atau End Date tidak sah.
- End Date lebih awal daripada Start Date.
- Date Format tidak sesuai.
- Warna status tidak berubah.

:::
