import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config'
import { Theme } from '@/shared/lib'
import { EmailForm } from './EmailForm'

const meta: Meta<typeof EmailForm> = {
  title: 'features/AuthByCode/EmailForm',
  component: EmailForm
}

export default meta
type Story = Meta<typeof EmailForm>

export const Light: Story = {
  component: EmailForm
}

export const Dark: Story = {
  component: EmailForm,
  decorators: [ThemeDecorator(Theme.DARK)]
}
