# System Import dan Export v2 - Panduan & Penggunaan

## Gambaran Keseluruhan

**Apakah Import Export v2?**

Alat bersepadu untuk memindahkan konfigurasi sistem CORRAD antara persekitaran (contohnya Pembangunan → Peringkat Uji → Pengeluaran). Menyokong pengeksport/import Modul, Logik Perniagaan, dan struktur pangkalan data.

---

## 5 Tab Utama

### 1. Import
Muat naik fail `.zip` yang mengandungi data `-Folder` atau `-Fompa` untuk memulihkan konfigurasi ke dalam sistem ini.

**Format Fail Yang Disokong:**
- `-Folder` - Eksport mod Ganti — menulis semula rekod sedia ada semasa import.
- `-Fompa` - Eksport mod Tambah — menambah atau mengemas kini tanpa memadam rekod lain. Digunakan untuk Export by BL.
- `-Fsyc` - Skrip DB Sync — mengandungi definisi struktur jadual untuk penjajaran lajur antara sistem.
- `.zip` - Pembungkus penghantaran — fail `.Folder` atau `.Fompa` dimampatkan di dalam ZIP untuk muat turun/muat naik.

**⚠️ Peraturan Paling Penting:** Sentiasa sandarkan pangkalan data anda sebelum sebarang Import, Rollback, atau DB Sync. Operasi ini boleh menimpa atau mengubah data sistem yang sedia ada secara tidak boleh kembali.

---

### 2. Export mengikut Modul
Eksport konfigurasi sistem mengikut menu navigasi yang dipilih. Setiap menu utama menunjukkan senarai sub-modul yang boleh dipilih secara individu.

**Pilihan:**
- **Sertakan Data Kumpulan** - Tanda untuk mengeksport data Kumpulan Pengguna bersama modul.
- **Sertakan Kebenaran Pengguna** - Tanda untuk menyertakan tetapan kebenaran akses pengguna dalam fail eksport.
- **Pemilihan Kekal** - Pilihan akan diingati sepanjang sesi ini.
- **Fail Output** - Fail `.zip` dimuat turun secara automatik. Nama fail termasuk nama modul dan cap masa.

**Mod:** Sentiasa menggunakan **mod tambah** (`-Fompa`) — import hanya akan menambah atau mengemas kini BL yang dipilih tanpa menjejaskan BL lain dalam sistem sasaran.

---

### 3. Export mengikut BL
Eksport hanya Logik Perniagaan (BL) yang dipilih tanpa mengeksport keseluruhan modul. Sesuai untuk menghantar kemas kini BL tertentu ke sistem lain.

**Langkah:**
1. Kembangkan pakej dalam **senarai Pakej** untuk melihat entri BL.
2. Tanda entri BL yang ingin dieksport (boleh memilih pelbagai dari pakej berlainan).
3. Klik **Export BL** → fail `.zip` (mengandungi `.Fompa`) akan dimuat turun.

**✓ Mod Tambah untuk BL:** Eksport BL sentiasa menggunakan **mod tambah** (`-Fompa`) — import hanya akan menambah atau mengemas kini BL yang dipilih tanpa menjejaskan BL lain dalam sistem sasaran.

---

### 4. Rollback
Tab Rollback menunjukkan senarai **snapshot** yang disimpan secara automatik sebelum setiap import. Pilih snapshot dan sahkan untuk memulihkan sistem ke keadaan tersebut.

**⚠️ Tidak Boleh Dikembalikan:** Rollback tidak boleh dibatalkan. Ia akan menggantikan konfigurasi semasa dengan snapshot yang dipilih. Sentiasa sandarkan pangkalan data anda sebelum melakukan rollback.

**Status:** Menunjukkan "Tiada snapshot rollback tersedia" jika tiada snapshot wujud.

---

### 5. DB Sync
DB Sync digunakan untuk menyelaras **struktur jadual** (penambahan/pengubahsuaian lajur) antara dua sistem CORRAD. Ia **tidak** memindahkan data, hanya definisi struktur.

**Langkah:**

1. **Create Script** - Pilih jadual dari senarai (gunakan "Check All", "Uncheck All", atau tapis dengan carian). Klik "Create DB Sync Script" untuk memuat turun fail `.Fsyc`.

