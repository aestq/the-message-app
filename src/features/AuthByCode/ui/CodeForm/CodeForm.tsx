import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui'
import cls from './CodeForm.module.scss'

export const CodeFrom = memo(() => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  return (
    <form>
      <Input
        className={cls.input}
        value={value}
        onChange={setValue}
        placeholder={t('Введите код')}
      />
    </form>
  )
})

CodeFrom.displayName = 'CodeFrom'
