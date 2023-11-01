import type { Meta } from '@storybook/react'
import { Flex } from './Flex.tsx'

const meta: Meta<typeof Flex> = {
  title: 'shared/Flex',
  component: Flex
}
export default meta

type Story = Meta<typeof Flex>

export const Row: Story = {
  component: Flex,
  args: {
    direction: 'row',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    )
  }
}

export const RowGap16: Story = {
  component: Flex,
  args: {
    direction: 'row',
    gap: '16',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    )
  }
}

export const Column: Story = {
  component: Flex,
  args: {
    direction: 'column',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    )
  }
}

export const ColumnAndAlignEnd: Story = {
  component: Flex,
  args: {
    direction: 'column',
    align: 'end',
    children: (
      <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </>
    )
  }
}
