import React from 'react';
import { BrowserWindow } from '../src/components/browserWindow';
import { styled } from '../src/stitches.config';

const Wrapper = styled('div', {
  height: '100vh',
});

const ThemeDecorator = (storyFn: any) => (
  <Wrapper>
    <BrowserWindow>{storyFn()}</BrowserWindow>
  </Wrapper>
);

export default ThemeDecorator;
