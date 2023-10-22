import { Theme, ThemeContext, type ThemeContextProps } from '@/shared/lib'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts'
import { type ReactNode, useMemo, useState } from 'react'

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

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
