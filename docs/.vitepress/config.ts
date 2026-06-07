import { defineConfig } from 'vitepress';
import sidebar from './sidebar.json';

export default defineConfig({
  title: 'PHP84 CORRAD User Manual',
  description: 'Panduan pengguna sistem PHP84 CORRAD.',
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    search: true,
    sidebar,
    outline: [2, 3],
    footer: {
      message: 'PHP84 CORRAD User Manual',
      copyright: '© 2026 PHP84 CORRAD'
    }
  }
});
