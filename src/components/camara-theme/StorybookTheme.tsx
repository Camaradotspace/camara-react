import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../button';
import { GlobalStyles } from '../../theme/GlobalStyles';
import { lightTheme, darkTheme } from '../../theme/theme';

export const StoryBookTheme = (children) => {
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
