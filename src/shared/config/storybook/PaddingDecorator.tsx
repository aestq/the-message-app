import { type StoryFn } from '@storybook/react'

export const PaddingDecorator = (padding: number) =>
  // eslint-disable-next-line
  (Story: StoryFn) => (
  <div
    style={{ padding }}
  >
    <Story />
  </div>
  )
