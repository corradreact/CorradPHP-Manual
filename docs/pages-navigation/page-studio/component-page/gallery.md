# Card Gallery Component

::: info Tujuan

**Card Gallery Component** digunakan untuk memaparkan data dalam bentuk kad visual yang tersusun dalam grid responsive. Setiap kad boleh memaparkan imej, tajuk, subtajuk, badge, harga atau maklumat ringkas berdasarkan data daripada SQL Query.

Component ini sesuai digunakan untuk paparan seperti katalog produk, senarai pekerja, senarai berita, direktori, showcase item atau paparan rekod yang lebih visual berbanding table biasa.
:::

::: warning Nota 
Gunakan Card Gallery apabila anda ingin:

- Memaparkan data dalam bentuk kad.
- Menunjukkan imej bersama maklumat ringkas.
- Membina katalog produk.
- Membina employee directory.
- Memaparkan senarai news, announcement atau showcase.
- Menggantikan table biasa dengan paparan yang lebih visual.

Contoh penggunaan:
| Situasi            | Kegunaan                                              |
| ------------------ | ----------------------------------------------------- |
| Product Catalogue  | Papar produk dengan gambar, nama, kategori dan harga. |
| Employee Directory | Papar staff dengan gambar, nama dan department.       |
| News Listing       | Papar berita dengan gambar, tajuk dan kategori.       |
| Showcase Items     | Papar item pilihan dalam bentuk card.                 |
:::
----

### SQL Query
::: info SQL Query

Bahagian **SQL Query** digunakan untuk mengambil data yang akan dipaparkan dalam Card Gallery.

Setiap column dalam query akan digunakan semula dalam bahagian **Card Gallery Configuration** seperti Title Column, Subtitle Column, Image Column dan Badge Column.

Contoh:
```sql
SELECT
    product_name AS NAME,
    category AS CAT,
    CONCAT('RM ', FORMAT(price, 2)) AS PRICE,
    image_url AS IMG
FROM corrad_showcase.showcase_products
ORDER BY rating DESC;
```
:::
----

### Tips SQL Query Untuk Card Gallery
::: warning Nota SQL Query

- Pastikan setiap column mempunyai alias yang jelas seperti NAME, CAT, PRICE dan IMG.
- Alias column dalam SQL Query perlu sama dengan ruangan yang dimasukkan dalam Card Gallery Configuration.
- Jika card memerlukan imej, pastikan query menghasilkan URL imej yang betul.
- ika ingin paparkan harga, boleh format harga dalam query menggunakan CONCAT atau FORMAT.
- Gunakan ORDER BY jika ingin susun card mengikut rating, tarikh, nama atau kategori.
:::

:::
Contoh alias yang mudah digunakan:
| Tujuan        | Alias Dicadangkan |
| ------------- | ----------------- |
| Tajuk card    | `NAME`            |
| Subtajuk card | `CAT`             |
| Imej card     | `IMG`             |
| Badge / Harga | `PRICE`           |
| Link          | `LINK`            |
| Warna badge   | `BADGE_COLOR`     |

:::
---

### Card Gallery Configuration

::: info Card Gallery Configuration

Bahagian **Card Gallery** Configuration digunakan untuk menentukan column mana daripada SQL Query yang akan dipaparkan pada card.

| Ruangan            | Penerangan                                                 |
| ------------------ | ---------------------------------------------------------- |
| Columns            | Bilangan card yang dipaparkan dalam satu baris.            |
| Title Column       | Column yang digunakan sebagai tajuk card.                  |
| Subtitle Column    | Column yang digunakan sebagai subtajuk card.               |
| Image Column       | Column yang digunakan sebagai imej card.                   |
| Badge Column       | Column yang digunakan sebagai badge atau maklumat ringkas. |
| Badge Color Column | Warna badge yang ingin digunakan.                          |
| Link Column        | Column yang digunakan sebagai pautan apabila card diklik.  |
| Card Height (px)   | Ketinggian card dalam pixel.                               |
| Image Fit          | Cara imej dipaparkan dalam card, contohnya Cover.          |

:::
---


### Contoh Configuration

::: tip Contoh Tetapan Card Gallery

Berdasarkan SQL Query berikut:

