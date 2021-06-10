import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /* Children */
  children: React.ReactNode;
  /* What level should heading be? h1, h2, h3, h4, etc */
  level?: number;
  fontWeight?: string | number;
  textAlign?: 'initial' | 'left' | 'right' | 'center' | 'justify';
}

const StyledH1: any = styled('h1', {
  color: '$text_primary',
});
const StyledH2: any = styled('h2', {
  color: '$text_primary',
});
const StyledH3: any = styled('h3', {
  color: '$text_primary',
});
const StyledH4: any = styled('h4', {
  color: '$text_primary',
});

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  fontWeight,
  textAlign,
}) => {
  switch (level) {
    // for large heading H1
    case 1:
      return (
        <StyledH1 css={{ fontWeight: fontWeight, textAlign: textAlign }}>
          {children}
        </StyledH1>
      );
    // for large heading H2
    case 2:
      return (
        <StyledH2 css={{ fontWeight: fontWeight, textAlign: textAlign }}>
          {children}
        </StyledH2>
      );
    // for large heading H3
    case 3:
      return (
        <StyledH3 css={{ fontWeight: fontWeight, textAlign: textAlign }}>
          {children}
        </StyledH3>
      );
    // for large heading H4
    case 4:
      return (
        <StyledH4 css={{ fontWeight: fontWeight, textAlign: textAlign }}>
          {children}
        </StyledH4>
      );
    // every other case else
    default:
      return (
        <StyledH1 css={{ fontWeight: fontWeight, textAlign: textAlign }}>
          {children}
        </StyledH1>
      );
  }
};

Heading.defaultProps = {
  level: 1,
};

Heading.displayName = 'Heading';
