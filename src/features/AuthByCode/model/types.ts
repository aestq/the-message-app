import { type Effect, type Store } from 'effector'
import { type User } from '@/entities/User'

export interface AuthStore {
  sendEmailFx: Effect<void, string, Error>
  sendCodeFx: Effect<void, User, Error>
  $isEmailForm: Store<boolean>
}
