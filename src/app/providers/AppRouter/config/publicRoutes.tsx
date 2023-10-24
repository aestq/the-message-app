import { type RouteProps } from 'react-router-dom'
import { EntryPage } from '@/pages/EntryPage'
import { RoutesPath } from '@/shared/consts'

export const publicRoutes: RouteProps[] = [
  {
    element: <EntryPage />,
    path: RoutesPath.ENTRY
  }
]
