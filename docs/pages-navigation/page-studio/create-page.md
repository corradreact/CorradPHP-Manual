
## Senario 2: Membina Page
::: info Tujuan
Gunakan senario ini selepas menu baharu berjaya dicipta. Page perlu dibina supaya menu tersebut mempunyai paparan yang boleh digunakan oleh pengguna.
::: 

### Langkah-langkah
::: tip Langkah 1
1. Buka menu **Halaman & Navigasi**.
2. Klik **Page Studio**.
3. Pilih menu yang telah dibuat pada panel kiri.
Contoh:
customer management

:::

::: tip Langkah 2

4. Jika menu tersebut belum mempunyai page, sistem akan memaparkan mesej **No page for this menu** dan butang **Create Page**.

![Menu belum mempunyai page](/image/pagestudio/no-create-page.png)

5. Klik butang **Create Page**.

6. Selepas page berjaya dibuat, panel kanan akan memaparkan bahagian **Menu & Page**.

---

**Bahagian MENU**

Semak maklumat pada bahagian **MENU** seperti berikut:

| Ruangan | Penerangan |
|---|---|
| Menu Title | Nama menu yang dipaparkan dalam sistem. |
| Status | Status menu sama ada aktif atau tidak aktif. |
| Icon | Icon menu, jika diperlukan. |
| Notes | Catatan tambahan berkaitan menu. |

---

**Bahagian PAGE**

Semak maklumat pada bahagian **PAGE** seperti berikut:

| Ruangan | Penerangan |
|---|---|
| Page Title | Tajuk page yang akan dipaparkan kepada pengguna. |
| Breadcrumbs | Laluan navigasi page dalam sistem. |
| Description | Penerangan ringkas tentang fungsi page. |
| Pre-Process | Proses yang dijalankan sebelum page dimuatkan, jika dikonfigurasi. |
| Post-Process | Proses yang dijalankan selepas tindakan tertentu, jika dikonfigurasi. |
| CSS Class | Tetapan layout atau gaya paparan page. |

7. Pastikan **Page Title** dan **Breadcrumbs** adalah betul.

![Tetapan Menu dan Page](/image/pagestudio/menu-page-settings.png)

8. Jika perlu, masukkan penerangan ringkas pada ruangan **Description**.

9. Pilih **CSS Class** yang sesuai mengikut jenis page.

![Pilihan CSS Class Page](/image/pagestudio/css-class-options.png)

Contoh pilihan **CSS Class**:

| CSS Class | Kegunaan |
|---|---|
| Narrow | Sesuai untuk form ringkas atau page yang tidak memerlukan ruang lebar. |
| Wide | Sesuai untuk page yang mempunyai banyak maklumat atau table. |
| No Padding | Sesuai untuk layout khas yang memerlukan ruang penuh. |
| Compact | Sesuai untuk page yang mempunyai banyak ruangan tetapi ingin dipaparkan secara padat. |
| Centered | Sesuai untuk form kecil yang ingin diletakkan di tengah page. |
| Dashboard | Sesuai untuk page berbentuk dashboard, card, chart atau ringkasan data. |
:::


::: tip Langkah  3
10. Klik **Save** jika terdapat perubahan pada maklumat - page.
11. Selepas page dibuat, anda boleh mula menambah komponen atau control menggunakan button:
- Komponen
- Control


<!-- 
## Keterangan Ruangan Menu

| Ruangan | Penerangan |
|---|---|
| Menu Title | Nama menu yang dipaparkan dalam sistem. |
| Status | Menentukan sama ada menu aktif atau tidak aktif.. |
| Icon | Icon menu untuk paparan menu utama, jika diperlukan. |
| Notes | Catatan tambahan berkaitan menu tersebut. |

## Keterangan Ruangan Page

| Ruangan | Penerangan |
|---|---|
| Page Title | Tajuk page yang akan dipaparkan kepada pengguna. |
| Breadcrumbs | Laluan navigasi page dalam sistem. |
| Description| Penerangan ringkas tentang fungsi page. |
| Pre-Process | Proses yang dijalankan sebelum page dimuatkan, jika dikonfigurasikan. |
| Post-Process | Proses yang dijalankan selepas tindakan tertentu, jika dikonfigurasikan. |
| CSS Class | Tetapan layout atau gaya paparan page. |

## Keterangan CSS Class

| CSS Class | Penerangan |
|---|---|
| Narrow | Mengecilkan lebar paparan page. Sesuai untuk form ringkas.. |
| Wide | Melebarkan paparan page. Sesuai untuk page yang mempunyai banyak maklumat. |
| No Padding| Membuang padding page. Sesuai untuk layout khas atau dashboard tertentu. |
| Compact | Menjadikan paparan lebih padat. Sesuai untuk page yang memempunya banyak ruangan. |
| Centered | Meletakkan kandungan page di tengah. Sesuai untuk form kecil atau page ringkas. |
| Dashboard | Digunakan untuk page berbentuk dashboard. | -->

::: info Hasil Yang Dijangka
Page baharu berjaya dibuat dan dipaparkan dalam senarai menu/page.
:::

:::warning Nota
- Pastikan nama page jelas dan mudah difahami.
- Gunakan breadcrumb yang sesuai supaya user tahu lokasi page tersebut.
- Jika page tidak muncul dalam menu, semak status page dan permission user.
:::
---
