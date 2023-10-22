import { classNames, useTheme } from '@/shared/lib'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      App work
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}
