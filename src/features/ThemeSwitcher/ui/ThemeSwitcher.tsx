import MoonIcon from '@/shared/assets/icons/moon-icon.svg'
import SunIcon from '@/shared/assets/icons/sun-icon.svg'
import { Theme, useTheme } from '@/shared/lib'
import { Button, HStack } from '@/shared/ui'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  const toggle = () => {
    toggleTheme()
  }

  return (
    <Button className={className} onClick={toggle}>
      <HStack align='center' justify='center'>
        {theme === Theme.LIGHT ? <MoonIcon /> : <SunIcon />}
      </HStack>
    </Button>
  )
}
