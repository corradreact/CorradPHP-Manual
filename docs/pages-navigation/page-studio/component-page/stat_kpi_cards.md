# Stat / KPI Cards Component

::: info Tujuan

**Stats / KPI Cards Component** digunakan untuk memaparkan KPI atau maklumat penting dalam bentuk kad ringkasan. Setiap kad boleh menunjukkan label, nilai, icon dan indikator ringkas.
Nilai card boleh diambil terus daripada SQL Query dalam Page Studio tanpa perlu menggunakan Business Logic (BL) untuk penggunaan asas.
:::

::: warning Nota 
Gunakan component ini apabila anda ingin:

- Memaparkan jumlah data secara ringkas.
- Membina dashboard summary.
- Menunjukkan KPI utama dalam bentuk card.
- Memaparkan nilai daripada SQL query.
- Menunjukkan statistik seperti total, average, sum atau count.

:::

### Stats / KPI Cards Setting

::: info Stats / KPI Cards
Bahagian ini digunakan untuk menetapkan bilangan card dan kandungan KPI.

| Ruangan         | Penerangan                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------ |
| Columns Per Row | Bilangan card yang dipaparkan dalam satu baris.                                            |
| Cards           | Jumlah card yang telah dibuat.                                                             |
| Edit Cards      | Membuka pop-up untuk mengubah KPI card.                                                    |
| Auto-refresh    | Menetapkan masa refresh automatik dalam saat. Nilai `0` bermaksud tidak refresh automatik. |

:::

--- 

### Edit KPI Cards

::: tip Langkah Edit KPI Cards

1. Pada panel kanan, pergi ke bahagian **STATS / KPI CARDS**.
2. Klik butang **Edit Cards**.
3. Paparan **Edit KPI** Cards akan dipaparkan.
4. Tambah atau kemaskini card yang diperlukan.
5. Lengkapkan ruangan seperti:
- SQL Query
- Label
- Icon
- Color
- Format
- Klik Apply.
- Klik Save pada panel utama.

:::

--- 

### Keterangan Ruangan Edit KPI Cards

:::info Keterangan Ruangan

| Ruangan   | Penerangan                                                               |
| --------- | ------------------------------------------------------------------------ |
| SQL Query | Query untuk mengambil nilai KPI daripada database.                       |
| Label     | Teks yang dipaparkan pada card.                                          |
| Icon      | Icon yang dipaparkan pada card. Biasanya menggunakan Font Awesome class. |
| Color     | Warna card atau label seperti Primary, Success, Info atau Warning.       |
| Format    | Format nilai seperti Number, Currency atau Percent.                      |

:::
---

### Contoh KPI Cards

::: info Contoh 

| Label          | SQL Query                                            | Format |
| -------------- | ---------------------------------------------------- | ------ |
| Total Products | `SELECT COUNT(*) AS v FROM products`                 | Number |
| Avg Price (RM) | `SELECT ROUND(AVG(price),2) AS v FROM products`      | Number |
| Total Stock    | `SELECT SUM(stock) AS v FROM products`               | Number |
| Categories     | `SELECT COUNT(DISTINCT category) AS v FROM products` | Number |

:::
---

### Contoh Paparan KPI
Selepas KPI cards dikonfigurasikan, component akan memaparkan card seperti berikut:

Contoh hasil:

-- GAMBAR

::: info Hasil Yang Dijangka

Selepas Stat / KPI Cards dikonfigurasikan:

- KPI card berjaya dipaparkan dalam page.
- Setiap card memaparkan nilai daripada SQL Query.
- ard boleh disusun mengikut bilangan column per row.
- Label, icon, color dan format boleh ditetapkan.
- Component boleh digunakan sebagai dashboard summary.

:::
---

::: warning Nota

- Pastikan Type dipilih sebagai Stats / KPI Cards.
- Pastikan SQL Query menghasilkan satu nilai sahaja untuk setiap card.
- Gunakan alias seperti AS v supaya nilai mudah dibaca oleh component.
- Pilih icon dan warna yang sesuai dengan maksud KPI.
- Gunakan Columns Per Row untuk mengawal susunan card.
- Klik Apply selepas edit card.
- Klik Save pada panel utama selepas selesai konfigurasi.
- Klik Preview untuk menguji paparan KPI card.

:::
---

::: danger Isu Biasa
#### KPI card tidak memaparkan nilai

Kemungkinan punca:

- SQL Query salah.
- Query tidak menghasilkan data.
- Alias nilai tidak ditetapkan dengan betul.
- Database/table tidak mempunyai data.

##### Card tidak muncul
Kemungkinan punca:

- Card belum ditambah dalam Edit Cards.
- Component status tidak aktif.
- Perubahan belum disimpan.

#### Nilai tidak seperti dijangka
Kemungkinan punca:

- Query menggunakan table yang salah.
- Formula SQL salah.
- Filter query tidak tepat.
- Format nilai tidak sesuai.
:::