// ══════════════════════════════════════════
//  MarqueeBanner.js
// ══════════════════════════════════════════

import { defineComponent, inject, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { translations } from '../useLanguage.js';

export default defineComponent({
  name: 'MarqueeBanner',

  setup() {
    const { lang } = inject('lang');

    // computed — 언어 바뀌면 자동으로 아이템 목록 교체
    const items = computed(() => translations['marquee.items'][lang.value]);

    return { items };
  },

  template: `
    <div class="marquee-wrap">
      <div class="marquee-track">
        <template v-for="pass in 2" :key="pass">
          <template v-for="(item, i) in items" :key="pass + '-' + i">
            <span>{{ item }}</span>
            <span class="dot">·</span>
          </template>
        </template>
      </div>
    </div>
  `,
});
