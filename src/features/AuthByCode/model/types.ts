import { type Effect, type Store } from 'effector'

export interface AuthStore {
  sendEmailFx: Effect<void, string, Error>
  sendCodeFx: Effect<void, string, Error>
  $isEmailForm: Store<boolean>
}
