import MoonIcon from '@/shared/assets/icons/moon-icon.svg'
import { AppRouter } from './providers/AppRouter'

export const App = () => {
  return (
    <div className={'app'}>
      <MoonIcon />
      <AppRouter />
    </div>
  )
}
