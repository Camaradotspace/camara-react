import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { border, compose, layout, space } from 'styled-system'
import TextAreaProps from './textarea.types'

const TextAreaWrapper = styled.div<TextAreaProps>`
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
`

const StyledTextArea = styled.textarea<Partial<TextAreaProps>>`
  display: inline-block;
  padding: 0.65rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  min-width: 250px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }

  &:active,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.brand.primary};
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};
  }

  ${(props) =>
    props.disabled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.ui.disabled};
    `}

  ${(props) =>
    props.resizable === false &&
    css`
      resize: none;
    `}
`

const TextArea: FunctionComponent<TextAreaProps> = ({
  label,
  helperText,
  rows,
  name,
  placeholder,
  disabled,
  required,
  wrap,
  maxlength,
  resizable,
  ...rest
}) => {
  const renderRequiredLabel = (): JSX.Element => {
    return <span className='requiredText'>*</span>
  }

  const renderHelperText = (): JSX.Element => {
    return <small className='helperText'>{helperText}</small>
  }
  return (
    <TextAreaWrapper>
      {label && (
        <label htmlFor={name}>
          {required ? renderRequiredLabel() : null} {label}
        </label>
      )}
      <StyledTextArea
        data-testid='textarea-component'
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        wrap={wrap}
        maxLength={maxlength}
        resizable={resizable}
        {...rest}
      />
      {helperText ? renderHelperText() : null}
    </TextAreaWrapper>
  )
}

export default TextArea

TextArea.defaultProps = {
  rows: 4,
  required: false,
  disabled: false,
  resizable: false,
  wrap: 'hard'
}

TextArea.displayName = 'TextArea'
