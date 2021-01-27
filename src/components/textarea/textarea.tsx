/* eslint-disable no-use-before-define */
import * as React from 'react';
import styled from 'styled-components';

export interface TextAreaProps {
  /**
   * How many rows should the text area have?
   */
  rows?: number;
  /**
   * TextArea children
   */
  value?: string;
  /**
   * TextArea placeholder
   */
  placeholder: string;
  /**
   * How many cols should the text area have?
   */
  cols?: number;
  /**
   * Is textarea required?
   */
  required?: boolean;
  /**
   * Is textarea disabled?
   */
  disabled?: boolean;
  /**
   * TextArea maximum length
   */
  maxlength?: number;
  /**
   * How should text area wrap?
   */
  wrap?: 'hard' | 'soft';
  /**
   * form ID for text area
   */
  form_id?: string;
}

export const StyledTextArea = styled.textarea<TextAreaProps>`
  padding: 0.5rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-family: sans-serif;
  display: block;
`;

export const TextArea = ({
  rows = 4,
  value,
  placeholder = 'This is a text area',
  disabled,
  required,
  wrap,
  form_id,
  maxlength,
  cols,
}: TextAreaProps) => {
  return (
    <React.Fragment>
      <StyledTextArea
        data-testid='textarea-component'
        value={value}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        wrap={wrap}
        form={form_id}
        maxLength={maxlength}
        cols={cols}
      />
    </React.Fragment>
  );
};

TextArea.defaultProps = {
  Placeholder: 'This is a text area',
};

TextArea.displayName = 'TextArea';
