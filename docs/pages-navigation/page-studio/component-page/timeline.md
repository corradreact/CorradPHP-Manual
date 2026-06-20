# Timeline Component

::: info Tujuan
**Timeline Component** digunakan untuk memaparkan rekod atau aktiviti dalam susunan masa. Data akan dipaparkan sebagai senarai timeline dengan tarikh, tajuk event, nama actor/user, status dan maklumat detail.

- Component ini sesuai digunakan untuk audit history, project milestones, activity feed, status tracking atau sejarah aktiviti pengguna.

:::

### Bila Perlu Guna Timeline
::: warning Nota 
Gunakan Timeline apabila anda ingin:

- Memaparkan sejarah aktiviti mengikut masa.
- Menunjukkan perubahan status sesuatu rekod.
- Memaparkan audit trail secara lebih visual.
- Menunjukkan project milestone.
- Memaparkan aktiviti user seperti created, updated, approved atau rejected.

Contoh penggunaan:
| Situasi            | Kegunaan                           |
| ------------------ | ---------------------------------- |
| Audit History      | Papar aktiviti user mengikut masa. |
| Project Milestones | Papar perkembangan projek.         |
| Activity Feed      | Papar senarai aktiviti terkini.    |
| Status Tracking    | Papar perubahan status rekod.      |

:::
----

### SQL Query
::: info SQL Query

Bahagian **SQL Query** digunakan untuk mengambil data yang akan dipaparkan dalam Timeline.

Setiap column dalam query perlu mempunyai alias yang jelas supaya boleh digunakan dalam bahagian **Timeline Configuration.**

Contoh:
```sql
SELECT
    event_date  AS DT,
    event_title AS EVENT,
    author      AS WHO,
    description AS DETAIL,
    event_type  AS STATUS
FROM corrad_showcase.showcase_timeline_events
ORDER BY event_date DESC
```
Dalam contoh ini:

| Column   | Kegunaan                                           |
| -------- | -------------------------------------------------- |
| `DT`     | Tarikh atau masa event.                            |
| `EVENT`  | Tajuk event atau aktiviti.                         |
| `WHO`    | Nama user, actor atau pihak yang membuat aktiviti. |
| `DETAIL` | Penerangan lanjut tentang event.                   |
| `STATUS` | Status atau jenis event untuk warna timeline.      |

:::
----

### Tips SQL Query Untuk Timeline
::: warning Nota SQL Query

- Pastikan query menghasilkan column tarikh, event, actor, status dan detail.
- Alias column dalam SQL Query mesti sama dengan ruangan dalam Timeline Configuration.
- Gunakan **ORDER BY event_date DESC** jika mahu event terbaru dipaparkan dahulu.
- Gunakan **ORDER BY event_date ASC** jika mahu event lama dipaparkan dahulu.
- Pastikan column tarikh menggunakan format date atau datetime yang betul.

Alias yang dicadangkan:
| Tujuan       | Alias Dicadangkan |
| ------------ | ----------------- |
| Tarikh event | `DT`              |
| Tajuk event  | `EVENT`           |
| Actor / User | `WHO`             |
| Status       | `STATUS`          |
| Detail       | `DETAIL`          |

:::
---

### Timeline Configuration
::: info Timeline Configuration
Bahagian **Timeline Configuration** digunakan untuk menentukan column mana daripada SQL Query yang akan digunakan dalam timeline.

| Ruangan              | Penerangan                                         |
| -------------------- | -------------------------------------------------- |
| Date Column          | Column yang menyimpan tarikh atau masa event.      |
| Event Column         | Column yang memaparkan tajuk event.                |
| Actor Column         | Column yang memaparkan nama user atau actor.       |
| Status Column        | Column yang menentukan status atau jenis event.    |
| Detail Column        | Column yang memaparkan penerangan lanjut.          |
| Date Format          | Format tarikh yang akan dipaparkan.                |
| Default Color        | Warna default jika status tidak mempunyai mapping. |
| Limit                | Jumlah maksimum rekod timeline yang dipaparkan.    |
| Status Color Mapping | Tetapan warna berdasarkan nilai status.            |

