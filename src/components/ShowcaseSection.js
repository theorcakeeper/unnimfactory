// ══════════════════════════════════════════
//  ShowcaseSection.js
//  GSAP ScrollTrigger — 3D tumble (X+Y 복합 회전)
//  스크롤 진행도에 따라 각 카드가 서로 다른
//  rotateX / rotateY / Z 궤도로 tumble함
// ══════════════════════════════════════════

import { defineComponent, onMounted, onUnmounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'ShowcaseSection',

  setup() {
    // ── 카드 데이터 ─────────────────────────────
    const cards = [
      {
        id: 1,
        label: '마고자',
        sub: 'Magoja · Outerwear',
        gradient: 'linear-gradient(135deg, #c2f2bb 0%, #8da686 100%)',
        symbol: '⊞',
        startX: -40, startY: 25,   // 시작 rotateX/Y
        endX:   15,  endY: -360,   // 끝 rotateX/Y (Y축 360° = full spin)
        startZ: 8,   endZ: -5,
      },
      {
        id: 2,
        label: '버킷햇',
        sub: 'Bucket Hat · Accessories',
        gradient: 'linear-gradient(135deg, #8da686 0%, #4d594a 100%)',
        symbol: '◎',
        startX: 30,  startY: -20,
        endX:  -20,  endY: 360,
        startZ: -6,  endZ: 10,
      },
      {
        id: 3,
        label: '신발끈',
        sub: 'Shoelaces · Daily',
        gradient: 'linear-gradient(135deg, #6b8c7a 0%, #4d594a 100%)',
        symbol: '∿',
        startX: -20, startY: 40,
        endX:   30,  endY: -360,
        startZ: 12,  endZ: -8,
      },
      {
        id: 4,
        label: '코스터',
        sub: 'Coasters · Eco Craft',
        gradient: 'linear-gradient(135deg, #4d594a 0%, #594a45 100%)',
        symbol: '◻',
        startX: 25,  startY: -35,
        endX:  -15,  endY: 360,
        startZ: -10, endZ: 6,
      },
    ];

    // ── GSAP 인스턴스 저장 (cleanup용) ───────────
    let gsapCtx = null;

    onMounted(() => {
      // GSAP + ScrollTrigger은 index.html에서 CDN으로 로드됨
      const { gsap, ScrollTrigger } = window;
      if (!gsap || !ScrollTrigger) {
        console.warn('GSAP / ScrollTrigger not loaded');
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // ── Context로 묶어서 cleanup 쉽게 ──────────
      gsapCtx = gsap.context(() => {

        // 섹션 전체가 핀(고정)되면서 스크롤 진행
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#showcase',
            start: 'top top',
            end: '+=280%',        // 섹션 높이의 2.8배만큼 스크롤
            pin: true,            // 섹션을 뷰포트에 고정
            scrub: 1.2,           // 스크롤과 부드럽게 연동
            anticipatePin: 1,
          },
        });

        // ── 각 카드별 tumble 궤도 ─────────────────
        cards.forEach((card, i) => {
          const el = document.querySelector(`#showcase-card-${card.id}`);
          if (!el) return;

          // 초기 3D 상태 세팅
          gsap.set(el, {
            rotateX: card.startX,
            rotateY: card.startY,
            rotateZ: card.startZ,
            transformPerspective: 900,
            transformOrigin: 'center center',
            opacity: 0,
            y: 60,
          });

          // 카드마다 타임라인 내 시작 오프셋 (stagger 효과)
          const offset = i * 0.08;

          tl.to(el, {
            rotateX: card.endX,
            rotateY: card.endY,
            rotateZ: card.endZ,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'none',
          }, offset);
        });

        // ── 섹션 라벨 페이드인 ─────────────────────
        tl.from('#showcase-label', {
          opacity: 0, y: 30, duration: 0.3,
        }, 0);

        // ── 스크롤 끝부분: 카드들 모두 정렬 ──────────
        cards.forEach((card, i) => {
          const el = document.querySelector(`#showcase-card-${card.id}`);
          if (!el) return;
          tl.to(el, {
            rotateX: 0, rotateY: 0, rotateZ: 0,
            duration: 0.4,
            ease: 'power2.out',
          }, 0.85 + i * 0.04);
        });

      }, '#showcase');   // scope: showcase 섹션 내부만
    });

    onUnmounted(() => {
      // ScrollTrigger 인스턴스 정리
      if (gsapCtx) gsapCtx.revert();
    });

    return { cards };
  },

  template: `
    <section id="showcase" class="showcase">

      <!-- 배경 grain overlay -->
      <div class="showcase-bg"></div>

      <!-- 헤더 -->
      <div id="showcase-label" class="showcase-header">
        <div class="section-label" style="color: #c2f2bb;">
          Scroll to explore
        </div>
        <h2 class="showcase-title">
          Made to<br /><em>move with you</em>
        </h2>
        <p class="showcase-sub">
          언님팩토리의 모든 제품은 움직임 속에서 완성됩니다
        </p>
      </div>

      <!-- 3D 카드 그리드 -->
      <div class="showcase-grid">
        <div
          v-for="card in cards"
          :key="card.id"
          :id="'showcase-card-' + card.id"
          class="showcase-card"
        >
          <!-- 카드 앞면 -->
          <div class="showcase-card-face showcase-card-front"
               :style="{ background: card.gradient }">
            <span class="showcase-symbol">{{ card.symbol }}</span>
            <div class="showcase-card-info">
              <div class="showcase-card-label">{{ card.label }}</div>
              <div class="showcase-card-sub">{{ card.sub }}</div>
            </div>
          </div>

          <!-- 카드 뒷면 (rotateY 180° 지점에서 보임) -->
          <div class="showcase-card-face showcase-card-back">
            <div class="showcase-card-back-text">언님</div>
            <div class="showcase-card-back-sub">UNNIM FACTORY</div>
          </div>
        </div>
      </div>

      <!-- 스크롤 힌트 -->
      <div class="showcase-scroll-hint">
        <div class="scroll-line"></div>
        <span>scroll</span>
      </div>

    </section>
  `,
});
