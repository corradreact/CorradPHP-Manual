# Form Component

::: info Tujuan

Form Component digunakan untuk membina borang input dalam page. Form membolehkan pengguna memasukkan, mengemaskini atau memaparkan data berdasarkan konfigurasi yang ditetapkan.

Dalam Page Studio, form biasanya digunakan untuk proses seperti:

- Insert rekod baharu
- Update rekod sedia ada
- Register data
- Edit maklumat
- View maklumat dalam bentuk form
- Generate field daripada table database
- Menambah button control seperti Save, Submit, Reset atau Back.

### Jenis Form Component
Terdapat dua jenis form component yang biasa digunakan:
| Jenis Form       | Kegunaan                                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| Form (1 Column)  | Sesuai untuk form ringkas atau form yang ingin dipaparkan secara menegak satu ruangan.              |
| Form (2 Columns) | Sesuai untuk form yang mempunyai banyak field dan perlu disusun dalam dua lajur supaya lebih kemas. |

:::
---

### Langkah-langkah Menambah Form Component

::: tip Langkah 1: Klik Add Component

1. Buka menu **Halaman & Navigasi.**
2. Klik **Page Studio**.
3. Pilih page yang ingin dikemaskini.
4. Klik butang **+ Component** pada toolbar atas.

:::

::: tip Langkah 2: Isi Title dan Pilih Type

5. Paparan pop-up **+ Component** akan dipaparkan.
6. Masukkan nama form pada ruangan **Title**.

**Contoh : Staff Details** atau **Customer Information**

7. Pada ruangan Type, pilih salah satu jenis form:
**Form (1 Column) atau Form (2 Columns).**

8. Klik butang **Add**.

:::


::: tip Langkah 3: Semak Tetapan Form.

9. Selepas form berjaya ditambah, panel tetapan form akan dipaparkan di sebelah kanan.
10. Semak bahagian **GENERAL**.

| Ruangan | Penerangan                                                  |
| ------- | ----------------------------------------------------------- |
| Title   | Nama form yang dipaparkan dalam Page Studio.                |
| Name    | Nama teknikal form dalam sistem.                            |
| Type    | Jenis form, sama ada Form (1 Column) atau Form (2 Columns). |
| Status  | Menentukan sama ada form aktif atau tidak aktif.            |
:::

### Layout / Mode
::: info Layout / Mode

Bahagian Layout / Mode digunakan untuk mengawal cara form dipaparkan dalam page.


| Tetapan                             | Kegunaan                                                            |
| ----------------------------------- | ------------------------------------------------------------------- |
| Modal / Dialog                      | Menentukan sama ada form dipaparkan dalam bentuk modal atau dialog. |
| SM / MD / LG / XL / Max             | Menentukan saiz modal jika form dipaparkan sebagai modal.           |
| Half / 1/3 / Full                   | Menentukan lebar form dalam layout page.                            |
| No Border / Shadow / Flat / Compact | Mengawal gaya paparan card form.                                    |
| Hidden                              | Menyembunyikan form daripada paparan.                               |
| No Print                            | Form tidak dipaparkan semasa print.                                 |
| Print Only                          | Form hanya dipaparkan semasa print.                                 |
:::

### Data Binding Dengan Database

::: info Apa itu Data Binding

- Data binding  boleh digunakan untuk generate field secara automatik berdasarkan kolum yang terdapat dalam table database

Secara ringkas:
**Form Component → Data Binding → Table Database → Field Dalam Form**

:::
---
### Tetapan Data Binding
::: info Keterangan Data Binding
| Ruangan                         | Penerangan                                                                 |
| ------------------------------- | -------------------------------------------------------------------------- |
| Connection                      | Sambungan database yang digunakan.                                         |
| Database                        | Nama database yang digunakan.                                              |
| Binding Type                    | Jenis binding, contohnya Table.                                            |
| Source                          | Table atau view yang menjadi sumber data form.                             |
| Auto-Generate Fields from Table | Membina field secara automatik berdasarkan kolum dalam table yang dipilih. |


:::

---

### Cara Menggunakan Data Binding

::: tip Langkah Data Binding

1. Klik form component yang ingin dikonfigurasikan.

2. Pada panel kanan, pergi ke bahagian **DATA BINDING.**

3. Pilih :

| Tetapan      | Nilai          |
| ------------ | -------------- |
| Connection   | LOCALHOST      |
| Database     | corrad_example |
| Binding Type | Table          |
| Source       | ex_activity    |


4. Klik butang **Auto-Generate Fields from Table** jika ingin sistem membina field secara automatik daripada table tersebut.
5. Semak field yang telah dijana dalam form.
6. Padam field yang tidak diperlukan.
7. Tetapkan validation seperti **Required atau Read Only** jika perlu.
8. Klik **Save**.

----

### Auto-Generate Fields from Table

::: info Fungsi Auto-Generate Fields

Butang Auto-Generate Fields from Table digunakan untuk menjana field dalam form berdasarkan kolum yang terdapat dalam table database.

