import { memo } from 'react'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { classNames } from '@/shared/lib'
import { HStack, Logo } from '@/shared/ui'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props

  return (
    <HStack
      className={classNames(cls.Navbar, {}, [className])}
      as='header'
      justify='between'
      align='center'
    >
      <Logo />
      <ThemeSwitcher />
    </HStack>
  )
})

Navbar.displayName = 'Navbar'
