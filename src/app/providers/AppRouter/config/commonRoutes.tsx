import { type RouteProps } from 'react-router-dom'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { SupportPage } from '@/pages/SupportPage'
import { RoutesPath } from '@/shared/consts'

export const commonRoutes: RouteProps[] = [
  {
    element: <SupportPage />,
    path: RoutesPath.SUPPORT
  },
  // last
  {
    element: <NotFoundPage />,
    path: RoutesPath.NOT_FOUND
  }
]
