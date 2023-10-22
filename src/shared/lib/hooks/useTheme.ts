import { useContext } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '../../consts/localStorage'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme: theme ?? Theme.LIGHT, toggleTheme }
}
