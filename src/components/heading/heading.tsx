import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /* Heading content */
  children: React.ReactNode;
  /* What level should heading be? h1, h2, h3, h4, etc */
  level?: number;
  /* What font weight should heading be? */
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | number
    | 'initial'
    | 'inherit';
  /* How should the heading text be aligned? */
  textAlign?: 'initial' | 'left' | 'right' | 'center' | 'justify';
  /* What color should the heading text be? */
  color?: string;
}

const baseStyles = {
  color: '$text_primary',
  margin: 0,
  padding: 0,
  my: '$2',
  fontWeight: '$bold',
};

const StyledH1 = styled('h1', {
  ...baseStyles,
});
const StyledH2 = styled('h2', {
  ...baseStyles,
});
const StyledH3 = styled('h3', {
  ...baseStyles,
});
const StyledH4 = styled('h4', {
  ...baseStyles,
});

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  textAlign,
  fontWeight,
  color,
}) => {
  const ADDITIONAL_PROPS = {
    fontWeight: fontWeight,
    textAlign: textAlign,
    color: color,
  };

  switch (level) {
    // for large heading H1
    case 1:
      return <StyledH1 css={{ ...ADDITIONAL_PROPS }}>{children}</StyledH1>;
    // for large heading H2
    case 2:
      return <StyledH2 css={{ ...ADDITIONAL_PROPS }}>{children}</StyledH2>;
    // for large heading H3
    case 3:
      return <StyledH3 css={{ ...ADDITIONAL_PROPS }}>{children}</StyledH3>;
    // for large heading H4
    case 4:
      return <StyledH4 css={{ ...ADDITIONAL_PROPS }}>{children}</StyledH4>;
    // every other case else
    default:
      return <StyledH1 css={{ ...ADDITIONAL_PROPS }}>{children}</StyledH1>;
  }
};

Heading.defaultProps = {
  level: 1,
  textAlign: 'left',
  fontWeight: 'bold',
};

Heading.displayName = 'Heading';
