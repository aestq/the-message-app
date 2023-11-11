import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { userModel } from '@/entities/User'
import { atom } from '@/shared/lib'
import { codeForm, emailForm } from '../lib'
import { sendCode } from './services/sendCode'
import { sendEmail } from './services/sendEmail'
import { type AuthStore } from './types'

export const authModel = atom<AuthStore>(() => {
  const $isEmailForm = createStore<boolean>(true)
  const codeFormSwitch = createEvent<boolean>()

  $isEmailForm.on(codeFormSwitch, () => false)

  const sendEmailFx = createEffect(sendEmail)
  const sendCodeFx = createEffect(sendCode)

  forward({
    from: emailForm.formValidated,
    to: sendEmailFx
  })

  sample({
    clock: sendEmailFx.done,
    source: $isEmailForm,
    target: codeFormSwitch
  })

  sample({
    clock: codeForm.submit,
    target: sendCodeFx
  })

  userModel.$userData.on(sendCodeFx.doneData, (_, payload) => payload)

  return {
    sendEmailFx,
    sendCodeFx,
    $isEmailForm
  }
})
