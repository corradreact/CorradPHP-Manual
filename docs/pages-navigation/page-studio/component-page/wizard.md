# Wizard Component

::: info Tujuan
**Wizard** adalah proses pengisian data kompleks kepada beberapa langkah tersusun dan mempunyai validasi. Pengguna boleh bergerak ke langkah seterusnya atau kembali ke langkah sebelumnya sebelum membuat penghantaran akhir.

**Sesuai digunakan untuk:** Borang permohonan, proses onboarding, dan penghantaran data berperingkat.

:::

::: warning Nota 
Gunakan Wizard Component apabila:

- Form mempunyai terlalu banyak ruangan.
- Maklumat perlu dibahagikan kepada beberapa kategori.
- Pengguna perlu menyemak jawapan sebelum submit.
- Setiap langkah memerlukan validation.
- Proses mempunyai beberapa peringkat sebelum selesai.

:::
--- 

### Wizard Configuration

::: info Configuration

Bahagian **Wizard Configuration** digunakan untuk menetapkan proses submit dan langkah-langkah dalam Wizard.
| Ruangan               | Penerangan                                                 |
| --------------------- | ---------------------------------------------------------- |
| Target Table (INSERT) | Table database yang menerima data selepas Wizard disubmit. |
| Submit Button Label   | Label butang submit pada langkah terakhir.                 |
| Success Message       | Mesej selepas data berjaya dihantar.                       |
| Redirect URL          | Page tujuan selepas submit berjaya.                        |
| Steps                 | Jumlah langkah dan field dalam Wizard.                     |
| Edit Steps            | Membuka Wizard Steps Editor.                               |

:::
--- 

### Target Table
::: tip **Target Table (INSERT)** ialah table yang digunakan untuk menyimpan data daripada Wizard.
Contoh : **staff_onboarding**
Jika table mempunyai column seperti:
- full_name
- email
- phone
- department
- position
- joined_date
- bio

:::
---

### Submit Button Label
::: info Submit Button Label
Ruangan ini digunakan untuk menetapkan teks pada butang penghantaran akhir.
Contoh: **Submit**
:::
---

### Success Message
::: info Success Message
**Success Messsage** ialah mesej yang dipaparkan selepas data berjaya disimpan.

Contoh : **Data berjaya dihantar** atau pilih mesej yang telah dikonfigurasikan dalam sistem.

Gunakan mesej yang ringkas supaya pengguna tahu proses telah berjaya.

:::
---


### Redirect URL
::: info Redirect URL
**Redirect URL** ddigubakan jika pengguna perlu dibawa ke page lain selepas submit berjaya.

Contoh : **staff/list**

Jika pengguna tidak perlu berpindah ke page lain, ruangan ini boleh dibiarkan kosong.
:::
---

### Wizard Steps Editor                      
::: info Wizard Steps Editor
Klik **Edit Steps** Steps untuk membuka **Wizard Steps Editor**.
Dalam editor ini, pengguna boleh:

- Menambah langkah baharu
- Menukar nama langkah
- Menambah field
- Menetapkan label field
- Memilih field type
- Menetapkan field sebagai required
- Memadam field
- Memadam langkah
:::
---

### Struktur Wizard Steps Editor
::: info Setiap langkah mempunyai:
| Ruangan     | Penerangan                                                  |
| ----------- | ----------------------------------------------------------- |
| Step Title  | Nama langkah seperti Personal Info atau Work Details.       |
| Name        | Nama teknikal field.                                        |
| Label       | Nama field yang dipaparkan kepada pengguna.                 |
| Type        | Jenis field seperti text, email, phone, date atau dropdown. |
| Req.        | Menentukan sama ada field wajib diisi.                      |
| Add Field   | Menambah field baharu dalam langkah.                        |
| Delete Step | Memadam keseluruhan langkah.                                |
:::
---

### Contoh Struktur Wizard
::: tip Contoh Staff Onboarding Wizard

