import React, { forwardRef, HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /* What variant of text to render */
  variant?: 'hint' | 'label' | 'body' | 'caption' | 'overline';
  /* What size of text to render */
  size?: 'small' | 'medium' | 'large';
  /* Text content */
  children: React.ReactNode;
  /* Should text be inline */
  inline?: boolean;
  /* Should text be underlined */
  underline?: boolean;
  /* Should text be strike-through? */
  strike?: boolean;
  /* What weight should the text be */
  fontWeight?: 'normal' | 'bold' | 'medium' | number;
  /* What font style of text to render */
  fontStyle?: 'italic' | 'normal';
  /* How should text be aligned? */
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  /* What color should the text be */
  color?: string;
  /* Horizontal padding of text */
  mx?: string | number;
  /* What size should the font be */
  fontSize?: string | number;
}

const StyledText: any = styled('p', {
  fontWeight: '$regular',
  lineHeight: '$copy',
  color: '$text_primary',
  mt: 0,
  mb: 0,
  variants: {
    variant: {
      body: {
        fontSize: '$3',
        my: '$2',
        mx: 0,
      },
      caption: {
        fontSize: '$2',
      },
      hint: {
        fontSize: 0,
      },
      label: {
        fontSize: '$2',
      },
      overline: {
        textTransform: 'uppercase',
        fontSize: '$2',
        letterSpacing: '$overline',
      },
    },
    size: {
      large: {
        fontSize: '$5',
      },
      medium: {
        fontSize: '$4',
      },
      small: {
        fontSize: '$3',
      },
    },
    inline: {
      true: {
        display: 'inline',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    strike: {
      true: {
        textDecoration: 'line-through',
      },
    },
  },
});

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      variant,
      children,
      inline,
      underline,
      size,
      strike,
      color,
      mx,
      fontSize,
      fontWeight,
    },
    ref
  ) => (
    <StyledText
      ref={ref}
      variant={variant}
      inline={inline}
      size={size}
      strike={strike}
      underline={underline}
      css={{ color: color, mx: mx, fontSize: fontSize, fontWeight: fontWeight }}
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
