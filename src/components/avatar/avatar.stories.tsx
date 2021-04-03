import React from 'react';
import { Avatar, AvatarProps } from '.';
import { Story, Meta } from '@storybook/react';
import { User } from 'react-feather';
import { Flex } from '../layout';
import { Box } from '../box';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
  args: {
    imageUrl: 'https://source.unsplash.com/200x200/?shiba-inu',
    imageAlt: 'portrait of Shiba Inu',
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

// Base default avatar
export const Base = Template.bind({});
Base.args = {
  shape: 'circle',
  size: 'large',
};

// types
export const Types = (args: AvatarProps) => (
  <Box>
    <Flex>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </Flex>
    <Flex>
      <Avatar {...args} size='large' icon={<User color='#777' size={64} />} />
      <Avatar {...args} size='medium' icon={<User color='#777' size={48} />} />
      <Avatar {...args} size='small' icon={<User color='#777' size={32} />} />
      <Avatar {...args} size='tiny' icon={<User color='#777' size={24} />} />
    </Flex>
    <Flex>
      <Avatar {...args} imageUrl={null} size='large' username='Sam' />
      <Avatar {...args} imageUrl={null} size='medium' username='Sam' />
      <Avatar {...args} imageUrl={null} size='small' username='Sam' />
      <Avatar {...args} imageUrl={null} size='tiny' username='Sam' />
    </Flex>
    <Flex>
      <Avatar {...args} stories size='large' />
      <Avatar {...args} stories size='medium' />
      <Avatar {...args} stories size='small' />
      <Avatar {...args} stories size='tiny' />
    </Flex>
  </Box>
);

// sizes
export const Sizes = (args: AvatarProps) => (
  <Flex>
    <Avatar {...args} size='large' />
    <Avatar {...args} size='medium' />
    <Avatar {...args} size='small' />
    <Avatar {...args} size='tiny' />
  </Flex>
);

// shapes
export const Shapes = (args: AvatarProps) => (
  <Box>
    <Flex>
      <Avatar {...args} shape='circle' size='large' />
      <Avatar {...args} shape='circle' size='medium' />
      <Avatar {...args} shape='circle' size='small' />
      <Avatar {...args} shape='circle' size='tiny' />
    </Flex>
    <Flex>
      <Avatar {...args} shape='square' size='large' />
      <Avatar {...args} shape='square' size='medium' />
      <Avatar {...args} shape='square' size='small' />
      <Avatar {...args} shape='square' size='tiny' />
    </Flex>
  </Box>
);

// icons
export const Icon = (args: AvatarProps) => (
  <Flex>
    <Avatar {...args} size='tiny' icon={<User color='#777' size={24} />} />
    <Avatar {...args} size='small' icon={<User color='#777' size={32} />} />
    <Avatar {...args} size='medium' icon={<User color='#777' size={48} />} />
    <Avatar {...args} size='large' icon={<User color='#777' size={64} />} />
  </Flex>
);

// initials
export const Initial = (args: AvatarProps) => (
  <Flex>
    <Avatar {...args} imageUrl={null} size='tiny' username='Sam' />
    <Avatar {...args} imageUrl={null} size='small' username='Sam' />
    <Avatar {...args} imageUrl={null} size='medium' username='Sam' />
    <Avatar {...args} imageUrl={null} size='large' username='Sam' />
    <Avatar
      {...args}
      imageUrl={null}
      size={120}
      initialsSize={80}
      username='Sam'
    />
  </Flex>
);

// stories
export const Stories = (args: AvatarProps) => (
  <Flex>
    <Avatar {...args} stories size='large' />
    <Avatar {...args} stories size='medium' />
    <Avatar {...args} stories size='small' />
    <Avatar {...args} stories size='tiny' />
  </Flex>
);
