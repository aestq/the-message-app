import MoonIcon from '@/shared/assets/icons/moon-icon.svg'
import SunIcon from '@/shared/assets/icons/sun-icon.svg'
import { Theme, useTheme } from '@/shared/lib'
import { Button } from '@/shared/ui'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  const toggle = () => {
    toggleTheme()
  }

  return (
    <Button onClick={toggle}>
      {theme === Theme.LIGHT ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
