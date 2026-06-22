# Custom HTML Component

::: info Tujuan

**Custom HTML Component** digunakan untuk memaparkan kandungan khas seperti HTML, CSS atau JavaScript di dalam page component.

Component ini sesuai digunakan apabila paparan yang diperlukan tidak boleh dibuat menggunakan component standard. Custom HTML juga boleh digunakan bersama **PHP Business Logic (BL)** untuk menghasilkan output yang lebih dynamic seperti mengambil data daripada database, memanggil API atau membina layout khas.

:::

::: warning Nota 
Gunakan Custom HTML apabila anda ingin:

- Memaparkan widget khas dalam page.
- Membina layout khas yang tidak tersedia dalam component biasa.
- Memaparkan banner atau marketing section.
- Embed script atau kandungan HTML tertentu.
- Memaparkan kandungan yang dijana melalui PHP Business Logic.
- Menghasilkan paparan dynamic berdasarkan data daripada database atau API.

:::

Contoh penggunaan:
| Situasi          | Kegunaan                                           |
| ---------------- | -------------------------------------------------- |
| Custom widget    | Memaparkan widget khas dalam dashboard.            |
| Marketing banner | Memaparkan banner promosi atau pengumuman.         |
| Bespoke layout   | Membina layout khas mengikut keperluan projek.     |
| Dynamic content  | Memaparkan output daripada PHP BL.                 |
| Embedded script  | Memasukkan script khas yang diperlukan dalam page. |

----

### Custom Path
::: info Custom Path

Bahagian Custom Path digunakan untuk menetapkan path atau file yang akan dipaparkan dalam Custom HTML Component.
| Ruangan    | Penerangan                                                    |
| ---------- | ------------------------------------------------------------- |
| Path / URL | Lokasi file atau path yang mengandungi kandungan custom HTML. |

Contoh:
custom/showcase/showcase_recipes.php
:::
---

### Custom HTML Dengan PHP Business Logic
:::info PHP Business Logic

Custom HTML boleh digunakan bersama PHP Business Logic (BL) untuk menghasilkan kandungan yang lebih dynamic.

Contoh kegunaan PHP BL:

- Ambil data daripada database.
- Papar data berdasarkan user login.
- Papar kandungan berdasarkan parameter page.
- Panggil API luar.
- Jana HTML secara dynamic.
- Papar chart, card, banner atau widget khas.

:::
----

### Contoh Output Yang Sesuai
::: info Contoh Output

Custom HTML boleh digunakan untuk memaparkan output seperti:

| Output          | Contoh                                                 |
| --------------- | ------------------------------------------------------ |
| Card custom     | Kad produk, kad profile atau kad summary.              |
| Banner          | Banner promosi, pengumuman atau header khas.           |
| Widget          | Widget statistik, shortcut atau info ringkas.          |
| Layout khas     | Paparan yang tidak disediakan oleh component standard. |
| Embedded script | Script khas untuk paparan tertentu.                    |

:::
---

::: info Hasil Yang Dijangka

Selepas Custom HTML dikonfigurasikan:

- Component berjaya dipaparkan dalam page.
- Kandungan daripada Path / URL akan dimuatkan.
- HTML, CSS atau JavaScript khas boleh dipaparkan dalam page.
- Kandungan dynamic boleh dijana melalui PHP Business Logic jika diperlukan.
- Component boleh digunakan untuk custom widget, banner, embedded script atau layout khas.

:::
---

::: warning Nota

- Pastikan Type dipilih sebagai Custom HTML.
- Pastikan Path / URL yang dimasukkan adalah betul.
- Jika menggunakan file PHP, pastikan file tersebut wujud dalam lokasi yang betul.
- Pastikan output HTML yang dijana adalah valid dan tidak merosakkan layout page.
- Gunakan Custom HTML hanya jika component standard tidak mencukupi.
- Elakkan script yang terlalu berat kerana boleh memperlahankan page.
- Jika kandungan tidak keluar, semak path, permission dan error pada file yang dipanggil.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji paparan Custom HTML.
:::
---

::: danger Isu Biasa

### Kandungan Custom HTML tidak keluar
Kemungkinan punca:

- Path / URL salah.
- File tidak wujud.
- Permission file tidak mencukupi.
- PHP file mempunyai error.
- Output daripada file kosong.

#### Data dynamic tidak muncul
Kemungkinan punca:

- Query dalam PHP BL salah.
- API tidak dapat diakses.
- Parameter tidak dihantar.
- Session data tidak wujud.
- Business Logic mempunyai error.

### Page jadi rosak selepas Custom HTML dimasukkan
Kemungkinan punca:

- HTML tidak lengkap atau tag tidak ditutup.
- CSS custom mengganggu layout utama.
- JavaScript mempunyai error.
- Script terlalu berat atau conflict dengan sistem.

:::