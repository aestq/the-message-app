import type { Preview } from '@storybook/react'
import i18nForTests from '../../src/shared/config/i18n/i18nForTests'
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { Theme } from '../../src/shared/lib'

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
    ThemeDecorator(Theme.LIGHT),
    I18nDecorator
  ]
}

export default preview
