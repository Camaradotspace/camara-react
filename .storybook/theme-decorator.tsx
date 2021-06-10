import React from 'react';
import { DARK_THEME, styled } from '../src/stitches.config';

const ThemeWrapper = styled('div', {
  backgroundColor: '$bg_primary',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  px: '$4',
  py: '$5',
  width: '45.5%',
  height: '100vh',
  mb: '$4',
});

const ThemeDecorator = (storyFn: any) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <ThemeWrapper className="light">
      {storyFn({ id: id => 'light-' + id })}
    </ThemeWrapper>
    <ThemeWrapper className={DARK_THEME}>
      {storyFn({ id: id => 'dark-' + id })}
    </ThemeWrapper>
  </div>
);

export default ThemeDecorator;
