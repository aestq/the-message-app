import { useStore } from 'effector-react'
import { authModel } from '../../model'
import { CodeFrom } from '../CodeForm/CodeForm'
import { EmailForm } from '../EmailForm/EmailForm'
import cls from './AuthForm.module.scss'

export const AuthForm = () => {
  const isEmailFrom = useStore(authModel.$isEmailForm)

  return (
    <div className={cls.AuthForm}>
      {isEmailFrom ? <EmailForm /> : <CodeFrom />}
    </div>
  )
}
