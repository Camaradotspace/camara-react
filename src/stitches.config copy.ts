// stitches.config.ts
import { createCss } from '@stitches/react';
import { lighten, darken } from 'polished';

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  prefix: 'camara',
  theme: {
    colors: {
      brand_primary: '#1a73e8',
      // brand_secondary: '#E65F5C',
      // brand_accent: '#DB7C00',
      // brand_muted: '#C6DAF7',
      ui_primary: '#000000',
      ui_secondary: '#444444',
      ui_tertiary: '#E0E0E0',
      ui_border: '#DADCE0',
      ui_disabled: '#DEDEDE',
      ui_error: '#E22121',
      ui_warning: '#FF9A04',
      ui_success: '#28A745',
      ui_unknown: '#757575',
      bg_primary: '#FFFFFF',
      bg_secondary: '#F8F8F8',
      // link_text: '#088845',
      // link_secondary: '#707070',
      // link_hover: lighten(0.1, '#088845'),
      text_primary: '#000000',
      text_secondary: '#888',
      text_tertiary: '#E0E0E0',
      text_placeholder: '#708090',
      //  text_disabled: '#9C9C9C',
      text_inverse: '#FFFFFF',
      //  text_error: '#E22121',
      //  text_success: '#28A745',
      //  primary button styles
      button_primary_bg: '#1a73e8',
      button_primary_text: '#FFFFFF',
      button_primary_bg_hover: '#185abc',
      button_primary_bg_focus: '#185abc',
      button_primary_border_focus: '#fff',
      button_primary_bg_active: '#185abc',
      button_primary_border_active: 'transparent',
      // secondary button styles
      button_secondary_bg: '#e8f0fe',
      button_secondary_text: '#1967d2',
      button_secondary_bg_hover: '#e0ebfc',
      button_secondary_text_hover: '#174ea6',
      button_secondary_bg_focus: '#e0ebfc',
      button_secondary_text_focus: '#174ea6',
      button_secondary_bg_active: '#d3e2fa',
      button_secondary_text_active: '#174ea6',
      button_secondary_border_active: 'transparent',
      // tertiary button styles
      button_tertiary_bg: '#fff',
      button_tertiary_text: '#1a73e8',
      button_tertiary_border: '#dadce0',
      button_tertiary_bg_hover: '#f4f8fe',
      button_tertiary_border_hover: '#1a73e8',
      button_tertiary_border_focus: '#1a73e8',
      button_tertiary_bg_active: '#e8f0fe',
      button_tertiary_border_active: '#1a73e8',

      //  button_secondary: '#e7fef2',
      //  btn_sec_hover: darken(0.05, '#e7fef2'),
      //  button_hover: '#01A14E',
      //  button_focus: darken(0.1, '#01A14E'),
      //  button_pressed: '#017337', // not in use
      button_danger: '#E22121',
      button_dangerHover: darken(0.1, '#FF4D4D'),
      button_dangerFocus: darken(0.2, '#FF4D4D'),
      button_danger_sec_hover: lighten(0.4, '#E22121'),
      primaryHighlight: darken(0.1, '#088845'),
      primaryExtraHighlight: darken(0.2, '#088845'),
      bgHighlight: darken(0.1, '#FFFFFF'),
      bgHighlightHover: darken(0.2, '#FFFFFF'),
    },
    fonts: {
      body:
        'Inter, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      heading:
        '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      mono:
        '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,monospace',
    },
    fontSizes: {
      1: '0.625rem', // 10px
      2: '0.75rem', // 12px
      3: '0.875rem', // 14px
      4: '1rem', // 16px
      5: '1.125rem', // 18px
      6: '1.25rem', // 20px
      7: '1.5rem', // 24px
      8: '1.75rem', // 28px
      9: '2rem', // 32px
      10: '2.5rem', // 40px
      11: '3rem', // 48px
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      solid: 1,
      title: 1.25,
      copy: 1.5,
    },
    letterSpacings: {
      default: 'normal',
      tracked: '0.04em',
      overline: '1.5px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '64px',
      7: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      round: '9999px',
    },
    borderWidths: { 1: '1px' },
    borderStyles: {},
    shadows: {
      bg_shadow: '1px 2px 4px 2px #DADCE0',
      // primary button shadows
      button_primary_shadow_hover:
        '0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)',
      button_primary_shadow_focus: '0 0 0 2px #185abc',
      button_primary_shadow_active:
        '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
      // secondary button shadows
      button_secondary_shadow_hover:
        '0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
      button_secondary_shadow_focus: '0 0 0 2px #1a73e8',
      button_secondary_shadow_active:
        '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
      // tertiary button shadows
      button_tertiary_shadow: 'none',
      button_tertiary_shadow_focus: 'none',
      button_tertiary_shadow_active: '0 0 0 1px #1a73e8',
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    // Abbreviated margin properties
    m: () => (
      value
      // :
      // | `$${Extract<keyof typeof config.theme['space'], string | number>}`
      // | string
      // | number
    ) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => value => ({
      marginTop: value,
    }),
    mr: () => value => ({
      marginRight: value,
    }),
    mb: () => value => ({
      marginBottom: value,
    }),
    ml: () => value => ({
      marginLeft: value,
    }),
    mx: () => value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => value => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    p: () => value => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: () => value => ({
      paddingTop: value,
    }),
    pr: () => value => ({
      paddingRight: value,
    }),
    pb: () => value => ({
      paddingBottom: value,
    }),
    pl: () => value => ({
      paddingLeft: value,
    }),
    px: () => value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => value => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: () => value => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: () => value => ({
      borderRadius: value,
    }),
    // An abbreviated property for background color
    bg: () => value => ({
      backgroundColor: value,
    }),
  },
});

