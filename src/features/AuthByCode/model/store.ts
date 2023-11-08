import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { atom } from '@/shared/lib'
import { codeForm, emailForm } from '../lib'
import { sendCode } from './services/sendCode'
import { sendEmail } from './services/sendEmail'
import { type AuthStore, type State } from './types'

export const authModel = atom<AuthStore>(() => {
  const $state = createStore<State>('email')
  const codeState = createEvent<State>()
  const authSuccess = createEvent<State>()

  $state.on(codeState, () => 'code')
  $state.on(authSuccess, () => 'auth-success')

  const sendEmailFx = createEffect(sendEmail)
  const sendCodeFx = createEffect(sendCode)

  forward({
    from: emailForm.formValidated,
    to: sendEmailFx
  })

  sample({
    clock: sendEmailFx.done,
    source: $state,
    target: codeState
  })

  sample({
    clock: codeForm.submit,
    target: sendCodeFx
  })

  sample({
    clock: sendCodeFx.done,
    source: $state,
    target: authSuccess
  })

  return {
    sendEmailFx,
    sendCodeFx,
    $state
  }
})
