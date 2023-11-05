import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import TranslationIcon from '@/shared/assets/icons/translate-icon.svg'
import { Button, HStack } from '@/shared/ui'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className } = props
  const { i18n } = useTranslation()

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button className={className} onClick={changeLang}>
      <HStack align='center' justify='center'>
        <TranslationIcon className={cls.icon} />
      </HStack>
    </Button>
  )
})

LangSwitcher.displayName = 'LangSwitcher'
