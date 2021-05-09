import React, { FunctionComponent } from 'react';
import { StyledTextArea, TextAreaWrapper } from './textarea.styles';
import { TextAreaProps } from './textarea.types';

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
    return <span className='requiredText'>*</span>;
  };

  const renderHelperText = (): JSX.Element => {
    return <small className='helperText'>{helperText}</small>;
  };
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
  );
};

TextArea.defaultProps = {
  rows: 1,
  required: false,
  disabled: false,
  resizable: false,
  wrap: 'hard',
};

TextArea.displayName = 'TextArea';
