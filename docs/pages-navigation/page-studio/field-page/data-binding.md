## Data Binding Dengan Database

::: info Apa itu Data Binding

- Data Binding digunakan untuk menghubungkan form dengan database. Melalui data binding, sistem boleh mengetahui table mana yang digunakan untuk mengambil, menyimpan atau mengemaskini data.

- Data binding juga boleh digunakan untuk generate field secara automatik berdasarkan kolum yang terdapat dalam table database

Secara ringkas:
**Form Component → Data Binding → Table Database → Field Dalam Form**

---

Contoh:
| Field Dalam Form | DB Column | Maksud                                         |
| ---------------- | --------- | ---------------------------------------------- |
| Customer Name    | CUST_NAME | Nama pelanggan disimpan dalam kolum CUST_NAME. |
| Email            | EMAIL     | Email pelanggan disimpan dalam kolum EMAIL.    |
| Phone            | PHONE_NO  | Nombor telefon disimpan dalam kolum PHONE_NO.  |
| Status           | STATUS    | Status pilihan disimpan dalam kolum STATUS.    |

:::

## Cara Menetapkan DB Column
::: tip Langkah Menetapkan **DB Column**
1. Klik field yang ingin dikonfigurasikan.
2. Pada panel kanan, pergi ke bahagian **DATA**.
3. Cari ruangan **DB Column**.
4. Masukkan atau pilih nama kolum database yang sesuai.
Contoh : CUST_NAME
5. Pastikan nama kolumn sama dengan struktur database.
6. Klik **Save**

![CUST_NAME](/image/pagestudio/data1.png)


:::
::: warning Nota
- Pastikan nama **DB Column** betul.
- Jika nama kolum salah, data mungkin tidak dapat disimpan atau tidak dapat dipaparkan semula.
- Untuk form yang menyimpan data, setiap field penting perlu dihubungkan kepada kolum database yang betul.
- Jika field hanya untuk paparan atau maklumat sementara, DB Column mungkin tidak diperlukan.

:::
