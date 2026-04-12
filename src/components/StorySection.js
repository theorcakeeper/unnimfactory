// ══════════════════════════════════════════
//  StorySection.js
// ══════════════════════════════════════════

import { defineComponent, inject, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { translations } from '../useLanguage.js';

export default defineComponent({
  name: 'StorySection',

  setup() {
    const { lang, t } = inject('lang');
    const stats = computed(() => translations['story.stats'][lang.value]);
    return { t, stats };
  },

  template: `
    <section class="story" id="story">
      <div class="story-visual reveal">

        <!-- 이미지 플레이스홀더 -->
        <!-- images/story.jpg 로 저장하면 바로 반영됨 -->
        <div class="story-block">
          <img
            src="images/story.jpg"
            alt="Unnim Factory brand story"
            class="story-photo"
            @load="e => e.target.nextElementSibling.style.display = 'none'"
            @error="e => e.target.style.display = 'none'"
          />
          <div class="story-placeholder">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="14" width="44" height="34" rx="2"
                    stroke="currentColor" stroke-width="1.5"/>
              <circle cx="22" cy="27" r="5"
                      stroke="currentColor" stroke-width="1.5"/>
              <path d="M8 38 L20 28 L30 36 L40 26 L52 38"
                    stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
            <span>이미지를 추가하세요</span>
            <span class="story-placeholder-sub">images/story.jpg</span>
          </div>
        </div>

        <div class="story-block-accent"></div>
      </div>

      <div class="story-content reveal reveal-delay-2">
        <div class="section-label">{{ t('story.label') }}</div>
        <h2>{{ t('story.title1') }} <em>{{ t('story.title2') }}</em></h2>
        <p>{{ t('story.p1') }}</p>
        <p>{{ t('story.p2') }}</p>

        <div class="story-stat">
          <div v-for="stat in stats" :key="stat.num" class="stat-item">
            <div class="stat-num">{{ stat.num }}</div>
            <div class="stat-label" style="white-space: pre-line;">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
});
