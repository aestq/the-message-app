import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'
import { type FormEvent, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input, VStack } from '@/shared/ui'
import { emailForm } from '../../lib'
import { authModel } from '../../model'
import { LogoForm } from '../LogoForm/LogoForm'
import cls from './EmailForm.module.scss'

export const EmailForm = memo(() => {
  const { t, i18n } = useTranslation()
  const { fields, submit } = useForm(emailForm)
  const isLoading = useStore(authModel.sendEmailFx.pending)

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    submit()
  }

  return (
      <VStack
        gap='32'
        align='center'
      >
        <LogoForm />
          <form onSubmit={onSubmit} noValidate>
            <VStack
              className={cls.EmailForm}
              gap='8'
            >
              <Input
                className={cls.input}
                type='email'
                value={fields.email?.value}
                onChange={fields.email?.onChange}
                placeholder={t('Введите email')}
                validateError={t(fields.email?.errorText())}
                disabled={isLoading}
              />
              <Button
                theme='primary'
                max
                disabled={isLoading}
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
  )
})

EmailForm.displayName = 'EmailFrom'
