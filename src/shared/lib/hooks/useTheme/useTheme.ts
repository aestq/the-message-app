import { useContext } from 'react'
import { Theme, ThemeContext } from '@/shared/lib'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(newTheme)
  }

  return { theme: theme ?? Theme.LIGHT, toggleTheme }
}
