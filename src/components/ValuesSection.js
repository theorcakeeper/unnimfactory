// ══════════════════════════════════════════
//  ValuesSection.js
// ══════════════════════════════════════════

import { defineComponent, inject, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { translations } from '../useLanguage.js';

export default defineComponent({
  name: 'ValuesSection',

  setup() {
    const { lang, t } = inject('lang');
    const values = computed(() => translations['values.cards'][lang.value]);
    return { t, values };
  },

  template: `
    <section class="values" id="values">
      <div class="values-intro reveal">
        <div class="section-label">{{ t('values.label') }}</div>
        <h2>{{ t('values.title1') }} <em>{{ t('values.title2') }}</em></h2>
        <p>{{ t('values.intro') }}</p>
      </div>

      <div class="values-grid">
        <div
          v-for="(value, i) in values"
          :key="value.num"
          class="value-card reveal"
          :class="'reveal-delay-' + (i + 1)"
        >
          <div class="value-num">{{ value.num }}</div>
          <div class="value-title">{{ value.title }}</div>
          <p class="value-desc">{{ value.desc }}</p>
        </div>
      </div>
    </section>
  `,
});
