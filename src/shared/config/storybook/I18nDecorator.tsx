import { type StoryContext, type StoryFn } from '@storybook/react'
import { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '@/shared/config/i18n/i18nForTests'

export const I18nDecorator = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals

  useEffect(() => {
    i18nForTests.changeLanguage(locale)
  }, [locale])

  return (
    <Suspense fallback=''>
      <I18nextProvider i18n={i18nForTests}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}
