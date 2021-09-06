import { global } from '../stitches.config';
// import { normalize } from 'polished'

export const globalStyles = global({
  '*, *:before, *:after ': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  html: {
    fontSize: '$4',
    boxSizing: 'border-box',
    background: '$bg_primary',
  },
  body: {
    background: '$bg_primary',
    color: '$text_primary',
    fontFamily: '$body',
    transition: 'all 0.50s linear',
  },
  a: {
    color: '$brand_primary',
    cursor: 'pointer',
  },
});