export const DARK_THEME = theme('dark-theme', {
  shadows: {
    bg_shadow: '1px 1.5px 3px #000',
    // primary button shadows
    button_primary_shadow_hover:
      '0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)',
    button_primary_shadow_focus: '0 0 0 2px #185abc',
    button_primary_shadow_active:
      '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
    // secondary button shadows
    button_secondary_shadow_hover:
      '0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
    button_secondary_shadow_focus: '0 0 0 2px #1a73e8',
    button_secondary_shadow_active:
      '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)',
    // tertiary button shadows
    button_tertiary_shadow: 'none',
    button_tertiary_shadow_focus: 'none',
    button_tertiary_shadow_active: '0 0 0 1px #1a73e8',
  },
  colors: {
    brand_primary: '#37DAAA',
    // brand_secondary: '#E65F5C',
    // brand_accent: '#FDB447',
    // brand_muted: '#B7CBEA',
    ui_primary: '#FFFFFF',
    ui_secondary: '#F5F5F5',
    ui_tertiary: '#555555',
    ui_border: '#444444',
    ui_disabled: '#242424',
    ui_error: '#E22121',
    ui_warning: '#FF9A04',
    ui_success: '#28A745',
    ui_unknown: '#757575',
    bg_primary: '#121212',
    bg_secondary: '#272727',
    // link_text: '#37DAAA',
    // link_secondary: '#DADCE0',
    // link_hover: lighten(0.1, '#37DAAA'),
    text_primary: '#FFFFFF',
    text_secondary: '#F5F5F5',
    text_tertiary: '#555555',
    text_placeholder: '#708090',
    // text_disabled: '#525252',
    text_inverse: '#262626',
    // text_error: '#FF4D4D',
    // text_success: '#1CBD00',
    //  primary button styles
    button_primary_bg: '#1a73e8',
    button_primary_text: '#FFFFFF',
    button_primary_bg_hover: '#185abc',
    button_primary_bg_focus: '#185abc',
    button_primary_border_focus: '#fff',
    button_primary_bg_active: '#185abc',
    button_primary_border_active: 'transparent',
    // secondary button styles
    button_secondary_bg: '#e8f0fe',
    button_secondary_text: '#1967d2',
    button_secondary_bg_hover: darken(0.3, 'hsla(149, 89%, 70%, 0.14)'),
    button_secondary_text_hover: '#174ea6',
    button_secondary_bg_focus: '#e0ebfc',
    button_secondary_text_focus: '#174ea6',
    button_secondary_bg_active: '#d3e2fa',
    button_secondary_text_active: '#174ea6',
    button_secondary_border_active: 'transparent',
    // tertiary button styles
    button_tertiary_bg: '#fff',
    button_tertiary_text: '#1a73e8',
    button_tertiary_border: '#dadce0',
    button_tertiary_bg_hover: '#f4f8fe',
    button_tertiary_border_hover: '#1a73e8',
    button_tertiary_border_focus: '#1a73e8',
    button_tertiary_bg_active: '#e8f0fe',
    button_tertiary_border_active: '#1a73e8',
    // button_secondary: 'hsla(149, 89%, 70%, 0.14)',
    // btn_sec_hover: darken(0.3, 'hsla(149, 89%, 70%, 0.14)'),
    // button_hover: '#28BE92',
    // button_focus: lighten(0.1, '#28BE92'),
    // button_pressed: '#0CB181', // not in use
    button_danger: '#FF4D4D',
    button_dangerHover: lighten(0.1, '#E22121'),
    button_dangerFocus: lighten(0.1, '#FF4D4D'),
    button_danger_sec_hover: darken(0.55, '#FF4D4D'), // not in use
    primaryHighlight: lighten(0.1, '#37DAAA'),
    primaryExtraHighlight: lighten(0.2, '#37DAAA'),
    bgHighlight: lighten(0.1, '#111111'),
    bgHighlightHover: lighten(0.2, '#111111'),
  },
});
