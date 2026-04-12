// ══════════════════════════════════════════
//  PaletteStrip.js — Brand Color Swatches
// ══════════════════════════════════════════

import { defineComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'PaletteStrip',

  setup() {
    const swatches = [
      { hex: '#000000', label: '#000000', textColor: 'white'                  },
      { hex: '#ffffff', label: '#ffffff', textColor: '#999', border: '#eee'   },
      { hex: '#c2f2bb', label: '#c2f2bb', textColor: '#333'                   },
      { hex: '#8da686', label: '#8da686', textColor: '#333'                   },
      { hex: '#4d594a', label: '#4d594a', textColor: 'rgba(255,255,255,0.7)'  },
      { hex: '#594a45', label: '#594a45', textColor: 'rgba(255,255,255,0.7)'  },
    ];

    return { swatches };
  },

  template: `
    <div class="palette reveal">
      <div
        v-for="swatch in swatches"
        :key="swatch.hex"
        class="palette-swatch"
        :style="{
          background: swatch.hex,
          border: swatch.border ? '1px solid ' + swatch.border : undefined,
        }"
      >
        <span :style="{ color: swatch.textColor }">{{ swatch.label }}</span>
      </div>
    </div>
  `,
});
