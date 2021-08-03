import React from 'react';
import { styled } from '../../stitches.config';
import {
  ChevronLeft,
  ChevronRight,
  Layout,
  Padlock,
  Plus,
  Refresh,
  Share,
  Shield,
  Tabs,
  TrafficLight,
} from './icons';

const Container = styled('div', {
  display: 'flex',
  padding: '$2',
  borderTopLeftRadius: '$3',
  borderTopRightRadius: '$3',
});

const AddressBar = styled('div', {
  py: '2px',
  px: '$2',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '$2',
  '& small': {
    ml: '$1',
  },
  '& .url': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .lock > *': {
    width: '10px',
    height: '10px',
  },
  '& .refresh > *': {
    width: '12px',
    height: '12px',
  },
});

const LeftSide = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .left': {
    display: 'flex',
  },
  '& .traffic_light > *': {
    mx: '$2',
    width: '36px',
    height: '14px',
  },
  '& .chevrons > *': {
    mx: '$2',
    width: '8px',
    height: '12px',
  },
  '& .layout > *': {
    mx: '$3',
    width: '16px',
    height: '12px',
  },
  '& .shield > *': {
    mx: '$3',
    width: '14px',
    height: '14px',
  },
});
const RightSide = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& > *': {
    mx: '$2',
    width: '12px',
    height: '12px',
  },
});

interface IChrome {
  theme?: 'light' | 'dark';
}

export const BrowserChrome = ({ theme }: IChrome) => {
  return (
    <Container
      css={{
        backgroundColor:
          theme === 'dark'
            ? 'rgba(38, 43, 47, 0.53)'
            : 'rgba(255, 255, 255, 0.78)',
      }}
    >
      <LeftSide>
        <div className="left">
          <span className="traffic_light">
            <TrafficLight />
          </span>
          <span className="layout">
            <Layout theme={theme} />
          </span>
          <span className="chevrons">
            <ChevronLeft theme={theme} />
            <ChevronRight theme={theme} />
          </span>
        </div>
        <span className="shield">
          <Shield theme={theme} />
        </span>
      </LeftSide>

      <AddressBar
        css={{
          backgroundColor:
            theme === 'dark' ? 'rgba(66, 75, 82, 0.18)' : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <span></span>
        <div className="url">
          <span className="lock">
            <Padlock theme={theme} />
          </span>
          <small style={{ color: theme === 'dark' ? '#ccc' : '#000' }}>
            camara.space
          </small>
        </div>
        <span className="refresh">
          <Refresh theme={theme} />
        </span>
      </AddressBar>

      <RightSide>
        <Share theme={theme} />
        <Plus theme={theme} />
        <Tabs theme={theme} />
      </RightSide>
    </Container>
  );
};
