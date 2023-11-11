import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts'
import { Theme, ThemeContext, type ThemeContextProps } from '@/shared/lib'

interface ThemeProviderProps {
  children: ReactNode
  initTheme?: Theme
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initTheme } = props
  const [theme, setTheme] = useState<Theme>(
    initTheme ?? fallbackTheme ?? Theme.LIGHT
  )

  useEffect(() => {
    document.body.className = `body ${theme}`
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

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
