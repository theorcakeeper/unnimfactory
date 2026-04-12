// ══════════════════════════════════════════
//  NavBar.js — Navigation + Language Toggle
// ══════════════════════════════════════════

import { defineComponent, ref, inject, computed, onMounted, onUnmounted }
  from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'NavBar',

  setup() {
    const { lang, t, toggle } = inject('lang');
    const { hasItems, cartCount } = inject('cart');

    const scrolled = ref(false);
    const handleScroll = () => { scrolled.value = window.scrollY > 80; };
    onMounted(() => window.addEventListener('scroll', handleScroll));
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    const links = computed(() => [
      { label: t('nav.about'),      href: '#story'    },
      { label: t('nav.collection'), href: '#products' },
      { label: t('nav.heritage'),   href: '#heritage' },
      { label: t('nav.contact'),    href: '#cta'      },
    ]);

    return { lang, t, toggle, scrolled, links, hasItems, cartCount };
  },

  template: `
    <nav :class="{ scrolled }">
      <!-- 로고 -->
      <div class="nav-logo">
        <img src="images/logo_notext.svg" alt="Unnim Factory Logo" class="nav-logo-img" />
        <div class="nav-logo-text">
          <span class="ko">언님팩토리</span>
          <span class="en">UNNIM FACTORY</span>
        </div>
      </div>

      <!-- 데스크톱 링크 (900px 이상) -->
      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>

      <!-- 우측: 언어토글 + 쇼핑하기/결제하기 -->
      <div class="nav-right">
        <button class="lang-toggle" @click="toggle"
          :aria-label="lang === 'en' ? 'Switch to Korean' : '영어로 전환'">
          <span :class="{ active: lang === 'ko' }">KO</span>
          <span class="lang-divider">/</span>
          <span :class="{ active: lang === 'en' }">EN</span>
        </button>
        <a
          :href="hasItems ? 'checkout.html' : '#products'"
          class="nav-cta"
        >
          <span v-if="hasItems">{{ t('nav.checkout') }} ({{ cartCount }})</span>
          <span v-else>{{ t('nav.shop') }}</span>
        </a>
      </div>
    </nav>
  `,
});
