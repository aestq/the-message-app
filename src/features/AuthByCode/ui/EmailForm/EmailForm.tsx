import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'
import { type FormEvent, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input, Transition, VStack } from '@/shared/ui'
import { Delays, Timeouts } from '../../config'
import { authModel } from '../../model'
import { LogoForm } from '../LogoForm/LogoForm'
import cls from './EmailForm.module.scss'

export const EmailForm = memo(() => {
  const { t, i18n } = useTranslation()
  const { fields, submit } = useForm(authModel.emailForm)
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
          <form onSubmit={onSubmit}>
          <VStack
            className={cls.EmailForm}
            gap='8'
          >
            <Transition
              timeout={Timeouts.INPUT}
              delay={Delays.INPUT}
              fromY={30}
              max
            >
              <Input
                className={cls.input}
                value={fields.email?.value}
                onChange={fields.email?.onChange}
                placeholder={t('Введите email')}
                validateError={t(fields.email?.errorText())}
              />
            </Transition>
            <Transition
              timeout={Timeouts.SUBMIT_BUTTON}
              delay={Delays.SUBMIT_BUTTON}
              fromY={30}
              max
            >
             <Button
               theme='primary'
               max
               disabled={isLoading}
             >
               {t('Получить код')}
             </Button>
           </Transition>
          </VStack>
        </form>
        <Transition
          timeout={Timeouts.LANG_BUTTON}
          delay={Delays.LANG_BUTTON}
          fromY={30}
        >
          <Button
            className={cls.lang}
            max
            onClick={changeLang}
          >
            {t('Продолжить на')}
          </Button>
        </Transition>
      </VStack>
  )
})

EmailForm.displayName = 'EmailFrom'
