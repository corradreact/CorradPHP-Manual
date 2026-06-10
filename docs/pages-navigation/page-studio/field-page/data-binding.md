## Data Binding Dengan Database

::: info Apa itu Data Binding

- Data binding bermaksud field dalam form dihubungkan dengan kolum tertentu dalam database.
- Apabila pengguna mengisi form dan klik **Save**, nilai daripada field tersebut akan disimpan ke dalam kolum database yang telah ditetapkan. Apabila rekod dibuka semula, sistem akan membaca semula nilai daripada database dan memaparkannya dalam field tersebut.

**Secara ringkas: Field dalam form → DB Column → Database**
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
