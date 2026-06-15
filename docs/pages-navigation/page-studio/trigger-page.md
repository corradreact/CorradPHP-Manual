### Step 6: Menambah Triggers
::: info Tujuan

Triggers digunakan untuk menjalankan tindakan tambahan apabila sesuatu event berlaku pada field, control atau component.

Contohnya, apabila user klik button, ubah nilai dropdown, keluar daripada field, atau page dimuatkan, sistem boleh menjalankan **JavaScript** atau **PHP Business Logic (BL)** yang telah dipilih.

Triggers biasanya digunakan apabila fungsi biasa seperti **binding** tidak mencukupi atau apabila user perlu menjalankan proses khas.
::: 

### Bila Perlu Guna Triggers
::: warning Nota
Gunakan triggers apabila anda ingin:

- Menjalankan JavaScript apabila button diklik.
- Menjalankan PHP Business Logic.
- Menambah validasi tambahan.
- Refresh component atau datatable.
- Mengubah paparan field atau component.
- Memanggil API atau proses backend.
- Menjalankan tindakan khas yang tidak boleh dibuat melalui binding biasa.
- Menjalankan proses apabila nilai field berubah.
:::

### Trigger vs Binding
::: info Perbezaan Trigger dan Binding
| Fungsi      | Kegunaan                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Binding** | Menghubungkan control dengan komponen tertentu, seperti form, untuk menjalankan fungsi **Save**, **Submit**, **Reset**, atau **Delete**. |
| **Trigger** | Menjalankan tindakan tambahan melalui **JavaScript** atau **PHP Business Logic** berdasarkan aksi atau keadaan tertentu.                 |

:::

### Langkah  - langkah Menambah Trigger
::: tip Langkah 1: Pilih Item
1. Buka menu **Halaman & Navigasi**.
2. Pilih page yang ingin dikemaskini.
3. Klik control yang ingin ditambah trigger. 
4. Pada panel kanan, pergi ke bahagian **TRIGGERS.**
5. Kllik butang **Add**.

:: tip Langkah 2: Pilih Trigger Type

6. Paparan **Add Trigger** akan dipaparkan.
7. Pilih **Trigger Type**.
:::

| Fungsi      | Kegunaan                                                              |
| ----------- | --------------------------------------------------------------------- |
| Binding     | Menghubungkan control dengan komponen tertentu, seperti form, untuk menjalankan fungsi Save, Submit, Reset, atau Delete.                                  |
| Trigger     | Menjalankan tindakan tambahan melalui JavaScript atau PHP Business Logic berdasarkan aksi atau keadaan tertentu.                                               |
:::


::: tip Langkah 3: Pilih Event
8. Pilih Event yang sesuai 
Event untuk menjalankan trigger.
**Contoh : onchange**
:::

### Senarai Event
::: info Event Yang Tersedia
| Event       | Kegunaan                                                              |
| ----------- | --------------------------------------------------------------------- |
| onblur      | Trigger berjalan apabila user keluar daripada field/input.            |
| onchange    | Trigger berjalan apabila nilai field berubah.                         |
| onclick     | Trigger berjalan apabila user klik button atau element.               |
| ondblclick  | Trigger berjalan apabila user double click pada element.              |
| onfocus     | Trigger berjalan apabila user klik atau masuk ke field/input.         |
| onkeydown   | Trigger berjalan apabila user menekan keyboard key.                   |
| onkeypress  | Trigger berjalan apabila user menekan key yang menghasilkan karakter. |
| onkeyup     | Trigger berjalan apabila user melepaskan keyboard key selepas menaip. |
| onload      | Trigger berjalan apabila page atau component selesai dimuatkan.       |
| onmousedown | Trigger berjalan apabila user menekan mouse button.                   |
| onmousemove | Trigger berjalan apabila mouse bergerak di atas element.              |
| onmouseout  | Trigger berjalan apabila mouse keluar daripada element.               |
| onmouseover | Trigger berjalan apabila mouse berada di atas element.                |
| onmouseup   | Trigger berjalan apabila user melepaskan mouse button.                |
| onselect    | Trigger berjalan apabila user memilih teks atau pilihan tertentu.     |
:::

### Business Logic (BL)
::: info Apa Itu Business Logic?

**Business Logic (BL)** ialah fungsi atau proses yang akan dijalankan apabila trigger berlaku.
Contoh kegunaan BL:

- Validate form.
- Refresh datatable.
- Update status.
- Panggil API.
- Buka modal atau pop-up.
- Jalankan proses insert, update atau delete.
- Menukar nilai atau paparan field lain.

:::

### Pilih BL Sedia Ada
::: tip Cara Pilih BL
1. Pada ruangan **Business Logic (BL)**, klik **Browse**.
2. Paparan **Select BL** akan dipaparkan.
3. Cari nama BL yang ingin digunakan.
4. Pilih BL yang sesuai.
5. Lengkapkan parameter jika diperlukan.
6. Klik **Save Trigger**.

::: 
---

### Create New BL

::: tip Cara Buat BL Baharu

Jika BL belum wujud, user boleh cipta BL baharu.

1. Klik **Create New BL**.
2. Paparan **Create New BL** akan dipaparkan.
3. Pilih **BL Type** sama ada **JavaScript** atau **PHP**.
4. Masukkan **BL Name**.

**Contoh: JS_REFRESH_FIELD**

5. Masukkan **Title / Description** jika perlu.
6. Masukkan **Initial Code** jika ingin letak kod awal.
7. Klik **Create BL** atau **Create & Open in Editor.**

:::
---

### Parameter
::: info Parameter

Parameter digunakan untuk menghantar nilai tambahan kepada BL.

| Parameter   | Contoh    |
| ----------- | --------- |
| Parameter 1 | Record ID |
| Parameter 2 | Status    |
| Parameter 3 | User ID   |
Jika BL tidak memerlukan nilai tambahan, parameter boleh dibiarkan kosong.

:::

### Order dan Active

::: info Order dan Active
| Ruangan | Penerangan                                                            |
| ------- | --------------------------------------------------------------------- |
| Order   | Susunan trigger dijalankan jika terdapat lebih daripada satu trigger. |
| Active  | Menentukan sama ada trigger aktif atau tidak.                         |
Contoh:

| Trigger        | Order |
| -------------- | ----- |
| Validate input | 1     |
| Submit data    | 2     |

:::
---

### Contoh: Trigger Field Onchange
::: tip Contoh Field Trigger

Contoh situasi:

User menukar nilai dropdown, kemudian sistem perlu refresh field atau component lain.
| Tetapan        | Nilai            |
| -------------- | ---------------- |
| Trigger Type   | JavaScript       |
| Event          | onchange         |
| Business Logic | JS_REFRESH_FIELD |
| Order          | 1                |
| Active         | Ya               |
:::

### Hasil Yang Dijangka
::: info Hasil Yang Dijangka.
Selepas trigger ditambah:

- Trigger berjaya disimpan.
- Trigger berjalan berdasarkan event yang dipilih.
- BL akan dijalankan apabila event berlaku.
- User boleh menggunakan trigger untuk validasi, refresh, custom action, update status atau proses backend.
- Trigger boleh diuji melalui Preview.

:::

---

::: warning Nota

- Untuk button, event paling biasa ialah onclick.
- Untuk dropdown, checkbox atau radio button, event paling biasa ialah onchange.
- Untuk input text yang perlu disemak selepas user keluar daripada field, gunakan onblur.
- Untuk live search atau semakan semasa user menaip, gunakan onkeyup.
- Gunakan onload jika trigger perlu berjalan apabila page atau component dimuatkan

:::

