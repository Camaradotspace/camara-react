import { addDecorator } from '@storybook/react';
import { CamaraTheme } from '../src/components/camara-theme';

addDecorator(CamaraTheme);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};
