import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { HStack, VStack, Text } from '@/shared/ui'
import cls from './SupportPage.module.scss'

export const SupportPage = memo(() => {
  const { t } = useTranslation()

  return (
    <div className={cls.SupportPage}>
      <HStack
        className={cls.header}
        as='header'
        justify='between'
        align='center'
      >
        <Text size='xl' title>
          {t('Поддержка')}
        </Text>
        <HStack gap='8' align='center'>
          <LangSwitcher />
          <ThemeSwitcher />
        </HStack>
      </HStack>
      <VStack
        className={cls.main}
        as='main'
        justify='center'
        align='center'
      >
        <Text align='center'>
          {t('Почта поддержи')}
        </Text>
        <Text align='center'>
          the-message@email.com
        </Text>
        <Text align='center' theme='clear' size='s'>
          {t('Страница в процессе разработки')}
        </Text>
      </VStack>
    </div>
  )
})

SupportPage.displayName = 'SupportPage'
