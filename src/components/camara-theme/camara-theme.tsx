import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../button';
// import { GlobalStyle, darkTheme, defaultTheme } from '../../constants';
import { GlobalStyles } from '../../theme/GlobalStyles';
import themes from '../../theme/schema.json';

export const CamaraTheme = (children) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider
      theme={useDarkTheme ? themes.data.light : themes.data.seaWave}
    >
      <Button onClick={() => setUseDarkTheme(true)}>Dark Theme</Button>
      <Button onClick={() => setUseDarkTheme(false)}>Default Theme</Button>
      <GlobalStyles />
      {children()}
    </ThemeProvider>
  );
};
