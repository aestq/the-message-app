import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input
}

export default meta
type Story = Meta<typeof Input>

export const Light: Story = {
  component: Input,
  args: {
    placeholder: 'Введите email'
  }
}

export const Dark: Story = {
  component: Input,
  args: {
    placeholder: 'Введите email'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
