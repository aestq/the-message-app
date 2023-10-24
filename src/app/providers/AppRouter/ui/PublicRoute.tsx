import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RoutesPath } from '@/shared/consts'

export const PublicRoute = () => {
  const authData = undefined
  const location = useLocation()

  if(authData) {
    return <Navigate to={RoutesPath.HOME} state={{ location }} />
  }

  return (
    <Outlet />
  )
}
