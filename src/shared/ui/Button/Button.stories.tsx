import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Clear: Story = {
  render: () => (
    <Button>
      Button
    </Button>
  )
}

export const Primary: Story = {
  render: () => (
    <Button theme='primary'>
      Button
    </Button>
  )
}

export const S_size: Story = {
  render: () => (
    <Button theme='primary' size='s'>
      Button
    </Button>
  )
}

export const M_size: Story = {
  render: () => (
    <Button theme='primary' size='m'>
      Button
    </Button>
  )
}

export const L_size: Story = {
  render: () => (
    <Button theme='primary' size='l'>
      Button
    </Button>
  )
}

export const Max: Story = {

  render: () => (
    <Button theme='primary' max>
      Button
    </Button>
  )
}
