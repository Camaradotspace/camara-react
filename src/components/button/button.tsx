import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import css from '@styled-system/css';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export type StyledButtonProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    disabled?: boolean;
    danger?: boolean;
    pill?: boolean;
    block?: boolean;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
  };

const baseButtonStyles = {
  position: 'relative',
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'regular',
  lineHeight: 'copy',
  borderRadius: 0,
  borderWidth: 1,
  borderStyle: 'solid',
  px: 1,
  py: 0,
  m: 1,
  appearance: 'none',
  cursor: 'pointer',
};

const buttonVariants = variant({
  variants: {
    primary: {
      ...baseButtonStyles,
      bg: 'button.background',
      color: 'button.text',
      borderColor: 'transparent',
      svg: {
        color: 'text.inverse',
      },
      '&:hover': {
        backgroundColor: 'button.hover',
      },
      '&:active, &:focus': {
        backgroundColor: 'button.focus',
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed',
      },
    },
    secondary: {
      ...baseButtonStyles,
      bg: 'transparent',
      color: 'button.background',
      borderColor: 'button.background',
      svg: {
        color: 'text.inverse',
      },
      '&:hover': {
        color: 'button.hover',
        borderColor: 'button.hover',
      },
      '&:active, &:focus': {
        color: 'button.focus',
        borderColor: 'button.focus',
      },
      '&:disabled': {
        color: 'text.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed',
      },
    },
    ghost: {
      ...baseButtonStyles,
      bg: 'transparent',
      color: 'button.background',
      borderColor: 'transparent',
      svg: {
        color: 'text.inverse',
      },
      '&:hover': {
        color: 'button.hover',
        backgroundColor: 'highlights.bgHighlight',
      },
      '&:active, &:focus': {
        color: 'button.focus',
        backgroundColor: 'highlights.bgHighlight',
      },
      '&:disabled': {
        color: 'text.disabled',
        cursor: 'not-allowed',
      },
    },
  },
});

const StyledButton = styled.button<ButtonProps>`
  ${buttonVariants}
  ${compose(color, space, layout, flexbox, border, position)}
  ${(props) =>
    props.variant === 'primary' &&
    props.danger === true &&
    css({
      backgroundColor: 'button.danger',
      '&:hover': {
        backgroundColor: 'button.dangerHover',
      },
      '&:active, &:focus': {
        backgroundColor: 'button.dangerFocus',
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed',
      },
    })}
  ${(props) =>
    props.variant === 'secondary' &&
    props.danger === true &&
    css({
      color: 'button.danger',
      borderColor: 'button.danger',
      '&:hover': {
        color: 'button.dangerHover',
        borderColor: 'button.dangerHover',
      },
      '&:active, &:focus': {
        color: 'button.dangerFocus',
        borderColor: 'button.dangerFocus',
      },
      '&:disabled': {
        color: 'text.disabled',
        borderColor: 'ui.disabled',
        cursor: 'not-allowed',
      },
    })}
  ${(props) =>
    props.variant === 'ghost' &&
    props.danger === true &&
    css({
      color: 'button.danger',
      '&:hover': {
        color: 'button.dangerHover',
      },
      '&:active, &:focus': {
        color: 'button.dangerFocus',
      },
      '&:disabled': {
        color: 'text.disabled',
        cursor: 'not-allowed',
      },
    })}
  ${(props) =>
    props.pill &&
    css({
      borderRadius: 3,
    })};
  ${(props) =>
    props.size === 'large' &&
    css({
      px: 4,
      py: 2,
    })}
  ${(props) =>
    props.size === 'medium' &&
    css({
      px: 3,
      py: 1,
    })}
  ${(props) =>
    props.size === 'small' &&
    css({
      fontSize: 1,
      px: 2,
      py: 1,
    })};
  ${(props) =>
    props.block &&
    css({
      display: 'block',
    })};
`;

export type ButtonProps = StyledComponentProps<
  'button',
  any,
  StyledButtonProps,
  never
>;

export const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  block,
  danger,
  size,
  mb,
  mt,
  mx,
  my,
  ml,
  mr,
  ...props
}) => (
  <StyledButton
    disabled={disabled}
    danger={danger}
    size={size}
    block={block}
    {...props}
    mx={mx}
    my={my}
    mb={mb}
    mt={mt}
    ml={ml}
    mr={mr}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};

Button.displayName = 'Button';
