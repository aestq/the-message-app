import { createStore } from 'effector'
import { atom } from '@/shared/lib'
import { type User } from './types'

export const userModel = atom(() => {
  const $userData = createStore<User | null>(null)

  return {
    $userData
  }
})
