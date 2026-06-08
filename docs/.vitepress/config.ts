import { defineConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default defineConfig({
  lang: 'en-US',
  title: 'Corrad PHP84 Manual',
  description: 'User manual for Corrad PHP84 system',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/elatihan-logo.png' }]
  ],

  themeConfig: {
    logo: '/elatihan-logo.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Corrad System', link: 'https://php84.corrad.my/' }
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
        text: 'System Administrator',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/system-administrator/overview' }
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
          { text: 'Menu Editor', link: '/pages-navigation/menu-editor' },
          { text: 'Page Studio', link: '/pages-navigation/page-studio' },
          { text: 'Page Editor', link: '/pages-navigation/page-editor' },
          { text: 'Control / Trigger Editor', link: '/pages-navigation/control-trigger-editor' }
        ]
      },
      {
        text: 'Logic & API',
        collapsed: false,
        items: [
          { text: 'BI Editor v5', link: '/logic-api/bi-editor-v5' },
          { text: 'BI Editor (F & BE)', link: '/logic-api/bi-editor-f-be' },
          { text: 'API Workspace', link: '/logic-api/api-workspace' }
        ]
      },
      {
        text: 'Data & Monitoring',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/data-monitoring/overview' }
        ]
      },
      {
        text: 'User Administrator',
        collapsed: false,
        items: [
          { text: 'User Management', link: '/user-administrator/user-management' },
          { text: 'Roles & Permissions', link: '/user-administrator/roles-permissions' },
          { text: 'Session Monitor', link: '/user-administrator/session-monitor' }
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