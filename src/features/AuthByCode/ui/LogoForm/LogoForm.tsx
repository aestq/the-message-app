import { memo } from 'react'
import { HStack, Logo, Text } from '@/shared/ui'
import cls from './LogoForm.module.scss'

export const LogoForm = memo(() => {
  return (
    <HStack
      justify='center'
      align='center'
      gap='16'
    >
      <Logo />
      <Text
        className={cls.title}
        size='l'
        title
      >
        The Message
      </Text>
    </HStack>
  )
})

LogoForm.displayName = 'LogoForm'
