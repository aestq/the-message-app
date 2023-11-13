import { memo } from 'react'
import { VStack, Logo, Text } from '@/shared/ui'
import cls from './LogoForm.module.scss'

export const LogoForm = memo(() => {
  return (
    <VStack
      justify='center'
      align='center'
      gap='16'
    >
      <Logo size='l' />
      <Text
        className={cls.title}
        size='xl'
        title
      >
        The Message
      </Text>
    </VStack>
  )
})

LogoForm.displayName = 'LogoForm'
