import * as React from 'react';
import styled from 'styled-components';
import { tokens } from '../../constants';

const { $2 } = tokens.space;

export interface TextProps {
  /**
   * Text variant
   */
  variant?: 'strong' | 'sub-heading' | 'body' | 'caption' | 'overline';
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

const StrongText = styled.strong``;
const SubHeadingText = styled.p<TextProps>`
  font-size: 1.25rem;
`;
const BodyText = styled.p<TextProps>`
  font-size: 1rem;
  margin: ${$2} 0;
`;
const CaptionText = styled.p<TextProps>`
  font-size: 0.75rem;
`;
const OverlineText = styled.p<TextProps>`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
`;

export const Text = ({ variant, children }: TextProps) => {
  switch (variant) {
    case 'strong':
      return <StrongText>{children}</StrongText>;
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
