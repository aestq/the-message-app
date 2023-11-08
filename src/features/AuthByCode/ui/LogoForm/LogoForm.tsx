import { memo } from 'react'
import { HStack, Logo, Text, Transition } from '@/shared/ui'
import { Timeouts, Delays } from '../../config'
import cls from './LogoForm.module.scss'

export const LogoForm = memo(() => {
  return (
    <HStack
      justify='center'
      align='center'
      gap='16'
    >
      <Transition
        timeout={Timeouts.LOGO}
        delay={Delays.LOGO}
        fromX={100}
        toX={0}
      >
        <Logo />
      </Transition>
      <Transition
        timeout={Timeouts.LOGO_TEXT}
        delay={Delays.LOGO_TEXT}
      >
        <Text
          className={cls.title}
          size='l'
          title
        >
          The Message
        </Text>
      </Transition>
    </HStack>
  )
})

LogoForm.displayName = 'LogoForm'
