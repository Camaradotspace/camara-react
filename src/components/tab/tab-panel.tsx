import React from 'react';
import { styled } from '../../stitches.config';

export interface TabPanelProps {
  id: string;
  tabID: string;
  tabIndex: number;
  selectedTab: number;
}

const StyledTabPanel = styled('section', {
  padding: '$4 0',
  //   border: '1px solid red',
});

export const TabPanel: React.FunctionComponent<TabPanelProps> = ({
  id,
  tabID,
  tabIndex,
  selectedTab,
  children,
}) => {
  return (
    <StyledTabPanel
      role="tabpanel"
      id={id}
      aria-labelledby={tabID}
      hidden={selectedTab !== tabIndex}
      tabIndex={0}
    >
      {children}
    </StyledTabPanel>
  );
};
