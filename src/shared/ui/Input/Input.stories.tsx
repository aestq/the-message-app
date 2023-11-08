import type { Meta } from '@storybook/react'
import { ThemeDecorator, PaddingDecorator } from '@/shared/config'
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
  decorators: [PaddingDecorator(30), ThemeDecorator(Theme.DARK)]
}

export const With_Validate_Error: Story = {
  component: Input,
  args: {
    placeholder: 'Введите email',
    validateError: 'Ошибка'
  }
}

export const Not_Placeholder: Story = {
  component: Input
}
