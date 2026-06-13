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
        text: 'Profile',
        collapsed: false,
        items: [
          { text: 'Edit Profile', link: '/profile/edit-profile' },
          { text: 'Change Password', link: '/profile/change-password' },
          { text: 'Forgot Password', link: '/profile/forgot-password' },
          { text: 'Reset Password', link: '/profile/reset-password' },
          { text: 'Active Sessions', link: '/profile/active-sessions' }
        ]
      },
      {
        text: 'System Settings',
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
        text: 'Editors & Tools',
        collapsed: false,
        items: [
          { text: 'Message Editor', link: '/editors-tools/message-editor' },
          { text: 'Translation Editor', link: '/editors-tools/translation-editor' },
          { text: 'SMTP Editor', link: '/editors-tools/smtp-editor' },
          { text: 'Migration Manager', link: '/editors-tools/migration-manager' }
        ]
      },
        {
        text: 'Pages & Navigation',
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
                { text: 'Form Component', link: '/pages-navigation/page-studio/component-page/form-component' },
                { text: 'Datatable Component', link: '/pages-navigation/page-studio/component-page/datatable-component' },
                { text: 'Report Component', link: '/pages-navigation/page-studio/component-page/report-component' },
                { text: 'Chart Component', link: '/pages-navigation/page-studio/component-page/chart-component' }
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
        text: 'Logic & API',
        collapsed: false,
        items: [
          { text: 'BL Editor v5', link: '/logic-api/bi-editor-v5' },
          { text: 'API Workspace', link: '/logic-api/api-workspace' }
        ]
      },
      {
        text: 'Data & Monitoring',
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
        text: 'User Administrator',
        collapsed: false,
        items: [
          { text: 'User Management', link: '/useradministrator/usermngmt' },
          { text: 'Roles & Permissions', link: '/useradministrator/rolespermission' },
          { text: 'Session Monitor', link: '/useradministrator/session' }
        ]
      },
      {
        text: 'Showcase',
        collapsed: false,
        items: [
          { text: 'Input Types Showcase', link: '/showcase/input-types-showcase' },
          { text: 'Component Showcase', link: '/showcase/component-showcase' },
          { text: 'Showcase Product Dashboard', link: '/showcase/product-dashboard' },
          { text: 'Showcase Product Dashboard 2', link: '/showcase/product-dashboard-2' }
        ]
      }
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