import { type FormEvent, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, HStack, Input, Logo, Text, VStack } from '@/shared/ui'
import cls from './EmailForm.module.scss'

export const EmailForm = memo(() => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
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
            value={value}
            onChange={setValue}
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
