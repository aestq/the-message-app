import type { Preview } from '@storybook/react'
import { Theme } from '@/shared/lib'
import i18nForTests from '../../src/shared/config/i18n/i18nForTests'
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globals: {
    locale: 'ru',
    locales: {
      ru: 'Русский',
      en: 'English'
    },
    parameters: {
      i18n: i18nForTests
    }
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    I18nDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
}

export default preview
