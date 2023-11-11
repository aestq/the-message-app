import { useStore } from 'effector-react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { userModel } from '@/entities/User'
import { RoutesPath } from '@/shared/consts'

export const PublicRoute = () => {
  const userData = useStore(userModel.$userData)
  const location = useLocation()

  if(userData) {
    return <Navigate to={RoutesPath.HOME} state={{ location }} />
  }

  return (
    <Outlet />
  )
}
