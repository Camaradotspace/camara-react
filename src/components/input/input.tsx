import styled, { css } from 'styled-components';
import * as React from 'react';

export interface InputProps {
  /**
   * Label text
   */
  labelText?: string;
  /**
   * HTML `for` attribute
   */
  htmlFor?: string;
  /**
   * What input type is it?
   */
  type?: 'email' | 'number' | 'text' | 'password';
  /**
   * Placeholder Text
   */
  placeholder?: string;
  /**
   * Should form be disabled?
   */
  disabled?: boolean;
  /**
   * HTML `name` attribute
   */
  name?: string;
  /**
   * HTML `id` attribute
   */
  id?: string;
  /**
   * HTML `value` attribute
   */
  value?: string;
  /**
   * Size of input
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Color of input text
   */
  color?: string;
  /**
   * Background color of input
   */
  backgroundColor?: string;
  /**
   * Color of input placeholder
   */
  placeholderColor?: string;
  /**
   * Color of input border
   */
  borderColor?: string;
  /**
   * Is input required?
   */
  required?: boolean;
}

export const sizes = {
  large: 16,
  medium: 12,
  small: 8,
  tiny: 8,
};

export const StyledInput: any = styled.input<InputProps>`
  border: 1px solid ${(props) => props.borderColor || '#dadce0'};
  border-radius: 4px;
  width: 200px;
  display: block;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  &::placeholder {
    color: ${(props) => props.placeholderColor || '#bbb'};
  }
  padding: ${sizes.medium}px ${sizes.tiny}px;
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: ${sizes.large}px ${sizes.tiny}px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: ${sizes.medium} ${sizes.tiny}px;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      padding: ${sizes.small} ${sizes.tiny}px;
    `}
`;

export const StyledLabel = styled.label<InputProps>`
  display: block;
  margin: 4px 0;
  font-weight: 500;
  color: #333;
`;

export const Input = ({
  id,
  name,
  htmlFor,
  labelText,
  placeholder,
  required,
  size,
  type,
  disabled,
}: InputProps) => {
  return (
    <React.Fragment>
      <StyledLabel htmlFor={htmlFor}>{labelText}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        size={size}
        disabled={disabled}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "What's on your mind?",
  type: 'text',
  labelText: 'Input',
};

Input.displayName = 'Input';
