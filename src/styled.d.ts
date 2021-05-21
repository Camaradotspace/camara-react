// import original module declarations
import 'styled-components';
import {
  breakpoints,
  fontSizes,
  sizes,
  space,
  fontWeights,
  lineHeights,
  letterSpacings,
  fonts,
  radii,
} from 'theme/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    space: typeof space;
    sizes: typeof sizes;
    fonts: typeof fonts;
    radii: typeof radii;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    lineHeights: typeof lineHeights;
    letterSpacings: typeof letterSpacings;
    breakpoints: typeof breakpoints;
    colors: {
      brand: {
        primary: string;
        secondary: string;
        accent: string;
        muted: string;
      };
      ui: {
        primary: string;
        secondary: string;
        tertiary: string;
        border: string;
        disabled: string;
        error: string;
        warning: string;
        success: string;
        unknown: string;
      };
      bg: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        placeholder: string;
        disabled: string;
        inverse: string;
        error: string;
        success: string;
      };
      button: {
        text: string;
        background: string;
        hover: string;
        focus: string;
        pressed: string;
        danger: string;
        dangerHover: string;
        dangerFocus: string;
        dangerPressed: string;
      };
      highlights: {
        primaryHighlight: string;
        primaryExtraHighlight: string;
        bgHighlight: string;
      };
    };
  }
}