Contohnya, jika table mempunyai kolum berikut:

| Kolum Database |
| -------------- |
| CUSTID         |
| FULL_NAME      |
| IC_NO          |
| EMAIL          |
| PHONE          |

Sistem boleh menjana field form berdasarkan kolum tersebut secara automatik.

:::

::: warning Nota Auto-Generate

1. Pastikan Connection, 2. 2. Database dan Source telah dipilih sebelum klik Auto-Generate.
3. Semak field yang perlu ditetapkan sebagai Required, Read Only atau Primary Key.
:::

---
### Form Behaviour

::: info Apa Itu Form Behaviour?

Form Behaviour menentukan cara form berfungsi apabila user menggunakan form tersebut.

Bahagian ini biasanya digunakan untuk menetapkan sama ada form digunakan untuk insert, update, atau proses lain.

:::

oo ni eh?

sekarang saya ada isu saya dah install node.js tapi kenapa keluarni?


ni je

kenapa sampai 4k weh

ok now kat vercel aku kena buat apa? sbb guna link domains 404

ok skrg kan aku ada framework and aku nak buat manual untuk bendani supaya user faham macam mana nak guna dalam manual skrg copilot buat dia satu index.html je tapi kalau noleh aku nak dia pecahkan sama macam menu yang aku ss ni and aku nak guna markdown supaya lebih kemas macam mana aku nak prompt dkt copilot 

cemana nk fix

apa puncani cemana saya nak fix


tgh loading eh


Pasted code.ts
TypeScript
bkk komen lepastu ubah jadi macam gamabr 

 {
        text: 'Data & Monitoring',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/data-monitoring/overview' }
        ]
      },

buatkan menu jap

kau boleh bagi idea tak macam mana aku nak buat steps by step dalam page studo ni sbb dalam ni macam macam boleh buat and user boleh create satu page yang akan berfungsi crud boleh create dashboard report etc . so aku tak idea cemana nak buat manual untuk page studio ni sbb dalamni dari a-z boleh untuk frontend kalau backend still need bl


## Senario 1: Membina Menu 

Gunakan langkah ini apabila anda ingin membuat menu baharu dalam sistem.

### Langkah-langkah

1. Buka menu **Halaman & Navigasi**.
2. Klik **Page Studio**.
3. Klik button **New**.
![ButtonNew](/image/pagestudio/new.png)
4. Masukkan maklumat menu/page di paparan pop-up **New Menu**.
5. Isi maklumat yang diperlukan seperti:
   - Title *
   - Parent Menu 
6. Susun page mengikut keperluan.
7. Klik **Save**.
8. Pastikan page baharu muncul dalam senarai menu/page di panel kiri.

### Screenshot

[Insert screenshot here]

### Hasil Yang Dijangka

Page baharu berjaya dibuat dan dipaparkan dalam senarai menu/page.

### Nota Penting

- Pastikan nama page jelas dan mudah difahami.
- Gunakan breadcrumb yang sesuai supaya user tahu lokasi page tersebut.
- Jika page tidak muncul dalam menu, semak status page dan permission user.

---

buatkan manual untuk create menu

image.png
image.png
buatkan manual untuk page pula

image.png
image.png
kenapa yang lama punya tulisan dia biru kuning, yang second pic tu baru tulisan dia hitam je kat mana aku nak ubah

tulisan aku still tak kuninh

cemana aku nak kemaskan eh langkah 2 ni


::: tip Langkah 2
4. Jika menu tersebut belum mempunyai page, sistem akan memaparkan mesej:
![Menu belum mempunyai page](/image/pagestudio/no-create-page.png)
No page for this menu.

5. Klik button **Create Page**
6. Selepas page berjaya dibuat, panel kanan akan memaparkan bahagian Menu & Page.
7. Semak maklumat pada bahagian MENU seperti:
- Menu Title
- Status
- Icon
- Notes
8. Semak maklumat pada bahagian PAGE seperti:

- Page Title
- Breadcrumbs
- Description
- Pre-Process
- Post-Process
- CSS Class

9. Pastikan Page Title dan Breadcrumbs adalah betul.
![Tetapan Menu dan Page](/image/pagestudio/menu-page-settings.png)

10. Jika perlu, masukkan penerangan ringkas pada ruangan Description.

11. Pilih CSS Class yang sesuai mengikut jenis page.
![Pilihan CSS Class Page](/image/pagestudio/css-class-options.png)

Contoh pilihan:

- Narrow
- Wide
- No Padding
- Compact
- Centered
- Dashboard

image.png
image.png
image.png
image.png
image.png
image.png
ok skrg buatkan manual untuk create component dlaam page.. kau ikut design2 sblmni pun nice 
buat senang user faham 
btw banyak sangat component item aku ena tunjuk kau ada idea tak baca mana nak buat?

maksudnya macam mana ni?

image.png
image.png
image.png
image.png
image.png
image.png
image.png
buatkan manual untuk control 

