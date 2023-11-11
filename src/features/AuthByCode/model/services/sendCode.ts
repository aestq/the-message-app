import { type User } from '@/entities/User'

export const sendCode = async (): Promise<User> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve({ id: 1, username: 'username123' })
      } else {
        // eslint-disable-next-line
        reject(new Error('error'))
      }
    }, 2000)
  })
}
