# Log Berstruktur

## Gambaran Keseluruhan

Halaman Log Berstruktur memaparkan log sistem yang dihantar dalam format tersusun. Ia membantu pentadbir mengenal pasti isu sistem dengan lebih mudah, menggunakan penapis untuk mencari mengikut tarikh, tahap keparahan, saluran, mesej, dan ID permintaan.

---

## Kad Statistik Utama

Di bahagian atas terdapat beberapa kad ringkas yang menunjukkan jumlah log mengikut kategori:

- **Total** - jumlah keseluruhan entri log untuk tarikh terpilih.
- **Error/Critical** - bilangan log tahap ralat atau kritikal.
- **Warning** - bilangan log amaran.
- **Info** - bilangan log maklumat.
- **Debug** - bilangan log debug.

Kad ini memberikan gambaran pantas mengenai jumlah dan tahap ralat dalam sistem.

---

## Penapis

Gunakan bahagian penapis untuk mensasarkan entri log tertentu.

- **Date** - pilih tarikh log yang ingin dilihat (contohnya hari ini).
- **Level** - pilih tahap log, seperti semua tahap, kritikal, amaran, maklumat, atau debug.
- **Channel** - pilih saluran log untuk mengecilkan carian mengikut sumber atau modul aplikasi.
- **Search message** - cari teks tertentu dalam mesej log.
- **Request ID** - tapis menurut ID permintaan untuk menjejak log berkaitan satu permintaan sahaja.
- **Auto-refresh** - pilihan untuk mengemaskini senarai log secara automatik setiap 30 saat.

Klik **Search** untuk menjalankan penapisan.

---

## Entri Log

Senarai log dipaparkan dalam jadual dengan lajur berikut:

- **Timestamp** - tarikh dan masa log direkod.
- **Level** - tahap log seperti `CRITICAL`, `WARNING`, `INFO`, atau `DEBUG`.
- **Channel** - saluran log, contohnya `app`.
- **Message** - ringkasan mesej ralat atau maklumat.
- **User** - ID pengguna yang berkaitan dengan log.
- **IP** - alamat IP sumber.
- **Request ID** - ID permintaan untuk jejak aktiviti secara berkumpulan.

Log ini memudahkan anda menyemak punca kegagalan dan memahami konteks permintaan yang menghasilkan mesej tersebut.

---

## Kegunaan Utama

- Mengenal pasti ralat `critical` dan `error` dengan cepat.
- Mencari entri log berdasarkan tarikh atau mesej tertentu.
- Menjejaki permintaan tertentu menggunakan `Request ID`.
- Memeriksa aktiviti pengguna dan alamat IP sumber.

---

## Petua Penggunaan

- Mulakan dengan memilih tarikh dan tahap log yang relevan.
- Gunakan carian mesej untuk menumpukan fokus pada teks ralat tertentu.
- Jika anda melihat entri kritikal, perhatikan saluran dan mesej penuh untuk menyelesaikan isu.
- Hidupkan `Auto-refresh` jika anda sedang memantau log semasa sesi debugging.
