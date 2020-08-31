import React from 'react';
import { addDecorator } from '@storybook/react';
// import { GlobalStyle } from '../src/shared/global';
import { sortStories } from './utils/story-helper';

const SORT_ORDER = {
  Camara: ['Why Camara', 'About Camara', 'Introduction', 'Getting Started'],
  Guidelines: ['Buttons'],
  Typography: [],
  Layout: [],
  Forms: [],
  Components: [],
  Icons: [],
  Changelog: ['August 2020 Update'],
  Playbook: ['How we work', 'Resources', 'Tools we use'],
};

addDecorator((story) => (
  <>
    {/* <GlobalStyle /> */}
    {story()}
  </>
));

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: sortStories(SORT_ORDER),
  },
  docs: {},
};
