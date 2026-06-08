# Log Akses API

## Gambaran Umum

Log Akses API memaparkan ringkasan panggilan API untuk sistem CORRAD. Ia membantu pentadbir memantau jumlah panggilan, kejayaan, dan kegagalan permintaan API.

---

## Papan Pemuka Utama

Di bahagian atas, anda akan melihat tiga kad ringkas:

- **Total Calls** - Jumlah keseluruhan panggilan API yang dicatat.
- **Success** - Bilangan panggilan API yang berjaya.
- **Failed** - Bilangan panggilan API yang gagal.

Kad ini memberi gambaran pantas tentang prestasi dan kesihatan API.

---

## Penapis

Bahagian penapis membolehkan anda menyempitkan log API dengan kriteria berikut:

- **API Name** - Cari berdasarkan nama API.
- **Date Start** - Tarikh mula untuk julat log.
- **Date End** - Tarikh tamat untuk julat log.
- **API Key** - Cari berdasarkan kunci API.
- **Status** - Pilih status log seperti Semua, Berjaya, atau Gagal.

Klik **Search** untuk memaparkan keputusan yang sepadan, atau klik **Reset** untuk membersihkan semua penapis.

---

## Tab Log List / Report

Sistem menyediakan dua tab utama:

- **Log List** - Senarai entri log API.
- **Report** - Paparan ringkasan laporan (secara tipikal untuk analisis agregat).

Tab lalai biasanya adalah **Log List**.

---

## Senarai Log

Setiap baris log menunjukkan maklumat ringkas termasuk:

- **Timestamp** - Masa panggilan API direkod.
- **API** - Nama fungsi API yang dipanggil.
- **Request** - Kaedah HTTP dan masa tindak balas.
- **IP / Key** - Alamat IP dan kunci API pengguna.
- **Status** - Status panggilan (contohnya `Failed`).
- **Actions** - Ikon untuk melihat maklumat terperinci atau memadam entri.

Senarai ini memudahkan anda mencari panggilan API yang bermasalah atau memeriksa sejarah akses.

---

## Melihat Butiran Log

Klik butang **View** (ikon mata) pada entri untuk membuka tetingkap butiran log. Maklumat yang dipaparkan termasuk:

- **Log ID**
- **Timestamp**
- **Method** (contohnya `GET` atau `POST`)
- **API Name**
- **API URL**
- **Package**
- **API Key**
- **IP Address**
- **HTTP Code**
- **Duration**
- **User Agent**
- **Status**
- **Request Payload**

Maklumat ini berguna untuk menyiasat kegagalan atau tingkah laku tidak dijangka pada API.

---

## Kegunaan Utama

- Memantau aktiviti API sistem.
- Mengenal pasti panggilan yang gagal atau mempunyai masa tindak balas yang tinggi.
- Mengesan sumber panggilan melalui alamat IP dan kunci API.
- Menyiasat isu berkaitan API berdasarkan butiran permintaan dan respons.

---

## Petua

- Gunakan tarikh mula dan tamat untuk menyaring log bagi tempoh tertentu.
- Jika anda melihat banyak entri **Failed**, semak `HTTP Code` dan `Request Payload` untuk mencari punca.
- Simpan log penting sebagai rujukan ketika menyelesaikan masalah API.
