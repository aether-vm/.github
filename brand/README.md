# Aether Brand Assets & Design System

Authoritative source for the Aether visual identity: logos, icons, and Design Tokens. Other repositories and sites should consume these assets rather than keep private copies.

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="svg/aether-logo-lockup.svg">
    <img alt="AETHER lockup" src="svg/aether-logo-lockup-light.svg" width="480">
  </picture>
</div>

## Directory Layout

```text
brand/
├── svg/      # Vector masters (source of truth)
├── png/      # Raster exports (icons, favicons)
└── tokens/   # Design Tokens: CSS Variables + Tailwind preset
```

## Logo & Icon Specs

### SVG (`svg/`)

| File | Viewbox | Background | Use for |
| :--- | :--- | :--- | :--- |
| `aether-logo.svg` | 512×512 | Transparent | Standalone geometric mark. Place on a surface that gives enough contrast (dark preferred; the darkest ribbon stops are deep indigo). |
| `aether-logo-dark.svg` | 512×512 | Midnight `#0B1020` rounded tile | App icon / avatar, dark edition. Self-contained. |
| `aether-logo-lockup.svg` | 960×320 | Midnight `#0B1020` rounded card | Horizontal lockup (mark + wordmark + tagline). Wordmark is `#F8FAFC`, **designed for dark surfaces; the built-in card makes it safe anywhere**. Use for GitHub Dark Mode. |
| `aether-logo-lockup-light.svg` | 960×320 | Light card `#FFFFFF → #F1F5F9` | Derived lockup for light surfaces (e.g. GitHub Light Mode). Dark wordmark `#0B1020`, accents darkened for contrast; the badge keeps its dark tile. |

> `aether-logo-lockup-light.svg` is a derivative; the original three masters are unchanged.

### PNG (`png/`)

| File | Size | Use for |
| :--- | :--- | :--- |
| `aether-icon-1024.png` / `-512.png` / `-192.png` | 1024 / 512 / 192 | General app icon, store listings, PWA manifest |
| `aether-icon-dark-1024.png` / `-512.png` | 1024 / 512 | Dark edition app icon |
| `aether-apple-touch-icon.png` | 180 | `<link rel="apple-touch-icon">` |
| `aether-favicon-32.png` / `-64.png` | 32 / 64 | Browser favicons |
| `favicon.ico` | 16 / 32 / 48 | Legacy `/favicon.ico` |

> **Fonts:** SVGs reference `Inter` and `JetBrains Mono` with system fallbacks. SVGs loaded via `<img>` (including on GitHub) cannot fetch web fonts, so text renders with the fallback stack. Convert text to outlines for pixel-exact print output.

### Usage Rules

- Keep clear space around the mark of at least 25% of its width.
- Minimum size: 16 px for the mark, 160 px wide for the lockup.
- Do not recolor, stretch, rotate, add effects, or rearrange the lockup.

## Color Palette

| Role | Name | Hex |
| :--- | :--- | :--- |
| Background | Midnight | `#0B1020` |
| Surface | Surface | `#11182B` |
| Execution (primary accent) | Aether Cyan | `#48D8E8` |
| State forking (secondary accent) | Aether Violet | `#8175FF` |

Primary gradient: `linear-gradient(135deg, #48D8E8 0%, #8175FF 100%)`.
Full cyan/violet 50–900 scales, text, status, border, and shadow tokens are in `tokens/aether-design-tokens.css`.

On light backgrounds use `cyan-700` (`#137286`) and `violet-600` (`#4F2DF5`) for text; the canonical cyan `#48D8E8` does not reach WCAG AA contrast on white.

## Design Tokens

### CSS Variables

```html
<link rel="stylesheet" href="/brand/tokens/aether-design-tokens.css">
```

```css
.card {
  background: var(--aether-bg-surface);
  border: 1px solid var(--aether-border-default);
  color: var(--aether-text-primary);
  font-family: var(--aether-font-sans);
}
.cta {
  background: var(--aether-gradient-primary);
  color: var(--aether-text-on-accent);
}
```

Variables are declared on `:root`, `[data-theme="dark"]`, and `.aether-theme-dark` (dark-first). Utility classes such as `.aether-app`, `.aether-surface-card`, `.aether-badge-execution`, and `.aether-badge-forking` are included. RGB channels (`--aether-rgb-*`) support `rgba(var(--aether-rgb-cyan), .3)`.

### Tailwind Preset

```js
// tailwind.config.js
module.exports = {
  presets: [require('./brand/tokens/aether-tailwind-preset.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

```html
<div class="bg-aether-midnight text-aether-cyan border border-aether-border shadow-aether-cyan">
  <h1 class="bg-aether-gradient bg-clip-text text-transparent">Aether</h1>
</div>
```

The preset sets `darkMode: 'class'` and extends `colors.aether.*`, `fontFamily` (`sans`, `mono`), `backgroundImage` (`aether-gradient`, `aether-runtime`), and `boxShadow` (`aether-cyan`, `aether-violet`).

## Trademark & Usage

"Aether", the Aether name, and the Aether logo are trademarks of the Aether project. The Apache-2.0 license of the code in this organization **does not grant** any right to use the name or logo.

- **Permitted without asking:** accurate references to the project (articles, talks, README badges, "works with Aether" integrations) using unmodified assets.
- **Not permitted without written permission:** implying official endorsement or affiliation, using the name or logo in a product, company, or domain name, or using altered/derivative versions.

For permission requests, contact the maintainers via the [`aether-vm`](https://github.com/aether-vm) organization.