#### Step 1: Personal Info
| Name     | Label         | Type  | Required |
| -------- | ------------- | ----- | -------- |
| fullname | Full Name     | text  | Ya       |
| email    | Email Address | email | Ya       |
| phone    | Phone Number  | phone | Tidak    |
| dob      | Date of Birth | date  | Tidak    |


#### Step 2: Work Details
| Name        | Label      | Type     | Required |
| ----------- | ---------- | -------- | -------- |
| department  | Department | dropdown | Ya       |
| position    | Position   | text     | Ya       |
| joined_date | Join Date  | date     | Tidak    |
| bio         | Short Bio  | textarea | Tidak    |


#### Step 3: Confirm
Langkah terakhir digunakan untuk memparkan semula semua jawapan sebelum pengguna klik **Submit**

:::
---

### Cara Menambah Step 
::: tip Menambah Step
1. Buka Wizard Steps Editor
2. Klik butang tambah step jika disediakan.
3. Masukkan nama step.
 Contoh: Personal Info.
4. Tambah field yang diperlukan
5. Klik **Apply** selepas selesai.

Gunakan nama steps yang ringkas dan jelas.

:::
---

### Cara Menambah field
::: tip Menambah Field
1. Pada step yang dipilih, klik **Add Field**
2. Isi Name.
Contoh: **fullname**
3. Isi Label.
Contoh: **Full Name**
4. Pilih Type
Contoh: text.
5. Tandakan **Required** jika field wajib diisi.
6. Ulang langkah yang sama untuk field lain.
7. Klik **Apply**.
:::
----

### Field Type Yang Biasa Digunakan
| Field Type | Kegunaan                                           |
| ---------- | -------------------------------------------------- |
| text       | Teks ringkas seperti nama atau jawatan.            |
| email      | Alamat email.                                      |
| phone      | Nombor telefon.                                    |
| date       | Tarikh.                                            |
| textarea   | Teks panjang seperti catatan atau biodata.         |
| dropdown   | Pilihan daripada senarai.                          |
| number     | Nilai nombor.                                      |
| checkbox   | Pilihan ya/tidak atau lebih daripada satu pilihan. |


---

### Aliran Wizard
::: info
Pengguna isi Step 1
↓
Klik Next
↓
Sistem semak required field
↓
Pengguna isi Step 2
↓
Klik Next
↓
Pengguna semak Step Confirm
↓
Klik Submit
↓
Data disimpan ke Target Table
↓
Success Message dipaparkan
↓
Redirect dijalankan jika dikonfigurasikan
:::
---

::: info Hasil Yang Dijangka
Selepas Wizard dikonfigurasikan:

- Form dipaparkan dalam beberapa langkah.
- Pengguna boleh bergerak menggunakan butang Next dan Back.
- Field required akan divalidasi sebelum ke langkah seterusnya.
- Pengguna boleh menyemak jawapan pada langkah Confirm.
- Data boleh disimpan ke Target Table selepas submit.
- Success Message akan dipaparkan selepas proses berjaya.
:::
----

::: warning Nota
- Pastikan Type dipilih sebagai Multi-Step Wizard.
- Gunakan nama step yang ringkas dan jelas.
- Jangan masukkan terlalu banyak field dalam satu step.
- Pastikan nama field sepadan dengan column database jika data perlu disimpan.
- Pastikan Target Table wujud sebelum submit.
- Klik Apply selepas mengubah Wizard Steps.
- Klik Save pada panel utama.
- Klik Preview untuk menguji keseluruhan aliran Wizard.
:::
---

::: danger Isu Biasa
#### Tidak boleh pergi ke step seterusnya
Kemungkinan punca:

- Field required masih kosong.
- Format email atau tarikh tidak betul.
- Field validation gagal.

#### Data tidak disimpan selepas Submit
Kemungkinan punca:
- Target Table tidak diisi.
- Nama field tidak sama dengan column database.
- Table tidak wujud.
- Permission database tidak mencukupi.
- Query detail mempunyai error.

#### Redirect tidak berlaku
Kemungkinan punca:
- Redirect URL kosong.
- URL salah.
- Submit gagal dan proses belum selesai.
:::