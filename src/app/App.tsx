import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames, useTheme } from '@/shared/lib'
import { AppRouter } from './providers/AppRouter'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <ThemeSwitcher />
      <AppRouter />
    </div>
  )
}
