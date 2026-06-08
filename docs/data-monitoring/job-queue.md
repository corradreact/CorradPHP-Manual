# Job Queue

## Gambaran Keseluruhan

Halaman Job Queue memantau tugas latar belakang yang dijalankan oleh sistem CORRAD. Ia menunjukkan status tugasan, jumlah tugas, dan jadual cron untuk memproses barisan kerja.

---

## Kad Ringkas Statistik

Di bahagian atas terdapat kad ringkas yang menunjukkan jumlah tugas mengikut kategori:

- **Total** - jumlah keseluruhan tugas dalam barisan.
- **Pending** - tugas yang menunggu untuk diproses.
- **Running** - tugas yang sedang dijalankan.
- **Done** - tugas yang berjaya diselesaikan.
- **Failed** - tugas yang gagal.
- **Today** - tugas yang dijalankan pada hari ini.

Kad ini membantu anda melihat dengan cepat keadaan keseluruhan barisan tugas.

---

## Penapis

Gunakan penapis untuk mencari tugasan tertentu:

- **Date From** - tarikh mula untuk penapisan tugas.
- **Date To** - tarikh tamat untuk penapisan tugas.
- **Status** - pilih status tugasan seperti semua status, pending, running, done, atau failed.
- **Type** - pilih jenis tugas.
- **Created By** - tapis tugas berdasarkan pengguna atau ID pembuat.
- **Search** - cari berdasarkan jenis, status, atau pengguna.

Klik **Search** untuk memaparkan hasil yang sepadan, atau **Reset** untuk membuang penapis.

---

## Senarai Job Queue

Senarai tugas dipaparkan dalam jadual dengan lajur berikut:

- **#** - nombor urutan tugas.
- **Type** - jenis tugas seperti `mail`.
- **Status** - keadaan semasa tugas (contohnya `failed`).
- **Created By** - pengguna yang membuat tugas, jika ada.
- **Queued** - masa tugas dimasukkan ke barisan.
- **Started** - masa tugas bermula.
- **Done** - masa tugas selesai.
- **Tries** - bilangan percubaan untuk menjalankan tugas.
- **Actions** - butang untuk melihat butiran tugas.

Senarai ini membantu menjejaki tugasan yang gagal atau memerlukan tindakan lanjut.

---

## Butiran Tugas

Klik butang **View** untuk membuka tetingkap butiran tugas. Anda akan melihat maklumat seperti:

- **Job ID**
- **Status**
- **Created By**
- **Queued At**
- **Started At**
- **Done At**
- **Type**
- **Attempts**
- **Available At**
- **Payload** - data yang dihantar dengan tugas (contohnya e-mel, subjek, mesej).
- **Last Error** - mesej ralat terakhir yang menyebabkan tugas gagal.

Contoh kes penggunaan: tugas `mail` gagal kerana fungsi `flc_mail()` mengembalikan false.

---

## Jadual Cron

Bahagian Cron Schedule membolehkan anda mengaktifkan dan mengemas kini cron untuk memproses tugas secara berkala.

- **Run every** - pilih selang masa cron (contohnya setiap 5 minit).
- **Enable Cron** / **Update Cron** / **Disable** - kawalan untuk mengaktifkan, mengemas kini, atau menyahaktifkan cron.
- **Active Cron Line** - baris cron aktif yang menunjukan skrip pekerja yang dijalankan.

Contoh cron line:

`*/5 * * * * /usr/bin/php /home/php84.corrad.my/queue_worker.php >> /home/php84.corrad.my/log/queue.log 2>&1 # CORRAD_QUEUE_WORKER`

Worker akan memproses sehingga 5 tugas berbaris setiap cron run. Fail kunci mencegah larian bertindih. Log ditulis ke `log/queue.log`.

---

## Kegunaan Utama

- Memantau tugas latar belakang dan barisan kerja dalam sistem.
- Mengenal pasti tugas yang gagal atau berulang.
- Menyiasat beban kerja dan masa pemprosesan tugas.
- Mengurus cron untuk memastikan tugas berjaya dijalankan secara berkala.

---

## Petua Penggunaan

- Aktifkan `Auto-refresh` jika anda memantau tugas secara langsung.
- Perhatikan tugas `failed` dan semak `Last Error` untuk menyelesaikan masalah.
- Gunakan penapis tarikh dan status untuk mencari tugas tertentu.
- Pastikan cron berjalan setiap beberapa minit untuk pemprosesan kerja berterusan.
