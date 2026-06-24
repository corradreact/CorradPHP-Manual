# LDAP Editor
::: info Tujuan
Membantu pentadbir menyambungkan Corrad kepada direktori seperti Microsoft Active Directory (LDAP).
:::

## Overview

LDAP Editor membolehkan CORRAD berhubung ke server direktori (LDAP/AD). Setelah dikonfigurasi, pentadbir boleh mengimport pengguna terus dari direktori tanpa perlu membuat akaun satu persatu secara manual.

## Apa itu LDAP / Integrasi Active Directory?

- LDAP adalah protokol direktori yang digunakan oleh sistem seperti Microsoft Active Directory.
- Mengintegrasikan LDAP memudahkan pengurusan pengguna terpusat dan pengesahan melalui LDAP.

## Prasyarat

- PHP `ldap` extension mesti dipasang dan diaktifkan pada server CORRAD.
- Akaun bind (service account) dengan kebenaran `read` pada OU yang mengandungi pengguna.
- Port LDAP (389) atau LDAPS (636) mesti boleh dicapai dari server CORRAD.

::: info **Konfigurasi (Configuration)**
1) Pergi ke halaman **LDAP Editor → Configuration**.
2) Isi medan sambungan server:
	- `Connection`: hostname atau IP LDAP (contoh: ldap.example.com)
	- `Port`: 389 (LDAP) atau 636 (LDAPS)
	- `Protocol Version`: biasanya `3`
	- `Base DN`: contohnya `DC=domain,DC=com` untuk had pencarian pengguna
3) Tetapkan atribut carian (contoh `sAMAccountName`, `uid`, `mail`) yang digunakan sebagai nama pengguna.
4) Jika anda mahu mengecualikan objek tertentu, gunakan `Filter Exclude`.
5) Isi `Username (Bind DN)` dan `Password` untuk akaun bind.
6) Klik **Test Connection** untuk mengesahkan sambungan.
![Add Connection](/image/sistem/addconnection.png) 
:::
---

::: info **Ujian Sambungan (Test Connection)**
- Gunakan butang **Test Connection** untuk memastikan host, port, bind DN dan kata laluan betul.
- Jika gagal, semak firewall, credentials dan Base DN.
![Test Connection](/image/sistem/testconn.png) 

### Mengimport Pengguna (Import Users)

1) Setelah konfigurasi berjaya, klik **Browse & Import**.
2) CORRAD akan mengambil senarai pengguna dari direktori dan menapis pengguna yang sudah wujud dalam sistem — hanya akaun baru dipaparkan.
3) Tandakan (✓) pengguna yang hendak diimport atau klik **Check All**.
4) Klik **Import Selected** untuk membuat akaun pengguna dalam CORRAD.

Nota: Akaun yang diimport menggunakan atribut LDAP (contoh `sAMAccountName`) sebagai username. Kata laluan tidak diimport — pengguna menggunakan pengesahan LDAP untuk log masuk.

:::
---

::: warning Nota
- Hadkan Base DN kepada OU yang berkaitan untuk mempercepatkan carian dan mengurangkan hasil tidak relevan.
- Gunakan akaun bind dengan kebenaran minimum yang diperlukan (read-only pada OU pengguna).
- Uji konfigurasi dalam persekitaran ujian sebelum guna pada produksi.
- Kata laluan bind disimpan dalam pangkalan data secara tersulit — pastikan akses DB terhad kepada pentadbir.
- Jika tiada pengguna baru dipaparkan pada import, semak Base DN dan Filter Exclude.
- Jangan gunakan akaun bind dengan hak pentadbiran melampau; gunakan akaun servis terhad.
:::

