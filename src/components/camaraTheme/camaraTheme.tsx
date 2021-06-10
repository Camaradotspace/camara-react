import React from 'react';
import { Moon, Sun } from 'react-feather';
import { DARK_THEME, styled } from '../../stitches.config';
import { globalStyles } from '../globalStyles';

interface ICamaraTheme {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

const Wrapper = styled('div', {});

const Toggle = styled('button', {
  float: 'right',
  border: 'none',
  borderRadius: '1rem',
  padding: '8px',
  backgroundColor: '$bgHighlight',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$bgHighlightHover',
  },
  '&:active, &:focus': {
    backgroundColor: '$bgHighlightHover',
  },
});

export const CamaraTheme: React.FunctionComponent<ICamaraTheme> = ({
  children,
}) => {
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);

  globalStyles();
  return (
    <Wrapper
      className={useDarkTheme ? DARK_THEME : 'light'}
      css={{
        backgroundColor: useDarkTheme ? '#18181b' : '#fff',
        padding: '16px 24px',
      }}
    >
      <Toggle onClick={() => setUseDarkTheme(!useDarkTheme)}>
        {useDarkTheme ? (
          <Sun color={useDarkTheme ? '#bbb' : '#333'} />
        ) : (
          <Moon color={useDarkTheme ? '#bbb' : '#333'} />
        )}
      </Toggle>
      <div>{children}</div>
    </Wrapper>
  );
};
