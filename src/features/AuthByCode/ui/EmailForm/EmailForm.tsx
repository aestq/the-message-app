import { useStore, useEvent } from 'effector-react'
import { type FormEvent, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, HStack, Input, Logo, Text, VStack } from '@/shared/ui'
import { authModel } from '../../model'
import cls from './EmailForm.module.scss'

export const EmailForm = memo(() => {
  const { t } = useTranslation()
  const email = useStore(authModel.$email)
  const setEmail = useEvent(authModel.setEmail)
  const setStep = useEvent(authModel.setStep)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setStep('code')
  }

  return (
    <VStack gap='32' align='center'>
      <HStack align='center' justify='center' gap='16'>
        <Logo />
        <Text className={cls.title} size='l' title>
          The Message
        </Text>
      </HStack>
      <form onSubmit={onSubmit}>
        <VStack
          className={cls.EmailForm}
          gap='8'
        >
          <Input
            className={cls.input}
            value={email}
            onChange={setEmail}
            placeholder={t('Введите email')}
          />
          <Button
            theme='primary'
            max
          >
            {t('Получить код')}
          </Button>
        </VStack>
      </form>
    </VStack>
  )
})

EmailForm.displayName = 'EmailFrom'
