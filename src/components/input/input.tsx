import React, { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

type InputType = 'email' | 'number' | 'password' | 'text';

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
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

const InputFieldWrapper = styled('div', {
  '& .requiredText': {
    color: 'red',
    display: 'inline',
  },
  '& .helperText': {
    display: 'block',
    color: '#999',
    margin: '0 8px',
  },
  '& label': {
    display: 'block',
    margin: '8px 0',
    color: '$text_secondary',
    fontSize: '$3',
  },
  '& input': {
    display: 'inline-block',
    backgroundColor: '$bg_secondary',
    color: '$text_secondary',
    padding: '0.65rem 0.5rem',
    border: '1px solid $ui_border',
    borderRadius: '$2',
    outlineColor: '$brand_primary',
    fontSize: '$3',
    minWidth: '250px',
  },
  '& input::placeholder': {
    color: '$text_placeholder',
    fontSize: '$3',
  },
  '& input:active': {
    border: '2px solid $brand_primary',
    outline: 'none',
  },
  '& input:focus': {
    border: '2px solid $brand_primary',
    outline: 'none',
  },
  variants: {
    inline: {
      true: {
        display: 'inline',
      },
    },
  },
});

export const InputField: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  required,
  disabled,
  helperText,
}) => {
  const renderRequiredLabel = (): JSX.Element => {
    return <span className="requiredText">*</span>;
  };

  const renderHelperText = (): JSX.Element => {
    return <small className="helperText">{helperText}</small>;
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
      />
      {helperText ? renderHelperText() : null}
    </InputFieldWrapper>
  );
};

InputField.defaultProps = {};

InputField.displayName = 'InputField';
