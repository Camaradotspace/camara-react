import { addDecorator } from '@storybook/react';
import ThemeDecorator from './theme-decorator';
// import { withA11y } from '@storybook/addon-a11y';

addDecorator(ThemeDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};
