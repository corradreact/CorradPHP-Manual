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

:::
---

::: tip Contoh 2: DB Table
Gunakan DB Table jika pilihan perlu diambil daripada jadual database.
Contoh: 
| Tetapan      | Contoh     |
| ------------ | ---------- |
| Table        | DEPARTMENT |
| ID Column    | DEPT_ID    |
| Label Column | DEPT_NAME  |

1. Pengguna akan melihat nama department, tetapi sistem akan menyimpan DEPT_ID ke dalam database.
2. Ruanagn **Filter (WEHERE)** boleh dihunakan untuk menapis data yang ingin dipaparkan sahaja
3. Klik butang **Preview** untuk melihat data yang akan dipaparkan dalam pilihan dropdowmn sebelum disimpan.
:::

::: tip Contoh 3: Custom SQL
Gunakan Custom SQL jika pilihan memerlukan filter atau condition khas.

Contoh:
Contoh:

```sql
SELECT DEPT_ID AS id,
       DEPT_NAME AS label
FROM DEPARTMENT
WHERE IS_ACTIVE = 1
ORDER BY DEPT_NAME;
```

| Alias | Maksud                                     |
| ----- | ------------------------------------------ |
| id    | Nilai yang akan disimpan dalam database.   |
| label | Teks yang akan dipaparkan kepada pengguna. |

:::

