import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../../consts/localStorage'
import { Theme, ThemeContext } from '../context/ThemeContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme: theme ?? Theme.LIGHT, toggleTheme }
}