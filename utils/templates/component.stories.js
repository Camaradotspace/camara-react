module.exports = (componentName) => ({
  content: `import {
  Meta,
  Story,
  Canvas,
  ArgsTable,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import {${componentName}} from './${componentName}';

<Meta title='Components/${componentName}' component={${componentName}} />

export const argTypes = {
  color: { control: 'color' },
};

# ${componentName}

${componentName}s are used to indicate whatever

## Usage

${componentName} should be ${componentName}

<Canvas withToolbar>
  <Story name='${componentName}' args={{}} argTypes={argTypes}>
    {(args) => <${componentName} {...args} />}
  </Story>
</Canvas>

<ArgsTable story={PRIMARY_STORY} />
`,
  extension: `.stories.mdx`,
});
