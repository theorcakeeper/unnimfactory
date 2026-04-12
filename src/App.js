// ══════════════════════════════════════════
//  App.js — Root Vue Component
//  - createLanguage()로 언어 상태 생성
//  - provide('lang', ...)으로 전체 트리에 공유
//  - onMounted에서 IntersectionObserver 등록
// ══════════════════════════════════════════

import { defineComponent, onMounted, nextTick, provide } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { createLanguage } from './useLanguage.js';
import { createCart }    from './useCart.js';

import NavBar          from './components/NavBar.js';
import HeroSection     from './components/HeroSection.js';
import MarqueeBanner   from './components/MarqueeBanner.js';
import ValuesSection   from './components/ValuesSection.js';
import ProductsSection from './components/ProductsSection.js';
import StorySection    from './components/StorySection.js';
import HeritageSection from './components/HeritageSection.js';
import PaletteStrip    from './components/PaletteStrip.js';
import CtaSection      from './components/CtaSection.js';
import FooterBar       from './components/FooterBar.js';

export default defineComponent({
  name: 'App',

  components: {
    NavBar, HeroSection, MarqueeBanner, ValuesSection,
    ProductsSection, StorySection, HeritageSection,
    PaletteStrip, CtaSection, FooterBar,
  },

  setup() {
    // ── 언어 상태 생성 후 전체 트리에 provide ──
    const language = createLanguage();
    provide('lang', language);

    // ── 장바구니 상태 생성 후 전체 트리에 provide ──
    const cart = createCart();
    provide('cart', cart);

    // ── Scroll-reveal IntersectionObserver ──
    onMounted(async () => {
      await nextTick();
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach((el) => observer.observe(el));
    });
  },

  template: `
    <NavBar />
    <HeroSection />
    <MarqueeBanner />
    <ValuesSection />
    <ProductsSection />
    <StorySection />
    <HeritageSection />
    <PaletteStrip />
    <CtaSection />
    <FooterBar />
  `,
});
