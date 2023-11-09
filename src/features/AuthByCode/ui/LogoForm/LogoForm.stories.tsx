import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config'
import { Theme } from '@/shared/lib'
import { LogoForm } from './LogoForm'

const meta: Meta<typeof LogoForm> = {
  title: 'features/AuthByCode/LogoForm',
  component: LogoForm
}

export default meta
type Story = Meta<typeof LogoForm>

export const Light: Story = {
  component: LogoForm
}

export const Dark: Story = {
  component: LogoForm,
  decorators: [ThemeDecorator(Theme.DARK)]
}
