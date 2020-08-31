module.exports = {
  stories: [
    '../src/**/*.stories.@(js|ts|tsx|mdx)',
    '../docs/**/*.stories.@(js|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
  ],
};
