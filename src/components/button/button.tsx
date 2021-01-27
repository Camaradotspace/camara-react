import styled, { css } from 'styled-components';
import { tokens } from '../../../utils/tokens';

const {
  $primary,
  $white,
  $black200,
  $border,
  $buttonHover,
  $buttonPressed,
  $primaryButtonHover,
  $primaryButtonPressed,
} = tokens.colors;
const { $boxShadow } = tokens.other;
const { $1, $2 } = tokens.space;

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * How should the button be positioned?
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Fully-rounded buttons
   */
  rounded?: boolean;
}

/**
 * Primary UI component for user interaction
 */

export const Button = styled.button<ButtonProps>`
  height: ${(props) => props.size || 30}px;
  background-color: ${(props) => props.backgroundColor || $white};
  color: ${(props) => props.color || $black200};
  display: inline-block;
  border: 1px solid ${(props) => props.backgroundColor || $border};
  border-radius: 2px;
  padding: ${$2};
  font-weight: 500;
  margin: ${$1};
  cursor: pointer;
  outline: none;
  line-height: 1.2;
  &:hover {
    background-color: ${(props) => props.backgroundColor || $buttonHover};
  }
  &:focus {
    background-color: ${(props) => props.backgroundColor || $buttonPressed};
    box-shadow: ${$boxShadow};
  }
  &:active {
    background-color: ${(props) => props.backgroundColor || $buttonPressed};
    box-shadow: ${$boxShadow};
  }
  ${(props) =>
    props.orientation === 'vertical' &&
    css`
      display: block;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 40px;
    `}
  ${(props) =>
    props.primary &&
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
  
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 2rem;
    `}
`;
