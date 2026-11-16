/**
 * AETHER — Tailwind CSS Theme Preset
 * Drop into `tailwind.config.js` via `presets: [require('./aether-tailwind-preset.js')]`
 */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aether: {
          midnight: '#0B1020',
          surface: '#11182B',
          'surface-raised': '#162038',
          cyan: '#48D8E8',
          violet: '#8175FF',
          border: '#1E2942',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'aether-gradient': 'linear-gradient(135deg, #48D8E8 0%, #8175FF 100%)',
        'aether-runtime': 'linear-gradient(135deg, #48D8E8 0%, #2E62FF 52%, #8175FF 100%)',
      },
      boxShadow: {
        'aether-cyan': '0 0 20px rgba(72, 216, 232, 0.28), 0 0 4px rgba(72, 216, 232, 0.45)',
        'aether-violet': '0 0 20px rgba(129, 117, 255, 0.30), 0 0 4px rgba(129, 117, 255, 0.45)',
      },
    },
  },
};
