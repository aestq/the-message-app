import { createForm } from 'effector-forms'
import { regexpEmail } from './regexp'

export const emailForm = createForm({
  fields: {
    email: {
      init: '',
      rules: [
        {
          name: 'email',
          validator: (value: string) => regexpEmail.test(value),
          errorText: 'Некорректная почта'
        }
      ]
    }
  },
  validateOn: ['submit']
})

export const codeForm = createForm({
  fields: {
    code: {
      init: '',
      rules: []
    }
  },
  validateOn: ['submit']
})
