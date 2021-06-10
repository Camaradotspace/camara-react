import React from 'react';
import { Moon, Sun } from 'react-feather';
import { DARK_THEME, styled } from '../../stitches.config';
import { globalStyles } from '../globalStyles';

interface ICamaraTheme {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
});

const Toggle = styled('button', {
  display: 'block',
  width: '30px',
  height: '30px',
  marginLeft: '$3',
  border: 'none',
  borderRadius: '2rem',
  padding: '4px',
  backgroundColor: '$bgHighlight',
  cursor: 'pointer',
  '&:hover': {
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
        padding: '24px',
      }}
    >
      <Toggle onClick={() => setUseDarkTheme(!useDarkTheme)}>
        {useDarkTheme ? (
          <Sun size={20} color={useDarkTheme ? '#bbb' : '#555'} />
        ) : (
          <Moon size={20} color={useDarkTheme ? '#bbb' : '#555'} />
        )}
      </Toggle>
      <div>{children}</div>
    </Wrapper>
  );
};
