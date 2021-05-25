// my-theme.ts
import { DefaultTheme } from 'styled-components'
import { lighten, darken } from 'polished'

export const fonts = {
  body: 'Inter, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  heading:
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  monospace:
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,monospace'
}

export const fontSizes = [
  '0.625rem', // 10px
  '0.875', // 14px
  '0.75rem', // 12px
  '1rem', // 16px
  '1.125rem', // 18px
  '1.25rem', // 20px
  '1.5rem', // 24px
  '1.75rem', // 28px
  '2rem', // 32px
  '2.5rem', // 40px
  '3rem' // 48px
]

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
}

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
}

export const letterSpacings = {
  default: 'normal',
  tracked: '0.04em',
  overline: '1.5px'
}

export const radii = ['0.25rem', '0.5rem', '1rem', '1.5rem']

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536]

export const breakpoints = ['40em', '56em', '64em']

const lightTheme: DefaultTheme = {
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  radii,
  colors: {
    brand: {
      primary: '#088845',
      secondary: '#E65F5C',
      accent: '#DB7C00',
      muted: '#C6DAF7'
    },
    ui: {
      primary: '#000000',
      secondary: '#444444',
      tertiary: '#E0E0E0',
      border: '#DADCE0',
      disabled: '#DEDEDE',
      error: '#E22121',
      warning: '#FF9A04',
      success: '#28A745',
      unknown: '#757575'
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      shadow: '2px 4px 8px #DADCE0'
    },
    text: {
      primary: '#000000',
      secondary: '#444444',
      tertiary: '#E0E0E0',
      placeholder: '#708090',
      disabled: '#9C9C9C',
      inverse: '#FFFFFF',
      error: '#E22121',
      success: '#28A745'
    },
    button: {
      text: '#FFFFFF',
      background: '#088845',
      hover: '#01A14E',
      focus: darken(0.1, '#01A14E'),
      pressed: '#017337', // not in use
      danger: '#E22121',
      dangerHover: darken(0.1, '#FF4D4D'),
      dangerFocus: darken(0.2, '#FF4D4D'),
      dangerPressed: '#AD0303' // not in use
    },
    highlights: {
      primaryHighlight: darken(0.1, '#088845'),
      primaryExtraHighlight: darken(0.2, '#088845'),
      bgHighlight: darken(0.1, '#FFFFFF')
    }
  }
}

const darkTheme: DefaultTheme = {
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  radii,
  colors: {
    brand: {
      primary: '#37DAAA',
      secondary: '#E65F5C',
      accent: '#FDB447',
      muted: '#B7CBEA'
    },
    ui: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      tertiary: '#555555',
      border: '#444444',
      disabled: '#242424',
      error: '#E22121',
      warning: '#FF9A04',
      success: '#28A745',
      unknown: '#757575'
    },
    bg: {
      primary: '#111111',
      secondary: '#262626',
      shadow: '#333333'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      tertiary: '#555555',
      placeholder: '#708090',
      disabled: '#525252',
      inverse: '#262626',
      error: '#FF4D4D',
      success: '#1CBD00'
    },
    button: {
      text: '#000000',
      background: '#37DAAA',
      hover: '#28BE92',
      focus: lighten(0.1, '#28BE92'),
      pressed: '#0CB181', // not in use
      danger: '#FF4D4D',
      dangerHover: lighten(0.1, '#E22121'),
      dangerFocus: lighten(0.1, '#FF4D4D'),
      dangerPressed: darken(0.2, '#FF4D4D') // not in use
    },
    highlights: {
      primaryHighlight: lighten(0.1, '#37DAAA'),
      primaryExtraHighlight: lighten(0.2, '#37DAAA'),
      bgHighlight: lighten(0.1, '#111111')
    }
  }
}

export { lightTheme, darkTheme }
