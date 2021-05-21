import { addDecorator } from '@storybook/react';
import { StoryBookTheme } from '../src/components/camara-theme';

addDecorator(StoryBookTheme);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};
