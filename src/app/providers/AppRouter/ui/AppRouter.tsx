import { Route, type RouteProps, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes, commonRoutes } from '../config'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const render = (route: RouteProps) => {
  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    />
  )
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        {publicRoutes.map(render)}
      </Route>
      <Route element={<PrivateRoute />}>
        {privateRoutes.map(render)}
      </Route>
      {commonRoutes.map(render)}
    </Routes>
  )
}
