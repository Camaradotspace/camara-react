import React, { TextareaHTMLAttributes } from 'react';
import { styled } from '../../stitches.config';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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

const TextAreaWrapper = styled('div', {
  '& .requiredText': {
    color: 'red',
  },
  '& .helperText': {
    display: 'block',
    color: '#999',
    margin: '0 8px',
  },
  label: {
    display: 'block',
    margin: '8px 0',
    color: '$text_secondary',
    fontSize: '$3',
  },
  '& textarea': {
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
  '& textarea::placeholder': {
    color: '$text_placeholder',
    fontFamily: 'sans-serif',
    fontSize: '$3',
  },
  '& textarea:active': {
    outline: 'none',
    border: '2px solid $brand_primary',
  },
  '& textarea:focus': {
    outline: 'none',
    border: '2px solid $brand_primary',
  },
});

export const TextArea: React.FC<TextAreaProps> = ({
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
      <textarea
        data-testid="textarea-component"
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        wrap={wrap}
        maxLength={maxlength}
        style={{ resize: resizable ? 'both' : 'none' }}
        {...rest}
      />
      {helperText ? renderHelperText() : null}
    </TextAreaWrapper>
  );
};

TextArea.defaultProps = {
  rows: 4,
  wrap: 'hard',
};

TextArea.displayName = 'TextArea';
