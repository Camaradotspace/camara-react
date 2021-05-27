import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../dist/components/button';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from '../theme';

const StoryBookTheme = (children: any) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Button onClick={() => setUseDarkTheme(!useDarkTheme)}>
        Switch Theme
      </Button>
      <GlobalStyles />
      {children()}
    </ThemeProvider>
  );
};

export default StoryBookTheme;
