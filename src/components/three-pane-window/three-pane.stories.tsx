import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThreePaneWindow, ThreePaneWindowProps } from '.';
import { List, NavigationPane } from '..';

export default {
  title: 'Components/ThreePaneWindow',
  component: ThreePaneWindow,
} as Meta;

const listData = [
  {
    id: 1,
    subject: 'Design is never neutral',
    message:
      'The choices we make as designers have very real consequences. Of course not. But that’s...',
    sender: 'Anthonia Robert',
    tag: [{ id: 1, color: 'red', name: 'design' }],
    initials: 'AR',
    color: 'tomato',
    date: '18.01.01',
    unread: true,
  },
  {
    id: 2,
    subject: 'One tool for all the team communication',
    message:
      'Was constantly responding to group chat messages the best use of our time? Of...',
    sender: 'Roxanne Joan',
    tag: [{ id: 1, color: 'orange', name: 'rebrand' }],
    initials: 'RJ',
    color: 'purple',
    date: '18.04.13',
    unread: false,
  },
  {
    id: 3,
    subject: 'Please add support for adding direct messages',
    message:
      'Two years into product development, our team switched entirely from working w....',
    sender: 'Presh Onyee',
    tag: [{ id: 1, color: 'blue', name: 'messaging' }],
    initials: 'PO',
    color: 'green',
    date: '21.08.03',
    unread: true,
  },
  {
    id: 4,
    subject: 'Design is never neutral',
    message:
      'The choices we make as designers have very real consequences. Of course not. But that’s...',
    sender: 'Anthonia Robert',
    tag: [{ id: 1, color: 'red', name: 'design' }],
    initials: 'AR',
    color: 'tomato',
    date: '18.01.01',
    unread: true,
  },
  {
    id: 5,
    subject: 'One tool for all the team communication',
    message:
      'Was constantly responding to group chat messages the best use of our time? Of...',
    sender: 'Roxanne Joan',
    tag: [{ id: 1, color: 'orange', name: 'rebrand' }],
    initials: 'RJ',
    color: 'purple',
    date: '18.04.13',
    unread: false,
  },
];

const Template: Story<ThreePaneWindowProps> = args => (
  <ThreePaneWindow
    {...args}
    firstPaneChildren={<NavigationPane />}
    secondPaneChildren={<List listData={listData} />}
    thirdPaneChildren={null}
  />
);

// Base default ThreePaneWindow
export const Base = Template.bind({});
Base.args = {} as ThreePaneWindowProps;
