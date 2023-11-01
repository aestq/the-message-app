import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Dark: Story = {
  render: () => (
    <ThemeSwitcher />
  ),
  decorators: [ThemeDecorator(Theme.DARK)]
}
