# Senario 4: Menambah Control Dalam Page

::: info Tujuan

Kontrol digunakan untuk menambah butang tindakan pada page. kontrol biasanya dipaparkan pada bahagian atas atau bawah page dan digunakan untuk menjalankan tindakan seperti simpan data, reset form, kembali ke page sebelumnya, cetak, submit, delete, membuka pop-up, export PDF/CSV atau menjalankan trigger tertentu.

Gunakan senario ini selepas page dan komponen berjaya dibuat.

:::

:::warning Nota Penting
Tambah control apabila anda ingin:

- Menambah butang Save
- Menambah butang Reset
- Menambah butang Back
- Menambah butang Print
- Menambah butang Submit
- Menambah butang Delete
- Membuka pop-up menggunakan New Popup - GET atau New Popup - POST
- Menambah butang export seperti PDF Button atau CSV Button
- Menetapkan tindakan tambahan melalui Triggers

:::
## Langkah-langkah
::: tip Langkah 1

1. Buka menu **Halaman & Navigasi**.
2. Klik **Page Studio**.
3. Pilih page yang ingin dikemaskini.
4. Pastikan page telah mempunyai komponen atau struktur asas.
5. Klik butang **Control** pada toolbar atas.
![Control](/image/pagestudio/control.png)

:::
::: tip Langkah 2

6. Paparan pop-up **Add Control** akan dipaparkan.
7. Masukkan nama butang pada ruangan **Button Label**.
8. Pilih jenis kontrol pada ruangan **Control Type**
9. Pilih kedudukan butang pada ruangan **Position**
10. Klik butang **Add** untuk menambah kontrol ke dalam page.

![Form Control](/image/pagestudio/formcontrol.png)
:::

::: tip Langkah 3
11. Selepas kontrol berjaya ditambah, panel kanan akan memaparkan tetapan control tersebut.

12. Semak maklumat pada bahagian **GENERAL** seperti:
- Label
- Name
- Type
- Position
- Status
---
13. Semak maklumat pada bahagian **BINDING** seperti:
- Component
- Redirect URL

:::
::: info Keterangan Binding

Pada panel tetapan control, bahagian BINDING biasanya mempunyai ruangan berikut:

| Ruangan      | Penerangan                                               |
| ------------ | -------------------------------------------------------- |
| Component    | Component yang akan dihubungkan dengan control tersebut. |
| Redirect URL | URL atau page tujuan selepas control ditekan.            |

:::
---

::: tip Langkah 4
14. Jika perlu, isi maklumat pada bahagian **EXTRA** seperti:
- CSS Class
- Notes
- Hints

---
15. Jika kontrol memerlukan tindakan tambahan, tambah konfigurasi pada bahagian TRIGGERS.
16. Klik **Save** selepas selesai membuat perubahan.
17. Klik **Preview** untuk menguji butang kontrol.

:::

### Panduan Memilih Kontrol Type

::: info Panduan Memilih Kontrol

Gunakan jadual di bawah untuk memilih kontrol berdasarkan tujuan butang.

| Jika anda ingin...                      | Kontrol Type yang sesuai |
| --------------------------------------- | ------------------------ |
| Menyimpan data form                     | Save Button              |
| Mengosongkan semula input form          | Reset Button             |
| Kembali ke page sebelumnya              | Back Button              |
| Mencetak page                           | Print Button             |
| Menghantar form atau permohonan         | Submit Button            |
| Memadam rekod                           | Delete Button            |
| Membuka pop-up menggunakan request GET  | New Popup - GET          |
| Membuka pop-up menggunakan request POST | New Popup - POST         |
| Membatalkan submit                      | Unsubmit Button          |
| Export page/report kepada PDF           | PDF Button               |
| Export data kepada CSV                  | CSV Button               |

:::

### Kategori Control

::: tip Kategori 1: Basic Form Action

Kategori ini digunakan untuk tindakan asas pada form
| Kontrol Type    | Kegunaan                                                             |
| --------------- | -------------------------------------------------------------------- |
| Save Button     | Menyimpan data yang dimasukkan atau dikemaskini dalam form.          |
| Reset Button    | Mengosongkan atau mengembalikan semula input form kepada nilai asal. |
| Submit Button   | Menghantar form untuk proses seterusnya.                             |
| Delete Button   | Memadam rekod yang dipilih.                                          |
| Unsubmit Button | Membatalkan status submit, jika proses tersebut dibenarkan.          |

:::
::: tip Kategori 2: Navigation Action

Kategori ini digunakan untuk navigasi atau pergerakan antara page.

| Kontrol Type     | Kegunaan                                        |
| ---------------- | ----------------------------------------------- |
| Back Button      | Membawa pengguna kembali ke page sebelumnya.    |
| New Popup - GET  | Membuka paparan pop-up menggunakan kaedah GET.  |
| New Popup - POST | Membuka paparan pop-up menggunakan kaedah POST. |

:::
::: tip Kategori 3: Output / Export Action

Kategori ini digunakan untuk cetakan atau export data.
| Kontrol Type | Kegunaan                                   |
| ------------ | ------------------------------------------ |
| Print Button | Mencetak paparan page semasa.              |
| PDF Button   | Menghasilkan output dalam format PDF.      |
| CSV Button   | Menghasilkan output data dalam format CSV. |

:::

### Perbezaan New Popup - GET dan New Popup - POST

::: info Panduan Pop-up
| Kontrol Type     | Kegunaan                                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| New Popup - GET  | Sesuai digunakan apabila pop-up hanya perlu membuka page atau mengambil data berdasarkan parameter. |
| New Popup - POST | Sesuai digunakan apabila pop-up perlu menghantar data atau membawa input tertentu untuk diproses.   |

:::

::: warning Nota Penting
- Gunakan komponen untuk susun page dengan lebih kemas.
- Gunakan kontrol mengikut jenis data yang ingin dikumpul.
:::