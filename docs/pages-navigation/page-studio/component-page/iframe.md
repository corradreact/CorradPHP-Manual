# iFrame Component

::: info Tujuan

**iFrame Component** digunakan untuk memaparkan halaman luar atau URL tertentu di dalam page sistem. Component ini membolehkan pengguna embed kandungan daripada external website, BI tools, dashboard, map, portal luar atau page internal tanpa membuka tab baru.

URL boleh dimasukkan secara static atau dijana secara dynamic menggunakan parameter page, session data atau Business Logic jika diperlukan.

:::

::: warning Nota 
Gunakan iFrame apabila anda ingin:

- Memaparkan external website dalam page.
- Embed dashboard daripada sistem lain.
- Memaparkan map seperti OpenStreetMap atau Google Map embed.
- Memaparkan BI report atau third-party dashboard.
- Memaparkan portal luar tanpa keluar daripada sistem.
- Memaparkan page internal dalam bentuk embedded view.
:::

Contoh penggunaan:
| Situasi         | Kegunaan                                                   |
| --------------- | ---------------------------------------------------------- |
| BI Dashboard    | Embed dashboard daripada Power BI, Tableau atau tool lain. |
| Map             | Papar lokasi menggunakan OpenStreetMap atau map embed.     |
| External Portal | Papar sistem luar dalam page.                              |
| Report Viewer   | Embed report daripada URL tertentu.                        |
| Internal Page   | Papar page lain dalam sistem sebagai embedded content.     |

----

::: info Custom Path

Bahagian Custom Path digunakan untuk menetapkan URL atau path yang ingin dipaparkan dalam iFrame.
| Ruangan       | Penerangan                                       |
| ------------- | ------------------------------------------------ |
| Path / URL    | URL atau path yang akan dipaparkan dalam iFrame. |
| Iframe Width  | Lebar iFrame. Contohnya `100%`.                  |
| Iframe Height | Tinggi iFrame. Contohnya `500px`.                |

:::
---

::: info Path / URL
Ruangan Path / URL digunakan untuk memasukkan URL yang ingin di-embed.

Contoh URL:
" https://www.openstreetmap.org/export/embed.html?bbox=101.6562%2C3.1090%2C101.7000%2C3.1500 " 

Contoh internal path:
"/report/view"

Contoh page dengan parameter:
"/customer/detail?id=123"

Jika URL menggunakan parameter dynamic, pastikan parameter tersebut wujud dan boleh dibaca oleh sistem.
:::
----

::: info Iframe Width
**Iframe Width** digunakan untuk menetapkan lebar paparan iFrame.

Contoh nilai:

| Nilai   | Kegunaan                                        |
| ------- | ----------------------------------------------- |
| `100%`  | iFrame menggunakan lebar penuh ruang component. |
| `80%`   | iFrame menggunakan 80% lebar ruang component.   |
| `600px` | iFrame menggunakan lebar tetap 600 pixel.       |

:::
---

::: info Iframe Height

**Iframe Height** digunakan untuk menetapkan tinggi paparan iFrame.

Contoh nilai:
| Nilai   | Kegunaan                                             |
| ------- | ---------------------------------------------------- |
| `400px` | Sesuai untuk paparan kecil.                          |
| `500px` | Sesuai untuk map atau dashboard ringkas.             |
| `700px` | Sesuai untuk dashboard atau report yang lebih besar. |
| `100vh` | Menggunakan hampir keseluruhan tinggi viewport.      |

:::
---

### Contoh: Embed Dashboard
::: tip Contoh iFrame Dashboard

Contoh ini digunakan untuk memaparkan dashboard daripada sistem lain.

| Tetapan       | Nilai                                 |
| ------------- | ------------------------------------- |
| Title         | Sales Dashboard                       |
| Type          | iFrame                                |
| Path / URL    | `https://example.com/dashboard/sales` |
| Iframe Width  | `100%`                                |
| Iframe Height | `700px`                               |

Maksudnya, dashboard luar akan dipaparkan delam page sistem.
:::
---


::: info Hasil Yang Dijangka
Selepas iFrame Component dikonfigurasikan:

- URL yang dimasukkan akan dipaparkan dalam page.
- Kandungan external atau internal boleh dilihat tanpa membuka tab baru.
- Lebar dan tinggi iFrame boleh dikawal melalui Iframe Width dan Iframe Height.
- Component boleh digunakan untuk embed map, BI dashboard, report viewer atau portal luar.

:::
---

::: warning Nota

- Pastikan URL yang dimasukkan adalah betul dan boleh diakses.
- Sesetengah website tidak membenarkan halaman mereka dipaparkan dalam iFrame.
- Jika kandungan tidak keluar, semak sama ada website tersebut menyekat iframe embedding.
- Gunakan 100% untuk Iframe Width supaya paparan lebih responsive.
- Gunakan height seperti 500px atau 700px supaya kandungan tidak terlalu kecil.
- Jika URL memerlukan login, user mungkin perlu mempunyai akses kepada sistem tersebut.
- Klik Save selepas selesai konfigurasi.
- Klik Preview untuk menguji paparan iFrame.
:::
---

::: danger Isu Biasa

#### iFrame kosong atau tidak memaparkan kandungan
Kemungkinan punca:

- URL salah.
- Website tidak boleh diakses.
- Website menyekat paparan dalam iFrame.
- URL memerlukan login atau permission.
- Internet atau network tidak dapat akses URL tersebut.

#### Paparan terlalu kecil
Kemungkinan punca:

- Iframe Height terlalu rendah.
- Width tidak menggunakan 100%.

Cadangan:

- Tetapkan Iframe Width kepada 100%.
- Tetapkan Iframe Height kepada 500px atau lebih tinggi.
:::