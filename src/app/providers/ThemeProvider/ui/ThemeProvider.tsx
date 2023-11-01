import { type ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts'
import { Theme, ThemeContext, type ThemeContextProps } from '@/shared/lib'

interface ThemeProviderProps {
  children: ReactNode
  initTheme?: Theme
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initTheme } = props
  const [theme, setTheme] = useState<Theme>(initTheme ?? defaultTheme)

  const values = useMemo<ThemeContextProps>(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
