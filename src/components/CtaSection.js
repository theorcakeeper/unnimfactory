// ══════════════════════════════════════════
//  CtaSection.js
// ══════════════════════════════════════════

import { defineComponent, inject } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'CtaSection',

  setup() {
    const { t } = inject('lang');
    return { t };
  },

  template: `
    <section class="cta-section" id="cta">
      <div class="cta-bg"></div>

      <div class="section-label reveal">{{ t('cta.label') }}</div>
      <h2 class="reveal">{{ t('cta.title1') }} <em>{{ t('cta.title2') }}</em></h2>

      <p class="reveal reveal-delay-1">{{ t('cta.desc') }}</p>

      <div class="cta-buttons reveal reveal-delay-2">
        <a href="signup.html" class="btn-primary">{{ t('cta.signup') }}</a>
        <a href="signin.html" class="btn-text">{{ t('cta.signin') }}</a>
      </div>
    </section>
  `,
});