image.png
image.png
image.png
image.png
image.png
image.png
image.png
image.png
tolong buat manual untuk create field dalam form
https://php84.corrad.my/manual/new_v4/page_studio_docs.html

1. user boleh tekan tambah dalam form tu
2. kau tengoklah link tu bahagian field types tu ada apa untuk aku isi dalam manualS
3. Lepas kita field tertentu user boleh buat data binding with database which is all the data will get from lookup source aku tak tahu cemana nak explain. 

4. kalau boleh buat yang mudah faham sebab type field terlalu banyak 
5

tambah sikit explain preview tu


::: tip Contoh 2: DB Table
Gunakan DB Table jika pilihan perlu diambil daripada jadual database.
Contoh: 
| Tetapan      | Contoh     |
| ------------ | ---------- |
| Table        | DEPARTMENT |
| ID Column    | DEPT_ID    |
| Label Column | DEPT_NAME  |

- Pengguna akan melihat nama department, tetapi sistem akan menyimpan DEPT_ID ke dalam database.

:::

image.png
image.png
image.png
image.png
image.png
image.png
image.png
image.png
au rasa add component akupun mcm kena pecah sebab bila bila jenis type akan keluar field yang bebeza, tapi aku taknak la explain satu satu component tu ada type apa aku rasa boleh tunjuk untuk report, datatable ngn form and chart sbb banyak jenis chart 

dalam reprt pulak ada banyak 

tolong buat explaination lebih sikit binding tu  how to use

Thought for 4s
Boleh. Ini section Binding yang lebih jelas untuk awak masukkan dalam manual Control. Copy paste dekat bahagian component-control/binding.md atau dalam manual control awak.

# Binding Control

::: info Tujuan

Binding digunakan untuk menghubungkan control dengan component atau menentukan arah tindakan selepas control ditekan.

Dalam konteks control, binding membantu sistem mengetahui:

- Component mana yang perlu diproses oleh control.
- Ke mana user perlu dibawa selepas control ditekan.
- Sama ada control tersebut hanya untuk navigasi, simpan data, submit, delete atau tindakan lain.

Bahagian Binding
::: info Keterangan Binding

Pada panel tetapan control, bahagian BINDING biasanya mempunyai ruangan berikut:

Ruangan	Penerangan
Component	Component yang akan dihubungkan dengan control tersebut.
Redirect URL	URL atau page tujuan selepas control ditekan.
:::

Component
::: tip Apa Itu Component Dalam Binding?

Ruangan Component digunakan untuk memilih component yang akan diproses oleh control.

Contohnya, jika control ialah Save Button, sistem perlu tahu form mana yang perlu disimpan. Jadi, control tersebut perlu dihubungkan kepada component form yang betul.

Contoh:

Control	Component	Maksud
Save Button	Customer Form	Simpan data daripada Customer Form.
Submit Button	Application Form	Submit data daripada Application Form.
Reset Button	Customer Form	Reset input dalam Customer Form.
Delete Button	Customer Form	Padam rekod yang berkaitan dengan Customer Form.
:::

Bila Perlu Pilih Component?
::: info Panduan Ringkas

Pilih component apabila control perlu menjalankan tindakan terhadap component tertentu.

Control Type	Perlu Pilih Component?	Sebab
Save Button	Ya	Untuk simpan data daripada form yang dipilih.
Reset Button	Ya	Untuk reset field dalam form yang dipilih.
Submit Button	Ya	Untuk submit data daripada form yang dipilih.
Delete Button	Ya	Untuk padam rekod berkaitan form yang dipilih.
Back Button	Tidak wajib	Biasanya hanya kembali ke page sebelumnya.
Print Button	Tidak wajib	Biasanya mencetak page semasa.
PDF Button	Bergantung	Pilih component/report jika output berkaitan component tertentu.
CSV Button	Bergantung	Pilih datatable/report jika export data daripada component tertentu.
New Popup - GET	Bergantung	Boleh digunakan bersama Redirect URL atau parameter.
New Popup - POST	Ya, jika membawa data form	Digunakan jika pop-up perlu menerima data daripada component.
:::

Cara Menggunakan Component Binding
::: tip Langkah-langkah

Klik control yang ingin dikonfigurasikan.

Pada panel kanan, pergi ke bahagian BINDING.

Pada ruangan Component, pilih component yang berkaitan.

Contoh:

Customer Form
Pastikan component yang dipilih adalah component yang betul.

Klik Save.

Klik Preview untuk menguji control.

:::

Contoh 1: Save Button Dengan Form
::: info Contoh Save Button

Contoh situasi:

User ingin menambah butang Save untuk menyimpan data dalam form.

Tetapan control:

Tetapan	Nilai
Label	Save
Type	Save Button
Position	Right
Component	Customer Form
Maksudnya:

Apabila user klik butang Save, sistem akan mengambil data daripada Customer Form dan menyimpannya berdasarkan konfigurasi form tersebut.

:::

Contoh 2: Reset Button Dengan Form
::: info Contoh Reset Button

Contoh situasi:

