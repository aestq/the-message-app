import { act, renderHook } from '@testing-library/react'
import { type ReactNode } from 'react'
import { expect, test } from 'vitest'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts'
import { Theme, useTheme } from '@/shared/lib'

const Wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)

test('check default value', () => {
  const { result } = renderHook(() => useTheme(), { wrapper: Wrapper })
  expect(result.current.theme).toBe(Theme.LIGHT)
  expect(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)).toBe(null)
})

test('toggle theme', () => {
  const { result } = renderHook(() => useTheme(), { wrapper: Wrapper })

  act(() => {
    result.current.toggleTheme()
  })
  expect(result.current.theme).toBe(Theme.DARK)
  expect(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)).toBe(Theme.DARK)

  act(() => {
    result.current.toggleTheme()
  })
  expect(result.current.theme).toBe(Theme.LIGHT)
  expect(localStorage.getItem(LOCAL_STORAGE_THEME_KEY)).toBe(Theme.LIGHT)
})
