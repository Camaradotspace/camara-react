import React from 'react';
import { Story, Meta } from '@storybook/react';
import { User } from 'react-feather';
import { Avatar, AvatarProps } from '.';
import { Box } from '../box';
import { Flex } from '../flex';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

// Base default avatar
export const Base = Template.bind({});
Base.args = {
  shape: 'circle',
  size: 'large',
  imageSrc: 'https://source.unsplash.com/200x200/?shiba-inu',
  imageAlt: 'portrait of Shiba Inu',
};

// types
export const Types = (args: AvatarProps) => (
  <Box>
    <Flex>
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        size="large"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        size="medium"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        size="small"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        size="tiny"
      />
    </Flex>
    <Flex>
      <Avatar {...args} size="large" icon={<User color="#777" size={64} />} />
      <Avatar {...args} size="medium" icon={<User color="#777" size={48} />} />
      <Avatar {...args} size="small" icon={<User color="#777" size={32} />} />
      <Avatar {...args} size="tiny" icon={<User color="#777" size={24} />} />
    </Flex>
    <Flex>
      <Avatar {...args} size="large" username="Sam" />
      <Avatar {...args} size="medium" username="Sam" />
      <Avatar {...args} size="small" username="Sam" />
      <Avatar {...args} size="tiny" username="Sam" />
    </Flex>
    <Flex>
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        stories
        size="large"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        stories
        size="medium"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        stories
        size="small"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        stories
        size="tiny"
      />
    </Flex>
  </Box>
);

// sizes
export const Sizes = (args: AvatarProps) => (
  <Flex>
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      size="large"
    />
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      size="medium"
    />
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      size="small"
    />
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      size="tiny"
    />
  </Flex>
);

// shapes
export const Shapes = (args: AvatarProps) => (
  <Box>
    <Flex>
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="circle"
        size="large"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="circle"
        size="medium"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="circle"
        size="small"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="circle"
        size="tiny"
      />
    </Flex>
    <Flex>
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="square"
        size="large"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="square"
        size="medium"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="square"
        size="small"
      />
      <Avatar
        {...args}
        imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
        imageAlt="portrait of Shiba Inu"
        shape="square"
        size="tiny"
      />
    </Flex>
  </Box>
);

// icons
export const Icon = (args: AvatarProps) => (
  <Flex>
    <Avatar {...args} size="tiny" icon={<User color="#777" size={24} />} />
    <Avatar {...args} size="small" icon={<User color="#777" size={32} />} />
    <Avatar {...args} size="medium" icon={<User color="#777" size={48} />} />
    <Avatar {...args} size="large" icon={<User color="#777" size={64} />} />
  </Flex>
);

// initials
export const Initial = (args: AvatarProps) => (
  <Flex>
    <Avatar {...args} size="tiny" username="Sam" />
    <Avatar {...args} size="small" username="Sam" />
    <Avatar {...args} size="medium" username="Sam" />
    <Avatar {...args} size="large" username="Sam" />
    <Avatar {...args} initialsSize={80} username="Sam" />
  </Flex>
);

// stories
export const Stories = (args: AvatarProps) => (
  <Flex>
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      stories
      size="large"
    />
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      stories
      size="medium"
    />
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      stories
      size="small"
    />
    <Avatar
      {...args}
      imageSrc="https://source.unsplash.com/200x200/?shiba-inu"
      imageAlt="portrait of Shiba Inu"
      stories
      size="tiny"
    />
  </Flex>
);
