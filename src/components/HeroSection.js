// ══════════════════════════════════════════
//  HeroSection.js
// ══════════════════════════════════════════

import { defineComponent, inject } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'HeroSection',

  setup() {
    const { t } = inject('lang');
    return { t };
  },

  template: `
    <section class="hero">
      <div class="hero-left">
        <div class="hero-eyebrow">{{ t('hero.eyebrow') }}</div>

        <h1 class="hero-title">
          {{ t('hero.title1') }}<br />
          <em>{{ t('hero.title2') }}</em><br />
          {{ t('hero.title3') }}
        </h1>

        <p class="hero-title-ko">{{ t('hero.subtitle') }}</p>
        <p class="hero-desc">{{ t('hero.desc') }}</p>

        <div class="hero-actions">
          <a href="#products" class="btn-primary">{{ t('hero.cta1') }}</a>
          <a href="#story"    class="btn-text">{{ t('hero.cta2') }}</a>
        </div>
      </div>

      <!-- YouTube 자동재생 영상 -->
      <div class="hero-right">
        <iframe
          class="hero-video"
          src="https://www.youtube.com/embed/C_GQ98Wg2sM?autoplay=1&mute=1&loop=1&playlist=C_GQ98Wg2sM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <div class="hero-video-overlay"></div>
      </div>
    </section>
  `,
});
