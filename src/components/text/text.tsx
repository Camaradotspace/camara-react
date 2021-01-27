import * as React from 'react';
import styled from 'styled-components';

export interface TextProps {
  /**
   * Text variant
   */
  variant?: 'heading' | 'sub-heading' | 'body' | 'caption' | 'overline';
  /**
   * Text color
   */
  color?: string;
  /**
   * Children
   */
  children: React.ReactNode;
  level?: number;
}

export const HeadingText = styled.h3<TextProps>`
  font-size: 1.5rem;
`;
export const SubHeadingText = styled.p<TextProps>`
  font-size: 1.25rem;
`;
export const BodyText = styled.p<TextProps>`
  font-size: 1rem;
`;
export const CaptionText = styled.p<TextProps>`
  font-size: 0.75rem;
`;
export const OverlineText = styled.p<TextProps>`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
`;

export const Text = ({ variant, children }: TextProps) => {
  switch (variant) {
    case 'heading':
      return <HeadingText>{children}</HeadingText>;
    case 'sub-heading':
      return <SubHeadingText>{children}</SubHeadingText>;
    case 'body':
      return <BodyText>{children}</BodyText>;
    case 'caption':
      return <CaptionText>{children}</CaptionText>;
    case 'overline':
      return <OverlineText>{children}</OverlineText>;
    default:
      return <BodyText>{children}</BodyText>;
  }
};

Text.defaultProps = {};

Text.displayName = 'TextComponent';
