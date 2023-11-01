import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage
}

export default meta
type Story = Meta<typeof NotFoundPage>

export const Light: Story = {
  component: NotFoundPage
}

export const Dark: Story = {
  component: NotFoundPage,
  decorators: [ThemeDecorator(Theme.DARK)]
}
