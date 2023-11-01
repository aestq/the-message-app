import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher
}
export default meta

type Story = Meta<typeof ThemeSwitcher>

export const Light: Story = {
  component: ThemeSwitcher
}

export const Dark: Story = {
  component: ThemeSwitcher,
  decorators: [ThemeDecorator(Theme.DARK)]
}
