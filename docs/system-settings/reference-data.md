# Reference Data

::: info Tujuan
Reference Data adalah stor terurus untuk senarai rujukan (pick-lists), kod status dan nilai pilihan yang digunakan sebagai sumber untuk kawalan seperti `dropdown` dan `radio button`. Kemas kini di sini dipaparkan secara automatik di seluruh borang CORRAD.
:::

## Overview

Paparan Reference Data terdiri daripada:
- Panel kiri: senarai kumpulan (groups) dengan penapis `All / General / System`.
- Panel kanan: jadual data (rows) untuk kumpulan terpilih.
- Kawalan untuk `Add Row`, `Import CSV`, `Export CSV`, `Edit` dan `Delete`.

## Groups

- **General**: kumpulan yang dibuat pengguna untuk kegunaan aplikasi (boleh diubah).
- **System**: kumpulan dalaman yang digunakan oleh CORRAD (hanya pentadbir boleh ubah).
- Untuk tambah kumpulan baru klik butang `+` dan isikan `Title` dan `Group Code`.

## Data Rows (Tambah / Edit / Delete)

- Untuk tambah baris cepat gunakan medan `Quick add` di bawah jadual: isi `Code` dan `Label`, kemudian klik **Add Row**.
- Untuk sunting baris, klik ikon **Edit** di lajur Actions, ubah `Code` atau `Label` dan simpan.
- Untuk padam baris, klik ikon **Delete** dan sahkan. Padam adalah kekal.

## Import / Export CSV

- Klik **Import CSV** untuk muat naik fail CSV; dua mod tersedia:
	- **Append**: tambah kod baru sahaja (kod sedia ada diabaikan).
	- **Replace**: padam semua baris sedia ada dan gantikan dengan kandungan CSV — gunakan dengan berhati-hati.
- Fail CSV mesti mengandungi lajur wajib: `ref_code`, `ref_label`. Lajur pilihan: `sort_order`, `active`.
- Klik **Export CSV** untuk muat turun semua baris kumpulan sebagai sandaran atau sebagai asas penyuntingan besar-besaran.

## Scope (General vs System)

- Semasa menambah kumpulan baru, pilih `Scope`:
	- `General`: tersedia untuk pengguna dengan kebenaran yang sesuai untuk diubah.
	- `System`: hanya boleh diubah oleh pentadbir sistem; elakkan ubah jika tidak pasti.

## Tips Cepat

- Gunakan `Filter` dan `AllStatus` untuk menapis baris.
- Susun semula baris dengan drag handle jika susunan penting.
- Sentiasa eksport CSV terlebih dahulu sebelum melakukan Replace import.

::: warning Nota
- Hati-hati ketika menggunakan mod **Replace** semasa import CSV — ia akan menggantikan semua baris dalam kumpulan.
- Jangan ubah `Group Code` jika kumpulan sudah digunakan dalam borang; perubahan boleh memecahkan rujukan.
- Padam baris adalah tindakan kekal; semak penggunaan sebelum memadam.
:::

