import { createEvent, createStore, type Event, type Store } from 'effector'
import { atom } from '@/shared/lib'

type Step = 'email' | 'code'

interface AuthModelSchema {
  $email: Store<string>
  $code: Store<string>
  $step: Store<Step>
  setEmail: Event<string>
  setCode: Event<string>
  setStep: Event<Step>
}

export const authModel = atom<AuthModelSchema>(() => {
  const $email = createStore('')
  const $code = createStore('')
  const $step = createStore<Step>('email')

  const setEmail = createEvent<string>()
  const setCode = createEvent<string>()
  const setStep = createEvent<Step>()

  $email.on(setEmail, (_, payload) => payload)
  $code.on(setCode, (_, payload) => payload)
  $step.on(setStep, (_, payload) => payload)

  return {
    $email,
    $code,
    $step,
    setEmail,
    setCode,
    setStep
  }
})
