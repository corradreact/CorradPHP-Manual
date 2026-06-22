# Datatable Component

::: info Tujuan

**Datatable Component** digunakan untuk memaparkan senarai data dalam bentuk jadual. Component ini sesuai untuk page seperti senarai customer, staff, aktiviti, transaksi atau permohonan.

Datatable juga boleh mempunyai **Action Column** untuk tindakan seperti **View**, **Edit** dan **Delete**.

:::

::: info Datatable Config

Bahagian ini digunakan untuk tetapan sumber data dan fungsi table.


| Ruangan              | Penerangan                                     |
| -------------------- | ---------------------------------------------- |
| Ajax URL             | API atau endpoint untuk mengambil data.        |
| Post Params          | Parameter tambahan untuk dihantar ke API.      |
| Page Length          | Bilangan row dipaparkan setiap page.           |
| Length Options       | Pilihan jumlah row seperti 5, 10, 25, 50, 100. |
| Show Length Dropdown | Papar pilihan jumlah row.                      |
| Show Info            | Papar maklumat jumlah rekod.                   |
| Show Pagination      | Papar pagination.                              |
| Filter               | Jenis filter untuk carian data.                |
| Freeze Left Cols     | Bekukan column sebelah kiri.                   |
| Freeze Right Cols    | Bekukan column sebelah kanan.                  |

Contoh:

| Tetapan        | Nilai            |
| -------------- | ---------------- |
| Ajax URL       | `/api/dtAct`     |
| Page Length    | `5`              |
| Length Options | `5,10,25,50,100` |
| Filter         | Smart            |

:::
---

::: info Fungsi Tambahan

Datatable juga menyediakan beberapa pilihan tambahan.

| Pilihan                  | Kegunaan                                            |
| ------------------------ | --------------------------------------------------- |
| Print Button             | Menambah fungsi print.                              |
| Save State               | Simpan keadaan table seperti filter dan pagination. |
| Refresh Button           | Reload semula data table.                           |
| Export CSV Button        | Export data kepada CSV.                             |
| Column Visibility Toggle | Benarkan user show/hide column.                     |
| Per-Column Filter Row    | Tambah filter pada setiap column.                   |
:::
---

::: info Column Definitions

Column Definitions digunakan untuk menentukan column yang akan dipaparkan dalam datatable.

| Ruangan  | Penerangan                          |
| -------- | ----------------------------------- |
| Title BM | Tajuk column dalam Bahasa Melayu.   |
| Title BI | Tajuk column dalam Bahasa Inggeris. |
| Class    | CSS class tambahan untuk column.    |
| Key      | Nama field daripada data API.       |
| Sort     | Tetapan sorting column.             |

Contoh:
| Title BM | Title BI | Key          |
| -------- | -------- | ------------ |
| ID       | ID       | `act_id`     |
| Title    | Title    | `act_title`  |
| Actor    | Actor    | `act_actor`  |
| Date     | Date     | `act_date`   |
| Status   | Status   | `act_status` |


:::
---
### Cara Edit Columns

::: tip Langkah Edit Columns

1. Pergi ke bahagian **COLUMN DEFINITIONS**.
2. Klik **Edit Columns**.
3. Paparan Column Definitions akan dipaparkan.
4. Tambah atau kemaskini column yang diperlukan.
5. Pastikan Key sama dengan nama field daripada API.
6. Klik **Apply**.
7. Klik **Save**.

:::
--- 

::: info Action Column
digunakan untuk meletakkan tindakan seperti View, Edit dan Delete pada setiap row datatable.

Contoh action:
| Action | Kegunaan              |
| ------ | --------------------- |
| View   | Melihat detail rekod. |
| Edit   | Mengemaskini rekod.   |
| Delete | Memadam rekod.        |
:::
---

### Cara Menambah Action Column

::: tip Langkah Action Column

1. Buka **Column Definitions**.
2. Klik **Add Column**.

| Ruangan  | Nilai           |
| -------- | --------------- |
| Title BM | Action          |
| Title BI | Action          |
| Class    | `action-column` |
| Key      | `action`        |
| Sort     | Default         |

4. Klik ikon **lightning / petir** pada row Action.
5. Paparan **Generated column for Action** akan dipaparkan.
6. Masukkan atau generate code action.
7. Klik **OK**.
8. Klik **Apply**.
9. Klik **Save**.

:::
---

::: warning Nota

- Pastikan Type dipilih sebagai Datatable.
- Pastikan Ajax URL betul.
- Pastikan Key dalam Column Definitions sama dengan data daripada API.
- Gunakan ikon lightning / petir untuk generate action.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji datatable.

:::