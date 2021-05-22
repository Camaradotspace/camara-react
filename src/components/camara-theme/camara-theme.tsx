import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../theme/GlobalStyles';
import { lightTheme, darkTheme } from '../../theme/theme';

interface ICamaraTheme {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

export const CamaraTheme: FunctionComponent<ICamaraTheme> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
