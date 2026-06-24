# Kod Am

::: info Tujuan
**Kod Am** adalah stor terurus untuk senarai rujukan (pick-lists), kod status dan nilai pilihan yang digunakan sebagai sumber untuk kawalan seperti `dropdown` dan `radio button`. Kemas kini di sini dipaparkan secara automatik di seluruh borang CORRAD.
:::

## Overview

Paparan **Kod Am** terdiri daripada:
- Panel kiri: senarai kumpulan (groups) dengan penapis `All / Umum / Sistem`.
- Panel kanan: jadual data (rows) untuk kumpulan terpilih.
- Kawalan untuk `Add Row`, `Import CSV`, `Export CSV`, `Edit` dan `Delete`.
[Kod Am](/image/sistem/kodam.png) 


::: info **Groups**
- **Umum**: kumpulan yang dibuat pengguna untuk kegunaan aplikasi (boleh diubah).
- **Sistem**: kumpulan dalaman yang digunakan oleh CORRAD (hanya pentadbir boleh ubah).
- Untuk tambah kumpulan baru klik butang `+` dan isikan `Title` dan `Group Code`.
[Groups](/image/sistem/groups.png)
:::
--- 

::: info **Data Rows (Tambah / Edit / Delete)**
- Untuk tambah baris cepat gunakan medan `+ Tambah Baris` di bawah jadual: isi `Kod` dan `Label`, kemudian klik **Add Row**.
- Untuk sunting baris, klik ikon **Edit** di lajur Actions, ubah `Kod` atau `Label` dan simpan.
- Untuk padam baris, klik ikon **Delete** dan sahkan. Padam adalah kekal.
[Gender](/image/sistem/gedber.png)
:::
---

::: info **Scope (Umum & Sistem)**
- Semasa menambah kumpulan baru, pilih `Scope`:
	- `Umum`: tersedia untuk pengguna dengan kebenaran yang sesuai untuk diubah.
	- `Sistem`: hanya boleh diubah oleh pentadbir sistem; elakkan ubah jika tidak pasti.
:::
---

::: info **Import / Export CSV**
- Klik **Import CSV** untuk muat naik fail CSV; dua mod tersedia:
	- **Tambah**: tambah kod baru sahaja (kod sedia ada diabaikan).
	- **Ganti**: padam semua baris sedia ada dan gantikan dengan kandungan CSV — gunakan dengan berhati-hati.
- Fail CSV mesti mengandungi lajur wajib: `ref_code`, `ref_label`. Lajur pilihan: `sort_order`, `active`.
[Import](/image/sistem/importcsv.png)

- Klik **Export CSV** untuk muat turun semua baris kumpulan sebagai sandaran atau sebagai asas penyuntingan besar-besaran.
[Eksport](/image/sistem/eks.png)
:::
---

::: warning Nota
- Gunakan `Filter` dan `AllStatus` untuk menapis baris.
- Susun semula baris dengan drag handle jika susunan penting.
- Sentiasa eksport CSV terlebih dahulu sebelum melakukan Ganti import.
- Hati-hati ketika menggunakan mod **Ganti** semasa import CSV — ia akan menggantikan semua baris dalam kumpulan.
- Jangan ubah `Group Code` jika kumpulan sudah digunakan dalam borang; perubahan boleh memecahkan rujukan.
- Padam baris adalah tindakan kekal; semak penggunaan sebelum memadam.
:::

