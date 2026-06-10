## Lookup Source
::: info Apa itu Lookup Source?
Lookup Source digunakan untuk field yang mempunyai pilihan jawapan seperti **Dropdown, Radio Button, Checkbox, List Box, Tags Input atau LOV**

Lookup Source menentukan dari mana senarai pilihan akan diambil

Contoh:

- Dropdown **Department** mengambil senarai department daripada database.
- Dropdown **Status** mengambil senarai status daripada reference data.
- Radio Button **Gender** menggunakan pilihan tetap seperti Male dan Female.

:::

### Jenis Lookup Source
::: tip Jenis Lookup Source
| Lookup Source | Kegunaan                                                                                |
| ------------- | --------------------------------------------------------------------------------------- |
| None          | Pilihan dimasukkan secara manual atau tidak menggunakan sumber luar.                    |
| Reference     | Pilihan diambil daripada Reference Data / LOV yang telah dikonfigurasikan dalam sistem. |
| DB Table      | Pilihan diambil terus daripada jadual database.                                         |
| Custom SQL    | Pilihan diambil menggunakan query SQL khas.                                             |

:::

### Contoh Lookup Source
::: tip Contoh 1: Reference
Gunakan pilihan reference jika pilihan adalah tetap dan ringkas.
**Contoh : Active, Inactive**

Sesuai untuk:
- Status ringkas
- Yes / No
- Priority
- Gender

![reference](/image/pagestudio/reference.png)
:::
---

::: tip Contoh 2: DB Table
Gunakan DB Table jika pilihan perlu diambil daripada jadual database.
Contoh: 
| Tetapan      | Contoh            |
| ------------ | ----------------- |       
| Table        | PRUSER            |
| ID Column    | USER_ID           |
| Label Column | USERNAME          |

1. Pengguna akan melihat nama user, tetapi sistem akan menyimpan USER_ID ke dalam database.
2. Ruanagn **Filter (WEHERE)** boleh dihunakan untuk menapis data yang ingin dipaparkan sahaja
3. Klik butang **Preview** untuk melihat data yang akan dipaparkan dalam pilihan dropdowmn.
![dbtable](/image/pagestudio/dbtable.png)
:::

::: tip Contoh 3: Custom SQL
Gunakan Custom SQL jika pilihan memerlukan filter atau condition khas.

Contoh:

```sql
SELECT USERID flc_id, USERNAME flc_name
FROM PRUSER
WHERE 1;
```
| Alias | Maksud                                     |
| ----- | ------------------------------------------ |
| id    | Nilai yang akan disimpan dalam database.   |
| label | Teks yang akan dipaparkan kepada pengguna. |

![customsql](/image/pagestudio/customsql.png)
:::

