import React from 'react';
import { TabPanel } from './tab-panel';
import { Tab } from '.';
import { styled } from '../../stitches.config';
import { Heading, Text } from '..';

const TabsWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  //   border: '1px solid orange',
  //   padding: '1rem',
  width: '500px',

  '& .tablist': {
    width: '100%',
    borderBottom: '1px solid $ui_border',
  },

  '& .tablist > li': {
    listStyle: 'none',
  },

  '& .tablist > li > button': {
    marginRight: '$3',
    padding: '$3 0',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    color: '#999',
    fontWeight: '$medium',
    cursor: 'pointer',
  },

  '& .tablist > li > [aria-selected="true"]': {
    borderBottom: '4px solid $brand_primary',
    color: '$text_primary',
    fontWeight: '$bold',
  },

  //   '& .tabs-wrapper': {
  //     border: '0.15rem solid $ui_border',
  //     padding: '1rem',
  //   },

  '& .switcher > *': {
    display: 'flex',
    flexWrap: 'wrap',
  },

  '& .switcher > * > * ': {
    // flexGrow: 1,
    // flexBasis: 'calc((var(--tab-width) - (100% - var(--tab-padding))) * 999)',
  },

  '& .switcher > * > :nth-last-child(n + 5)': {
    // flexBasis: '100%',
  },

  '& .switcher > * > :nth-last-child(n + 5) ~ *': {
    // flexBasis: '100%',
  },
});

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleClick = (index: number) => {
    setSelectedTab(index);
  };

  const tabValues: any = {
    1: { title: 'Cats', ref: React.useRef(null) },
    2: { title: 'Dogs', ref: React.useRef(null) },
    3: { title: 'Birds', ref: React.useRef(null) },
  };

  const myOwnRef = React.useRef(null);

  const handleNextTab = (
    firstTabInRound: number,
    nextTab: number,
    lastTabInRound: number
  ) => {
    const tabToSelect =
      selectedTab === lastTabInRound ? firstTabInRound : nextTab;
    setSelectedTab(tabToSelect);
    tabValues[tabToSelect].ref.current.focus();
  };

  const handleKeyPress = (event: any) => {
    const tabCount = Object.keys(tabValues).length;

    if (event.key === 'ArrowLeft') {
      const last = tabCount;
      const next = selectedTab - 1;
      handleNextTab(last, next, 1);
    }
    if (event.key === 'ArrowRight') {
      const first = 1;
      const next = selectedTab + 1;
      handleNextTab(first, next, tabCount);
    }
  };

  return (
    <TabsWrapper className="tabs-wrapper">
      <div className="switcher">
        <ul
          role="tablist"
          className="tablist switcher"
          aria-label="Cat tabs"
          onKeyDown={handleKeyPress}
        >
          <Tab
            id="firstTab"
            tabPanelId="firstTabPanel"
            index={1}
            handleChange={handleClick}
            selectedTab={selectedTab}
            tabRef={myOwnRef}
            title={tabValues[1].title}
          />
          <Tab
            id="secondTab"
            tabPanelId="secondTabPanel"
            index={2}
            handleChange={handleClick}
            selectedTab={selectedTab}
            tabRef={myOwnRef}
            title={tabValues[2].title}
          />
          <Tab
            id="thirdTab"
            tabPanelId="thirdTabPanel"
            index={3}
            handleChange={handleClick}
            selectedTab={selectedTab}
            tabRef={myOwnRef}
            title={tabValues[3].title}
          />
        </ul>
      </div>
      <TabPanel
        id="firstTabPanel"
        tabID="firstTab"
        tabIndex={1}
        selectedTab={selectedTab}
      >
        <Heading level={2}>{tabValues[1].title}</Heading>
        <Text>The content here can be anything</Text>
      </TabPanel>
      <TabPanel
        id="secondTabPanel"
        tabID="secondTab"
        tabIndex={2}
        selectedTab={selectedTab}
      >
        <Heading level={2}>{tabValues[2].title}</Heading>
        <Text> It can also be dogs</Text>
      </TabPanel>
      <TabPanel
        id="thirdTabPanel"
        tabID="thirdTab"
        tabIndex={3}
        selectedTab={selectedTab}
      >
        <Heading level={2}>{tabValues[3].title}</Heading>
        <Text>Or even birds too</Text>
      </TabPanel>
    </TabsWrapper>
  );
};
