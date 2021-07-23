import React, { LegacyRef } from 'react';
import { styled } from '../../stitches.config';

export interface TabProps {
  id: string;
  title: string;
  selectedTab: number;
  index: number;
  tabPanelId: string;
  handleChange: (event: any) => void;
  tabRef: LegacyRef<HTMLButtonElement>;
}

const StyledTab = styled('li', {
  //   border: '1px solid purple',
});

export const Tab: React.FunctionComponent<TabProps> = ({
  id,
  title,
  selectedTab,
  index,
  tabPanelId,
  handleChange,
  tabRef,
}) => {
  const handleClick = () => handleChange(index);
  return (
    <StyledTab role="presentation">
      <button
        role="tab"
        id={id}
        aria-selected={selectedTab === index}
        aria-controls={tabPanelId}
        tabIndex={selectedTab === index ? 0 : -1}
        onClick={handleClick}
        ref={tabRef}
      >
        {title}
      </button>
    </StyledTab>
  );
};
