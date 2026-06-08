# Roles & Permissions

::: info Tujuan
Membantu admin memahami dan mengurus peranan serta kebenaran menu dalam sistem Corrad. Panduan ini menerangkan model kawal akses, cara melihat peranan, menetapkan peranan kepada pengguna, dan mengurus kebenaran menu.
:::

## 1. Akses Peranan & Kebenaran
### Buka Bahagian Roles & Permissions

::: tip Langkah 1
1) Log masuk ke dalam sistem sebagai admin.
2) Pilih menu **Roles & Permissions** di bawah bahagian **User Administrator**.
3) Sistem akan memaparkan paparan utama **Roles & Permissions** dengan beberapa tab seperti **Overview**, **Roles**, **User Assignment**, dan **Menu Permissions**.
:::

## 2. Fahami Model Kawalan Akses

### Konsep Utama
- **Role**: Kumpulan kebenaran yang diberikan kepada pengguna.
- **Parent Role**: Peranan boleh diwarisi dari peranan induk.
- **User Assignment**: Pengguna ditetapkan kepada peranan tertentu.
- **Menu Permissions**: Menetapkan menu mana yang boleh diakses oleh setiap peranan.

::: tip
Semua pengguna perlu ditetapkan kepada sekurang-kurangnya satu peranan supaya sistem dapat mengawal akses mereka dengan betul.
:::

## 3. Tab Overview
Tab **Overview** menunjukkan model kawalan akses dan aliran kerja yang disyorkan:
- Pentadbir mencipta peranan baru di tab **Roles**.
- Tetapkan kebenaran menu di tab **Menu Permissions**.
- Tetapkan pengguna kepada peranan di tab **User Assignment**.
- Klik semula atau muat semula menu jika diperlukan supaya perubahan mula berkuat kuasa.

## 4. Tab Roles
### Melihat dan Menambah Peranan

::: tip Langkah 2
1) Pergi ke tab **Roles**.
2) Paparan akan menunjukkan senarai peranan seperti **ADM** dan **USR**, kod peranan, nama peranan, peranan induk, bilangan pengguna, dan bilangan menu yang dibenarkan.
3) Klik butang **New Role** untuk menambah peranan baharu.
4) Isikan **Role Code**, **Name** dan pilih **Parent Role** jika perlu.
5) Simpan perubahan.
:::

## 5. Tab User Assignment
### Menetapkan Pengguna kepada Peranan

::: tip Langkah 3
1) Pergi ke tab **User Assignment**.
2) Pilih pengguna yang ingin dikaitkan dengan peranan tertentu.
3) Pilih peranan yang sesuai untuk pengguna tersebut.
4) Simpan tetapan.
:::

### Nota
- Pengguna yang tidak ditetapkan kepada peranan tidak akan mempunyai akses menu yang lengkap.
- Peranan sistem seperti **ADM** biasanya digunakan untuk pentadbir dan memberi akses penuh kepada semua menu.

## 6. Tab Menu Permissions
### Mengurus Akses Menu

::: tip Langkah 4
1) Pergi ke tab **Menu Permissions**.
2) Pilih peranan yang ingin dikawal aksesnya.
3) Tandakan kotak menu yang dibenarkan untuk peranan tersebut.
4) Simpan tetapan.
:::

### Kesan Perubahan
- Perubahan kebenaran menu akan menentukan menu mana yang terpapar kepada pengguna yang mempunyai peranan itu.
- Selepas mengubah kebenaran, mungkin perlu memuat semula bahagian menu untuk melihat kesan pada pengguna aktif.

::: warning Nota
- Jangan padam atau ubah peranan sistem (`System Default`) tanpa memahami implikasi akses.
- Pastikan setiap pengguna hanya diberi peranan yang diperlukan untuk tugas mereka.
- Perubahan peranan atau kebenaran boleh mempengaruhi capaian pengguna ke modul penting.
:::
