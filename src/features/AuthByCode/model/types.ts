import { type Effect, type Store } from 'effector'

export type State = 'email' | 'code' | 'auth-success'

export interface AuthStore {
  sendEmailFx: Effect<void, string, Error>
  sendCodeFx: Effect<void, string, Error>
  $state: Store<State>
}
