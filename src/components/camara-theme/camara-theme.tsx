import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../button';
import { GlobalStyle, darkTheme, defaultTheme } from '../../constants';

export const CamaraTheme = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Button onClick={() => setUseDarkTheme(true)}>Dark Theme</Button>
      <Button onClick={() => setUseDarkTheme(false)}>Default Theme</Button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};
