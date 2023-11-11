import { useStore } from 'effector-react'
import { userModel } from '@/entities/User'

export const HomePage = () => {
  const userData = useStore(userModel.$userData)

  return (
    <div>
      Id: {userData?.id}
      Username: {userData?.username}
    </div>
  )
}
