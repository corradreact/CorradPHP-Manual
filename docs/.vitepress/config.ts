import { defineConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default defineConfig({
  lang: 'en-US',
  title: 'Corrad PHP84 Manual',
  description: 'User manual for Corrad PHP84 system',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/images.png' }]
  ],

  themeConfig: {
    logo: '/images.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'BM', link: '/ms/' },
      { text: 'English', link: '/' },
      { text: 'Corrad System', link: 'https://php84.corrad.my/login.php' }
    ],

    sidebar: [
      {
        text: 'Profil',
        collapsed: false,
        items: [
          { text: 'Edit Profil', link: '/profile/edit-profile' },
          { text: 'Tema', link: '/profile/tema' },
          { text: 'Tukar Kata Laluan', link: '/profile/change-password' },
          { text: 'Lupa Kata Laluan', link: '/profile/forgot-password' },
          { text: 'Reset Kata Laluan', link: '/profile/reset-password' },
          { text: 'Sesi Aktif', link: '/profile/active-sessions' }
        ]
      },
      {
        text: 'Pentadbir Sistem',
        collapsed: false,
        items: [
          { text: 'System Configuration', link: '/system-settings/system-configuration' },
          { text: 'Database Connections', link: '/system-settings/database-connections' },
          { text: 'Reference Data', link: '/system-settings/reference-data' },
          { text: 'LDAP Editor', link: '/system-settings/ldap-editor' },
          { text: 'JWT Server', link: '/system-settings/jwt-server' }
        ]
      },
      {
        text: 'Editor & Alat',
        collapsed: false,
        items: [
          { text: 'Message Editor', link: '/editors-tools/message-editor' },
          { text: 'Translation Editor', link: '/editors-tools/translation-editor' },
          { text: 'SMTP Editor', link: '/editors-tools/smtp-editor' },
          { text: 'Migration Manager', link: '/editors-tools/migration-manager' }
        ]
      },
        {
        text: 'Halaman & Navigasi',
        collapsed: false,
        items: [
          // { text: 'Menu Editor', link: '/pages-navigation/menu-editor' },
          {
            text: 'Page Studio',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/pages-navigation/page-studio/' },
              { text: 'Step 1: Membina Menu Baharu', link: '/pages-navigation/page-studio/menu-page' },
              { text: 'Step 2: Membina Page Baharu', link: '/pages-navigation/page-studio/create-page' },
              {
              text: 'Step 3: Membina Komponen Page',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/pages-navigation/page-studio/component-page/form-page/' },
                { text: 'Component Settings Overview', link: '/pages-navigation/page-studio/component-page/component-settings-overview' },
                { text: 'Form (1 & 2 Columns)', link: '/pages-navigation/page-studio/component-page/form-component' },
                { text: 'Datatable', link: '/pages-navigation/page-studio/component-page/datatable-component' },
                { text: 'Report', link: '/pages-navigation/page-studio/component-page/report-component' },
                { text: 'Chart', link: '/pages-navigation/page-studio/component-page/chart-component' },
                { text: 'Stat / KPI Cards', link: '/pages-navigation/page-studio/component-page/stat_kpi_cards' },
                { text: 'Gantt Chart', link: '/pages-navigation/page-studio/component-page/gantt-chart' },
                { text: 'Geo Map', link: '/pages-navigation/page-studio/component-page/geo-map' },
                { text: 'Tabular', link: '/pages-navigation/page-studio/component-page/tabular' },
                { text: 'Gallery', link: '/pages-navigation/page-studio/component-page/gallery' },
                { text: 'Timeline', link: '/pages-navigation/page-studio/component-page/timeline' },
                { text: 'Wizard', link: '/pages-navigation/page-studio/component-page/wizard' },
                { text: 'Import Wizard', link: '/pages-navigation/page-studio/component-page/import-wizard' },
                { text: 'Dashboard', link: '/pages-navigation/page-studio/component-page/dashboard ' },
                { text: 'Master / Detail ', link: '/pages-navigation/page-studio/component-page/master_detail' },
                { text: 'Profile View', link: '/pages-navigation/page-studio/component-page/profile_view' },
                { text: 'Tree Browser', link: '/pages-navigation/page-studio/component-page/tree_browser' },
                { text: 'IFrame', link: '/pages-navigation/page-studio/component-page/iframe' },
                { text: 'Custom HTML', link: '/pages-navigation/page-studio/component-page/custom-html' }
              ]
            },

          {
          text: 'Step 4: Tambah Ruangan Dalam Form',
          collapsed: false,
          items: [
            { text: 'Field Type', link: '/pages-navigation/page-studio/field-page/field-type' },
            { text: 'Data Binding', link: '/pages-navigation/page-studio/field-page/data-binding' },
            { text: 'Lookup Source', link: '/pages-navigation/page-studio/field-page/lookup-source' },
            { text: 'Other Field', link: '/pages-navigation/page-studio/field-page/validation' },
          ]
        },
        {
          text: 'Step 5: Kontrol',
          link: '/pages-navigation/page-studio/component-control'
        },
        {
          text: 'Step 6: Trigger',
          link: '/pages-navigation/page-studio/trigger-page'
        }
            ]
          },

          // { text: 'Page Editor', link: '/pages-navigation/page-editor' },
          // { text: 'Control / Trigger Editor', link: '/pages-navigation/control-trigger-editor' }
        ]
      },
      {
        text: 'Logik & API',
        collapsed: false,
        items: [
          { text: 'BL Editor v5', link: '/logic-api/bi-editor-v5' },
          { text: 'API Workspace', link: '/logic-api/api-workspace' },
          { text: 'AI settings', link: '/logic-api/ai-settings' }
        ]
      },
      {
        text: 'Pemantauan Data',
        collapsed: false,
        items: [
          { text: 'Import Export v2', link: '/data-monitoring/import-export-v2' },
          { text: 'Audit Trail', link: '/data-monitoring/audit-trail' },
          { text: 'Application Logs', link: '/data-monitoring/application-logs' },
          { text: 'Log Access', link: '/data-monitoring/log-access' },
          { text: 'Job Queue', link: '/data-monitoring/job-queue' },
          { text: 'Structured Logs', link: '/data-monitoring/structured-logs' },
          { text: 'Test Results', link: '/data-monitoring/test-results' }
        ]
      },
      {
        text: 'Pentadbir Pengguna',
        collapsed: false,
        items: [
          { text: 'User Management', link: '/useradministrator/usermngmt' },
          { text: 'Roles & Permissions', link: '/useradministrator/rolespermission' },
          { text: 'Session Monitor', link: '/useradministrator/session' }
        ]
      }
      // {
      //   text: 'Showcase',
      //   collapsed: false,
      //   items: [
      //     { text: 'Input Types Showcase', link: '/showcase/input-types-showcase' },
      //     { text: 'Component Showcase', link: '/showcase/component-showcase' },
      //     { text: 'Showcase Product Dashboard', link: '/showcase/product-dashboard' },
      //     { text: 'Showcase Product Dashboard 2', link: '/showcase/product-dashboard-2' }
      //   ]
      // }
    ],

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    footer: {
      message: 'Corrad PHP84 User Manual',
      copyright: '© 2026 Corrad PHP84'
    }
  }
})