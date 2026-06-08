# Keputusan Ujian

## Gambaran Keseluruhan

Halaman Keputusan Ujian memaparkan ringkasan status ujian unit sistem CORRAD. Ia membantu pasukan pembangunan dan penyelenggaraan melihat dengan cepat berapa banyak ujian yang dijalankan, yang lulus, dan yang gagal.

---

## Statistik Utama

Di bahagian atas terdapat metrik ringkas:

- **Tests** - jumlah keseluruhan ujian yang dijalankan.
- **Assertions** - jumlah pernyataan ujian yang diperiksa.
- **Passed** - bilangan ujian yang lulus.
- **Failures** - bilangan ujian yang gagal.
- **Time(s)** - jumlah masa yang diambil untuk menjalankan ujian.
- **Last Run** - tarikh dan masa ujian terakhir dijalankan.

Kad ini memberikan gambaran pantas tentang kesihatan suite ujian anda.

---

## Kawalan Ujian

Terdapat butang utama:

- **Run Unit Tests** - jalankan semula semua ujian unit dari antara muka.
- **Refresh** - muat semula paparan keputusan ujian yang sedia ada.

Ini berguna apabila anda ingin mengesahkan perubahan kod atau melihat status terkini.

---

## Struktur Keputusan Ujian

Keputusan ujian dipaparkan mengikut kumpulan ujian:

- Setiap kumpulan menunjukkan nama kelas ujian seperti `Corrad\Tests\Unit\BindingSourceTest`.
- Di bawah setiap kumpulan, setiap ujian unit disenaraikan bersama status dan masa larian.

Contohnya:

- `testEmptyBindingSourceIsRejected` — passed
- `testValidTableNamesAreAccepted` — passed
- `testInvalidTableNamesAreRejected` — passed
- `testEmptyPasswordReturnsEmptyStrength` — passed

Setiap kumpulan juga menunjukkan jumlah ujian dalam kumpulan dan masa keseluruhan untuk kumpulan tersebut.

---

## Memahami Status

- **passed** - ujian berjaya dilaksanakan tanpa kegagalan.
- **failed** - ujian menemui masalah dan perlu disemak.

Jika semua ujian dipaparkan sebagai `passed`, ini menunjukkan kod yang diuji berfungsi mengikut jangkaan untuk keadaan yang ditetapkan.

---

## Kegunaan Utama

- Menilai kestabilan kod secara cepat selepas perubahan.
- Mengesahkan fungsi-fungsi khusus seperti pengesahan nama jadual dan tahap kata laluan.
- Memastikan suite ujian unit dikemas kini dan tidak mempunyai regresi.
- Membantu dalam ujian integrasi atau semakan sebelum penerapan produksi.

---

## Petua Penggunaan

- Jalankan semula ujian selepas kemas kini kod untuk mengesan isu awal.
- Perhatikan kumpulan ujian yang mengambil masa lebih lama untuk dipercepatkan.
- Pastikan semua ujian kritikal lulus sebelum meneruskan ke peringkat seterusnya.
