import type { Meta, StoryObj } from '@storybook/react'
import { EntryPage } from './EntryPage'

const meta: Meta<typeof EntryPage> = {
  title: 'pages/EntryPage',
  component: EntryPage
}

export default meta
type Story = StoryObj<typeof EntryPage>

export const Primary: Story = {
  render: () => <EntryPage />
}
