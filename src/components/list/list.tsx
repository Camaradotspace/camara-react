import React from 'react';
import { Flex, Box, Text, Tag, Avatar, Heading, NotificationDot } from '..';
import { styled } from '../../stitches.config';

type Tag = { id: number; color: string; name: string };

type ListItem = {
  id: number;
  subject: string;
  message: string;
  sender: string;
  tag: Tag[];
  initials: string;
  color: string;
  date: string;
  unread: boolean;
};

export interface ListProps {
  listData: ListItem[];
}

const ListContainer = styled('div', {
  'a > div:hover': {
    backgroundColor: '$btn_sec_hover',
  },
});

const ListItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid $ui_border',
  padding: '$3',
  // maxWidth: '400px',
});

const ListItemAnchor = styled('a', {
  textDecoration: 'none',
});

export const List: React.FC<ListProps> = ({ listData }) => {
  return (
    <ListContainer>
      {listData.map(item => (
        <ListItemAnchor key={item.id} href="">
          <ListItem>
            {item.unread ? (
              <Box>
                <NotificationDot />
              </Box>
            ) : (
              <Box>
                <NotificationDot hidden />
              </Box>
            )}
            <Box width="80%">
              <Heading
                noWhiteSpace
                level={4}
                fontWeight={!item.unread ? 300 : 'bold'}
              >
                {item.subject}
              </Heading>
              <Text
                fontWeight={!item.unread ? 300 : 500}
                fontSize={14}
                color="#777"
              >
                {item.message}
              </Text>
              <Tag color={item.tag[0].color}>{item.tag[0].name}</Tag>
            </Box>
            <Flex width="15%" direction="column" alignItems="flex-end">
              <Text
                color={item.unread ? '$brand_primary' : '#777'}
                fontSize={10}
                fontWeight={500}
              >
                {item.date}
              </Text>
              <Box>
                <Avatar username={item.initials} bg={item.color} color="#fff" />
              </Box>
            </Flex>
          </ListItem>
        </ListItemAnchor>
      ))}
    </ListContainer>
  );
};
