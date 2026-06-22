# Geographic Map Component 
::: info Tujuan 
**Geographic Map Component** digunakan untuk memaparkan lokasi pada peta interaktif berdasarkan column latitude dan longitude daripada database. Setiap lokasi boleh dipaparkan sebagai marker dan mempunyai popup yang menunjukkan maklumat seperti nama lokasi, negeri, jenis lokasi atau penerangan. 

Component ini sesuai digunakan untuk:
- Lokasi cawangan 
- Lokasi pejabat 
- Delivery route 
- Site survey 
- Regional data 
- Lokasi aset atau projek
:::

::: warning Nota
Gunakan Geographic Map apabila anda ingin:
- Memaparkan lokasi berdasarkan latitude dan longitude.
- Menunjukkan beberapa lokasi dalam satu peta.
- Memaparkan maklumat lokasi melalui popup.
- Membezakan marker berdasarkan kategori atau jenis lokasi.
- Membina paparan pejabat, cawangan atau site project.
:::
----

### SQL Query
::: info SQL Query
- Pastikan query menghasilkan column latitude dan longitude.
- Latitude dan longitude mestilah dalam format nombor.
- Nama column dalam configuration mesti sama dengan nama column dalam query.
- Pastikan data lokasi tidak kosong.
- Gunakan filter jika hanya mahu memaparkan lokasi tertentu.

:::
---

### Geographic Map Configuration

::: info Geographic Map Configuration
Bahagian **Geographic Map Configuration** digunakan untuk menentukan column dan cara peta dipaparkan.

| Ruangan            | Penerangan                                       |
| ------------------ | ------------------------------------------------ |
| Latitude Column    | Column yang menyimpan nilai latitude.            |
| Longitude Column   | Column yang menyimpan nilai longitude.           |
| Label Column       | Column nama lokasi.                              |
| Popup Columns      | Column tambahan yang dipaparkan dalam popup.     |
| Color Column       | Column yang menentukan warna marker.             |
| Default Center Lat | Latitude tengah peta semasa mula dibuka.         |
| Default Center Lng | Longitude tengah peta semasa mula dibuka.        |
| Default Zoom       | Tahap zoom awal peta.                            |
| Map Height         | Tinggi peta dalam pixel.                         |
| Color Map          | Mapping warna marker berdasarkan nilai tertentu. |
:::
---


### Contoh Configuration
::: tip Contoh Malaysia Office Locations
Berdasarkan SQL Query berikut:

```sql
SELECT
    location_name,
    lat,
    lng,
    state,
    location_type,
    description
FROM corrad_showcase.showcase_locations;
```
Gunakan tetapan berikut:

| Ruangan            | Nilai                             |
| ------------------ | --------------------------------- |
| Latitude Column    | `lat`                             |
| Longitude Column   | `lng`                             |
| Label Column       | `location_name`                   |
| Popup Columns      | `state,location_type,description` |
| Color Column       | `location_type`                   |
| Default Center Lat | `3.8`                             |
| Default Center Lng | `109.5`                           |
| Default Zoom       | `6`                               |
| Map Height         | `450`                             |


Maksudnya:
- `lat` dan `lng` menentukan kedudukan marker.
- `location_name` digunakan sebagai label lokasi.
- `state`, `location_type` dan `description` dipaparkan dalam popup.
- `location_type` menentukan warna marker.
:::
---

### Popup Columns
::: info Badge Color
**Popup Columns** digunakan untuk memilih maklumat yang akan dipaparkan apabila pengguna klik marker.

Contoh : `state,location_type,description`
Popup boleh memaparkan:
- Nama negeri
- Jenis lokasi
- Penerangan
- Alamat
- Nombor telefon
- Status lokasi
:::
---

### Color Column

::: info Color Column
**Color Column** digunakan untuk menentukan kategori marker.
Contoh: `location_type`
Jika column tersebut mempunyai nilai seperti:
- HQ
- Office
- Retail
- Warehouse
:::
---

###  Color Map JSON

::: info Color Map
Color Map digunakan untuk menetapkan warna marker berdasarkan nilai dalam Color Column.

```json
{
  "HQ": "#6610f2",
  "Office": "#0d6efd",
  "Retail": "#198754",
  "Warehouse": "#fd7e14"
}  
```
Pastikan nilai dalam JSON sama dengan nilai yang dipulangkan oleh column `location_type`.
:::
---

### Default Center dan Zoom
::: info Kedudukan Awal Peta

**Default Center Lat** dan **Default Center Lng** menentukan lokasi tengah peta semasa page dibuka.

Contoh untuk paparan Malaysia:
`Default Center Lat: 3.8`
`Default Center Lng: 109.5`
| Zoom  | Kegunaan                           |
| ----- | ---------------------------------- |
| 3–5   | Paparan negara atau wilayah besar. |
| 6–8   | Paparan negeri atau kawasan.       |
| 9–12  | Paparan bandar.                    |
| 13–18 | Paparan lokasi terperinci.         |

Untuk paparan Malaysia, nilai yang sesuai ialah: `6`.
:::
---

### Map Heigh
::: info Map Height
Map Height menentukan tinggi peta dalam pixel.
| Nilai | Kegunaan                  |
| ----- | ------------------------- |
| 350   | Paparan kecil.            |
| 450   | Paparan biasa.            |
| 600   | Paparan peta lebih besar. |
:::
---

### Contoh Paparan 
::: info Hasil Paparan

Selepas component dikonfigurasikan:

- Peta dipaparkan dengan marker lokasi.
- Setiap marker boleh diklik.
- Popup memaparkan maklumat lokasi.
- Warna marker berubah berdasarkan kategori.
- Peta boleh dizoom dan digerakkan.
:::
---

### Hasil Yang Dijangka
::: info Hasil Yang Dijangka

- Lokasi berjaya dipaparkan berdasarkan latitude dan longitude.
- Marker menunjukkan setiap lokasi dalam database.
- Popup memaparkan maklumat lokasi.
- Warna marker boleh dibezakan mengikut jenis lokasi.
- Component sesuai digunakan untuk lokasi pejabat, cawangan, projek atau aset.

:::
---

::: warning Nota

- Pastikan **Type** dipilih sebagai **Geographic Map**.
- Pastikan latitude dan longitude mempunyai nilai yang sah.
- Pastikan nama column dalam configuration sama dengan query.
- Gunakan Popup Columns untuk memaparkan maklumat tambahan.
- Gunakan Color Map untuk membezakan kategori marker.
- Tetapkan center dan zoom yang sesuai dengan kawasan data.
- Klik **Save** selepas selesai konfigurasi.
- Klik **Preview** untuk menguji peta.

:::
---

::: danger Isu Biasa

#### Peta tidak memaparkan marker
Kemungkinan punca:

- Latitude atau longitude kosong.
- Nama column tidak sama dengan configuration.
- Query tidak menghasilkan data.
- Nilai coordinate tidak sah.

#### Popup tidak memaparkan maklumat
Kemungkinan punca:
- Popup Columns salah.
- Nama column tidak wujud dalam query.
- Column tersebut tidak mempunyai nilai.

#### Marker berada di lokasi yang salah
Kemungkinan punca:
- Latitude dan longitude tertukar.
- Nilai coordinate salah.
- Format nombor tidak betul.silkan nilai untuk badge.

:::