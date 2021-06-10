import React, { useState } from 'react';
import { Button } from '../components';
import { DARK_THEME, styled } from '../stitches.config';
import { globalStyles } from './globalStyles';

const ThemeWrapper = styled('div', {
  backgroundColor: '$bg_primary',
  height: '100vh',
});

const StoryBookTheme = (children: any) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  globalStyles();
  return (
    <ThemeWrapper
      className={`${
        useDarkTheme ? DARK_THEME : ''
      } sb-show-main sb-main-padded`}
    >
      <Button onClick={() => setUseDarkTheme(!useDarkTheme)}>
        Switch Theme
      </Button>
      {children()}
    </ThemeWrapper>
  );
};

export default StoryBookTheme;
