import React, { FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../button';
import { GlobalStyles } from '../../theme/GlobalStyles';
import { lightTheme, darkTheme } from '../../theme/theme';

interface ICamaraTheme {
  children: React.ReactNode;
}

export const CamaraTheme: FunctionComponent<ICamaraTheme> = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <Button onClick={() => setUseDarkTheme(!useDarkTheme)}>
        Switch Theme
      </Button>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