User ingin menambah butang Reset untuk mengosongkan semula field dalam form.

Tetapan control:

Tetapan	Nilai
Label	Reset
Type	Reset Button
Position	Right
Component	Customer Form
Maksudnya:

Apabila user klik butang Reset, sistem akan reset field dalam Customer Form kepada nilai asal atau kosong.

:::

Contoh 3: Back Button Tanpa Component
::: info Contoh Back Button

Contoh situasi:

User ingin menambah butang Back untuk kembali ke page sebelumnya.

Tetapan control:

Tetapan	Nilai
Label	Back
Type	Back Button
Position	Right
Component	None
Maksudnya:

Butang Back tidak semestinya perlu dihubungkan kepada component kerana fungsinya hanya untuk membawa user kembali ke page sebelumnya.

:::

Redirect URL
::: tip Apa Itu Redirect URL?

Ruangan Redirect URL digunakan jika control perlu membawa user ke page atau URL tertentu selepas ditekan.

Contoh penggunaan:

Selepas simpan data, user dibawa ke page senarai.

Selepas submit, user dibawa ke page confirmation.

Butang custom digunakan untuk buka page lain.

Butang pop-up digunakan untuk buka page tertentu.

:::

Contoh Redirect URL
::: info Contoh

Tujuan	Contoh Redirect URL
Pergi ke senarai customer	/customer/list
Pergi ke dashboard	/dashboard
Pergi ke page detail	/customer/detail?id={id}
Buka page berdasarkan parameter	/activity/view?id={activity_id}
Contoh:

/customer/list
Maksudnya:

Selepas control ditekan, user akan dibawa ke page Customer List.

:::

Component vs Redirect URL
::: info Perbezaan Component dan Redirect URL

Tetapan	Fungsi
Component	Menentukan component mana yang perlu diproses oleh control.
Redirect URL	Menentukan page atau URL tujuan selepas control ditekan.
Contoh mudah:

Situasi	Component	Redirect URL
Simpan form sahaja	Pilih form	Boleh kosong
Simpan form kemudian pergi ke list page	Pilih form	Isi URL list page
Back ke page sebelumnya	None	Boleh kosong
Pergi ke page tertentu	None	Isi URL tujuan
Submit form dan pergi ke confirmation page	Pilih form	Isi URL confirmation page
:::

Aliran Kerja Binding
::: info Aliran Ringkas

Contoh untuk Save Button:

User klik Save
↓
Control semak component yang dipilih
↓
Sistem ambil data daripada form tersebut
↓
Data disimpan ke database
↓
Jika Redirect URL diisi, user dibawa ke page tujuan
:::

Nota Penting
::: warning Nota

Jika control melibatkan form, pastikan ruangan Component dipilih dengan betul.

Jika Component dibiarkan None, control mungkin tidak tahu form mana yang perlu diproses.

Untuk Save Button, Submit Button, Reset Button dan Delete Button, biasanya component perlu dipilih.

Untuk Back Button, component biasanya tidak wajib dipilih.

Gunakan Redirect URL hanya jika user perlu dibawa ke page lain selepas control ditekan.

Selepas mengubah binding, klik Save dan uji melalui Preview.

:::

Isu Biasa
::: danger Isu Biasa

Save Button tidak menyimpan data
Kemungkinan punca:

Component tidak dipilih.

Component yang dipilih bukan form yang betul.

Field dalam form belum dihubungkan kepada DB Column.

Backend logic atau proses simpan belum dikonfigurasikan.

Reset Button tidak berfungsi
Kemungkinan punca:

Component tidak dipilih.

Component yang dipilih salah.

Form belum mempunyai field yang boleh direset.

Redirect tidak berlaku
Kemungkinan punca:

Redirect URL kosong.

URL yang dimasukkan salah.

Parameter dalam URL tidak wujud.

Permission user tidak mencukupi untuk membuka page tujuan.

Control memproses form yang salah
Kemungkinan punca:

Component binding dipilih kepada component yang salah.

Page mempunyai lebih daripada satu form dan control tidak dihubungkan kepada form yang betul.

:::

:::

Ayat paling mudah untuk explain kat user:

> **Component** digunakan untuk beritahu sistem form mana yang perlu diproses. **Redirect URL** pula digunakan jika user perlu dibawa ke page lain selepas butang ditekan. Contohnya, Save Button perlu pilih component form supaya sistem tahu data form mana yang hendak disimpan.

image.png
image.png
image.png
Batkan manual untuk chart
1. Add component chart
2. Title and Type

Boleh. Copy paste manual ni dalam file chart component, contoh:

docs/pages-navigation/page-studio/component-page/chart-component.md
# Chart Component

::: info Tujuan

Chart Component digunakan untuk memaparkan data dalam bentuk carta seperti bar chart, line chart, pie chart, doughnut chart dan area chart.

Gunakan component ini apabila page perlu menunjukkan ringkasan data, trend, perbandingan nilai atau visual report.

Bila Perlu Guna Chart Component
Gunakan Chart Component apabila anda ingin:

