import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { EntryPage } from './EntryPage'

const meta: Meta<typeof EntryPage> = {
  title: 'pages/EntryPage',
  component: EntryPage
}

export default meta
type Story = Meta<typeof EntryPage>

export const Light: Story = {
  component: EntryPage
}

export const Dark: Story = {
  component: EntryPage,
  decorators: [ThemeDecorator(Theme.DARK)]
}
