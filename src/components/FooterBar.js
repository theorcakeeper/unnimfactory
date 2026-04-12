// ══════════════════════════════════════════
//  FooterBar.js
// ══════════════════════════════════════════

import { defineComponent, inject, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'FooterBar',

  setup() {
    const { t } = inject('lang');

    const links = computed(() => [
      { label: t('nav.about'),      href: '#story'    },
      { label: t('nav.collection'), href: '#products' },
      { label: t('nav.heritage'),   href: '#heritage' },
      { label: t('nav.contact'),    href: '#cta'      },
    ]);

    const year = new Date().getFullYear();
    return { t, links, year };
  },

  template: `
    <footer>
      <div>
        <div class="footer-logo">UNNIM FACTORY</div>
        <div class="footer-ko">언님팩토리</div>
      </div>

      <nav>
        <ul class="nav-links">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <p>{{ t('footer.rights') }}</p>

      <div class="footer-top">
        <a href="#" class="footer-top-link">TOP ↑</a>
      </div>

    </footer>
  `,
});
