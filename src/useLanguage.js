// ══════════════════════════════════════════
//  useLanguage.js — Global Language State
//
//  Vue의 provide / inject 패턴을 사용해
//  언어 상태(ref)를 App에서 provide하고
//  모든 자식 컴포넌트에서 inject로 받음
//
//  사용법:
//    App.js      → provide('lang', lang)
//    컴포넌트    → const { lang, t } = inject('lang')
//                  t('hero.title') 형태로 번역 텍스트 호출
// ══════════════════════════════════════════

import { ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// ── 번역 데이터 ─────────────────────────────────────────────────
export const translations = {

  // ── NAV ──────────────────────────────────────────────────────
  'nav.about':      { en: 'About',      ko: '브랜드 소개' },
  'nav.collection': { en: 'Collection', ko: '컬렉션'      },
  'nav.heritage':   { en: 'Heritage',   ko: '헤리티지'    },
  'nav.contact':    { en: 'My Page',    ko: '마이페이지'    },
  'nav.shop':       { en: 'Shop Now',    ko: '쇼핑하기'    },
  'nav.checkout':   { en: 'Checkout',   ko: '결제하기'    },

  // ── HERO ─────────────────────────────────────────────────────
  'hero.eyebrow':   { en: 'K-Heritage Brand · Since 2022', ko: 'K-헤리티지 브랜드 · 2022년 창립' },
  'hero.title1':    { en: 'Rooted in',                     ko: '전통에 뿌리를'                  },
  'hero.title2':    { en: 'tradition,',                    ko: '두고,'                          },
  'hero.title3':    { en: 'worn today.',                   ko: '오늘을 입다.'                   },
  'hero.subtitle':  { en: '언님 · Like a dear older sister', ko: '언님 · 언니처럼 곁에'         },
  'hero.desc':      {
    en: 'Unnim Factory weaves Korean heritage into everyday life— where embroidered Yangdan silk meets minimalist silhouettes, and ancient wisdom becomes something you can wear.',
    ko: '언님팩토리는 한국의 헤리티지를 일상 속으로 끌어옵니다. 양단 자수 실크와 미니멀한 실루엣이 만나고, 오래된 지혜가 당신이 입을 수 있는 무언가가 됩니다.',
  },
  'hero.cta1':      { en: 'Explore Collection', ko: '컬렉션 보기' },
  'hero.cta2':      { en: 'Our Story →',        ko: '브랜드 스토리 →' },
  'hero.right':     { en: 'Wearing tradition is\nremembering your roots.', ko: '전통을 입는다는 것은\n뿌리를 기억하는 것입니다' },
  'hero.scroll':    { en: 'Scroll', ko: '스크롤' },

  // ── MARQUEE ──────────────────────────────────────────────────
  'marquee.items': {
    en: ['K-Heritage', 'Sisterhood', 'Yangdan Silk', '언님팩토리', 'Magoja Jacket', 'Eco Craft', '건곤감리', 'Korean Craft', 'Modern Heritage'],
    ko: ['K-헤리티지', '자매애', '양단 실크', '언님팩토리', '마고자 재킷', '친환경 공예', '건곤감리', '한국 공예', '현대 헤리티지'],
  },

  // ── VALUES ───────────────────────────────────────────────────
  'values.label':  { en: 'Core Values',              ko: '핵심 가치'                   },
  'values.title1': { en: 'We derive our power from', ko: '우리의 힘은'                  },
  'values.title2': { en: 'Root Strengths',            ko: '뿌리의 힘에서'               },
  'values.intro':  {
    en: 'Unnim — Dear Older Sister. A name that carries warmth, guidance, and the promise of a hand always extended toward those in need.',
    ko: '언님 — 사랑하는 언니. 따뜻함과 이끌어줌, 그리고 도움이 필요한 이에게 언제나 내밀어지는 손의 약속을 담은 이름.',
  },
  'values.cards': {
    en: [
      { num: '01', title: 'Ancestral Wisdom',    desc: 'We embed 건곤감리 (Heaven, Earth, Water, Fire) into our designs— offering not just a product, but the wisdom of the universe.' },
      { num: '02', title: 'Modernist Utility',   desc: 'Complex traditional symbols deconstructed into minimalist geometric forms that resonate with a global, contemporary aesthetic.' },
      { num: '03', title: 'Nurturing Connection',desc: 'Our name is our promise: protection and peace, acting as a portable home or sanctuary for every wearer.' },
      { num: '04', title: 'Sustainability',      desc: 'Leftover fabric scraps become handmade coasters and accessories. Warmth that extends beyond our fabrics—and our footprint.' },
    ],
    ko: [
      { num: '01', title: '조상의 지혜',   desc: '건곤감리(하늘·땅·물·불)를 디자인에 담아 단순한 제품이 아닌 우주의 지혜를 전달합니다.' },
      { num: '02', title: '현대적 실용성', desc: '복잡한 전통 문양을 미니멀한 기하학적 형태로 해석해 글로벌 감각과 공명합니다.' },
      { num: '03', title: '연결의 온기',   desc: '우리의 이름이 곧 약속입니다. 보호와 평화, 착용자에게 이동식 집이자 안식처가 됩니다.' },
      { num: '04', title: '지속가능성',    desc: '남은 원단 조각으로 코스터 등 핸드메이드 소품을 만듭니다. 따뜻함은 옷감을 넘어 지구로 이어집니다.' },
    ],
  },

  // ── PRODUCTS ─────────────────────────────────────────────────
  'products.label':   { en: 'Collection',  ko: '컬렉션'      },
  'products.title1':  { en: 'Wear the',    ko: '헤리티지를'  },
  'products.title2':  { en: 'heritage',    ko: '입다'        },
  'products.viewAll': { en: 'TOP ↑',  ko: '위로 가기 ↑' },
  'products.addImg':     { en: 'Add image',      ko: '이미지를 추가하세요' },
  'products.addToCart':  { en: 'Add to Cart',    ko: '장바구니 담기'       },
  'products.items': {
    en: [
      { tag: 'Heritage Outerwear', name: 'Magoja Jacket',   nameKo: '마고자 재킷'      },
      { tag: 'Accessories',        name: 'Beja Vest',      nameKo: '배자 조끼'   },
      { tag: 'Heritage Outerwear', name: 'Bucket Hat',       nameKo: '건곤감리 자수 버킷햇'        },
      { tag: 'Accessories',        name: 'Shoelaces',       nameKo: '우주를 담은 신발끈'         },
      { tag: 'Eco Craft',          name: 'Silk Pouch', nameKo: '우리 양단 파우치'        },
    ],
    ko: [
      { tag: '헤리티지 아우터',  name: '마고자 재킷',   nameKo: 'K-Heritage 겨울 재킷'      },
      { tag: '액세서리',         name: '배자 조끼',        nameKo: 'K-Heritage 겨울 조끼'         },
      { tag: '헤리티지 아우터',  name: '건곤감리 버킷햇',     nameKo: '우주를 담은 버킷햇'           },
      { tag: '액세서리',         name: '건곤감리 신발끈',        nameKo: '우주를 담은 신발끈'              },
      { tag: '친환경 공예',      name: '우리 양단 파우치', nameKo: '우리 양단 파우치'         },
    ],
  },

  // ── STORY ────────────────────────────────────────────────────
  'story.label':  { en: 'Our Story',                              ko: '브랜드 스토리'                },
  'story.title1': { en: 'From boutique craft shop to',            ko: '작은 수공예 공방에서'          },
  'story.title2': { en: 'powerhouse brand',                       ko: '파워하우스 브랜드로'           },
  'story.p1':     {
    en: 'Unnim Factory began as a small studio with a deep conviction: that Korean textile heritage deserves a place in modern daily life. The name "Unnim"—dear older sister—was chosen to honor the women whose support made everything possible.',
    ko: '언님팩토리는 작은 스튜디오에서 시작했습니다. 한국 섬유 헤리티지가 현대 일상 속에 자리해야 한다는 깊은 확신과 함께. "언님"이라는 이름은 브랜드 창립을 가능하게 해준 수많은 여성들에게 경의를 표하기 위해 선택되었습니다.',
  },
  'story.p2':     {
    en: 'We believe true design must be both beautiful and practical. Every stitch, every silhouette, every scrap of Yangdan silk carries a story of identity reclaimed and warmth extended.',
    ko: '진정한 디자인은 아름다우면서도 실용적이어야 한다고 믿습니다. 모든 스티치, 모든 실루엣, 모든 양단 조각에는 되찾은 정체성과 전해진 따뜻함의 이야기가 담겨 있습니다.',
  },
  'story.stats': {
    en: [
      { num: '80',   label: 'Magojas Donated\nto Single Mothers' },
      { num: '100%', label: 'Fabric Scraps\nUpcycled'            },
      { num: '∞',    label: 'Sisters\nSupported'                 },
    ],
    ko: [
      { num: '80',   label: '한부모 가정에\n마고자 기부'  },
      { num: '100%', label: '원단 자투리\n업사이클링'    },
      { num: '∞',    label: '함께하는\n언님들'           },
    ],
  },

  // ── HERITAGE ─────────────────────────────────────────────────
  'heritage.label':  { en: 'K-Heritage',        ko: 'K-헤리티지'       },
  'heritage.title1': { en: 'Rooted in history,', ko: '역사에 뿌리를 두고,' },
  'heritage.title2': { en: 'worn for today',     ko: '오늘을 위해 입다'    },
  'heritage.desc':   {
    en: 'We derive our power from the "Root Strengths" of Korean history— utilizing authentic materials like embroidered silk (Yangdan) and traditional silhouettes like the Magoja, reinterpreted for the world stage.',
    ko: '우리는 한국 역사의 "뿌리의 힘"에서 우리의 힘을 이끌어냅니다. 양단 자수 실크 같은 정통 소재와 마고자 같은 전통 실루엣을 세계 무대에 맞게 재해석합니다.',
  },
  'heritage.items': {
    en: [
      { icon: '⊞', title: 'Yangdan Silk',    desc: 'Embroidered silk, handwoven with patterns that carry the memory of Joseon court culture into contemporary outerwear.' },
      { icon: '◎', title: '건곤감리',        desc: 'Heaven · Earth · Water · Fire. The four trigrams of the cosmos embedded into every design as invisible wisdom.' },
      { icon: '가', title: 'Hangul Identity', desc: 'We prioritize Hangul to reclaim our cultural identity in a globalized market—언님 as a mark, not just a name.' },
      { icon: '◻', title: 'Geometric Form',  desc: 'Traditional symbols deconstructed into minimalist circles and squares—bold discriminators in a global aesthetic.' },
    ],
    ko: [
      { icon: '⊞', title: '양단 실크',   desc: '조선 궁중 문화의 기억을 담아 손으로 짠 자수 실크. 현대적인 아우터웨어로 이어집니다.' },
      { icon: '◎', title: '건곤감리',    desc: '하늘·땅·물·불. 우주의 네 괘를 모든 디자인 속에 보이지 않는 지혜로 담습니다.' },
      { icon: '가', title: '한글 정체성', desc: '세계화된 시장에서 문화적 정체성을 되찾기 위해 한글을 우선합니다. 언님은 단순한 이름이 아닌 표식입니다.' },
      { icon: '◻', title: '기하학적 형태', desc: '전통 문양을 미니멀한 원과 사각형으로 해체하여 글로벌 시장에서 강렬한 식별자가 됩니다.' },
    ],
  },

  // ── CTA ──────────────────────────────────────────────────────
  'cta.label':  { en: 'Start Shopping',   ko: '쇼핑 시작하기'          },
  'cta.title1': { en: 'Wear the',         ko: '헤리티지를'             },
  'cta.title2': { en: 'heritage',         ko: '입다'                  },
  'cta.desc':   {
    en: 'Create an account to explore our collection, save your favourites, and bring Korean heritage into your everyday life.',
    ko: '계정을 만들고 컬렉션을 둘러보며, 마음에 드는 아이템을 저장하고 한국 헤리티지를 일상으로 가져오세요.',
  },
  'cta.signup': { en: 'Create Account',   ko: '회원가입'               },
  'cta.signin': { en: 'Sign In →',        ko: '로그인 →'              },

  // ── FOOTER ───────────────────────────────────────────────────
  'footer.rights':   { en: '© 2026 Unnim Factory. All rights reserved.', ko: '© 2026 모든 권리는 언님팩토리에 있습니다.' },
};

// ── 언어 상태 생성 함수 (App.js에서 호출) ─────────────────────────
export function createLanguage() {
  const lang = ref('en');

  // t('key') → 현재 언어의 번역 문자열 반환
  const t = (key) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang.value] ?? entry['en'];
  };

  const toggle = () => {
    lang.value = lang.value === 'en' ? 'ko' : 'en';
  };

  return { lang, t, toggle };
}
