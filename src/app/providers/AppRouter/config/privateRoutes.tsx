import { type RouteProps } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { RoutesPath } from '@/shared/consts'

export const privateRoutes: RouteProps[] = [
  {
    element: <HomePage />,
    path: RoutesPath.HOME
  }
]