2. **Import & Sync** - Muat naik fail `.Fsyc` yang diterima. Tanda kotak pengesahan sandaran. Kemudian klik "Preview Differences" untuk menyemak perubahan sebelum menjalankan.

3. **Preview Differences** - Semak perubahan antara skrip yang dimuat naik dan struktur semasa sebelum mengklik "Start Sync".

4. **Start Sync** - Jalankan sync untuk mengemas kini struktur jadual dalam sistem sasaran.

**⚠️ Had DB Sync:** DB Sync hanya menyokong menambah lajur baru dan mengubah suai lajur sedia ada. Ia tidak memadam lajur atau jadual, dan tidak memindahkan sebarang data baris.

**✓ Pratonton Sebelum Sync:** Sentiasa gunakan butang "Preview Differences" untuk menyemak perubahan sebelum menjalankan "Start Sync".

---

## Cara Import

1. **Sandarkan pangkalan data anda terlebih dahulu.**
2. Seret dan lepaskan fail `.zip` (mengandungi `-Folder` atau `-Fompa`) ke zon drag-and-drop, atau klik untuk semak imbas.
3. Tanda kotak **"Saya telah membuat sandaran pangkalan data sebelum mengimport"** untuk mengaktifkan butang Import.
4. Klik **Import Module**.

**Perbezaan Mod Import:**

| Jenis Fail | Tingkah Laku | Kes Penggunaan |
|-----------|-----------|----------|
| `-Folder` | Menggantikan semua rekod dalam skop yang dipilih. | Migrasi modul penuh antara sistem. |
| `-Fompa` | Menambah atau mengemas kini rekod tanpa memadam yang sedia ada. | Kemas kini BL atau tambah konfigurasi baru tanpa menjejaskan data lain. |

**⚠️ Amaran Trigger:** Selepas import, sistem mungkin memaparkan amaran tentang Trigger yang merujuk nama BL yang tidak wujud dalam sistem sasaran. Semak bahagian "Trigger Warnings" di bawah butang Import.

**✓ Auto Snapshot:** Sistem secara automatik menyimpan snapshot sebelum setiap import. Anda boleh memulihkan snapshot ini melalui tab Rollback jika perlu.

---

## Perbezaan Mod Import

| Jenis Fail | Tingkah Laku | Kes Penggunaan |
|-----------|-----------|----------|
| `-Folder` | Menggantikan semua rekod dalam skop yang dipilih. | Migrasi modul penuh antara sistem. |
| `-Fompa` | Menambah atau mengemas kini rekod tanpa memadam yang sedia ada. | Kemas kini BL atau tambah konfigurasi baru tanpa menjejaskan data lain. |

---

## Ringkasan

| Ciri | Tujuan | Sesuai Untuk |
|---------|---------|----------|
| **Import** | Memulihkan konfigurasi dari fail `.zip`. | Menyediakan persekitaran baru atau memulihkan dari sandaran. |
| **Export mengikut Modul** | Mengeksport modul penuh dengan semua sub-modul. | Migrasi modul penuh atau sandaran. |
| **Export mengikut BL** | Mengeksport entri Logik Perniagaan tertentu. | Kemas kini terfokus ke sistem lain. |
| **Rollback** | Memulihkan sistem ke keadaan sebelumnya. | Membatalkan import yang gagal. |
| **DB Sync** | Menyelaraskan struktur jadual antara sistem. | Penambahan/pengubahsuaian lajur tanpa memindahkan data. |

---

## Amalan Terbaik

✓ **Sentiasa sandarkan pangkalan data anda** sebelum sebarang import, rollback, atau operasi DB Sync.

✓ **Gunakan Preview Differences** dalam DB Sync untuk menyemak perubahan sebelum sync.

✓ **Export mengikut BL** untuk kemas kini terfokus antara sistem.

✓ **Pantau Trigger Warnings** selepas import untuk mengenal pasti rujukan BL yang mungkin tidak wujud.

✓ **Semak Auto Snapshots** dalam Rollback untuk pilihan pemulihan.

⚠️ **Elakkan rollback pada pengeluaran** tanpa perancangan teliti — ia tidak boleh dikembalikan.

⚠️ **DB Sync tidak memindahkan data** — hanya definisi struktur jadual.
