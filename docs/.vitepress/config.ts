import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PHP84 CORRAD User Manual',
  description: 'Dokumentasi pengguna untuk sistem PHP84 CORRAD.',
  cleanUrls: true,
  themeConfig: {
    search: true,
    outline: [2, 3],
    sidebar: [
      {
        text: 'Getting Started',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'How to Login', link: '/getting-started/login' },
          { text: 'Dashboard Overview', link: '/getting-started/dashboard' },
          { text: 'Sidebar Navigation Overview', link: '/getting-started/sidebar-navigation' }
        ]
      },
      {
        text: 'System Administrator',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/system-administrator/overview' },
          { text: 'Active Sessions', link: '/system-administrator/active-sessions' }
        ]
      },
      {
        text: 'System Settings',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/system-settings/overview' },
          { text: 'System Configuration', link: '/system-settings/system-configuration' },
          { text: 'Database Connections', link: '/system-settings/database-connections' },
          { text: 'Reference Data', link: '/system-settings/reference-data' },
          { text: 'LDAP Editor', link: '/system-settings/ldap-editor' },
          { text: 'JWT Server', link: '/system-settings/jwt-server' }
        ]
      },
      {
        text: 'Editors & Tools',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/editors-tools/overview' },
          { text: 'Message Editor', link: '/editors-tools/message-editor' },
          { text: 'Translation Editor', link: '/editors-tools/translation-editor' },
          { text: 'SMTP Editor', link: '/editors-tools/smtp-editor' },
          { text: 'Migration Manager', link: '/editors-tools/migration-manager' }
        ]
      },
      {
        text: 'Pages & Navigation',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/pages-navigation/overview' },
          { text: 'Menu Editor', link: '/pages-navigation/menu-editor' },
          { text: 'Page Studio', link: '/pages-navigation/page-studio' },
          { text: 'Page Editor', link: '/pages-navigation/page-editor' },
          { text: 'Control / Trigger Editor', link: '/pages-navigation/control-trigger-editor' }
        ]
      },
      {
        text: 'Logic & API',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/logic-api/overview' },
          { text: 'API Configuration', link: '/logic-api/api-configuration' },
          { text: 'Business Logic', link: '/logic-api/business-logic' },
          { text: 'Integration Settings', link: '/logic-api/integration-settings' }
        ]
      },
      {
        text: 'Data & Monitoring',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/data-monitoring/overview' },
          { text: 'Logs', link: '/data-monitoring/logs' },
          { text: 'Monitoring Dashboard', link: '/data-monitoring/monitoring-dashboard' },
          { text: 'Audit Trail', link: '/data-monitoring/audit-trail' }
        ]
      },
      {
        text: 'User Administrator',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/user-administrator/overview' },
          { text: 'User Management', link: '/user-administrator/user-management' },
          { text: 'Roles & Permissions', link: '/user-administrator/roles-permissions' },
          { text: 'Access Control', link: '/user-administrator/access-control' }
        ]
      },
      {
        text: 'Showcase',
        collapsible: true,
        items: [
          { text: 'Overview', link: '/showcase/overview' },
          { text: 'Example Pages', link: '/showcase/example-pages' },
          { text: 'Demo Modules', link: '/showcase/demo-modules' }
        ]
      },
      {
        text: 'FAQ & Support',
        collapsible: true,
        items: [
          { text: 'Common Issues', link: '/faq-support/common-issues' },
          { text: 'Troubleshooting', link: '/faq-support/troubleshooting' },
          { text: 'Contact Support', link: '/faq-support/contact-support' }
        ]
      }
    ],
    footer: {
      message: 'PHP84 CORRAD User Manual',
      copyright: '© 2026 PHP84 CORRAD'
    }
  }
});
