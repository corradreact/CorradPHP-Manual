## Validasi Field
::: info Validasi

| Validasi    | Kegunaan                                    |
| ----------- | ------------------------------------------- |
| Required    | Field wajib diisi.                          |
| Unique      | Nilai tidak boleh sama dengan rekod lain.   |
| Primary Key | Field digunakan sebagai ID utama rekod.     |
| Read Only   | Field dipaparkan tetapi tidak boleh diubah. |
| Disabled    | Field dinyahaktifkan.                       |
| Max Length  | Had maksimum karakter yang boleh ditaip.    |
| Min Chars   | Jumlah minimum karakter yang diperlukan.    |
| Max Chars   | Jumlah maksimum karakter yang dibenarkan.   |

:::

### Display Setting 
::: info Tetapan Paparan

Tetapan paparan digunakan untuk mengawal cara field dipaparkan dalam form.

| Tetapan          | Kegunaan                                    |
| ---------------- | ------------------------------------------- |
| Status           | Menentukan sama ada field aktif atau tidak. |
| Width            | Menentukan lebar field dalam layout form.   |
| Label Width      | Menentukan lebar label field.               |
| Text Size        | Menentukan saiz teks field.                 |
| CSS Class        | Class CSS tambahan untuk styling field.     |
| Text Align       | Menentukan penjajaran teks.                 |
| Extra Attributes | Atribut tambahan untuk field.               |

:::

### Formula Field
::: info Formula

[QTY] * [PRICE]

Contoh penggunaan:

Total amount
Discount value
Balance
Percentage
Calculated score

:::

### Show When
::: info Show When

Show When digunakan untuk memaparkan field berdasarkan syarat tertentu.

**Contoh: Field Reason hanya dipaparkan jika field Status bernilai Rejected.**

Maksudnya, field tertentu hanya akan muncul apabila syarat yang ditetapkan dipenuhi.

:::

::: tip Langkah Menetapkan Show When

1. Klik field yang ingin dikawal paparannya.
2. Pergi ke bahagian **SHOW WHEN**.
3. Pilih field rujukan pada ruangan **Show this field when**.
4. Pilih condition seperti **equals**.
5. Masukkan value yang perlu dipadankan.
6. Klik **Save**.
7. Klik **Preview** untuk menguji paparan field.

:::