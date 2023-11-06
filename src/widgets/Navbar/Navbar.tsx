import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { RoutesPath } from '@/shared/consts'
import { classNames } from '@/shared/lib'
import { Button, HStack } from '@/shared/ui'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onClickToSupport = () => {
    navigate(RoutesPath.SUPPORT)
  }

  return (
    <HStack
      className={classNames(cls.Navbar, {}, [className])}
      as='header'
      justify='end'
      align='center'
    >
      <Button
        onClick={onClickToSupport}
        role='link'
      >
        {t('Поддержка')}
      </Button>
      <ThemeSwitcher />
    </HStack>
  )
})

Navbar.displayName = 'Navbar'
