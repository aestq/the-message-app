import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button
}

export default meta
type Story = Meta<typeof Button>

export const Clear: Story = {
  component: Button,
  args: {
    children: 'button'
  }
}

export const Primary: Story = {
  component: Button,
  args: {
    theme: 'primary',
    children: 'button'
  }
}

export const Primary_dark: Story = {
  component: Button,
  args: {
    theme: 'primary',
    children: 'button'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const S_size: Story = {
  component: Button,
  args: {
    theme: 'primary',
    children: 'button',
    size: 's'
  }
}

export const M_size: Story = {
  component: Button,
  args: {
    theme: 'primary',
    children: 'button',
    size: 'm'
  }
}

export const L_size: Story = {
  component: Button,
  args: {
    theme: 'primary',
    children: 'button',
    size: 'l'
  }
}

export const Max: Story = {
  component: Button,
  args: {
    theme: 'primary',
    children: 'button',
    max: true
  }
}
