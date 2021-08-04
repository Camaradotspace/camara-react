import React from 'react';
import { Inbox, Plus, Star, Tag } from 'react-feather';
import { Flex, Text, Box, Heading, Anchor } from '..';
import { styled } from '../../stitches.config';

export interface NavigationPaneProps {}

const NavigationPaneStyles = styled('div', {
  height: '100%',
  //   border: '1px solid #e5e5e5',
  'a > div:hover': {
    backgroundColor: '$btn_sec_hover',
  },
});

export const NavigationPane: React.FC<NavigationPaneProps> = ({}) => {
  const tags = [
    { id: 1, name: 'Design', count: 1, color: '#ffc107' },
    { id: 2, name: 'Feedback From Testers', count: 2, color: 'orange' },
    { id: 3, name: 'Bug Reports', count: 0, color: 'pink' },
    { id: 4, name: 'Feature Requests', count: 0, color: 'purple' },
    { id: 5, name: 'Questions', count: 0, color: '#00b2ff' },
    { id: 6, name: 'Rebrand', count: 0, color: 'teal' },
    { id: 7, name: 'Inspiration', count: 0, color: 'tomato' },
  ];
  return (
    <NavigationPaneStyles>
      <Anchor href="" underline={false}>
        <Flex px="$2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Inbox color="#1a73e8" size={20} />
            <Text mx="$1" fontWeight={500} size="small">
              FeedBox
            </Text>
          </Flex>
          <Text>2</Text>
        </Flex>
      </Anchor>
      <Anchor href="" underline={false}>
        <Flex px="$2" alignItems="center">
          <Flex alignItems="center" justifyContent="space-between">
            <Star color="orange" size={20} />
            <Text mx="$1" fontWeight={500} size="small">
              Starred
            </Text>
          </Flex>
          <Text>{}</Text>
        </Flex>
      </Anchor>
      {/* TAGS */}
      <Box my="$4">
        <Flex px="$2" alignItems="center" justifyContent="space-between">
          <Heading level={4}>Tags</Heading>
          <Plus color="#777" size={20} />
        </Flex>
        <Box>
          {tags.map(tag => (
            <Anchor key={tag.id} href="" underline={false}>
              <Box my="$1" px="$2">
                <Flex justifyContent="space-between">
                  <Flex alignItems="center">
                    <Tag color={tag.color} size={16} />
                    <Text
                      color="$text_secondary"
                      px="$2"
                      size="small"
                      fontWeight={500}
                    >
                      {tag.name}
                    </Text>
                  </Flex>
                  <Text color="$text_secondary" size="small" fontWeight={500}>
                    {tag.count >= 1 && tag.count}
                  </Text>
                </Flex>
              </Box>
            </Anchor>
          ))}
        </Box>
      </Box>
    </NavigationPaneStyles>
  );
};
