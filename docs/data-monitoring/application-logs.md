# Rekod Log Aplikasi

## Gambaran Keseluruhan

Halaman Log Aplikasi memaparkan ringkasan dan senarai fail log sistem CORRAD. Ia membantu pentadbir mengenal pasti jenis ralat yang berlaku, melihat jumlah rekod log, dan menapis data untuk penyiasatan lebih lanjut.

---

## Kad Ringkas Statistik

Di bahagian atas terdapat kad ringkas yang menunjukkan jumlah log mengikut kategori:

- **All Logs** - Jumlah keseluruhan log.
- **BL Error** - Bilangan ralat Business Logic.
- **MySQLi Error** - Bilangan ralat MySQLi.
- **PHP Error** - Bilangan ralat PHP.
- **Prepare Error** - Bilangan ralat ketika penyediaan pangkalan data.

Kad ini membantu anda mendapatkan gambaran cepat mengenai keparahan dan jenis masalah dalam sistem.

---

## Penapis

Gunakan penapis untuk mencari log mengikut bulan atau jenis log:

- **Month** - Pilih bulan log.
- **Log Type** - Pilih jenis log seperti `All Types`, `PHP Error`, `MySQLi Error`, `BL Error`, dan lain-lain.
- **Search** - Cari teks tertentu dalam log jika tersedia.

Terdapat butang:

- **Reset** - Kosongkan semua penapis.
- **Search** - Terapkan penapis untuk memaparkan hasil yang sepadan.

---

## Senarai Fail Log

Bahagian ini memaparkan senarai log dalam bentuk jadual dengan lajur berikut:

- **#** - Nombor susunan entri.
- **Timestamp** - Masa log direkod.
- **Type** - Jenis log seperti `PHP Error`, `MySQLi Error`, `Prepare Error`, atau `BL Error`.
- **Summary** - Ringkasan mesej log.
- **Size** - Saiz fail log.
- **Actions** - Tindakan yang boleh dilakukan pada setiap entri.

Contoh ringkas jenis log:

- `PHP Error` — ralat berkaitan kod PHP.
- `MySQLi Error` — ralat berkaitan pangkalan data MySQLi.
- `BL Error` — ralat pada Business Logic.
- `Prepare Error` — ralat semasa penyediaan SQL.

---

## Tindakan pada Log

Dalam lajur `Actions`, biasanya terdapat ikon untuk:

- **Lihat butiran** — memaparkan kandungan log atau maklumat lanjut.
- **Muat turun** — muat turun log untuk semakan luar talian.
- **Padam** — hapus log yang tidak diperlukan.

---

## Pengurusan Log Lama

Terdapat butang tambahan untuk mengurus log lama:

- **Purge Old Logs** — kosongkan log lama dari sistem.
- **Refresh** — kemas kini paparan senarai log.

Gunakan fungsi ini untuk menjaga saiz storan dan mengekalkan log yang relevan sahaja.

---

## Petua Penggunaan

- Mulakan dengan melihat kad statistik untuk mengenal pasti jenis ralat utama.
- Gunakan penapis bulan dan jenis log untuk mempersempit carian.
- Semak ringkasan log untuk mengenal pasti entri yang memerlukan tindakan segera.
- Kosongkan log lama secara berkala untuk mengekalkan prestasi sistem.
