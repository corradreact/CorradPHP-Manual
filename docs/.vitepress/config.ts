import { defineConfig } from 'vitepress';
import sidebar from './sidebar.json';

export default defineConfig({
  title: 'Documentation',
  themeConfig: {
    sidebar,
  },
});
