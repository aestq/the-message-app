import { memo } from 'react'
import { Navbar } from '@/widgets/Navbar'
import { AuthForm } from '@/features/AuthByCode'
import { HStack } from '@/shared/ui'
import cls from './EntryPage.module.scss'

export const EntryPage = memo(() => {
  return (
    <>
      <Navbar />
      <HStack
        className={cls.main} as='main'
        justify='center'
        align='center'
      >
        <AuthForm />
      </HStack>
    </>
  )
})

EntryPage.displayName = 'EntryPage'
