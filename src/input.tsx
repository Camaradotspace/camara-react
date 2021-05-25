import React from 'react'
import styled, { css } from 'styled-components'
import { border, compose, layout, space } from 'styled-system'
import InputProps from './input.types'

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

    ${(props) =>
      props.disabled &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.ui.disabled};
      `}

    ${(props) =>
      props.inline &&
      css`
        display: inline;
      `}
  }
`

const InputField: React.FC<InputProps> = ({
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
    return <span className='requiredText'>*</span>
  }

  const renderHelperText = (): JSX.Element => {
    return <small className='helperText'>{helperText}</small>
  }

  return (
    <InputFieldWrapper>
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
    </InputFieldWrapper>
  )
}

export default InputField

InputField.defaultProps = {
  required: false,
  disabled: false
}

InputField.displayName = 'InputField'
