import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from '.';
import { Flex, Image } from '..';

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    debug: false,
  } as BoxProps,
  argTypes: {},
} as Meta;

// Base default box
export const Base: Story<BoxProps> = args => (
  <Box {...args} css={{}} width={700}>
    <Box {...args} css={{}} height={100} bg="#82CAFF" />
    <Flex justifyContent="space-between">
      <Box {...args} css={{}} height={100} width={200} bg="#82CAFF" />
      <Box {...args} css={{}} height={100} width={300} bg="#1589FF" />
      <Box {...args} css={{}} height={100} width={200} bg="#82CAFF" />
    </Flex>
    <Box {...args} css={{}} height={100} bg="#82CAFF" />
  </Box>
);
Base.args = {
  center: true,
} as BoxProps;

// Center
export const Center: Story<BoxProps> = args => (
  <Box {...args} css={{}} width="40%" bg="#1589FF">
    <Box {...args} css={{}} py={32} px={32}>
      <Image
        width="100%"
        src="https://source.unsplash.com/V_WBdOLOgJU/300x300"
        alt="woman in orange knit cap and blue jacket"
      />
    </Box>
  </Box>
);
Center.args = {
  center: true,
} as BoxProps;

// Debug
export const Debug: Story<BoxProps> = args => (
  <Box {...args} css={{}} p={16} center width={700}>
    <Box {...args} css={{}} m={8} border height={100} bg="#82CAFF" />
    <Flex justifyContent="space-between">
      <Box
        {...args}
        css={{}}
        m={8}
        border
        height={100}
        width={200}
        bg="#82CAFF"
      />
      <Box {...args} css={{}} m={8} height={100} width={300} bg="#1589FF" />
      <Box {...args} css={{}} m={8} height={100} width={200} bg="#82CAFF" />
    </Flex>
    <Box {...args} css={{}} m={8} border height={100} bg="#82CAFF" />
  </Box>
);
Debug.args = {
  debug: true,
} as BoxProps;

// Padding
export const Padding: Story<BoxProps> = args => (
  <Box {...args} css={{}} width={700}>
    <Box {...args} css={{}} border height={100} bg="#82CAFF" mb={16} />
    <Flex justifyContent="space-between">
      <Box {...args} css={{}} border height={100} width={200} bg="#82CAFF" />
      <Box
        {...args}
        css={{}}
        pt={100}
        pb={16}
        pl={16}
        pr={16}
        height={100}
        width={300}
        bg="#1589FF"
      />
      <Box {...args} css={{}} height={100} width={200} bg="#82CAFF" />
    </Flex>
    <Box {...args} css={{}} border height={100} bg="#82CAFF" />
  </Box>
);
Padding.args = {} as BoxProps;

// Margin
export const Margin: Story<BoxProps> = args => (
  <Box {...args} css={{}} width={700}>
    <Box {...args} css={{}} border height={100} bg="#82CAFF" />
    <Flex justifyContent="space-between">
      <Box
        {...args}
        css={{}}
        py={16}
        border
        height={100}
        width={200}
        bg="#82CAFF"
      />
      <Box
        mt={16}
        mb={16}
        ml={16}
        mr={16}
        height={100}
        width={300}
        bg="#1589FF"
      />
      <Box {...args} css={{}} py={16} height={100} width={200} bg="#82CAFF" />
    </Flex>
    <Box {...args} css={{}} border height={100} bg="#82CAFF" />
  </Box>
);
Margin.args = {} as BoxProps;
