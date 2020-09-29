// eslint-disable-next-line no-use-before-define
import React from 'react';
import { styled } from '../../stitches.config';

// typography props typescript definitions
export interface TypographyProps {
  variant?: 'display' | 'heading' | 'body';
  size?: 'tiny' | 'small' | 'large';
  children: React.ReactNode;
}

// Display text definition
const Display = styled('h1', {
  fontSize: '$display',
  fontWeight: '$bold',
  lineHeight: '$default',
  letterSpacing: '$2',
  color: '$primary',
  // display text variants
  variants: {
    size: {
      // for tiny sized option
      tiny: {},

      // for small sized option
      small: {
        fontSize: '$displaySmall',
        letterSpacing: '$1',
      },

      // for large sized option
      large: {},
    },
  },
});

// Heading text definition
const Heading = styled('h1', {
  fontSize: '$heading',
  fontWeight: '$bold',
  lineHeight: '$default',
  letterSpacing: '$4',
  color: '$primary',
  // display text variants
  variants: {
    size: {
      // for tiny sized option
      tiny: {},

      // for small sized option
      small: {
        fontSize: '$headingSmall',
        letterSpacing: '$3',
      },

      // for large sized option
      large: {
        fontSize: '$headingLarge',
        letterSpacing: '$3',
      },
    },
  },
});

// Body text definition
const Body = styled('h1', {
  fontSize: '$body',
  fontWeight: '$reg',
  lineHeight: '$default',
  letterSpacing: '$5',
  color: '$primary',
  // display text variants
  variants: {
    size: {
      // for tiny sized option
      tiny: {
        fontSize: '$bodyTiny',
        letterSpacing: '$5',
      },

      // for small sized option
      small: {
        fontSize: '$bodySmall',
        letterSpacing: '$5',
      },

      // for large sized option
      large: {
        fontSize: '$bodyLarge',
        letterSpacing: '$5',
      },
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export const Typography = ({ variant, size, children }: TypographyProps) => {
  switch (variant) {
    // display text
    case 'display':
      return <Display size={size}>{children}</Display>;

    // heading text
    case 'heading':
      return <Heading size={size}>{children}</Heading>;

    // body text
    case 'body':
      return <Body size={size}>{children}</Body>;

    // if no case at all, i.e default case
    default:
      return <Display size={size}>{children}</Display>;
  }
};
