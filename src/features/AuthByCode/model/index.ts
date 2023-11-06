import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { createForm } from 'effector-forms'
import { atom } from '@/shared/lib'
import { regexpEmail } from './consts/regexp'
import { sendEmail } from './services/sendEmail'

type Step = 'email' | 'code'

export const authModel = atom(() => {
  const emailForm = createForm({
    fields: {
      email: {
        init: '',
        rules: [
          {
            name: 'email',
            validator: (value: string) => regexpEmail.test(value)
          }
        ]
      }
    },
    validateOn: ['submit']
  })

  const codeStep = createEvent<Step>()
  const $step = createStore<Step>('email')
  $step.on(codeStep, () => 'code')

  const sendEmailFx = createEffect(sendEmail)

  forward({
    from: emailForm.formValidated,
    to: sendEmailFx
  })

  sample({
    clock: sendEmailFx.done,
    source: $step,
    target: codeStep
  })

  return {
    emailForm,
    sendEmailFx,
    $step
  }
})
