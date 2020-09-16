import React from 'react';
import { styled } from '../../stitches.config';

// typography props typescript definitions
export interface TypographyProps {
  variant: 'display' | 'heading' | 'body';
  children: React.ReactNode;
}

// Display text definition
const Display = styled('h1', {
  fontSize: '$display',
  fontWeight: '$bold',
  lineHeight: '$default',
  letterSpacing: '$2',
  color: '$primary',
});

// Heading text definition
const Heading = styled('h1', {
  fontSize: '$heading',
  fontWeight: '$bold',
  lineHeight: '$default',
  letterSpacing: '$4',
  color: '$primary',
});

// Body text definition
const Body = styled('h1', {
  fontSize: '$body',
  fontWeight: '$reg',
  lineHeight: '$default',
  letterSpacing: '$5',
  color: '$primary',
});

// eslint-disable-next-line import/prefer-default-export
export const Typography = ({ variant, children }: TypographyProps) => {
  switch (variant) {
    // display text
    case 'display':
      return <Display>{children}</Display>;

    // heading text
    case 'heading':
      return <Heading>{children}</Heading>;

    // body text
    case 'body':
      return <Body>{children}</Body>;

    // if no case at all, i.e default case
    default:
      return <Display>{children}</Display>;
  }
};