Memaparkan data dalam bentuk carta

Membina dashboard ringkas

Menunjukkan trend bulanan atau tahunan

Membandingkan jumlah antara kategori

Memaparkan pecahan data dalam bentuk peratusan

Menyediakan visual report yang lebih mudah difahami

Contoh penggunaan:

Situasi	Chart Type Yang Sesuai
Trend jualan bulanan	Line
Jumlah item mengikut kategori	Bar
Pecahan status rekod	Pie
Pecahan peratusan yang lebih moden	Doughnut
Trend dengan kawasan berwarna	Area
Langkah-langkah Menambah Chart Component
::: tip Langkah 1: Klik Add Component

Buka menu Halaman & Navigasi.

Klik Page Studio.

Pilih page yang ingin dikemaskini.

Klik butang Component pada toolbar atas.


:::

::: tip Langkah 2: Isi Title dan Pilih Type

Paparan pop-up Add Component akan dipaparkan.

Masukkan nama component pada ruangan Title.

Contoh:

Chart
atau:

Monthly Revenue Trend
Pada ruangan Type, pilih:

Chart
Klik butang Add.


:::

::: tip Langkah 3: Semak Tetapan Chart

Selepas component berjaya ditambah, panel tetapan chart akan dipaparkan di sebelah kanan.

Semak bahagian GENERAL.

Ruangan	Penerangan
Title	Nama component yang dipaparkan dalam Page Studio.
Name	Nama teknikal component dalam sistem.
Type	Jenis component. Untuk carta, pilih Chart.
Status	Menentukan sama ada component aktif atau tidak aktif.

:::

Tetapan Layout / Mode
::: info Layout / Mode

Bahagian Layout / Mode digunakan untuk mengawal cara chart dipaparkan dalam page.

Tetapan	Kegunaan
Modal / Dialog	Menentukan sama ada chart dipaparkan dalam bentuk modal/dialog.
SM / MD / LG / XL / Max	Menentukan saiz paparan chart jika menggunakan modal.
Half / 1/3 / Full	Menentukan lebar chart dalam layout page.
No Border / Shadow / Flat / Compact	Mengawal gaya card atau kotak chart.
Hidden	Menyembunyikan component daripada paparan.
No Print	Tidak memaparkan chart semasa print.
Print Only	Chart hanya dipaparkan semasa print.
:::

SQL Query
::: info SQL Query

Bahagian SQL Query digunakan untuk mengambil data yang akan dipaparkan dalam chart.

Chart memerlukan data dalam bentuk column tertentu. Biasanya, query perlu menyediakan:

Column label, contohnya bulan atau kategori

Column value, contohnya jumlah atau bilangan

Contoh query:

SELECT 
    DATE_FORMAT(sale_date, '%Y-%m') AS Month,
    SUM(total) AS Revenue
FROM sales
GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY Month;
Dalam contoh ini:

Column	Maksud
Month	Label yang akan dipaparkan pada chart.
Revenue	Nilai yang akan dipaparkan pada chart.
:::

::: warning Nota SQL Query

Pastikan query menghasilkan column yang jelas untuk label dan nilai.

Nama column dalam query perlu sama dengan tetapan Label Column dan Value Columns.

Jika query salah, chart mungkin tidak memaparkan data.

Gunakan Preview atau semak query terlebih dahulu sebelum simpan.

:::

Chart Configuration
::: info Chart Configuration

Bahagian Chart Configuration digunakan untuk menetapkan jenis chart dan cara data dipaparkan.

Ruangan	Penerangan
Chart Type	Jenis carta yang ingin digunakan.
Title	Tajuk chart yang dipaparkan kepada pengguna.
Height (px)	Ketinggian chart dalam pixel.
Label Column	Column yang digunakan sebagai label pada chart.
Value Columns	Column nilai yang akan dipaparkan dalam chart.
Series Labels	Nama siri data yang dipaparkan dalam chart.
Colors	Warna chart dalam format hex.
Show Legend	Memaparkan legend chart.
Show Data Labels	Memaparkan nilai pada chart.
Horizontal Bar	Menukar bar chart kepada paparan horizontal.
Stacked	Menjadikan data dipaparkan secara bertingkat.
Auto-refresh	Menetapkan masa refresh automatik dalam saat.

:::

Jenis Chart
::: info Chart Type

Chart Type	Kegunaan
Bar	Sesuai untuk membandingkan nilai antara kategori.
Line	Sesuai untuk menunjukkan trend mengikut masa.
Pie	Sesuai untuk menunjukkan pecahan data.
Doughnut	Sama seperti Pie, tetapi paparan lebih moden.
Area	Sesuai untuk trend yang ingin dipaparkan dengan kawasan berwarna.

:::

Contoh Tetapan Chart
::: tip Contoh: Monthly Revenue Trend

Contoh ini digunakan untuk memaparkan trend revenue bulanan.

