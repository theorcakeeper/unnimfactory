// ══════════════════════════════════════════
//  HeritageSection.js
// ══════════════════════════════════════════

import { defineComponent, inject, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { translations } from '../useLanguage.js';

export default defineComponent({
  name: 'HeritageSection',

  setup() {
    const { lang, t } = inject('lang');
    const items = computed(() => translations['heritage.items'][lang.value]);
    return { t, items };
  },

  template: `
    <section class="heritage" id="heritage">
      <div class="heritage-inner">
        <div class="heritage-header reveal">
          <div>
            <div class="section-label">{{ t('heritage.label') }}</div>
            <h2>{{ t('heritage.title1') }}<br /><em>{{ t('heritage.title2') }}</em></h2>
          </div>
          <p>{{ t('heritage.desc') }}</p>
        </div>

        <div class="heritage-items">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="heritage-item reveal"
            :class="'reveal-delay-' + (i + 1)"
          >
            <div class="heritage-item-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
});