```sql
SELECT
    product_name AS NAME,
    category AS CAT,
    CONCAT('RM ', FORMAT(price, 2)) AS PRICE,
    image_url AS IMG
FROM corrad_showcase.showcase_products
ORDER BY rating DESC;
```

Tetapkan **Card Gallery Configuration** seperti berikut:

| Ruangan            | Nilai                             |
| ------------------ | --------------------------------- |
| Columns            | `4`                               |
| Title Column       | `NAME`                            |
| Subtitle Column    | `CAT`                             |
| Image Column       | `IMG`                             |
| Badge Column       | `PRICE`                           |
| Badge Color Column | `primary`                         |
| Link Column        | Kosong jika card tidak perlu link |
| Card Height (px)   | `160`                             |
| Image Fit          | `Cover`                           |

Maksudnya:

- Card akan dipaparkan 4 item dalam satu baris.
- NAME akan menjadi tajuk card.
- CAT akan menjadi subtajuk card.
- IMG akan menjadi gambar card.
- PRICE akan dipaparkan sebagai badge.
- Badge akan menggunakan warna primary.

:::
---

### Badge Color Column

::: info Badge Color

Badge Color Column digunakan untuk menentukan warna badge pada card.

Jika warna adalah sama untuk semua card, boleh masukkan nilai tetap seperti:

| Nilai   | Kegunaan                    |
| ------- | --------------------------- |
| primary | Warna utama.                |
| success | Status berjaya atau aktif.  |
| warning | Amaran atau perhatian.      |
| danger  | Ralat atau status kritikal. |
| info    | Maklumat umum.              |

:::
---

### Link Column

::: info Link Column

Link Column digunakan jika card perlu boleh diklik dan membawa user ke page lain.

Contoh SQL Query dengan link:
```sql
SELECT
    product_name AS NAME,
    category AS CAT,
    price AS PRICE,
    image_url AS IMG
FROM corrad_showcase.showcase_products
ORDER BY rating DESC
```

Kemudian teteapkan :
| Ruangan     | Nilai  |
| ----------- | ------ |
| Link Column | `IMG` |

:::
---

###  Image Fit
::: info Image Fit

Image Fit menentukan cara imej dipaparkan dalam card.

| Image Fit | Kegunaan                                                            |
| --------- | ------------------------------------------------------------------- |
| Cover     | Imej memenuhi ruang card dan mungkin dipotong sedikit supaya kemas. |
| Contain   | Imej dipaparkan penuh tetapi mungkin ada ruang kosong.              |

:::
---

::: info Hasil Yang Dijangka

Selepas Card Gallery dikonfigurasikan:

- Data daripada SQL Query dipaparkan dalam bentuk card.
- Setiap card mempunyai tajuk, subtajuk, imej dan badge jika dikonfigurasikan.
- Card disusun mengikut bilangan column per row.
- Paparan lebih visual dan sesuai untuk katalog, direktori atau senarai berita.
- Card boleh dijadikan clickable jika Link Column ditetapkan.

:::
---

::: warning Nota

- Pastikan Type dipilih sebagai Card Gallery.
- Pastikan SQL Query menghasilkan column yang diperlukan.
- Nama column dalam configuration mesti sama dengan alias dalam SQL Query.
- Gunakan alias yang mudah seperti NAME, CAT, IMG, PRICE dan LINK.
- Jika imej tidak muncul, semak semula URL pada Image Column.
- Gunakan Columns untuk mengawal bilangan card dalam satu baris.
- Gunakan Card Height dan Image Fit supaya paparan card lebih kemas.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji paparan Card Gallery.

:::
---

::: danger Isu Biasa
#### Card tidak memaparkan data
Kemungkinan punca:

- SQL Query salah.
- Query tidak menghasilkan data.
- Alias column tidak sama dengan configuration.
- Database/table tidak mempunyai data.

#### Imej tidak keluar
Kemungkinan punca:

- Image Column salah.
- URL imej tidak lengkap.
- Fail imej tidak boleh diakses.
- Column IMG tidak wujud dalam query.


#### Badge tidak keluar
Kemungkinan punca:

- Badge Column kosong.
- Nama column badge salah.
- Query tidak menghasilkan nilai untuk badge.
- Card tidak kemas
:::