import { useStore } from 'effector-react'
import { authModel } from '../../model'
import { CodeFrom } from '../CodeForm/CodeForm'
import { EmailForm } from '../EmailForm/EmailForm'

export const AuthForm = () => {
  const step = useStore(authModel.$step)

  if(step === 'code') {
    return <CodeFrom />
  }

  return <EmailForm />
}
