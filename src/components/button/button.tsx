import { darken } from 'polished';
import React, { ButtonHTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  danger?: boolean;
  pill?: boolean;
  block?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  bg?: string;
  color?: string;
}

const StyledButton = styled('button', {
  position: 'relative',
  fontFamily: '$body',
  fontSize: '$4',
  fontWeight: '$medium',
  borderRadius: '$2',
  borderWidth: '$1',
  borderStyle: 'solid',
  m: '$1',
  appearance: 'none',
  cursor: 'pointer',
  variants: {
    variant: {
      primary: {
        backgroundColor: '$button_primary',
        color: '$button_text',
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: '$button_hover',
        },
        '&:active, &:focus': {
          backgroundColor: '$button_focus',
        },
        '&:disabled': {
          color: '$text_disabled',
          backgroundColor: '$ui_disabled',
          borderColor: '$ui_disabled',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$button_primary',
        border: '1px solid $button_primary',
        '&:hover': {
          // color: '$button_hover',
          borderColor: '$button_hover',
          backgroundColor: '$button_secondary',
        },
        '&:active, &:focus': {
          color: '$button_text',
          borderColor: '$button_focus',
          backgroundColor: '$button_focus',
        },
        '&:disabled': {
          color: '$text_disabled',
          borderColor: '$ui_disabled',
          cursor: 'not-allowed',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$button_primary',
        borderColor: 'transparent',
        '&:hover': {
          color: '$button_hover',
          backgroundColor: '$bgHighlight',
        },
        '&:active, &:focus': {
          color: '$button_focus',
          backgroundColor: '$bgHighlight',
        },
        '&:disabled': {
          color: '$text_disabled',
          cursor: 'not-allowed',
        },
      },
    },
    size: {
      large: { px: '$5', py: '$3' },
      medium: { px: '$4', py: '$2' },
      small: { px: '$3', py: '$1', fontSize: '$2' },
    },
    danger: {
      true: {},
    },
    pill: {
      true: {
        borderRadius: '$round',
      },
    },
    block: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      danger: 'true',
      css: {
        backgroundColor: '$button_danger',
        '&:hover': {
          backgroundColor: '$button_dangerHover',
        },
        '&:active, &:focus': {
          backgroundColor: '$button_dangerFocus',
        },
        '&:disabled': {
          color: '$text_disabled',
          backgroundColor: '$ui_disabled',
          borderColor: '$ui_disabled',
          cursor: 'not-allowed',
        },
      },
    },
    {
      variant: 'secondary',
      danger: 'true',
      css: {
        color: '$button_danger',
        borderColor: '$button_danger',
        '&:hover': {
          color: '$button_dangerHover',
          borderColor: '$button_danger_hover',
          backgroundColor: '$button_danger_sec_hover',
        },
        '&:active, &:focus': {
          color: '$button_text',
          borderColor: '$button_dangerFocus',
          backgroundColor: '$button_danger',
        },
        '&:disabled': {
          color: '$text_disabled',
          borderColor: '$ui_disabled',
          cursor: 'not-allowed',
        },
      },
    },
    {
      variant: 'ghost',
      danger: 'true',
      css: {
        color: '$button_danger',
        '&:hover': {
          color: '$button_dangerHover',
        },
        '&:active, &:focus': {
          color: '$button_dangerFocus',
        },
        '&:disabled': {
          color: '$text_disabled',
          cursor: 'not-allowed',
        },
      },
    },
  ],
  defaultVariants: { size: 'medium', variant: 'primary' },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, block, danger, size, bg, color, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={disabled}
        danger={danger}
        size={size}
        block={block}
        {...props}
        css={{
          backgroundColor: bg,
          color: color,
          '&:hover': {
            backgroundColor: bg ? darken(0.05, `${bg}`) : '',
          },
        }}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};

Button.displayName = 'Button';
