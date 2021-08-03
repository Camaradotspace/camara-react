import { Avatar, Flex, Heading, Text } from '..';
import React from 'react';
import { ChevronDown } from 'react-feather';
import { styled } from '../../stitches.config';

export interface NavBarProps {}

const NavBarWrapper = styled('div', {
  height: 40,
  px: '$3',
  backgroundColor: '$brand_primary',
});

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading fontWeight="normal" color="$text_inverse" level={4}>
          Feedback Tower
        </Heading>
        <Flex>
          <Avatar
            size="tiny"
            imageSrc="https://res.cloudinary.com/beaniegram/image/upload/v1621233700/iecbxwcmdgvchbalxety.png"
            imageAlt="author's portrait"
          />
          <Flex alignItems="center">
            <Text mx="$1" size="small" color="$text_inverse">
              PreshOnyee
            </Text>
            <ChevronDown color="#fff" size={16} />
          </Flex>
        </Flex>
      </Flex>
    </NavBarWrapper>
  );
};
