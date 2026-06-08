import { defineConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default defineConfig({
  lang: 'ms-MY',
  title: 'Smart Training',
  description: 'Manual Pengguna Kakitangan dan Admin untuk Sistem Latihan',

  head: [
    ['link', { href: '/elatihan-logo.png' }]
  ],

  themeConfig: {
    logo: '/elatihan-logo.png',

    // nav sengaja kosong – entry guna index.md
    // nav: [],

    sidebar: {

      /* =======================
         KAKITANGAN
         ======================= */
      '/kakitangan/': [
        {
          text: 'Dashboard (Latihan Luaran / Dalaman)',
          items: [
            { text: 'Daftar Kedatangan (Hadir)', link: '/kakitangan/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/kakitangan/latihan/daftar-ketidakhadiran' },
            { text: 'Senarai Latihan Terlibat', link: '/kakitangan/latihan/senarai-latihan' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/kakitangan/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/kakitangan/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Penilaian Latihan & Cetakan Sijil',
          items: [
            { text: 'Penilaian Latihan (Dalaman)', link: '/kakitangan/latihan/penilaian-latihan' },
            { text: 'Cetak Sijil Penyertaan (Dalaman)', link: '/kakitangan/latihan/cetak-sijil' }
          ]
        }
      ],

      /* =======================
         ADMIN IT
         ======================= */
      '/adminit/': [
        {
          text: 'Pengurusan Pengguna',
          items: [
            { text: 'Tambah Pengguna', link: '/adminit/pengurusan-pengguna/tambah-pengguna' },
            { text: 'Kemaskini Pengguna', link: '/adminit/pengurusan-pengguna/kemaskini-pengguna' }
          ]
        },
        {
          text: 'Laporan Latihan',
          items: [
            { text: 'Pengurusan Peserta', link: '/adminit/laporan-latihan/pengurusan-peserta' },
            { text: 'Pengurusan Penceramah (Dalaman)', link: '/adminit/laporan-latihan/pengurusan-penceramah' },
            { text: 'Pengurusan Penilaian', link: '/adminit/laporan-latihan/pengurusan-penilaian' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Lihat Senarai Permohonan', link: '/adminit/pengurusan-permohonan/senarai-permohonan' }
          ]
        }
      ],

      /* =======================
         ADMIN JABATAN
         ======================= */
      '/adminjab/': [
        {
          text: 'Dashboard Admin',
          items: [
            { text: 'Mengisi Anggaran Perbelanjaan', link: '/adminjab/tugasan/anggaran-perbelanjaan' },
            { text: 'Daftar Peserta Latihan', link: '/adminjab/tugasan/peserta-latihan' }
          ]
        },
        {
          text: 'Laporan Latihan',
          items: [
            { text: 'Pengurusan Peserta', link: '/adminjab/laporan-latihan/pengurusan-peserta' },
            { text: 'Pengurusan Penceramah (Dalaman)', link: '/adminjab/laporan-latihan/pengurusan-penceramah' },
            { text: 'Pengurusan Penilaian', link: '/adminjab/laporan-latihan/pengurusan-penilaian' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Lihat Senarai Permohonan', link: '/adminjab/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Tetapan & Pengurusan Emel',
          items: [
            { text: 'Urus Tempoh Permohonan', link: '/adminjab/pengurusan-emel/tempoh-permohonan' },
            { text: 'Urus Template Emel', link: '/adminjab/pengurusan-emel/template-emel' },
            { text: 'Penghantaran Emel Jemputan', link: '/adminjab/pengurusan-emel/Penghantaran-emel' }
          ]
        }
      ],

      /* =======================
         PENGARAH JABATAN (PJ)
         ======================= */
      '/pj/': [
        {
          text: 'Dashboard Tugasan',
          items: [
            { text: 'Sokong Permohonan Latihan Luaran', link: '/pj/tugasan/permohonan-latihan' },
            { text: 'Sokong Ketidakhadiran', link: '/pj/tugasan/ketidakhadiran' }
          ]
        },
        {
          text: 'Latihan Saya (Luaran / Dalaman)',
          items: [
            { text: 'Daftar Kedatangan (Hadir)', link: '/pj/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/pj/latihan/daftar-ketidakhadiran' },
            { text: 'Senarai Latihan Terlibat', link: '/pj/latihan/senarai-latihan' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/pj/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/pj/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Penilaian Latihan & Cetakan Sijil',
          items: [
            { text: 'Penilaian Latihan (Dalaman)', link: '/pj/penilaian/penilaian-latihan' },
            { text: 'Cetak Sijil Penyertaan', link: '/pj/penilaian/cetak-sijil' }
          ]
        }
      ],

       '/kblk/': [
        {
          text: 'Dashboard Tugasan',
           items: [
            { text: 'Ulasan Permohonan Latihan', link: '/kblk/kblk/ulasan-permohonan-latihan' },
             { text: 'Sokong Ketidakhadiran', link: '/kblk/tugasan/ketidakhadiran' }
          ]
        },
        {
          text: 'Latihan Saya (Luaran / Dalaman)',
          items: [
            { text: 'Daftar Kedatangan (Hadir)', link: '/kblk/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/kblk/latihan/daftar-ketidakhadiran' },
            { text: 'Senarai Latihan Terlibat', link: '/kblk/latihan/senarai-latihan' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/kblk/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/kblk/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Penilaian Latihan & Cetakan Sijil',
          items: [
            { text: 'Penilaian Latihan (Dalaman)', link: '/kblk/penilaian/penilaian-latihan' },
            { text: 'Cetak Sijil Penyertaan', link: '/kblk/penilaian/cetak-sijil' }
          ]
        }
      ],
      '/jkp/': [
        {
          text: 'Dashboard Tugasan',
           items: [
            { text: 'Sokong Permohonan Latihan', link: '/jkp/jkp/sokong-permohonan' }
          ]
        },
        {
          text: 'Latihan Saya (Luaran / Dalaman)',
          items: [
            { text: 'Daftar Kedatangan (Hadir)', link: '/jkp/latihan/daftar-kedatangan' },
            { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/jkp/latihan/daftar-ketidakhadiran' },
            { text: 'Senarai Latihan Terlibat', link: '/jkp/latihan/senarai-latihan' }
          ]
        },
        {
          text: 'Pengurusan Permohonan',
          items: [
            { text: 'Permohonan Latihan Luaran', link: '/jkp/pengurusan-permohonan/permohonan-latihan-luaran' },
            { text: 'Senarai Permohonan', link: '/jkp/pengurusan-permohonan/senarai-permohonan' }
          ]
        },
        {
          text: 'Penilaian Latihan & Cetakan Sijil',
          items: [
            { text: 'Penilaian Latihan (Dalaman)', link: '/jkp/penilaian/penilaian-latihan' },
            { text: 'Cetak Sijil Penyertaan', link: '/jkp/penilaian/cetak-sijil' }
          ]
        }
      ],
       '/ydp/': [
        {
         text: 'Dashboard Tugasan',
          items: [
            { text: 'Kelulusan Latihan', link: '/ydp/ydp/kelulusan-latihan' }
          ]
        }

        // },
        // {
        //   text: 'Latihan Saya (Luaran / Dalaman)',
        //   items: [
        //     { text: 'Daftar Kedatangan (Hadir)', link: '/ydp/latihan/daftar-kedatangan' },
        //     { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/ydp/latihan/daftar-ketidakhadiran' },
        //     { text: 'Senarai Latihan Terlibat', link: '/ydp/latihan/senarai-latihan' }
        //   ]
        // },
        // {
        //   text: 'Pengurusan Permohonan',
        //   items: [
        //     { text: 'Permohonan Latihan Luaran', link: '/ydp/pengurusan-permohonan/permohonan-latihan-luaran' },
        //     { text: 'Senarai Permohonan', link: '/ydp/pengurusan-permohonan/senarai-permohonan' }
        //   ]
        // },
        // {
        //   text: 'Penilaian Latihan & Cetakan Sijil',
        //   items: [
        //     { text: 'Penilaian Latihan (Dalaman)', link: '/ydp/penilaian/penilaian-latihan' },
        //     { text: 'Cetak Sijil Penyertaan', link: '/ydp/penilaian/cetak-sijil' }
        //   ]
        // }
      ],
       '/tydp/': [
        {
        text: 'TYDP',
          items: [
            { text: 'Kelulusan Latihan', link: '/tydp/tydp/kelulusan-latihan' },
            { text: 'Pengarah Jabatan', link: '/tydp/tydp/pengarah-jabatan' }
          ]
        }
        // {
        //   text: 'Latihan Saya (Luaran / Dalaman)',
        //   items: [
        //     { text: 'Daftar Kedatangan (Hadir)', link: '/tydp/latihan/daftar-kedatangan' },
        //     { text: 'Daftar Ketidakhadiran (Tidak Hadir)', link: '/tydp/latihan/daftar-ketidakhadiran' },
        //     { text: 'Senarai Latihan Terlibat', link: '/tydp/latihan/senarai-latihan' }
        //   ]
        // },
        // {
        //   text: 'Pengurusan Permohonan',
        //   items: [
        //     { text: 'Permohonan Latihan Luaran', link: '/tydp/pengurusan-permohonan/permohonan-latihan-luaran' },
        //     { text: 'Senarai Permohonan', link: '/tydp/pengurusan-permohonan/senarai-permohonan' }
        //   ]
        // },
        // {
        //   text: 'Penilaian Latihan & Cetakan Sijil',
        //   items: [
        //     { text: 'Penilaian Latihan (Dalaman)', link: '/tydp/penilaian/penilaian-latihan' },
        //     { text: 'Cetak Sijil Penyertaan', link: '/tydp/penilaian/cetak-sijil' }
        //   ]
        // }
      ],
    }
  }
})
