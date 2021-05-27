import css from '@styled-system/css';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  color,
  compose,
  layout,
  space,
  typography,
  variant,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface TextProps
  extends TypographyProps,
    ColorProps,
    SpaceProps,
    LayoutProps {
  variant?: 'hint' | 'label' | 'body' | 'caption' | 'overline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  /* Should text be inline */
  inline?: boolean;
  /* Should text be underlined */
  underline?: boolean;
  /* Should text be strike-through? */
  strike?: boolean;
}

const baseTextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 'copy',
  color: 'text.primary',
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...baseTextStyles,
      fontSize: 2,
      my: 2,
      mx: 0,
    },
    caption: {
      ...baseTextStyles,
      fontSize: 2,
    },
    hint: {
      ...baseTextStyles,
      fontSize: 0,
    },
    label: {
      ...baseTextStyles,
      fontSize: 1,
    },
    overline: {
      ...baseTextStyles,
      textTransform: 'uppercase',
      fontSize: 2,
      letterSpacing: 'overline',
    },
  },
});

const StyledText = styled.p<TextProps>`
  ${textVariants}
  ${compose(color, space, layout, typography)}
  ${props =>
    props.inline &&
    css({
      display: 'inline',
    })}
  ${props =>
    props.underline &&
    css({
      textDecoration: 'underline',
    })}
  ${props =>
    props.strike &&
    css({
      textDecoration: 'line-through',
    })}
  ${props =>
    props.size === 'large' &&
    css({
      fontSize: 2,
    })}
  ${props =>
    props.size === 'medium' &&
    css({
      fontSize: 1,
    })}
  ${props =>
    props.size === 'small' &&
    css({
      fontSize: 0,
    })}
`;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant, children, inline, underline, size, strike }, ref) => (
    <StyledText
      ref={ref}
      variant={variant}
      inline={inline}
      size={size}
      strike={strike}
      underline={underline}
    >
      {children}
    </StyledText>
  )
);

Text.defaultProps = {
  variant: 'body',
  size: 'medium',
};

Text.displayName = 'Text';
