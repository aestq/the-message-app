import { type StoryFn } from '@storybook/react'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '@/shared/lib'

// eslint-disable-next-line
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ThemeProvider initTheme={theme}>
      <Story />
    </ThemeProvider>
  )
}
