# Database Connections

::: info Tujuan
Sambungan Pangkalan Data membolehkan anda mendaftarkan sambungan bernama kepada pangkalan data luaran atau sekunder. Setelah disimpan, sambungan ini boleh digunakan dalam logik BL Editor dan pengikatan data Page Studio tanpa perlu meletakkan kelayakan (credentials) secara terus dalam kod anda.
:::

## Overview

Database Connections membenarkan anda menyimpan nama sambungan kepada MySQL, PostgreSQL, MSSQL, Oracle dan jenis DB lain. Setelah disimpan, sambungan boleh digunakan dalam Business Logic (BL) dan Page Studio tanpa mendedahkan kredensial dalam kod.

## Supported DB Types

- MySQL (PHP: `mysqli`)
- PostgreSQL (PHP: `pdo_pgsql`)
- MS SQL Server (PHP: `sqlsrv`)
- Oracle (PHP: `oci8`)
- Sybase / SAP ASE, Informix (jika server disokong)

## Tambah Sambungan (Add Connection)

1) Klik **+ Add Connection**.
2) Isi medan: `Connection Name`, `Type`, `Port`, `Host`, (pilihan) `Database`, `Username`, `Password`, dan `Status`.
3) Jika anda mahu sambungan meliputi semua database pada host, biarkan medan `Database` kosong (server-level connection).
4) Klik **Test Connection** untuk mengesahkan kredensial.
5) Klik **Save**.

## Sunting Sambungan (Edit Connection)

1) Klik **Edit** pada baris sambungan.
2) Ubah medan yang diperlukan.
3) Jika anda tidak mahu menukar kata laluan semasa, biarkan medan `Password` kosong untuk mengekalkan kata laluan sedia ada.
4) Klik **Test Connection** selepas perubahan, kemudian **Save**.

## Gunakan Sambungan dalam BL Editor / Page Studio

- Dalam BL Editor atau Page Studio, pilih sambungan yang didaftarkan apabila anda membuat panggilan ke pangkalan data.
- Elakkan menuliskan string sambungan (host/username/password) terus dalam kod; guna named connection yang disimpan.

## Multi-DB Example (Ringkas)

- Anda boleh mendaftar lebih dari satu sambungan (contoh: `LOCALHOST`, `REPORTING_DB`) dan memilih sambungan spesifik apabila menjalankan query dalam BL.

## Test Connection

- Sentiasa gunakan butang **Test Connection** selepas tambah atau ubah sambungan untuk memastikan akses berjaya.
- Jika test gagal, semak host, port, firewall, dan kredensial.

## Limitations & Nota

- Oracle memerlukan `Service Name` jika digunakan; tidak boleh dibiarkan kosong.
- Pastikan pengguna DB mempunyai kebenaran yang diperlukan untuk operasi yang akan dijalankan.
- Elakkan meletakkan sambungan produksi sebagai `Active` pada persekitaran pembangunan tanpa kawalan.

::: warning Nota
- Simpan kata laluan dengan selamat; sistem menyulitkannya tetapi elakkan berkongsi akses.
- Ujian sambungan mungkin gagal jika firewall atau penghalaan rangkaian menghalang akses.
- Hanya pengguna berwenang sahaja yang patut menambah atau mengubah sambungan.
:::

