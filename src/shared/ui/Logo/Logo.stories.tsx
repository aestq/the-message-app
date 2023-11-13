import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config'
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

export const Size_s: Story = {
  component: Logo,
  args: {
    size: 's'
  }
}

export const Size_m: Story = {
  component: Logo,
  args: {
    size: 'm'
  }
}

export const Size_l: Story = {
  component: Logo,
  args: {
    size: 'l'
  }
}
