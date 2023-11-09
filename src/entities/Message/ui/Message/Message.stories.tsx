import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config'
import { Theme } from '@/shared/lib'
import { Message } from './Message'

const meta: Meta<typeof Message> = {
  title: 'entities/Message/Message',
  component: Message,
  args: {
    text: 'Hello!'
  }
}

export default meta
type Story = Meta<typeof Message>

export const Light: Story = {
  component: Message
}

export const Is_Me_Light: Story = {
  component: Message,
  args: {
    isMe: true
  }
}

export const Dark: Story = {
  component: Message,
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Is_Me_Dark: Story = {
  component: Message,
  args: {
    isMe: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
