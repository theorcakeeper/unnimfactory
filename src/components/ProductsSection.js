// ══════════════════════════════════════════
//  ProductsSection.js
// ══════════════════════════════════════════

import { defineComponent, inject, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

import { translations } from '../useLanguage.js';

export default defineComponent({
  name: 'ProductsSection',

  setup() {
    const { lang, t } = inject('lang');
    const { addToCart } = inject('cart');

    const imgFiles = [
      'images/product-magoja.jpg',
      'images/product-beja.jpg',
      'images/product-bucket-hat.jpg',
      'images/product-shoelaces.jpg',
      'images/product-coasters.jpg',
    ];

    // computed — 언어 바뀌면 tag/name/nameKo 자동 교체
    const products = computed(() =>
      translations['products.items'][lang.value].map((p, i) => ({
        ...p,
        id: i + 1,
        img: imgFiles[i],
      }))
    );

    return { t, products, addToCart };
  },

  template: `
    <section class="products" id="products">
      <div class="products-header reveal">
        <div>
          <div class="section-label">{{ t('products.label') }}</div>
          <h2>{{ t('products.title1') }} <em>{{ t('products.title2') }}</em></h2>
        </div>
        <a href="#" class="btn-text">{{ t('products.viewAll') }}</a>
      </div>

      <div class="products-grid">
        <div
          v-for="(product, i) in products"
          :key="product.id"
          class="product-card product-card--visible"
          :class="'reveal-delay-' + ((i % 4) + 1)"
        >
          <div class="product-img">
            <div class="product-img-inner">
              <img
                class="product-photo"
                :src="product.img"
                :alt="product.name"
                @load="e => e.target.nextElementSibling.style.display = 'none'"
                @error="e => e.target.style.display = 'none'"
              />
              <div class="product-placeholder">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="14" width="44" height="34" rx="2"
                        stroke="currentColor" stroke-width="1.5"/>
                  <circle cx="22" cy="27" r="5"
                          stroke="currentColor" stroke-width="1.5"/>
                  <path d="M8 38 L20 28 L30 36 L40 26 L52 38"
                        stroke="currentColor" stroke-width="1.5" fill="none"/>
                </svg>
                <span>{{ t('products.addImg') }}</span>
              </div>
            </div>
          </div>

          <div class="product-info">
            <div class="product-tag">{{ product.tag }}</div>
            <div class="product-name">{{ product.name }}</div>
            <div class="product-name-ko">{{ product.nameKo }}</div>
            <button class="btn-add-cart" @click="addToCart(product)">
              {{ t('products.addToCart') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
});
