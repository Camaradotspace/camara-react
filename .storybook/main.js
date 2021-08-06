module.exports = {
  typescript: {
    // also valid 'react-docgen-typescript' | false
    reactDocgen: 'react-docgen-typescript',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addons',
    '@storybook/theming',
  ],
};
