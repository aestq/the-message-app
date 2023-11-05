import type { Meta } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/lib'
import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'features/LangSwitcher',
  component: LangSwitcher
}
export default meta

type Story = Meta<typeof LangSwitcher>

export const Light: Story = {
  component: LangSwitcher
}

export const Dark: Story = {
  component: LangSwitcher,
  decorators: [ThemeDecorator(Theme.DARK)]
}
