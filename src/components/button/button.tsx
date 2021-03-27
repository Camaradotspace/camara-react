import React from 'react';
import styled, { css } from 'styled-components';
import { tokens } from '../../constants';

const {
  $primary,
  $white,
  $primaryButtonHover,
  $primaryButtonPressed,
  $buttonDanger,
  $buttonDangerHover,
  $buttonDangerPressed,
  $statusUnknown,
} = tokens.colors;
const { $1 } = tokens.space;

interface StyleProps {
  /**
   * What variant of button is to be used
   */
  variant?: 'primary' | 'secondary' | 'ghost';

  /**
   * How large should the button be?
   */
  size?: 'large' | 'small' | 'medium';

  /**
   * Should button take full width of parent element
   */
  block?: boolean;

  /**
   * Set button loading state
   */
  loading?: boolean;

  /**
   * Set button disabled state
   */
  disabled?: boolean;

  /**
   * Is the call-to-action destructive or irreversible?
   */
  danger?: boolean;

  /**
   * What background color to use
   */
  backgroundColor?: string;

  /**
   * What color to use
   */
  color?: string;

  /**
   * Optional click handler
   */
  onClick?: (event: any) => void;

  /**
   * Set shaped of button to pill-shape
   */
  pill?: boolean;
}

interface BaseProps {
  /**
   * Can be used to set the button label
   */
  children: React.ReactNode;
}

export type ButtonProps = BaseProps & StyleProps;

// default button styles
const baseStyles = css<StyleProps>`
  display: inline-block;
  border-radius: 0.25rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  margin: ${$1};
  cursor: pointer;
  outline: none;
  border: none;
`;

// primary button style
const primaryStyles = (props: StyleProps) =>
  props.variant === 'primary' &&
  css`
    color: ${props.color || $white};
    border: 1px solid ${props.backgroundColor || $primary};
    background-color: ${props.backgroundColor || $primary};
    &:hover {
      background-color: ${props.backgroundColor || $primaryButtonHover};
      border: 1px solid ${props.backgroundColor || $primaryButtonHover};
    }
    &:focus {
      outline: 1px solid ${props.backgroundColor || $primary};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.backgroundColor || $primaryButtonPressed};
      border: 1px solid ${props.backgroundColor || $primaryButtonPressed};
    }
    &:disabled {
      background-color: ${$statusUnknown};
      border: 1px solid ${$statusUnknown};
      cursor: not-allowed;
      opacity: 0.8;
    }
  `;

// secondary button style
const secondaryStyles = (props: StyleProps) =>
  props.variant === 'secondary' &&
  css`
    background-color: transparent;
    color: ${props.color || $primary};
    border: 1px solid ${props.backgroundColor || $primary};
    &:hover {
      color: ${props.color || $primaryButtonHover};
      border: 1px solid ${props.backgroundColor || $primaryButtonHover};
    }
    &:active {
      border: 1px solid ${props.backgroundColor || $primaryButtonPressed};
    }
    &:disabled {
      color: ${$statusUnknown};
      border: 1px solid ${$statusUnknown};
      cursor: not-allowed;
      opacity: 0.8;
    }
  `;

// ghost button style
const ghostStyles = (props: StyleProps) =>
  props.variant === 'ghost' &&
  css`
    background-color: transparent;
    color: ${props.color || $primary};
    &:hover {
      color: ${props.color || $primaryButtonHover};
    }
    &:focus {
      color: ${props.color || $primaryButtonPressed};
    }
    &:active {
      color: ${props.color || $primaryButtonPressed};
    }
    &:disabled {
      color: ${$statusUnknown};
      cursor: not-allowed;
      opacity: 0.8;
    }
  `;

// button size style
const sizeStyles = ({ size }: StyleProps) => {
  const sizes = {
    large: {
      padding: `0.55rem 1rem`,
    },
    medium: {
      padding: `0.4rem 1rem`,
    },
    small: {
      'font-size': `0.75rem`,
      padding: `0.25rem 1rem`,
    },
  };

  return css({ ...sizes[size] });
};

// danger button style
const primaryDangerStyles = (props: StyleProps) =>
  props.danger &&
  props.variant === 'primary' &&
  css`
    background-color: ${$buttonDanger};
    color: ${$white};
    border: 1px solid ${$buttonDanger};
    &:hover {
      background-color: ${$buttonDangerHover};
      color: ${$white};
      border: 1px solid ${$buttonDangerHover};
    }
    &:focus {
      background-color: ${$buttonDangerPressed};
      color: ${$white};
      border: 1px solid ${$buttonDangerPressed};
    }
    &:active {
      background-color: ${$buttonDangerPressed};
      color: ${$white};
      border: 1px solid ${$buttonDangerPressed};
    }
  `;

// secondary button danger style
const secondaryDangerStyles = (props: StyleProps) =>
  props.danger &&
  props.variant === 'secondary' &&
  css`
    background-color: transparent;
    color: ${$buttonDanger};
    border: 1px solid ${$buttonDanger};
    &:hover {
      color: ${$buttonDangerHover};
      border: 1px solid ${$buttonDangerHover};
    }
    &:active {
      color: ${$buttonDangerPressed};
      border: 1px solid ${$buttonDangerPressed};
    }
  `;

// ghost button danger style
const ghostDangerStyles = (props: StyleProps) =>
  props.danger &&
  props.variant === 'ghost' &&
  css`
    background-color: transparent;
    color: ${$buttonDanger};
    &:hover {
      color: ${$buttonDangerHover};
    }
    &:focus {
      color: ${props.color || $primaryButtonPressed};
    }
    &:active {
      color: ${props.color || $primaryButtonPressed};
    }
  `;

// pill-shaped button style
const pillStyles = (props: StyleProps) =>
  props.pill &&
  css`
    border-radius: 2rem;
  `;

// full-width button style
const blockStyles = (props: StyleProps) =>
  props.block &&
  css`
    margin: 0.5rem 0;
    display: block;
    width: 100%;
  `;

const StyledButton = styled.button`
  ${baseStyles}
  ${primaryStyles}
  ${secondaryStyles}
  ${ghostStyles}
  ${primaryDangerStyles}
  ${secondaryDangerStyles}
  ${ghostDangerStyles}
  ${pillStyles}
  ${sizeStyles}
  ${blockStyles}
`;

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  block,
  loading,
  disabled,
  pill,
  danger,
  backgroundColor,
  color,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      block={block}
      loading={loading}
      onClick={onClick}
      pill={pill}
      danger={danger}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  block: false,
  loading: false,
  onClick: () => null,
  pill: false,
  danger: false,
  children: 'Button',
};

Button.displayName = 'Button';
