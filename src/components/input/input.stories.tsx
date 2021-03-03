import React from 'react';
import { InputField } from '.';

export default {
  title: 'InputField',
};

export const Primary = () => (
  <InputField onChange={(value: string) => console.log(value)} />
);
