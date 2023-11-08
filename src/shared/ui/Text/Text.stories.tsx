import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config'
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

export const Align_center: Story = {
  component: Text,
  args: {
    size: 'xl',
    children: 'Text lorem',
    align: 'center'
  }
}

export const Align_right: Story = {
  component: Text,
  args: {
    size: 'xl',
    children: 'Text lorem',
    align: 'right'
  }
}

export const Primary: Story = {
  component: Text,
  args: {
    size: 'l',
    children: 'Text lorem',
    theme: 'primary'
  }
}

export const Secondary: Story = {
  component: Text,
  args: {
    size: 'l',
    children: 'Text lorem',
    theme: 'secondary'
  }
}

export const Error: Story = {
  component: Text,
  args: {
    size: 'l',
    children: 'Text lorem',
    theme: 'error'
  }
}

export const Clear: Story = {
  component: Text,
  args: {
    size: 'l',
    children: 'Text lorem',
    theme: 'clear'
  }
}
