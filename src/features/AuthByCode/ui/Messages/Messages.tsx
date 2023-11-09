import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Delays, Timeouts } from '@/features/AuthByCode/config'
import { Message } from '@/entities/Message'
import { Transition } from '@/shared/ui'
import cls from './Messages.module.scss'

export const Messages = memo(() => {
  const { t } = useTranslation()

  return (
    <div className={cls.Messages}>
      <Transition
        timeout={Timeouts.MESSAGE_HELLO_ME}
        delay={Delays.MESSAGE_HELLO_ME}
        fromY={-30}
      >
        <Message
          text={t('Привет!')}
          isMe
        />
      </Transition>
      <Transition
        timeout={Timeouts.MESSAGE_HELLO_PARTNER}
        delay={Delays.MESSAGE_HELLO_PARTNER}
        fromY={-30}
      >
        <Message
          text={t('Привет!')}
        />
      </Transition>
      <Transition
        timeout={Timeouts.MESSAGE_WHAT_UP}
        delay={Delays.MESSAGE_WHAT_UP}
        fromY={-30}
      >
        <Message
          text={t('Как дела?')}
          isMe
        />
      </Transition>
    </div>
  )
})

Messages.displayName = 'Messages'
