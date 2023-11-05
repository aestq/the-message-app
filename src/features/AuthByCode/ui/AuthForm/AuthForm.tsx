import { memo } from 'react'
import { CodeFrom } from '../CodeForm/CodeForm'

export const AuthForm = memo(() => {
  return (
    <>
      <CodeFrom />
    </>
  )
})

AuthForm.displayName = 'AuthForm'
