// stitches.config.ts
import { createCss } from '@stitches/react'
import { lighten, darken } from 'polished'

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    prefix: 'camara',
    theme: {
      colors: {
        brand_primary: '#088845',
        brand_secondary: '#E65F5C',
        brand_accent: '#DB7C00',
        brand_muted: '#C6DAF7',
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
        bg_secondary: '#F5F5F5',
        bg_shadow: '2px 4px 8px #DADCE0',
        text_primary: '#000000',
        text_secondary: '#444444',
        text_tertiary: '#E0E0E0',
        text_placeholder: '#708090',
        text_disabled: '#9C9C9C',
        text_inverse: '#FFFFFF',
        text_error: '#E22121',
        text_success: '#28A745',
        button_text: '#FFFFFF',
        button_background: '#088845',
        button_hover: '#01A14E',
        button_focus: darken(0.1, '#01A14E'),
        button_pressed: '#017337', // not in use
        button_danger: '#E22121',
        button_dangerHover: darken(0.1, '#FF4D4D'),
        button_dangerFocus: darken(0.2, '#FF4D4D'),
        button_dangerPressed: '#AD0303', // not in use
        primaryHighlight: darken(0.1, '#088845'),
        primaryExtraHighlight: darken(0.2, '#088845'),
        bgHighlight: darken(0.1, '#FFFFFF'),
        bgHighlightHover: darken(0.2, '#FFFFFF')
      },
      fonts: {
        body: 'Inter, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
        heading:
          '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
        mono: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,monospace'
      },
      fontSizes: {
        1: '0.625rem', // 10px
        2: '0.75rem', // 12px
        3: '0.875', // 14px
        4: '1rem', // 16px
        5: '1.125rem', // 18px
        6: '1.25rem', // 20px
        7: '1.5rem', // 24px
        8: '1.75rem', // 28px
        9: '2rem', // 32px
        10: '2.5rem', // 40px
        11: '3rem' // 48px
      },
      fontWeights: {
        regular: 400,
        medium: 500,
        bold: 700
      },
      lineHeights: {
        solid: 1,
        title: 1.25,
        copy: 1.5
      },
      letterSpacings: {
        default: 'normal',
        tracked: '0.04em',
        overline: '1.5px'
      },
      space: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px'
      },
      sizes: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px'
      },
      radii: {
        1: '2px',
        2: '4px',
        3: '8px',
        4: '16px',
        round: '9999px'
      },
      borderWidths: { 1: '1px' },
      borderStyles: {},
      shadows: { bg_shadow: '2px 4px 8px #DADCE0' },
      zIndices: {},
      transitions: {}
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)'
    },
    utils: {
      // Abbreviated margin properties
      m: () => (value) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value
      }),
      mt: () => (value) => ({
        marginTop: value
      }),
      mr: () => (value) => ({
        marginRight: value
      }),
      mb: () => (value) => ({
        marginBottom: value
      }),
      ml: () => (value) => ({
        marginLeft: value
      }),
      mx: () => (value) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: () => (value) => ({
        marginTop: value,
        marginBottom: value
      }),

      // Abbreviated padding properties
      p: () => (value) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value
      }),
      pt: () => (value) => ({
        paddingTop: value
      }),
      pr: () => (value) => ({
        paddingRight: value
      }),
      pb: () => (value) => ({
        paddingBottom: value
      }),
      pl: () => (value) => ({
        paddingLeft: value
      }),
      px: () => (value) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: () => (value) => ({
        paddingTop: value,
        paddingBottom: value
      }),

      // A property for applying width/height together
      size: () => (value) => ({
        width: value,
        height: value
      }),

      // An abbreviated property for border-radius
      br: () => (value) => ({
        borderRadius: value
      }),
      // An abbreviated property for background color
      bg: () => (value) => ({
        backgroundColor: value
      })
    }
  })

export const DARK_THEME = theme('dark-theme', {
  shadows: { bg_shadow: '2px 4px 8px #333333' },
  colors: {
    brand_primary: '#37DAAA',
    brand_secondary: '#E65F5C',
    brand_accent: '#FDB447',
    brand_muted: '#B7CBEA',
    ui_primary: '#FFFFFF',
    ui_secondary: '#F5F5F5',
    ui_tertiary: '#555555',
    ui_border: '#444444',
    ui_disabled: '#242424',
    ui_error: '#E22121',
    ui_warning: '#FF9A04',
    ui_success: '#28A745',
    ui_unknown: '#757575',
    bg_primary: '#111111',
    bg_secondary: '#262626',
    bg_shadow: '#333333',
    text_primary: '#FFFFFF',
    text_secondary: '#F5F5F5',
    text_tertiary: '#555555',
    text_placeholder: '#708090',
    text_disabled: '#525252',
    text_inverse: '#262626',
    text_error: '#FF4D4D',
    text_success: '#1CBD00',
    button_text: '#000000',
    button_background: '#37DAAA',
    button_hover: '#28BE92',
    button_focus: lighten(0.1, '#28BE92'),
    button_pressed: '#0CB181', // not in use
    button_danger: '#FF4D4D',
    button_dangerHover: lighten(0.1, '#E22121'),
    button_dangerFocus: lighten(0.1, '#FF4D4D'),
    button_dangerPressed: darken(0.2, '#FF4D4D'), // not in use
    primaryHighlight: lighten(0.1, '#37DAAA'),
    primaryExtraHighlight: lighten(0.2, '#37DAAA'),
    bgHighlight: lighten(0.1, '#111111'),
    bgHighlightHover: lighten(0.2, '#111111')
  }
})
