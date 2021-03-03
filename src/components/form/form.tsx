import React, { FormHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onFinish?: any;
  onFinishFailed?: any;
}

const Wrapper = styled.div``;

export const Form: React.FC<FormProps> = ({
  children,
  onFinish,
  onFinishFailed,
  name,
  ...rest
}) => {
  // const [values, setValues] = useState({
  //   values: { textField: '', emailField: '', numberField: '' },
  // });

  // const handleChange = (value, name) => {
  //   console.log(value, name);
  //   setValues({ values: { ...values.values, [name]: value } });
  // };

  return (
    <Wrapper>
      <form spellCheck={true} name={name} onSubmit={onFinish} {...rest}>
        {children}
      </form>
    </Wrapper>
  );
};
