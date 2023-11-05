import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { SupportPage } from './SupportPage'

const meta: Meta<typeof SupportPage> = {
  title: 'pages/SupportPage',
  component: SupportPage
}

export default meta
type Story = Meta<typeof SupportPage>

export const Light: Story = {
  component: SupportPage
}

export const Dark: Story = {
  component: SupportPage,
  decorators: [ThemeDecorator(Theme.DARK)]
}
