import styled, { css, DefaultTheme } from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { tokens } from '../../constants';
import { ButtonStyleProps } from './button.types';

const { $1 } = tokens.space;

// default button styles
const baseStyles = css<ButtonStyleProps>`
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
const primaryStyles: any = (
  props: ButtonStyleProps & ColorProps & any,
  theme: DefaultTheme
) =>
  props.variant === 'primary' &&
  css`
    color: ${theme.colors.button.text || props.color};
    /* border: 1px solid
      ${theme.colors.button.background || props.bg}; */
    background-color: ${theme.colors.button.background || props.bg};
    &:hover {
      background-color: ${theme.colors.button.hover || props.bg};
      border: 1px solid ${theme.colors.button.hover || props.bg};
    }
    &:focus {
      outline: 1px solid ${theme.colors.button.focus || props.bg};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${theme.colors.button.pressed || props.bg};
      border: 1px solid ${theme.colors.button.pressed || props.bg};
    }
    &:disabled {
      background-color: ${theme.colors.button.pressed};
      border: 1px solid ${theme.colors.button.pressed};
      cursor: not-allowed;
      opacity: 0.8;
    }
  `;

// secondary button style
const secondaryStyles: any = (
  props: ButtonStyleProps & ColorProps & any,
  theme: DefaultTheme
) =>
  props.variant === 'secondary' &&
  css`
    background-color: transparent;
    color: ${theme.colors.button.background || props.color};
    border: 1px solid ${theme.colors.button.background || props.bg};
    &:hover {
      color: ${theme.colors.button.hover || props.color};
      border: 1px solid ${theme.colors.button.hover || props.bg};
    }
    &:active {
      border: 1px solid ${theme.colors.button.pressed || props.bg};
    }
    &:disabled {
      color: ${theme.colors.button.pressed};
      border: 1px solid ${theme.colors.button.pressed};
      cursor: not-allowed;
      opacity: 0.8;
    }
  `;

// ghost button style
const ghostStyles = (props: ButtonStyleProps) =>
  props.variant === 'ghost' &&
  css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.button.background || props.color};
    &:hover {
      color: ${({ theme }) => theme.colors.button.hover || props.color};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.button.focus || props.color};
    }
    &:active {
      color: ${({ theme }) => theme.colors.button.pressed || props.color};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.button.pressed};
      cursor: not-allowed;
      opacity: 0.8;
    }
  `;

// button size style
const sizeStyles = ({ size }: ButtonStyleProps) => {
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
const primaryDangerStyles = (props: ButtonStyleProps) =>
  props.danger &&
  props.variant === 'primary' &&
  css`
    background-color: ${({ theme }) => theme.colors.button.danger};
    color: ${({ theme }) => theme.colors.button.text};
    border: 1px solid ${({ theme }) => theme.colors.button.danger};
    &:hover {
      background-color: ${({ theme }) => theme.colors.button.dangerHover};
      color: ${({ theme }) => theme.colors.button.text};
      border: 1px solid ${({ theme }) => theme.colors.button.dangerHover};
    }
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.button.dangerFocus};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.dangerPressed};
      color: ${({ theme }) => theme.colors.button.text};
      border: 1px solid ${({ theme }) => theme.colors.button.dangerPressed};
    }
  `;

// secondary button danger style
const secondaryDangerStyles = (props: ButtonStyleProps) =>
  props.danger &&
  props.variant === 'secondary' &&
  css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.button.danger};
    border: 1px solid ${({ theme }) => theme.colors.button.danger};
    &:hover {
      color: ${({ theme }) => theme.colors.button.dangerHover};
      border: 1px solid ${({ theme }) => theme.colors.button.dangerHover};
    }
    &:active {
      color: ${({ theme }) => theme.colors.button.dangerPressed};
      border: 1px solid ${({ theme }) => theme.colors.button.dangerPressed};
    }
  `;

// ghost button danger style
const ghostDangerStyles = (props: ButtonStyleProps) =>
  props.danger &&
  props.variant === 'ghost' &&
  css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.button.danger};
    &:hover {
      color: ${({ theme }) => theme.colors.button.dangerHover};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.button.dangerFocus};
    }
    &:active {
      color: ${({ theme }) => theme.colors.button.dangerPressed};
    }
  `;

// pill-shaped button style
const pillStyles = (props: ButtonStyleProps) =>
  props.pill &&
  css`
    border-radius: 2rem;
  `;

// full-width button style
const blockStyles = (props: ButtonStyleProps) =>
  props.block &&
  css`
    margin: 0.5rem 0;
    display: block;
  `;

export const StyledButton = styled.button`
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
  ${color}
`;
