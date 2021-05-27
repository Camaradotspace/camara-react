import React, { FunctionComponent } from 'react';
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

export interface TextAreaProps extends SpaceProps, BorderProps, LayoutProps {
  /* Label text */
  label?: string;
  /* HTML `name` attribute */
  name?: string;
  /* How many rows should the text area have? */
  rows?: number;
  /* TextArea placeholder */
  placeholder?: string;
  /* Is textarea required? */
  required?: boolean;
  /* Is textarea disabled? */
  disabled?: boolean;
  /* TextArea maximum length */
  maxlength?: number;
  /* How should text area wrap? */
  wrap?: 'hard' | 'soft';
  /* Input helper text */
  helperText?: string;
  /* Should textarea be resizable */
  resizable?: boolean;
}

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
`;

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

  ${props =>
    props.disabled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.ui.disabled};
    `}

  ${props =>
    props.resizable === false &&
    css`
      resize: none;
    `}
`;

export const TextArea: FunctionComponent<TextAreaProps> = ({
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
    return <span className="requiredText">*</span>;
  };

  const renderHelperText = (): JSX.Element => {
    return <small className="helperText">{helperText}</small>;
  };
  return (
    <TextAreaWrapper>
      {label && (
        <label htmlFor={name}>
          {required ? renderRequiredLabel() : null} {label}
        </label>
      )}
      <StyledTextArea
        data-testid="textarea-component"
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
  );
};

TextArea.defaultProps = {
  rows: 4,
  required: false,
  disabled: false,
  resizable: false,
  wrap: 'hard',
};

TextArea.displayName = 'TextArea';
