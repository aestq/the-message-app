import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts'
import { Theme, ThemeContext, type ThemeContextProps } from '@/shared/lib'

interface ThemeProviderProps {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const values = useMemo<ThemeContextProps>(() => ({
    theme,
    setTheme
  }), [theme])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