Tetapan	Nilai
Title	Monthly Revenue Trend
Type	Chart
Chart Type	Line
Height	300
Label Column	Month
Value Columns	Revenue
Series Labels	Total
Show Legend	Ya, jika ada lebih daripada satu series
Show Data Labels	Pilihan, jika mahu paparkan nilai pada chart
Contoh SQL Query:

SELECT 
    DATE_FORMAT(sale_date, '%Y-%m') AS Month,
    SUM(total) AS Revenue
FROM sales
GROUP BY DATE_FORMAT(sale_date, '%Y-%m')
ORDER BY Month;
Maksudnya, sistem akan mengambil jumlah revenue mengikut bulan dan memaparkannya dalam bentuk line chart.

:::

Contoh: Bar Chart Mengikut Status
::: tip Contoh Bar Chart

Contoh ini digunakan untuk memaparkan jumlah rekod mengikut status.

Tetapan	Nilai
Title	Record by Status
Type	Chart
Chart Type	Bar
Label Column	Status
Value Columns	Total
Series Labels	Total
Contoh SQL Query:

SELECT 
    status AS Status,
    COUNT(*) AS Total
FROM customer
GROUP BY status
ORDER BY status;
Maksudnya, sistem akan mengira jumlah rekod mengikut status dan memaparkannya dalam bentuk bar chart.

:::

Display Condition
::: info Display Condition

Bahagian Display Condition digunakan untuk menentukan bila chart perlu dipaparkan.

Contoh:

Tetapan	Maksud
Always visible	Chart sentiasa dipaparkan.
Show When	Chart dipaparkan berdasarkan syarat tertentu.
Untuk penggunaan biasa, pilih:

Always visible
:::

Display
::: info Display

Bahagian Display digunakan untuk mengawal kedudukan dan keadaan component dalam page.

Ruangan	Penerangan
Position	Kedudukan chart dalam page.
Collapsible	Menentukan sama ada chart boleh dibuka dan ditutup.
:::

Triggers
::: info Triggers

Triggers digunakan jika chart perlu menjalankan tindakan tambahan seperti refresh data, memanggil API atau menjalankan business logic.

Untuk chart biasa, triggers tidak wajib digunakan.

:::

Hasil Yang Dijangka
::: info Hasil Yang Dijangka

Selepas chart component dikonfigurasikan:

Chart berjaya ditambah ke dalam page.

Chart memaparkan data berdasarkan SQL Query.

Jenis chart boleh dipilih seperti Bar, Line, Pie, Doughnut atau Area.

Chart boleh digunakan untuk dashboard, report ringkas atau visual data.

User boleh melihat data dengan lebih mudah melalui paparan visual.

:::

Nota
::: warning Nota

Pastikan Type dipilih sebagai Chart semasa menambah component.

Pastikan SQL Query menghasilkan column yang sesuai untuk chart.

Label Column mesti sama dengan nama column label dalam query.

Value Columns mesti sama dengan nama column nilai dalam query.

Gunakan chart type yang sesuai dengan tujuan data.

Jangan gunakan terlalu banyak chart dalam satu page supaya paparan tidak terlalu berat.

Klik Save selepas selesai konfigurasi.

Klik Preview untuk menguji paparan chart.

:::

Isu Biasa
::: danger Isu Biasa

Chart tidak keluar dalam page
Kemungkinan punca:

Component status tidak aktif.

SQL Query kosong atau salah.

Label Column tidak sama dengan nama column dalam query.

Value Columns tidak sama dengan nama column dalam query.

Tiada data dipulangkan daripada query.

Chart keluar tetapi tiada data
Kemungkinan punca:

Query tidak menghasilkan rekod.

Filter dalam query terlalu ketat.

Nama column tidak betul.

Database connection bermasalah.

Chart Type tidak sesuai
Kemungkinan punca:

Data kategori digunakan untuk Line chart.

Data trend masa digunakan untuk Pie chart.

Terlalu banyak kategori dalam Pie atau Doughnut chart.

Cadangan:

Guna Line untuk trend masa.

Guna Bar untuk perbandingan kategori.

Guna Pie atau Doughnut untuk pecahan ringkas.

Guna Area untuk trend yang ingin dipaparkan dengan kawasan berwarna.

:::

Cadangan Screenshot
::: info Cadangan Screenshot

Untuk manual ini, screenshot yang sesuai adalah:

Pop-up Add Component dengan Title dan Type Chart.

Panel kanan bahagian GENERAL untuk Chart Component.

Dropdown Chart Type.

Bahagian Chart Configuration.

Contoh chart selepas klik Preview.

:::

:::

Untuk manual user biasa, bahagian paling penting chart ialah **SQL Query**, **Chart Type**, **Label Column**, dan **Value Columns**. Yang lain boleh dianggap tetapan tambahan.

image.png
image.png
image.png
image.png
1. buat manual untuk add component form 1 and form 2
2. user can use data binding to get the field details of form
3.  user boleh add controls juga and add  mesej
4. basically form ni boleh insert update 

Boleh. Copy paste manual ni dalam file:

docs/pages-navigation/page-studio/component-page/form-component.md
# Form Component

