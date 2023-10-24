import { Link } from 'react-router-dom'
import { RoutesPath } from '@/shared/consts'
import { classNames, useTheme } from '@/shared/lib'
import { AppRouter } from './providers/AppRouter'

export const App = () => {
  const { toggleTheme } = useTheme()

  return (
    <div className={classNames('app')}>
      App work
      <Link to={RoutesPath.SUPPORT}>Link</Link>
      <button onClick={toggleTheme}>toggle</button>
      <AppRouter />
    </div>
  )
}
