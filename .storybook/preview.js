import { addDecorator } from '@storybook/react'
import StoryBookTheme from '../src/components/storybookTheme'

addDecorator(StoryBookTheme)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
