import type { Meta } from '@storybook/react'
import { Transition } from './Transition'

const meta: Meta<typeof Transition> = {
  title: 'shared/Transition',
  component: Transition,
  args: {
    children: (
      <div
        style={{
          background: '#85b0a0',
          width: '40px',
          height: '40px',
          borderRadius: '5px'
        }}
      />
    )
  }
}

export default meta
type Story = Meta<typeof Transition>

export const Animation_In: Story = {
  component: Transition,
  args: {
    timeout: 1000
  }
}

export const Animation_Out: Story = {
  component: Transition,
  args: {
    timeout: 1000,
    animation: 'out'
  }
}

export const Timeout_2000: Story = {
  component: Transition,
  args: {
    timeout: 2000,
    animation: 'out'
  }
}

export const Delay_1000: Story = {
  component: Transition,
  args: {
    timeout: 700,
    delay: 1000,
    animation: 'out'
  }
}
export const Transform_From: Story = {
  component: Transition,
  args: {
    timeout: 700,
    delay: 400,
    fromX: 100,
    fromY: 100
  }
}

export const Transform_To: Story = {
  component: Transition,
  args: {
    timeout: 700,
    delay: 400,
    toX: 100,
    toY: 100
  }
}
