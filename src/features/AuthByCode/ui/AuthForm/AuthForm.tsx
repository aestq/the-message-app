import { useStore } from 'effector-react'
import { memo } from 'react'
import { authModel } from '../../model'
import { CodeFrom } from '../CodeForm/CodeForm'
import { EmailForm } from '../EmailForm/EmailForm'

export const AuthForm = memo(() => {
  const step = useStore(authModel.$step)

  if(step === 'code') {
    return <CodeFrom />
  }

  return <EmailForm />
})

AuthForm.displayName = 'AuthForm'
