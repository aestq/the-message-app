import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text
}

export default meta
type Story = Meta<typeof Text>

export const Light: Story = {
  component: Text,
  args: {
    children: 'Text lorem'
  }
}

export const Dark: Story = {
  component: Text,
  args: {
    children: 'Text lorem'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Text_title: Story = {
  component: Text,
  args: {
    children: 'Text lorem',
    title: true
  }
}

export const Size_xs: Story = {
  component: Text,
  args: {
    size: 'xs',
    children: 'Text lorem'
  }
}

export const Size_s: Story = {
  component: Text,
  args: {
    size: 's',
    children: 'Text lorem'
  }
}

export const Size_m: Story = {
  component: Text,
  args: {
    size: 'm',
    children: 'Text lorem'
  }
}

export const Size_l: Story = {
  component: Text,
  args: {
    size: 'l',
    children: 'Text lorem'
  }
}

export const Size_xl: Story = {
  component: Text,
  args: {
    size: 'xl',
    children: 'Text lorem'
  }
}
