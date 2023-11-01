import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RoutesPath } from '@/shared/consts'

export const PrivateRoute = () => {
  const authData = undefined
  const location = useLocation()

  if(!authData) {
    return <Navigate to={RoutesPath.ENTRY} state={{ location }} />
  }

  return (
    <Outlet />
  )
}
