import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /* Heading content */
  children: React.ReactNode;
  /* What level should heading be? h1, h2, h3, h4, etc */
  level?: number;
  /* Should weight be thin? */
  thin?: boolean;
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
  /* Remove vertical spacing on heading */
  noWhiteSpace?: boolean;
}

const baseStyles = {
  color: '$text_primary',
  margin: 0,
  padding: 0,
  fontWeight: '$bold',
};

const StyledH1: any = styled('h1', {
  ...baseStyles,
});
const StyledH2: any = styled('h2', {
  ...baseStyles,
});
const StyledH3: any = styled('h3', {
  ...baseStyles,
});
const StyledH4: any = styled('h4', {
  ...baseStyles,
});

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  textAlign,
  fontWeight,
  color,
  noWhiteSpace,
  thin,
  css,
}) => {
  const ADDITIONAL_PROPS = {
    fontWeight: thin ? 300 : fontWeight,
    textAlign: textAlign,
    color: color,
    my: noWhiteSpace ? 0 : '$2',
  };

  switch (level) {
    // for large heading H1
    case 1:
      return (
        <StyledH1 css={{ ...ADDITIONAL_PROPS, ...css }}>{children}</StyledH1>
      );
    // for large heading H2
    case 2:
      return (
        <StyledH2 css={{ ...ADDITIONAL_PROPS, ...css }}>{children}</StyledH2>
      );
    // for large heading H3
    case 3:
      return (
        <StyledH3 css={{ ...ADDITIONAL_PROPS, ...css }}>{children}</StyledH3>
      );
    // for large heading H4
    case 4:
      return (
        <StyledH4 css={{ ...ADDITIONAL_PROPS, ...css }}>{children}</StyledH4>
      );
    // every other case else
    default:
      return (
        <StyledH1 css={{ ...ADDITIONAL_PROPS, ...css }}>{children}</StyledH1>
      );
  }
};

Heading.defaultProps = {
  level: 1,
  textAlign: 'left',
  fontWeight: 'bold',
};

Heading.displayName = 'Heading';
