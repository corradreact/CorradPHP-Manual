# Form Component

::: info Tujuan

**Form Component** digunakan untuk membina borang input dalam page. Form membolehkan pengguna memasukkan, mengemaskini atau memaparkan data berdasarkan konfigurasi yang ditetapkan.

Dalam Page Studio, form biasanya digunakan untuk proses seperti:

- Insert rekod baharu
- Update rekod sedia ada
- Register data
- Edit maklumat
- View maklumat dalam bentuk form
- Generate field daripada table database
- Menambah button control seperti Save, Submit, Reset atau Back.

### Jenis Form Component
Terdapat dua jenis form component yang biasa digunakan:
| Jenis Form       | Kegunaan                                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| Form (1 Column)  | Sesuai untuk form ringkas atau form yang ingin dipaparkan secara menegak satu ruangan.              |
| Form (2 Columns) | Sesuai untuk form yang mempunyai banyak field dan perlu disusun dalam dua lajur supaya lebih kemas. |

:::
---

### Layout / Mode
::: info Layout / Mode

Bahagian Layout / Mode digunakan untuk mengawal cara form dipaparkan dalam page.


| Tetapan                             | Kegunaan                                                            |
| ----------------------------------- | ------------------------------------------------------------------- |
| Modal / Dialog                      | Menentukan sama ada form dipaparkan dalam bentuk modal atau dialog. |
| SM / MD / LG / XL / Max             | Menentukan saiz modal jika form dipaparkan sebagai modal.           |
| Half / 1/3 / Full                   | Menentukan lebar form dalam layout page.                            |
| No Border / Shadow / Flat / Compact | Mengawal gaya paparan card form.                                    |
| Hidden                              | Menyembunyikan form daripada paparan.                               |
| No Print                            | Form tidak dipaparkan semasa print.                                 |
| Print Only                          | Form hanya dipaparkan semasa print.                                 |
:::

### Data Binding
::: info Apa Itu Data Binding?

Data Binding digunakan untuk menghubungkan form dengan database. Melalui data binding, sistem boleh mengetahui table mana yang digunakan untuk mengambil, menyimpan atau mengemaskini data.

Data binding juga boleh digunakan untuk generate field secara automatik berdasarkan kolum yang terdapat dalam table database.

**Secara ringkas:**

**Form Component → Data Binding → Table Database → Field Dalam Form**
:::
---
### Cara Menggunakan Data Binding
::: tip Langkah Data Binding

1. Klik form component yang ingin dikonfigurasikan.

Pada panel kanan, pergi ke bahagian DATA BINDING.
| Tetapan      | Nilai          |
| ------------ | -------------- |
| Connection   | LOCALHOST      |
| Database     | corrad_example |
| Binding Type | Table          |
| Source       | customer       |

2. Klik butang **Auto-Generate Fields from Table** jika ingin sistem membina field secara automatik daripada table tersebut.

3. Semak field yang telah dijana dalam form.

4. Klik **Save**.


:::

### Auto-Generate Fields from Table
::: info Fungsi Auto-Generate Fields

Butang Auto-Generate Fields from Table digunakan untuk menjana field dalam form berdasarkan kolum yang terdapat dalam table database.

Contohnya, jika table mempunyai kolum berikut:

Kolum Database: 
``` text
STAFFID
STAFF_NO
FULL_NAME
IC_NO
EMAIL
PHONE
DEPTID
POSITION
JOIN_DATE
STATUS
```
Sistem boleh menjana field form berdasarkan kolum tersebut secara automatik.

:::

::: warning Nota Auto-Generate

1. Pastikan Connection, 
Database dan Source telah dipilih sebelum klik Auto-Generate.

2. Field yang dijana masih perlu disemak semula.

3. Pastikan field type yang dijana adalah sesuai.

4. Semak field yang perlu ditetapkan sebagai Required, Read Only atau Primary Key.

5. Padam field yang tidak diperlukan supaya form lebih kemas.

6. Tukar label field supaya lebih mudah difahami oleh user.

:::

### Form Behaviour
::: info Apa Itu Form Behaviour?

