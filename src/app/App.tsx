import { classNames, useTheme } from '@/shared/lib'
import { AppRouter } from './providers/AppRouter'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      App work
      <button onClick={toggleTheme}>toggle</button>
      <AppRouter />
    </div>
  )
}
