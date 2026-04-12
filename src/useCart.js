// ══════════════════════════════════════════
//  useCart.js — Global Cart State
//  App.js에서 provide('cart', ...)로 공유
//  NavBar, ProductsSection에서 inject('cart')
// ══════════════════════════════════════════

import { ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export function createCart() {
  const cartItems = ref([]);

  const addToCart = (product) => {
    const existing = cartItems.value.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cartItems.value.push({ ...product, qty: 1 });
    }
  };

  const cartCount = computed(() =>
    cartItems.value.reduce((sum, i) => sum + i.qty, 0)
  );

  const hasItems = computed(() => cartCount.value > 0);

  return { cartItems, addToCart, cartCount, hasItems };
}
