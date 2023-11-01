import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { RoutesPath } from '@/shared/consts'
import { classNames } from '@/shared/lib'
import { Button, HStack, Logo, Text } from '@/shared/ui'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const navigate = useNavigate()

  const onClickToSupport = () => {
    navigate(RoutesPath.SUPPORT)
  }

  return (
    <HStack
      className={classNames(cls.Navbar, {}, [className])}
      as='header'
      justify='between'
      align='center'
    >
      <HStack align='center' gap='16'>
        <Logo />
        <Text
          className={cls.title}
          title
          size='l'
        >
          The Message
        </Text>
      </HStack>
      <HStack align='center' gap='16'>
        <Button
          onClick={onClickToSupport}
          role='link'
        >
          Поддержка
        </Button>
        <ThemeSwitcher />
      </HStack>
    </HStack>
  )
})

Navbar.displayName = 'Navbar'
