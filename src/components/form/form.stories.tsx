import React from 'react';
import { Form } from '.';
import { InputField } from '../input';

export default {
  title: 'Form',
};

export const Primary = () => (
  <Form>
    <InputField onChange={(value: string) => console.log(value)} />
  </Form>
);
