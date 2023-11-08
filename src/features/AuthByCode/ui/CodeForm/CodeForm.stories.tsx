import type { Meta } from '@storybook/react'
import { PaddingDecorator, ThemeDecorator } from '@/shared/config'
import { Theme } from '@/shared/lib'
import { CodeFrom } from './CodeForm'

const meta: Meta<typeof CodeFrom> = {
  title: 'features/AuthByCode/CodeFrom',
  component: CodeFrom
}

export default meta
type Story = Meta<typeof CodeFrom>

export const Light: Story = {
  component: CodeFrom
}

export const Dark: Story = {
  component: CodeFrom,
  decorators: [PaddingDecorator(30), ThemeDecorator(Theme.DARK)]
}
