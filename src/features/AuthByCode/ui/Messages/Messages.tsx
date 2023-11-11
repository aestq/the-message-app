import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Message } from '@/entities/Message'
import cls from './Messages.module.scss'

export const Messages = memo(() => {
  const { t } = useTranslation()

  return (
    <div className={cls.Messages}>
      <Message
        text={t('Привет!')}
        isMe
      />
      <Message
        text={t('Привет!')}
      />
      <Message
        text={t('Как дела?')}
        isMe
      />
    </div>
  )
})

Messages.displayName = 'Messages'
