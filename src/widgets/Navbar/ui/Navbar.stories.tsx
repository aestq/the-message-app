import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx'
import { Theme } from '@/shared/lib'
import { Navbar } from './Navbar.tsx'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar
}

export default meta
type Story = Meta<typeof Navbar>

export const Light: Story = {
  component: Navbar
}

export const Dark: Story = {
  component: Navbar,
  decorators: [ThemeDecorator(Theme.DARK)]
}
