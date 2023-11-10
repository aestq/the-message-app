import { useTranslation } from 'react-i18next'
import { Button, Text, VStack } from '@/shared/ui'
import cls from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation()

  const onClick = () => {
    location.reload()
  }

  return (
    <VStack
      className={cls.PageError}
      align='center'
      justify='center'
    >
      <Text size='xl' title>
        {t('Произошла ошибка')}
      </Text>
      <Button onClick={onClick}>
        {t('Нажмите чтобы перегрузить страницу')}
      </Button>
    </VStack>
  )
}
