import React from 'react';
import { globalStyles } from '../globalStyles';
import { DARK_THEME } from '../../stitches.config';

interface ICamaraTheme {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

export const CamaraTheme: React.FunctionComponent<ICamaraTheme> = ({
  children,
  theme,
}) => {
  globalStyles();
  return (
    <div className={theme === 'dark' ? DARK_THEME : 'light'}>{children}</div>
  );
};
