import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, Text, Transition } from '@/shared/ui'
import { Timeouts } from '../../config'
import { codeForm } from '../../lib'
import { authModel } from '../../model'
import cls from './CodeForm.module.scss'

export const CodeFrom = memo(() => {
  const { t } = useTranslation()
  const {
    fields: {
      code: { onChange, value }
    },
    submit
  } = useForm(codeForm)
  const isLoading = useStore(authModel.sendCodeFx.pending)

  const onChangeCode = useCallback((value: string) => {
    if(/^\d+$/.test(value) || value === '') {
      onChange(value)
    }

    if(value.length === 6) {
      submit()
    }
  }, [onChange, submit])

  return (
    <Transition
      timeout={Timeouts.CODE_FORM}
      fromX={100}
    >
      <form className={cls.CodeForm}>
        <Input
          className={cls.input}
          value={value}
          onChange={onChangeCode}
          placeholder={t('Введите код')}
          disabled={isLoading}
        />
        <Text
          className={cls.text}
          align='center'
          size='xs'
          theme='clear'
        >
          {t('Код состоит из 6 цифр')}
        </Text>
      </form>
    </Transition>
  )
})

CodeFrom.displayName = 'CodeFrom'
