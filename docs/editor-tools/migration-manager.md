# Migration Manager

::: info Tujuan
Membantu pentadbir mengurus migrasi pangkalan data dalam sistem. Panduan ini menerangkan cara melihat status migrasi, menjalankan migrasi tertunda, rollback migrasi terakhir, dan menyegarkan senarai migrasi.
:::

## 1. Buka Migration Manager

::: tip Langkah 1
1) Log masuk sebagai admin sistem.
2) Pilih menu **Editors & Tools** kemudian pilih **Migration Manager**.
3) Sistem akan memaparkan papan pemuka Migration Manager dengan statistik migrasi.
:::

## 2. Memahami Paparan Utama

Paparan utama menunjukkan statistik migrasi:
- **Total**: jumlah semua fail migrasi.
- **Ran**: migrasi yang telah berjaya dijalankan.
- **Pending**: migrasi yang belum dijalankan.
- **Rolled Back**: migrasi yang telah dibalikkan.

Di bawah statistik terdapat jadual migrasi dengan lajur:
- **File**: nama fail migrasi.
- **Status**: status semasa seperti Ran atau Rolled Back.
- **Ran At**: tarikh dan masa migrasi dijalankan.
- **Rollback Available**: menunjukkan sama ada rollback tersedia.

## 3. Jalankan Migrasi Tertunda

::: tip Langkah 2
1) Semak senarai migrasi dan perhatikan baris yang berstatus **Pending**.
2) Klik butang **Apply Pending**.
3) Sistem akan menjalankan semua migrasi tertunda.
:::

## 4. Rollback Migrasi Terakhir

::: tip Langkah 3
1) Klik butang **Rollback Last** untuk membalikkan migrasi yang terakhir dijalankan.
2) Sahkan tindakan jika sistem meminta pengesahan.
:::

## 5. Segarkan Senarai Migrasi

Jika anda mahu melihat status terkini selepas tindakan migrasi atau rollback:
- Klik butang **Refresh** untuk memuat semula jadual migrasi.

## 6. Amaran dan Nota

::: warning Nota
- Pastikan anda memahami kesan migrasi sebelum menjalankannya.
- Hanya jalankan migrasi pada persekitaran yang sesuai (contohnya pembangunan atau ujian) jika anda tidak pasti.
- Rollback hanya akan membalikkan migrasi terakhir jika ia tersedia.
- Semak tarikh dan status migrasi sebelum membuat apa-apa tindakan.
:::
