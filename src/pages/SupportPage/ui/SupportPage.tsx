import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { HStack, Text } from '@/shared/ui'
import cls from './SupportPage.module.scss'

export const SupportPage = memo(() => {
  const { t } = useTranslation()

  return (
    <div className={cls.SupportPage}>
      <HStack
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
      <HStack
        className={cls.main}
        as='main'
        justify='center'
        align='center'
      >
        <Text>
          {t('Если у вас возникла проблема')}
        </Text>
      </HStack>
    </div>
  )
})

SupportPage.displayName = 'SupportPage'
