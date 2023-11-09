import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config'
import { Theme } from '@/shared/lib'
import { Messages } from './Messages'

const meta: Meta<typeof Messages> = {
  title: 'features/AuthByCode/Messages',
  component: Messages
}

export default meta
type Story = Meta<typeof Messages>

export const Light: Story = {
  component: Messages
}

export const Dark: Story = {
  component: Messages,
  decorators: [ThemeDecorator(Theme.DARK)]
}
