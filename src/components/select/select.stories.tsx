import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Select, SelectProps, Option } from '.';
import { Button } from '../button';
import { Box } from '../box';

const options = [
  {
    id: 1,
    title: 'Hopper',
    value: 'hopper',
    extra:
      'Grace Hopper was an American computer scientist and US Navy rear admiral.',
  },
  {
    id: 2,
    title: 'Teitelbaum',
    value: 'teitelbaum',
    extra:
      'Ruth Teitelbaum was one of the first computer programmers in the world.',
  },
  {
    id: 3,
    title: 'Holberton',
    value: 'holberton',
    extra:
      'Frances Elizabeth Holberton was one of the first programmers of the first computer.',
  },
  {
    id: 4,
    title: 'Antonelli',
    value: 'antonelli',
    extra:
      'Kathleen McNulty Antonelli was an Irish computer scientist, and part of a team of six programmers which in 1946 developed ENIAC.',
  },
  {
    id: 5,
    title: 'Bartik',
    value: 'bartik',
    extra:
      'Jean Jennings Bartik was one of the original programmers for the ENIAC computer.',
  },
];

export default {
  title: 'Components/Select_Unstable',
  component: Select,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    title: 'Select Hero',
    extended: false,
    options: options,
  },
} as Meta;

const Template: Story<SelectProps> = args => (
  <Box css={{ width: '30%' }}>
    <Select {...args} />
  </Box>
);

// Base default select menu
export const Base = Template.bind({});
Base.args = { placeholder: 'Select Hero' };

// Placeholder
export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: 'Choose from...' };

// Options
export const Options = Template.bind({});
Options.args = { options: options };

// extended
export const Extended = Template.bind({});
Extended.args = {
  extended: true,
};

// handleChange
const HandleChangeTemplate: Story<SelectProps> = args => {
  const [selection, setSelection] = React.useState('');

  function onSubmit(e: any) {
    e.preventDefault();
    alert(`You selected: ${selection}`);
  }
  return (
    <form onSubmit={onSubmit} style={{ width: '150px' }}>
      <Select
        placeholder="Select"
        options={options}
        extended={true}
        handleChange={(option: Option) => setSelection(option.value)}
      />
      <Button type="submit" size="small">
        submit
      </Button>
    </form>
  );
};

export const HandleChange = HandleChangeTemplate.bind({});