::: info Tujuan

Form Component digunakan untuk membina borang input dalam page. Form membolehkan pengguna memasukkan, mengemaskini atau memaparkan data berdasarkan konfigurasi yang ditetapkan.

Dalam Page Studio, form biasanya digunakan untuk proses seperti:

- Insert rekod baharu
- Update rekod sedia ada
- Register data
- Edit maklumat
- View maklumat dalam bentuk form
- Generate field daripada table database
- Menambah button control seperti Save, Submit, Reset atau Back

Jenis Form Component
Terdapat dua jenis form component yang biasa digunakan:

Jenis Form	Kegunaan
Form (1 Column)	Sesuai untuk form ringkas atau form yang ingin dipaparkan secara menegak satu ruangan.
Form (2 Columns)	Sesuai untuk form yang mempunyai banyak field dan perlu disusun dalam dua lajur supaya lebih kemas.
Bila Perlu Guna Form (1 Column)
::: info Form 1 Column

Gunakan Form (1 Column) apabila form mempunyai field yang sedikit atau memerlukan paparan yang lebih mudah dibaca.

Contoh penggunaan:

Login form

Register form ringkas

Profile form

Search form

Form maklumat asas

Form yang mempunyai field panjang seperti alamat atau catatan

:::

Bila Perlu Guna Form (2 Columns)
::: info Form 2 Columns

Gunakan Form (2 Columns) apabila form mempunyai banyak field dan perlu disusun supaya page tidak terlalu panjang.

Contoh penggunaan:

Staff details

Customer information

Application form

Transaction form

Form yang mempunyai banyak maklumat seperti email, phone, department, position dan status

:::

Langkah-langkah Menambah Form Component
::: tip Langkah 1: Klik Add Component

Buka menu Halaman & Navigasi.

Klik Page Studio.

Pilih page yang ingin dikemaskini.

Klik butang Component pada toolbar atas.


:::

::: tip Langkah 2: Isi Title dan Pilih Type

Paparan pop-up Add Component akan dipaparkan.

Masukkan nama form pada ruangan Title.

Contoh:

Staff Details
atau:

Customer Information
Pada ruangan Type, pilih salah satu jenis form:

Form (1 Column)
atau:

Form (2 Columns)
Klik butang Add.


:::

::: tip Langkah 3: Semak Tetapan Form

Selepas form berjaya ditambah, panel tetapan form akan dipaparkan di sebelah kanan.

Semak bahagian GENERAL.

Ruangan	Penerangan
Title	Nama form yang dipaparkan dalam Page Studio.
Name	Nama teknikal form dalam sistem.
Type	Jenis form, sama ada Form (1 Column) atau Form (2 Columns).
Status	Menentukan sama ada form aktif atau tidak aktif.

:::

Layout / Mode
::: info Layout / Mode

Bahagian Layout / Mode digunakan untuk mengawal cara form dipaparkan dalam page.

Tetapan	Kegunaan
Modal / Dialog	Menentukan sama ada form dipaparkan dalam bentuk modal atau dialog.
SM / MD / LG / XL / Max	Menentukan saiz modal jika form dipaparkan sebagai modal.
Half / 1/3 / Full	Menentukan lebar form dalam layout page.
No Border / Shadow / Flat / Compact	Mengawal gaya paparan card form.
Hidden	Menyembunyikan form daripada paparan.
No Print	Form tidak dipaparkan semasa print.
Print Only	Form hanya dipaparkan semasa print.
:::

Data Binding
::: info Apa Itu Data Binding?

Data Binding digunakan untuk menghubungkan form dengan database. Melalui data binding, sistem boleh mengetahui table mana yang digunakan untuk mengambil, menyimpan atau mengemaskini data.

Data binding juga boleh digunakan untuk generate field secara automatik berdasarkan kolum yang terdapat dalam table database.

Secara ringkas:

Form Component → Data Binding → Table Database → Field Dalam Form
:::

Tetapan Data Binding
::: info Keterangan Data Binding

Ruangan	Penerangan
Connection	Sambungan database yang digunakan.
Database	Nama database yang digunakan.
Binding Type	Jenis binding, contohnya Table.
Source	Table atau view yang menjadi sumber data form.
Auto-Generate Fields from Table	Membina field secara automatik berdasarkan kolum dalam table yang dipilih.
:::

Cara Menggunakan Data Binding
::: tip Langkah Data Binding

Klik form component yang ingin dikonfigurasikan.

Pada panel kanan, pergi ke bahagian DATA BINDING.
| Tetapan      | Nilai          |
| ------------ | -------------- |
| Connection   | LOCALHOST      |
| Database     | corrad_example |
| Binding Type | Table          |
| Source       | customer       |

Klik butang Auto-Generate Fields from Table jika ingin sistem membina field secara automatik daripada table tersebut.

Semak field yang telah dijana dalam form.

Klik Save.


:::

Auto-Generate Fields from Table
::: info Fungsi Auto-Generate Fields

