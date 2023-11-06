import { useForm } from 'effector-forms'
import { type FormEvent, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, HStack, Input, Logo, Text, Transition, VStack } from '@/shared/ui'
import { authModel } from '../../model'
import cls from './EmailForm.module.scss'

export const EmailForm = memo(() => {
  const { t, i18n } = useTranslation()
  const { fields, submit } = useForm(authModel.emailForm)
  const [isShow] = useState(false)

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  return (
    <Transition
      timeout={500}
      animation='out'
      isShow={isShow}
    >
      <VStack
        gap='32'
        align='center'
      >
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
              value={fields.email?.value}
              onChange={fields.email?.onChange}
              placeholder={t('Введите email')}
            />
            {fields.email?.errorText({ email: 'Некорректная почта' })}
            <Button
              theme='primary'
              max
            >
              {t('Получить код')}
            </Button>
          </VStack>
        </form>
        <Button
          className={cls.lang}
          max
          onClick={changeLang}
        >
          {t('Продолжить на')}
        </Button>
      </VStack>
    </Transition>
  )
})

EmailForm.displayName = 'EmailFrom'
