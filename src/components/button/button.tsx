import React, { EventHandler } from 'react';
import styled, { css } from 'styled-components';
import { tokens } from '../../constants';

const {
  $primary,
  $white,
  $buttonHover,
  $buttonPressed,
  $primaryButtonHover,
  $primaryButtonPressed,
  $buttonDanger,
  $buttonDangerHover,
  $buttonDangerPressed,
} = tokens.colors;
const { $boxShadow } = tokens.other;
const { $1, $2 } = tokens.space;

export interface ButtonProps {
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

  onClick?: (event) => void;

  /**
   * Set shaped of button to pill-shape
   */
  pill?: boolean;
}

/**
 * Primary UI component for user interaction
 */

const StyledButton = styled.button<ButtonProps>`
  // default button styles
  background-color: ${(props) => props.backgroundColor || $primary};
  color: ${(props) => props.color || $white};
  display: inline-block;
  border-radius: 0.25rem;
  font-weight: 500;
  padding: 0.75rem 0.5rem;
  margin: ${$1};
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: ${(props) => props.backgroundColor || $buttonHover};
  }
  &:focus {
    background-color: ${(props) => props.backgroundColor || $buttonPressed};
  }
  &:active {
    background-color: ${(props) => props.backgroundColor || $buttonPressed};
  }

  // primary button style
  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.backgroundColor || $primary};
      color: ${props.color || $white};
      border: 1px solid ${props.backgroundColor || $primary};
      &:hover {
        background-color: ${props.backgroundColor || $primaryButtonHover};
        border: 1px solid ${props.backgroundColor || $primaryButtonHover};
        color: ${props.color || $white};
      }
      &:focus {
        background-color: ${props.backgroundColor || $primaryButtonPressed};
        border: 1px solid ${props.backgroundColor || $primaryButtonPressed};
        color: ${props.color || $white};
        box-shadow: ${$boxShadow};
      }
      &:active {
        background-color: ${props.backgroundColor || $primaryButtonPressed};
        border: 1px solid ${props.backgroundColor || $primaryButtonPressed};
        color: ${props.color || $white};
        box-shadow: ${$boxShadow};
      }
    `}

  // secondary button style
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.backgroundColor || $white};
      color: ${props.color || $primary};
      border: 1px solid ${props.backgroundColor || $primary};
      &:hover {
        background-color: ${props.backgroundColor || $white};
        color: ${props.color || $primaryButtonHover};
        border: 1px solid ${props.backgroundColor || $primaryButtonHover};
      }
      &:focus {
        background-color: ${props.backgroundColor || $white};
        color: ${props.color || $primaryButtonPressed};
        border: 1px solid ${props.backgroundColor || $primaryButtonPressed};
        box-shadow: ${$boxShadow};
      }
      &:active {
        background-color: ${props.backgroundColor || $white};
        color: ${props.color || $primaryButtonPressed};
        border: 1px solid ${props.backgroundColor || $primaryButtonPressed};
        box-shadow: ${$boxShadow};
      }
    `}

  // ghost button style
  ${(props) =>
    props.variant === 'ghost' &&
    css`
      background-color: ${props.backgroundColor || $white};
      color: ${props.color || $primary};
      &:hover {
        background-color: ${props.backgroundColor || $white};
        color: ${props.color || $primaryButtonHover};
      }
      &:focus {
        background-color: ${props.backgroundColor || $white};
        color: ${props.color || $primaryButtonPressed};
      }
      &:active {
        background-color: ${props.backgroundColor || $white};
        color: ${props.color || $primaryButtonPressed};
      }
    `}

// large button style
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 1rem 1rem;
    `}

    // medium button style
  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 0.75rem 0.5rem;
    `}

    // small button style
  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 0.5rem 0.25rem;
    `}

    // block button style
    ${(props) =>
    props.block &&
    css`
      width: 100%;
      display: block;
    `}

    // danger button style
    ${(props) =>
    props.danger &&
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
        box-shadow: ${$boxShadow};
      }
      &:active {
        background-color: ${$buttonDangerPressed};
        color: ${$white};
        border: 1px solid ${$buttonDangerPressed};
        box-shadow: ${$boxShadow};
      }
    `}

// pill-shaped button style
  ${(props) =>
    props.pill &&
    css`
      border-radius: 2rem;
    `}
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
