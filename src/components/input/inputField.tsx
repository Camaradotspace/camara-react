import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { tokens } from '../../constants/tokens';

const { $primary } = tokens.colors;

type InputType = 'email' | 'number' | 'password' | 'text';
export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /* Label text */
  label?: string;

  /* HTML `name` attribute */
  name?: string;

  /* Placeholder Text */
  placeholder?: string;

  /* What input type is it? */
  type?: InputType;

  /* Is input required? */
  required?: boolean;

  /* Should input be disabled? */
  disabled?: boolean;

  /* Input helper text */
  helperText?: string;

  /* Should input be inline? */
  inline?: boolean;
}

const Wrapper = styled.div<InputFieldProps>`
  margin: 4px;

  .requiredText {
    color: red;
  }

  .helperText {
    display: block;
    color: #999;
    margin: 0 8px;
  }

  label {
    display: block;
    margin: 8px 0;
    color: #444444;
    font-size: 14px;
  }
  input {
    display: inline-block;
    padding: 0.65rem 0.5rem;
    border: 1px solid #dadce0;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    min-width: 250px;

    &::placeholder {
      color: #999999;
    }

    &:active,
    &:focus {
      border: 2px solid ${$primary};
    }

    ${(props) =>
      props.disabled &&
      css`
        border: 1px solid #dadce0;
      `}

    ${(props) =>
      props.inline &&
      css`
        display: inline;
      `}
  }
`;

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type,
  required,
  disabled,
  helperText,
  ...rest
}) => {
  const renderRequiredLabel = (): JSX.Element => {
    return <span className='requiredText'>*</span>;
  };

  const renderHelperText = (): JSX.Element => {
    return <small className='helperText'>{helperText}</small>;
  };

  return (
    <Wrapper>
      {label && (
        <label htmlFor={name}>
          {required ? renderRequiredLabel() : null} {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {helperText ? renderHelperText() : null}
    </Wrapper>
  );
};

InputField.defaultProps = {
  required: false,
  disabled: false,
};

InputField.displayName = 'InputField';