:::
---


### Contoh Configuration
::: tip Contoh Tetapan Timeline
Berdasarkan SQL Query berikut:

```sql
SELECT
    event_date  AS DT,
    event_title AS EVENT,
    author      AS WHO,
    description AS DETAIL,
    event_type  AS STATUS
FROM corrad_showcase.showcase_timeline_events
ORDER BY event_date DESC
```

Tetapkan **Timeline Configuration** seperti berikut:

| Ruangan       | Nilai       |
| ------------- | ----------- |
| Date Column   | `DT`        |
| Event Column  | `EVENT`     |
| Actor Column  | `WHO`       |
| Status Column | `STATUS`    |
| Detail Column | `DETAIL`    |
| Date Format   | `d M Y H:i` |
| Default Color | `Secondary` |
| Limit         | `20`        |

Maksudnya:

- `DT` akan digunakan sebagai tarikh timeline.
- `EVENT` akan digunakan sebagai tajuk aktiviti.
- `WHO` akan memaparkan nama user atau actor.
- `STATUS` akan menentukan warna timeline.
- `DETAIL` akan memaparkan penerangan lanjut.
- `Timeline` akan memaparkan maksimum 20 rekod.

:::
---

### Status Color Mapping
::: info Status Color Mapping
**Status Color Mapping** digunakan untuk menetapkan warna timeline berdasarkan nilai status

| Status Value | Color   |
| ------------ | ------- |
| task         | Info    |
| meeting      | Warning |
| release      | Success |
| milestone    | Primary |

Maksudnya, jika query menghasilkan nilai task pada column STATUS, timeline akan memaparkan warna Info. Jika nilai release, warna yang digunakan ialah Success.
:::
---

### Date Format
::: info Date Format
**Date Format** digunakan untuk menetapkan bentuk paparan tarikh dalam timeline

| Format      | Contoh Paparan    |
| ----------- | ----------------- |
| `d M Y`     | 16 Jun 2026       |
| `d M Y H:i` | 16 Jun 2026 10:30 |
| `Y-m-d`     | 2026-06-16        |
| `d/m/Y`     | 16/06/2026        |

:::
---

###  Limit
::: info Limit
- Limit digunakan untuk menghadkan jumlah rekod timeline yang dipaparkan.
Maksudnya, hanya 20 rekod timeline akan dipaparkan.
- Gunakan limit supaya page tidak terlalu panjang dan lebih cepat dimuatkan.

:::
---

### Hasil Yang Dijangka
::: info Hasil Yang Dijangka
Selepas Timeline Component dikonfigurasikan:

- Data daripada SQL Query dipaparkan dalam bentuk timeline.
- Setiap event mempunyai tarikh, tajuk, actor, status dan detail.
- Status boleh dipaparkan dengan warna berbeza.
- Rekod timeline dipaparkan mengikut susunan tarikh.
- Timeline boleh digunakan untuk audit history, activity feed atau project milestones.

:::
---

::: warning Nota
- Pastikan Type dipilih sebagai Timeline.
- Pastikan SQL Query menghasilkan column yang diperlukan.
- Nama column dalam configuration mesti sama dengan alias dalam SQL Query.
- Gunakan alias yang mudah seperti DT, EVENT, WHO, STATUS dan DETAIL.
- Pastikan nilai status dalam query sama dengan nilai dalam Status Color Mapping.
- Gunakan Limit supaya timeline tidak terlalu panjang.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji paparan timeline.
:::
---

::: danger Isu Biasa
#### Timeline tidak memaparkan data
Kemungkinan punca:

- SQL Query salah.
- Query tidak menghasilkan data.
- Alias column tidak sama dengan configuration.
- Database/table tidak mempunyai data.

#### Tarikh tidak keluar atau format salah
Kemungkinan punca:

- Date Column salah.
- Column tarikh bukan format date/datetime.
- Date Format tidak sesuai.

#### Warna status tidak berubah
Kemungkinan punca:

- Status Column salah.
- Nilai status dalam query tidak sama dengan Status Color Mapping.
- Status Color Mapping belum ditetapkan.

:::