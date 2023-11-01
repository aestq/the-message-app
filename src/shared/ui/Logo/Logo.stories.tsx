import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'shared/Logo',
  component: Logo
}

export default meta
type Story = Meta<typeof Logo>

export const Light: Story = {
  component: Logo
}

export const Dark: Story = {
  component: Logo,
  decorators: [ThemeDecorator(Theme.DARK)]
}
