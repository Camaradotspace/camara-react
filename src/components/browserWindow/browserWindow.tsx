import { Switch } from '../switch';
import React, { useState } from 'react';
import { Moon, Sun } from 'react-feather';
import { DARK_THEME, styled } from '../../stitches.config';
import { BrowserChrome } from './browserChrome';

const Wrapper = styled('div', {
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  width: '100%',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
});

const Container = styled('div', {
  width: '90%',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '$5',
  '& span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& span > small': {
    fontWeight: '500',
    color: '$text_primary',
    marginRight: '$1',
  },
});

const BrowserWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const BrowserBody = styled('div', {
  height: '100vh',
  backgroundColor: '$bg_primary',
  borderBottomLeftRadius: '$3',
  borderBottomRightRadius: '$3',
  overflowY: 'auto',
  px: '$4',
  py: '$3',
  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '10px',
    webkitBoxShadow: 'inset 0 0 6px #777',
    boxShadow: 'inset 0 0 6px #777',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    webkitBoxShadow: 'inset 0 0 6px #777',
    boxShadow: 'inset 0 0 6px #777',
  },
});

interface Props {
  children: React.ReactNode;
  docs?: boolean;
}

export const BrowserWindow = ({ children, docs }: Props) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <Wrapper
      className={useDarkTheme ? DARK_THEME : 'light'}
      css={{
        height: docs ? '100%' : 'auto',
        backgroundImage: useDarkTheme
          ? 'url("https://res.cloudinary.com/beaniegram/image/upload/c_scale,h_1000,w_1000/v1623835103/Personal%20Site/macOS-Big-Sur-Vector-Wave-Dark-Wallpaper-iDownloadBlog_lauxpt.jpg")'
          : 'url("https://res.cloudinary.com/beaniegram/image/upload/c_scale,h_1000,w_1000/v1623835298/Personal%20Site/macOS-Big-Sur-Vector-Wave-Wallpaper-iDownloadBlog_gfmhsj.jpg")',
      }}
    >
      <Container>
        <span>
          <div>
            {useDarkTheme ? (
              <Moon
                fill={useDarkTheme ? '#bbb' : '#000'}
                size={16}
                color={useDarkTheme ? '#bbb' : '#000'}
              />
            ) : (
              <Sun
                fill={useDarkTheme ? '#bbb' : '#000'}
                size={16}
                color={useDarkTheme ? '#bbb' : '#000'}
              />
            )}
          </div>
          <span>
            <small>Dark Mode</small>{' '}
            <Switch
              css={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '1rem 0',
              }}
              id={Math.random().toString()}
              onColor="#EF476F"
              isOn={useDarkTheme}
              handleToggle={() => setUseDarkTheme(!useDarkTheme)}
            />
          </span>
        </span>
        <BrowserWrapper css={{ display: docs ? 'block' : 'flex' }}>
          <BrowserChrome theme={useDarkTheme ? 'dark' : 'light'} />
          <BrowserBody
            css={{
              height: docs ? '100%' : '100vh',
              minHeight: docs ? '320px' : 'auto',
              maxHeight: docs ? '640px' : 'auto',
            }}
          >
            {children}
          </BrowserBody>
        </BrowserWrapper>
      </Container>
    </Wrapper>
  );
};
