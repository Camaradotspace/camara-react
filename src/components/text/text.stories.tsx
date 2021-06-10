import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from '.';
import { Flex } from '../flex';
import { Box } from '../box';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TextProps> = args => (
  <Text style={{ color: 'green', fontSize: 32 }} {...args} />
);

// Base default text
export const Base = Template.bind({});
Base.args = {
  children: 'This is a text component',
};

// variants
export const Variant = (args: TextProps) => (
  <Box>
    <Flex justifyContent="space-between">
      <Box>
        <Text {...args} variant="body">
          "All The Gods, All the Heavens, All The Hells Are Within You"
        </Text>
        <Text {...args} variant="hint">
          "All The Gods, All the Heavens, All The Hells Are Within You"
        </Text>
        <Text {...args} variant="caption">
          "All The Gods, All the Heavens, All The Hells Are Within You"
        </Text>
        <Text {...args} variant="overline">
          "All The Gods, All the Heavens, All The Hells Are Within You"
        </Text>
        <Text {...args} variant="label">
          "All The Gods, All the Heavens, All The Hells Are Within You"
        </Text>
      </Box>
      <Box>
        <Text {...args} variant="body">
          すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
          kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
        </Text>
        <Text {...args} variant="hint">
          すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
          kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
        </Text>
        <Text {...args} variant="caption">
          すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
          kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
        </Text>
        <Text {...args} variant="overline">
          すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
          kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
        </Text>
        <Text {...args} variant="label">
          すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
          kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
        </Text>
      </Box>
    </Flex>
  </Box>
);

// weight
export const Weight = (args: TextProps) => (
  <Box>
    <Box>
      <Text {...args} fontWeight="bold">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} fontWeight="bold">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
    </Box>

    <Box>
      <Text {...args} fontWeight="normal">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} fontWeight="normal">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
    </Box>
  </Box>
);

// italic
export const Italic = (args: TextProps) => (
  <Box>
    <Text {...args} fontStyle="italic">
      "All The Gods, All the Heavens, All The Hells Are Within You"
    </Text>
    <Text {...args} fontStyle="italic">
      すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
      kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
    </Text>
  </Box>
);

// inline
export const Inline = (args: TextProps) => (
  <Box>
    <Text {...args} inline>
      "All The Gods, All the Heavens, All The Hells Are Within You"
    </Text>
    <Text {...args} inline>
      すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
      kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
    </Text>
  </Box>
);

// align
export const Align = (args: TextProps) => (
  <Box>
    <Box>
      <Text {...args} textAlign="left">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} textAlign="center">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} textAlign="justify">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} textAlign="right">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
    </Box>
    <Box>
      <Text {...args} textAlign="left">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
      <Text {...args} textAlign="center">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
      <Text {...args} textAlign="justify">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
      <Text {...args} textAlign="right">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
    </Box>
  </Box>
);

// underline
export const Underline = (args: TextProps) => (
  <Box>
    <Text {...args} underline>
      "All The Gods, All the Heavens, All The Hells Are Within You"
    </Text>
    <Text {...args} underline>
      すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
      kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
    </Text>
  </Box>
);

// size
export const Size = (args: TextProps) => (
  <Box>
    <Box>
      <Text {...args} size="large">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} size="medium">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
      <Text {...args} size="small">
        "All The Gods, All the Heavens, All The Hells Are Within You"
      </Text>
    </Box>
    <Box>
      <Text {...args} size="large">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
      <Text {...args} size="medium">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
      <Text {...args} size="small">
        すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
        kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
      </Text>
    </Box>
  </Box>
);

// strike
export const Strike = (args: TextProps) => (
  <Box>
    <Text {...args} strike>
      "All The Gods, All the Heavens, All The Hells Are Within You"
    </Text>
    <Text {...args} strike>
      すべての神々、すべての天、すべての地獄はあなたの中にあります Subete no
      kami 々, Subete no ten, subete no jigoku wa anata no naka ni arimasu
    </Text>
  </Box>
);
