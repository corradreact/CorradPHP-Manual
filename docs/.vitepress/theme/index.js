import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import '../styles.css';

export default {
  ...DefaultTheme,
  Layout() {
    return h('div', null, [
      h(DefaultTheme.Layout),
      h(
        'button',
        {
          class: 'manual-back-to-top',
          onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          'aria-label': 'Back to top'
        },
        'Back to top'
      )
    ]);
  }
};
