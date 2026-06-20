# Profile / Detail Card Component

::: info Tujuan
**Profile / Detail Card Component** digunakan untuk memaparkan satu rekod database dalam bentuk kad profil yang tersusun dan hanya untuk paparan.

- Component ini boleh memaparkan avatar, nama, jawatan, department, maklumat hubungan dan ruangan lain yang dibahagikan mengikut section.

Component ini sesuai digunakan untuk:

- Profil pekerja
- Kad maklumat pelanggan
- Contact page
- Paparan detail rekod
- Panel detail dalam Master-Detail layout

:::
---

### Bila Perlu Guna Profile View
::: warning Nota 
Gunakan Profile View apabila anda ingin:

- Memaparkan satu rekod secara terperinci.
- Menunjukkan gambar atau avatar pengguna.
- Memaparkan nama, jawatan dan department.
- Menyusun maklumat mengikut section.
- Membina paparan read-only.
- Menjadikan component sebagai panel detail dalam Master-Detail.

:::
---


### SQL Query 

::: info SQL Query 
Bahagian SQL Query digunakan untuk mengambil satu rekod yang akan dipaparkan dalam Profile View.

Query sepatutnya menghasilkan satu row sahaja.
```sql
SELECT
    id,
    name,
    department,
    position,
    email,
    phone,
    joined_date,
    bio,
    photo_url
FROM corrad_showcase.showcase_staff
WHERE id = 1
```
Dalam contoh ini: 
| Column        | Kegunaan                   |
| ------------- | -------------------------- |
| `id`          | ID rekod.                  |
| `name`        | Nama utama profile.        |
| `department`  | Department atau badge.     |
| `position`    | Jawatan atau subtitle.     |
| `email`       | Alamat email.              |
| `phone`       | Nombor telefon.            |
| `joined_date` | Tarikh mula bekerja.       |
| `bio`         | Maklumat ringkas pengguna. |
| `photo_url`   | URL gambar profile.        |

:::
--- 

### Profile View Configuration
::: info Profile View Configuration

Bahagian **Profile View Configuration** digunakan untuk menentukan column yang akan digunakan sebagai avatar, title, subtitle, badge dan section maklumat.

| Ruangan            | Penerangan                                           |
| ------------------ | ---------------------------------------------------- |
| Avatar Column      | Column yang mengandungi URL gambar profile.          |
| Title Column       | Column yang digunakan sebagai nama atau tajuk utama. |
| Subtitle Column    | Column yang dipaparkan di bawah title.               |
| Badge Column       | Column yang dipaparkan sebagai badge.                |
| Badge Color Column | Warna badge yang digunakan.                          |
| Avatar Size        | Saiz avatar yang dipaparkan.                         |
| Sections (JSON)    | Susunan maklumat profile mengikut section.           |

:::
---

### Contoh Configuration
::: tip Contoh Tetapan Profile View
Berdasarkan query berikut:

```sql
SELECT
    id,
    name,
    department,
    position,
    email,
    phone,
    joined_date,
    bio,
    photo_url
FROM corrad_showcase.showcase_staff
WHERE id = 1
```

Tetapkan Configuration seperti berikut:

| Ruangan            | Nilai           |
| ------------------ | --------------- |
| Avatar Column      | `photo_url`     |
| Title Column       | `name`          |
| Subtitle Column    | `position`      |
| Badge Column       | `department`    |
| Badge Color Column | `primary`       |
| Avatar Size        | `Medium (80px)` |

Maksudnya:

- `photo_url` digunakan sebagai gambar profile.
- `name` dipaparkan sebagai nama utama.
- `position` dipaparkan sebagai jawatan.
- `department` dipaparkan sebagai badge.
- Badge menggunakan warna `primary`.
:::
---

### Sections JSON

::: info Sections JSON
**Sections (JSON)** digunakan untuk membahagikan maklumat profile kepada beberapa bahagian.

Contoh:
```json

[
  {
    "label": "Contact",
    "fields": ["email", "phone"]
  },
  {
    "label": "Employment",
    "fields": ["department", "position", "joined_date"]
  },
  {
    "label": "About",
    "fields": ["bio"]
  }
]
```
Maksudnya:

- Section `Contact` memaparkan email dan phone.
- Section `Employment` memaparkan department, position dan joined date.
- Section `About` memaparkan bio.
:::
---

### Sections JSON Kosong
::: tip Jika ruangan Sections dibiarkan kosong:
```json
[]
```
sistem akan memaparkan semua column yang dipulangkan oleh SQL Query.

Gunakan JSON section jika anda mahu paparan lebih tersusun
:::
---

### Avatar Column
::: info Avatar Column

**Avatar Column** digunakan untuk memaparkan gambar profile.
Contoh nilai column: `photo_URL`

Contoh: `https://example.com/images/staff/ahmad.jpg`

Jika URL gambar kosong atau tidak boleh diakses, sistem mungkin memaparkan avatar default atau initial nama.
:::
---

### Badge Column
::: info Badge Column
**Badge Column** digunakan untuk memparkan maklumat ringkas seperto department, status atau role.

Contoh: `department`
Contoh papapran: `Information Technology`

Badge Color Column boleh menggunakan nilai tetap seperti:`primary`
:::
---

### Contoh Paparan Profile
::: info Contoh Hasil

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
Selepas Profile View dikonfigurasikan:

- Satu rekod database dipaparkan dalam bentuk kad profile.
- Avatar, nama, jawatan dan badge dipaparkan pada bahagian atas.
- Maklumat detail disusun mengikut section.
- Paparan bersifat read-only.
- Component boleh digunakan sebagai detail panel dalam Master-Detail.

:::
----

::: warning Nota
- Pastikan **Type** dipilih sebagai **Profile / Detail Card**.
- Pastikan SQL Query menghasilkan satu row sahaja.
- Pastikan nama column dalam configuration sama dengan nama - column dalam query.
- Gunakan Sections JSON supaya maklumat lebih tersusun.
- Pastikan URL avatar boleh diakses.
- Gunakan label section yang ringkas seperti Contact Employment dan About.
- Klik **Save** selepas selesai konfigurasi.
- Klik **Preview** untuk menguji paparan Profile View.l.

:::
---

::: danger Isu Biasa
#### Profile tidak memaparkan data
Kemungkinan punca:
- SQL Query salah.
- Query tidak menghasilkan rekod.
- Nama table atau column salah.
- Query menghasilkan lebih daripada satu rekod.

#### Avatar tidak keluar
Kemungkinan punca:
- Avatar Column salah.
- URL gambar tidak sah.
- Gambar tidak boleh diakses.
- Column photo_url kosong.

#### Kemungkinan punca:
Kemungkinan punca:
- Format JSON tidak sah.
- Nama field tidak sama dengan column dalam SQL Query.
- Tanda koma atau kurungan tidak lengkap.

:::