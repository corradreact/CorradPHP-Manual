# Audit Trail

## Gambaran Keseluruhan

Audit Trail merekod setiap perubahan data yang dibuat melalui sistem CORRAD. Setiap entri menangkap siapa yang membuat perubahan, bila ia dibuat, dari mana, dan bagaimana data kelihatan sebelum dan selepas perubahan.

### Apa yang direkod

- **INSERT** — rekod baru dicipta
- **UPDATE** — rekod sedia ada diubah
- **DELETE** — rekod dipadam
- **LOGIN / LOGOUT** — peristiwa sesi pengguna

> Nota: Hanya tindakan yang dilakukan melalui antara muka CORRAD direkod dalam audit trail. Perubahan terus ke pangkalan data akan memintas audit trail.

---

## Penapis Carian

Gunakan penapis untuk mengecilkan keputusan kepada tempoh masa atau kriteria tertentu.

### Julat Tarikh

- Pilih tarikh **From** dan **To** untuk menyaring entri audit dalam tetingkap masa tertentu.
- Tinggalkan kedua-dua medan kosong untuk mencari pada semua tarikh.

### Penapis lain

- **Username** — padanan separa pada nama pengguna yang membuat perubahan.
- **IP Address** — tapis mengikut alamat IP klien, berguna untuk menyiasat mesin tertentu.
- **Action** — pilih jenis tindakan seperti INSERT, UPDATE, DELETE, LOGIN, dan lain-lain.
- **Table** — masukkan nama jadual pangkalan data (contohnya `FLC_USER`).
- **Menu** — tapis mengikut laluan menu / halaman di mana tindakan dijalankan.
- **Browser** — tapis mengikut user-agent pelayar.

### Tip

Gabungkan penapis dengan bebas — contohnya, tapis mengikut `Username + Date Range` untuk mengaudit apa yang dilakukan oleh pengguna tertentu dalam tempoh tertentu.

---

## Rekod Audit

Senarai Audit Records memaparkan entri log audit dalam bentuk jadual:

- **Date** — tarikh dan masa tindakan.
- **IP** — alamat IP sumber.
- **Menu** — jalur menu di mana tindakan dilakukan.
- **Action** — jenis tindakan (contohnya Navigation, Crud, Update).
- **Username** — nama pengguna yang terlibat.
- **Browser** — pelayar yang digunakan.
- **SQL** — butang untuk melihat pertanyaan SQL jika tersedia.

### Tindakan pada senarai

- **Dashboard** — paparan ringkas statistik audit.
- **Retention** — pengurusan simpanan rekod audit.
- **Purge All** — hapus semua rekod audit secara kekal.

---

## Audit Dashboard

Dashboard audit menampilkan metrik utama:

- **Total Events** — jumlah keseluruhan peristiwa audit.
- **Unique Users** — bilangan pengguna unik yang direkod.
- **Active Days** — bilangan hari aktif dengan peristiwa.

### Pecahan Severity

Memaparkan bilangan peristiwa mengikut tahap:

- critical
- warning
- info

### Agihan Tindakan

Graf menunjukkan jenis tindakan yang paling banyak berlaku:

- Crud
- Navigation
- Submit
- Login
- Logout
- Login_failed
- Logout (Pwd Changed)

### Pengguna Teratas

Senarai pengguna teratas mengikut bilangan peristiwa audit.

### Jadual yang paling banyak diubah

Memaparkan jadual yang sering menerima perubahan, seperti:

- `FLC_PS_LOCK`
- `FLC_PAGE_COMPONENT`
- `FLC_BL`
- `FLC_PAGE_COMPONENT_ITEMS`
- `LOGIN_ATTEMPTS`
- `FLC_SESSION`
- `FLC_MENU`
- `PRUSER`
- `FLC_TRIGGER_PARAMETER`

### Logins vs Failed (30 Hari Terakhir)

Carta membandingkan kejayaan login dengan kegagalan login dalam tempoh 30 hari.

---

## Pengurusan Retensi

Retensi mengawal penyimpanan rekod audit mengikut jenis tindakan.

### Maklumat Simpanan Semasa

Untuk setiap aksi, paparkan:

- jumlah baris
- tarikh terlama
- tarikh terbaru
- anggaran saiz penyimpanan

### Pembersihan Terpilih

- **Action Type** — pilih semua jenis atau jenis tindakan tertentu.
- **Older Than (days)** — masukkan bilangan hari; entri lebih lama daripada nilai ini akan dipilih.
- **Type CONFIRM to enable purge button** — taip `CONFIRM` untuk mengaktifkan butang `Purge Selected`.

---

## Pembersihan Semua Rekod Audit

Pilihan `Purge All` akan memadamkan semua rekod audit secara kekal.

- Mesej amaran akan muncul: "This will permanently delete all audit records."
- Taip `CONFIRM` untuk meneruskan.

> Amaran: Tindakan ini tidak boleh dibatalkan.

---

## Kegunaan Utama

- Memantau dan menjejak perubahan konfigurasi sistem.
- Mengenal pasti siapa yang membuat perubahan dan bila ia berlaku.
- Menyiasat isu keselamatan dan aktiviti pengguna.
- Mengurus simpanan log dengan retensi dan pembersihan rekod lama.
