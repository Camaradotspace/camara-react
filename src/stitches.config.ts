// stitches.config.ts
import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $primaryGreen: `#088845`,
      $primaryPaleRed: `#e65f5c`,
      $logoGreen: `#75dd66`,
      $logoYellow: `#ffcc4d`,
      $primary: `#000000`,
      $secondary: `#444444`,
      $tertiary: `#e0e0e0`,
      $statusSuccess: `#28a745`,
      $statusWarning: `#ff9a04`,
      $statusCritical: `#e22121`,
      $statusUnknown: `#757575`,
    },
    space: {
      $1: `0.25rem`, // 4px
      $2: `0.5rem`, // 8px
      $3: `1rem`, // 16px
      $4: `2rem`, // 32px
      $5: `3rem`, // 48px
      $6: `4rem`, // 64px
    },
    fontSizes: {
      $displaySmall: `3rem`, // 48px
      $display: `5rem`, // 80px
      $headingSmall: `1.125rem`, // 18px
      $headingLarge: `1.5rem`, // 24px
      $heading: `2rem`, // 32px
      $bodyTiny: `0.625rem`, // 10px
      $bodySmall: `0.75rem`, // 12px
      $bodyLarge: `1rem`, // 16px
      $body: `0.875rem`, // 14px
      $CTASmall: `0.75rem`, // 12px
      $CTA: `0.875rem`, // 14px
      $labelSmall: `0.75rem`, // 12px
      $label: `0.875rem`, // 14px
      $overline: `0.75rem`, // 12px
      $caption: `0.75rem`, // 12px
    },
    fonts: {
      $display: 'PlusJakartaDisplay, sans-serif',
      $text: 'PlusJakartaText, sans-serif',
    },
    fontWeights: {
      $bold: `bold`,
      $reg: `regular`,
    },
    lineHeights: {
      $default: `1.5`,
    },
    letterSpacings: {
      $1: `-1%`,
      $2: `-2%`,
      $3: `-0.25%`,
      $4: `-0.5%`,
      $5: `auto`,
      $6: `1.5%`,
      $7: `1%`,
    },
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      $1: `0.25rem`, // 4px
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  breakpoints: {
    mobile: (rule) => `@media (min-width: 480px) { ${rule} }`,
    tablet: (rule) => `@media (min-width: 768px) { ${rule} }`,
    laptop: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    desktop: (rule) => `@media (min-width: 1280px) { ${rule} }`,
  },
  utils: {},
});

export const darkTheme = css.theme({
  colors: {
    $primaryGreen: `#37daaa`,
    $primaryPaleRed: `#e65f5c`,
    $logoGreen: `#75dd66`,
    $logoYellow: `#ffcc4d`,
    $primary: `#ffffff`,
    $secondary: `#f5f5f5`,
    $tertiary: `#555555`,
    $statusSuccess: `#28a745`,
    $statusWarning: `#ff9a04`,
    $statusCritical: `#e22121`,
    $statusUnknown: `#757575`,
  },
});