Butang Auto-Generate Fields from Table digunakan untuk menjana field dalam form berdasarkan kolum yang terdapat dalam table database.

Contohnya, jika table mempunyai kolum berikut:

Kolum Database
STAFFID
STAFF_NO
FULL_NAME
IC_NO
EMAIL
PHONE
DEPTID
POSITION
JOIN_DATE
STATUS
Sistem boleh menjana field form berdasarkan kolum tersebut secara automatik.

:::

::: warning Nota Auto-Generate

Pastikan Connection, 
Database dan Source telah dipilih sebelum klik Auto-Generate.

Field yang dijana masih perlu disemak semula.

Pastikan field type yang dijana adalah sesuai.

Semak field yang perlu ditetapkan sebagai Required, Read Only atau Primary Key.

Padam field yang tidak diperlukan supaya form lebih kemas.

Tukar label field supaya lebih mudah difahami oleh user.

:::

Form Behaviour
::: info Apa Itu Form Behaviour?

Form Behaviour menentukan cara form berfungsi apabila user menggunakan form tersebut.

Bahagian ini biasanya digunakan untuk menetapkan sama ada form digunakan untuk insert, update, atau proses lain.

:::

### Form Mode

::: info Form Mode

**Form Mode** menentukan tujuan form tersebut digunakan.
| Form Mode              | Kegunaan                                                        |
| ---------------------- | --------------------------------------------------------------- |
| Insert Only / Register | Digunakan untuk menambah rekod baharu sahaja.                   |
| Update / Edit          | Digunakan untuk mengemaskini rekod sedia ada.                   |
| Insert & Update        | Digunakan untuk form yang boleh menambah dan mengemaskini data. |

:::

---

### Success Action

::: info Success Action

Success Action menentukan apa yang berlaku selepas form berjaya disimpan atau diproses.

Contoh pilihan yang biasa digunakan:

| Success Action            | Kegunaan                                       |
| ------------------------- | ---------------------------------------------- |
| Notification + Reset Form | Papar mesej berjaya dan kosongkan semula form. |
| Notification Only         | Papar mesej berjaya sahaja.                    |
| Redirect to URL           | Bawa user ke page lain selepas berjaya.        |
| Modal Popup               | Tutup modal selepas form berjaya diproses.     |

:::

---

### Success Message

::: info Success Message

Success Message ialah mesej yang dipaparkan kepada user selepas form berjaya diproses.

**Contoh: CONFIRM_MESSAGE - Saya pasti**

---

### Add Form Controls

::: info Add Form Controls

Butang Add Form Controls digunakan untuk menambah control secara lebih cepat kepada form.

Control yang biasa digunakan untuk form ialah:

| Control       | Kegunaan                                 |
| ------------- | ---------------------------------------- |
| Save Button   | Menyimpan data form.                     |
| Delete Button | Memadam rekod, jika dibenarkan.          |

:::

::: tip Langkah Menambah Form Controls

1. Klik form component.
2. Pergi ke bahagian **FORM BEHAVIOUR**.
3. Klik butang **Add Form Controls**.
4. Sistem akan menambah control yang berkaitan dengan form.
5. Semak control yang telah ditambah pada bahagian Controls / Buttons.
6. Jika perlu, klik control tersebut untuk mengubah label, position atau binding.
7. Klik **Save**.

:::

---
### Processing

::: info Processing

Bahagian Processing digunakan untuk menetapkan proses tambahan sebelum atau selepas form dijalankan.

| Ruangan           | Penerangan                                             |
| ----------------- | ------------------------------------------------------ |
| Pre-Process       | Proses yang dijalankan sebelum form diproses.          |
| Post-Process      | Proses yang dijalankan selepas form diproses.          |
| Post Notification | Mesej atau notifikasi selepas post-process dijalankan. |

:::


---

### Display

::: info Display

Bahagian Display digunakan untuk mengawal paparan form dalam page.

| Ruangan     | Penerangan                                           |
| ----------- | ---------------------------------------------------- |
| Position    | Kedudukan form dalam page.                           |
| Collapsible | Menentukan sama ada form boleh dibuka dan ditutup.   |
| Label Width | Menentukan lebar label untuk semua field dalam form. |
| Text Size   | Menentukan saiz teks untuk semua field dalam form.   |


:::

::: warning Nota
1. Gunakan Form (1 Column) untuk form ringkas.
2. Gunakan Form (2 Columns) untuk form yang mempunyai banyak field.
3. Pastikan Connection, Database dan Source betul sebelum klik Auto-Generate.
4. Semak field yang dijana kerana tidak semua field perlu dipaparkan kepada user.
Pastikan field penting ditetapkan sebagai Required.
5. Gunakan Read Only untuk field yang perlu dipaparkan tetapi tidak boleh diubah.
6. Tambah control seperti Save Button supaya user boleh menyimpan data.
7. Tetapkan Success Message supaya user tahu proses telah berjaya.
8. Klik Save selepas selesai konfigurasi.
9. Klik Preview untuk menguji form.

:::