import React from 'react';
import styled, { css } from 'styled-components';
import {
  border,
  compose,
  layout,
  space,
  BorderProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

type InputType = 'email' | 'number' | 'password' | 'text';

export interface InputProps extends SpaceProps, BorderProps, LayoutProps {
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

const InputFieldWrapper = styled.div<InputProps>`
  ${compose(space, border, layout)}
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
    border: 1px solid ${({ theme }) => theme.colors.ui.border};
    border-radius: 4px;
    outline-color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 14px;
    min-width: 250px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.placeholder};
    }

    &:active,
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.ui.border};
    }

    ${props =>
      props.disabled &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.ui.disabled};
      `}

    ${props =>
      props.inline &&
      css`
        display: inline;
      `}
  }
`;

export const InputField: React.FC<InputProps> = ({
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
    return <span className="requiredText">*</span>;
  };

  const renderHelperText = (): JSX.Element => {
    return <small className="helperText">{helperText}</small>;
  };

  return (
    <InputFieldWrapper {...rest}>
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
      />
      {helperText ? renderHelperText() : null}
    </InputFieldWrapper>
  );
};

InputField.defaultProps = {
  required: false,
  disabled: false,
};

InputField.displayName = 'InputField';
