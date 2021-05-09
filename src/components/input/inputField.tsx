import React from 'react';
import { InputFieldWrapper } from './input.styles';
import { InputFieldProps } from './input.types';

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
  );
};

InputField.defaultProps = {
  required: false,
  disabled: false,
};

InputField.displayName = 'InputField';
