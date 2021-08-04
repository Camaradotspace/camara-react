import React from 'react';
import { styled } from '../../stitches.config';
import { NavBar } from '..';

export interface ThreePaneWindowProps {
  firstPaneChildren: React.ReactNode;
  secondPaneChildren: React.ReactNode;
  thirdPaneChildren: React.ReactNode;
}

const WindowContainer = styled('div', {
  display: 'flex',
  height: '100%',
  overflowY: 'auto',
});
const FirstPane = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$bg_secondary',
  borderRight: '2px solid $ui_border',
});
const SecondPane = styled('div', {
  flex: 2,
  borderRight: '2px solid $ui_border',
});
const ThirdPane = styled('div', {
  flex: 3,
  width: '40%',
});

export const ThreePaneWindow: React.FC<ThreePaneWindowProps> = ({
  firstPaneChildren,
  secondPaneChildren,
  thirdPaneChildren,
}) => {
  return (
    <>
      <NavBar />
      <WindowContainer>
        <FirstPane>{firstPaneChildren}</FirstPane>
        <SecondPane>{secondPaneChildren}</SecondPane>
        <ThirdPane>{thirdPaneChildren}</ThirdPane>
      </WindowContainer>
    </>
  );
};
