import { useStore } from 'effector-react'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from '@/shared/consts'
import { authModel } from '../../model'
import { CodeFrom } from '../CodeForm/CodeForm'
import { EmailForm } from '../EmailForm/EmailForm'

export const AuthForm = () => {
  const state = useStore(authModel.$state)
  const navigate = useNavigate()

  if(state === 'code') {
    return <CodeFrom />
  }

  if(state === 'auth-success') {
    // TODO: HOME_PAGE
    navigate(RoutesPath.NOT_FOUND)
  }

  return <EmailForm />
}
