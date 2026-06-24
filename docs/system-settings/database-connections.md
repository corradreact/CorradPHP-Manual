# Sambungan Pangkalan Data
::: info Tujuan
**Sambungan Pangkalan Data** membolehkan anda mendaftarkan sambungan bernama kepada pangkalan data luaran atau sekunder. Setelah disimpan, sambungan ini boleh digunakan dalam logik BL Editor dan pengikatan data Page Studio tanpa mengeraskan kelayakan di mana-mana dalam kod anda.
:::

## Overview
**Sambungan Pangkalan Data** membenarkan anda menyimpan nama sambungan kepada MySQL, PostgreSQL, MSSQL, Oracle dan jenis DB lain. Setelah disimpan, sambungan boleh digunakan dalam Business Logic (BL) dan Page Studio tanpa mendedahkan pengesahan dalam kod.

### Supported Jenis DB
::: info Jenis DB
- MySQL (PHP: `mysqli`)
- PostgreSQL (PHP: `pdo_pgsql`)
- MS SQL Server (PHP: `sqlsrv`)
- Oracle (PHP: `oci8`)
:::
---

::: tip **Tambah Sambungan (Add Connection)**
1) Klik **+ Tambah Sambungan**.
[Button Tambah](/image/sistem/tbtntambah.png) 

2) Isi ruangan: `Nama Sambungan`, `Jenis`, `Port`, `Host`, (pilihan) `Pangkalan Data`, `Nama Pengguna`, `Kata Laluan`, dan `Status`.
3) Jika anda mahu sambungan meliputi semua database pada host, biarkan ruangan `Pangkalan Data` kosong (server-level connection).
4) Klik **Uji Sambungan** untuk mengesahkan kredensial.
5) Klik **Simpan**.

[Tambah sambungan](/image/sistem/tambahsambungan.png) 

:::
---

::: tip **Edit Sambungan (Edit Sambungan)**
1) Klik **Edit Sambungan** pada baris sambungan.
[Edit sambungan](/image/sistem/edit.png) 

2) Ubah ruangan yang diperlukan.
3) Jika anda tidak mahu menukar kata laluan semasa, biarkan ruangan `Kata Laluan` kosong untuk mengekalkan kata laluan sedia ada.
4) Klik **Uji Sambungan** selepas perubahan, kemudian **Simpan**.
[Edit](/image/sistem/editsambungan.png) 
:::
---

::: info **Sambungan dalam BL Editor / Page Studio**
- Dalam BL Editor atau Page Studio, pilih sambungan yang didaftarkan apabila anda membuat panggilan ke pangkalan data.
- Elakkan menuliskan string sambungan (host/username/password) terus dalam kod; guna named connection yang disimpan.
:::
---

::: info Multi-DB Example (Ringkas)
- Boleh mendaftar lebih dari satu sambungan (contoh: `LOCALHOST`, `REPORTING_DB`) dan memilih sambungan spesifik apabila menjalankan query dalam BL.
:::
---

### Uji Sambungan
::: info **Uji Sambungan**
- Sentiasa gunakan butang **Test Connection** selepas tambah atau ubah sambungan untuk memastikan akses berjaya.
- Jika test gagal, semak host, port, firewall, dan pengesahan.
:::
---

::: warning Nota

- Pastikan pengguna DB mempunyai kebenaran yang diperlukan untuk operasi yang akan dijalankan.
- Elakkan meletakkan sambungan produksi sebagai `Aktif` pada persekitaran pembangunan tanpa kawalan.

:::