import React, { InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';

import { validateInput } from '../../constants/validator';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * HTML `id` attribute
   */
  id?: string;
  /**
   * HTML `value` attribute
   */
  value?: any;
  /**
   * Label text
   */
  label?: string;
  /**
   * HTML `name` attribute
   */
  name?: string;
  /**
   * HTML `for` attribute
   */
  htmlFor?: string;
  /**
   * Placeholder Text
   */
  placeholder?: string;
  /**
   * Validate against values entered in input fields
   */
  validators?: any;
  /**
   * What input type is it?
   */
  type?: InputType;
  /**
   * Is input required?
   */
  required?: boolean;
  /**
   * Should form be disabled?
   */
  disabled?: boolean;
  /**
   * Input field change event handler
   */
  onChange:
    | ((
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        name: string
      ) => void)
    | any;
}

const Wrapper = styled.div`
  label {
    display: block;
  }
  input {
    display: block;
  }
`;

export const InputField: React.FC<IInputField> = ({
  value,
  label,
  name,
  htmlFor,
  placeholder,
  validators,
  type,
  id,
  required,
  disabled,
  onChange,
  ...rest
}) => {
  const [error, setError] = useState({ error: false, message: '' });

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setError(validateInput(validators, value));
    onChange(value, name);
  };

  const renderRequiredLabel = (): JSX.Element => {
    return <span>*</span>;
  };

  return (
    <Wrapper>
      {label && (
        <label htmlFor={htmlFor || name}>
          {label} {required ? renderRequiredLabel() : null}
        </label>
      )}
      <input
        id={label.toLowerCase() || id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />
      {error && <span>{error.message}</span>}
    </Wrapper>
  );
};

InputField.defaultProps = {
  value: '',
  label: '',
  name: '',
  htmlFor: '',
  placeholder: '',
  validators: [],
  type: 'text',
  id: '',
  required: true,
  disabled: false,
};

InputField.displayName = 'InputField';