Form Behaviour menentukan cara form berfungsi apabila user menggunakan form tersebut.

Bahagian ini biasanya digunakan untuk menetapkan sama ada form digunakan untuk insert, update, atau proses lain.

:::

### Form Mode

::: info Form Mode

**Form Mode** menentukan tujuan form tersebut digunakan.
| Form Mode              | Kegunaan                                                        |
| ---------------------- | --------------------------------------------------------------- |
| Insert Only / Register | Digunakan untuk menambah rekod baharu sahaja.                   |
| Update / Edit          | Digunakan untuk mengemaskini rekod sedia ada.                   |
| Insert & Update        | Digunakan untuk form yang boleh menambah dan mengemaskini data. |

:::

---

### Success Action

::: info Success Action

Success Action menentukan apa yang berlaku selepas form berjaya disimpan atau diproses.

Contoh pilihan yang biasa digunakan:

| Success Action            | Kegunaan                                       |
| ------------------------- | ---------------------------------------------- |
| Notification + Reset Form | Papar mesej berjaya dan kosongkan semula form. |
| Notification Only         | Papar mesej berjaya sahaja.                    |
| Redirect to URL           | Bawa user ke page lain selepas berjaya.        |
| Modal Popup               | Tutup modal selepas form berjaya diproses.     |

:::

---

### Success Message

::: info Success Message

Success Message ialah mesej yang dipaparkan kepada user selepas form berjaya diproses.

**Contoh: CONFIRM_MESSAGE - Saya pasti**

---

### Add Form Controls

::: info Add Form Controls

Butang Add Form Controls digunakan untuk menambah control secara lebih cepat kepada form.

Control yang biasa digunakan untuk form ialah:

| Control       | Kegunaan                                 |
| ------------- | ---------------------------------------- |
| Save Button   | Menyimpan data form.                     |
| Delete Button | Memadam rekod, jika dibenarkan.          |

:::

::: tip Langkah Menambah Form Controls

1. Klik form component.
2. Pergi ke bahagian **FORM BEHAVIOUR**.
3. Klik butang **Add Form Controls**.
4. Sistem akan menambah control yang berkaitan dengan form.
5. Semak control yang telah ditambah pada bahagian Controls / Buttons.
6. Jika perlu, klik control tersebut untuk mengubah label, position atau binding.
7. Klik **Save**.

:::

---
### Processing

::: info Processing
Bahagian Processing digunakan untuk menetapkan proses tambahan sebelum atau selepas form dijalankan.

| Ruangan           | Penerangan                                             |
| ----------------- | ------------------------------------------------------ |
| Pre-Process       | Proses yang dijalankan sebelum form diproses.          |
| Post-Process      | Proses yang dijalankan selepas form diproses.          |
| Post Notification | Mesej atau notifikasi selepas post-process dijalankan. |

:::
---

### Display

::: info Display

Bahagian Display digunakan untuk mengawal paparan form dalam page.

| Ruangan     | Penerangan                                           |
| ----------- | ---------------------------------------------------- |
| Position    | Kedudukan form dalam page.                           |
| Collapsible | Menentukan sama ada form boleh dibuka dan ditutup.   |
| Label Width | Menentukan lebar label untuk semua field dalam form. |
| Text Size   | Menentukan saiz teks untuk semua field dalam form.   |


:::

::: warning Nota
1. Gunakan Form (1 Column) untuk form ringkas.
2. Gunakan Form (2 Columns) untuk form yang mempunyai banyak field.
3. Pastikan Connection, Database dan Source betul sebelum klik Auto-Generate.
4. Semak field yang dijana kerana tidak semua field perlu dipaparkan kepada user.
5. Pastikan field penting ditetapkan sebagai Required.
6. Gunakan Read Only untuk field yang perlu dipaparkan tetapi tidak boleh diubah.
7. Tambah control seperti Save Button supaya user boleh menyimpan data.
8. Tetapkan Success Message supaya user tahu proses telah berjaya.
9. Klik Save selepas selesai konfigurasi.
10. Klik Preview untuk menguji form.

:::