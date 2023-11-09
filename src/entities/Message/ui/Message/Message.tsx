import { memo } from 'react'
import { classNames, type Mods } from '@/shared/lib'
import { HStack } from '@/shared/ui'
import cls from './Message.module.scss'

interface MessageProps {
  className?: string
  isMe?: boolean
  text?: string
}

export const Message = memo((props: MessageProps) => {
  const {
    className,
    isMe = false,
    text
  } = props

  const mods: Mods = {
    [cls.me]: isMe
  }

  return (
    <HStack
      className={className}
      justify={isMe ? 'end' : 'start'}
    >
      <div className={classNames(cls.Message, mods)}>
        {text}
      </div>
    </HStack>
  )
})

Message.displayName = 'Message'
