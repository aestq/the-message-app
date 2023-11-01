import { memo } from 'react'
import { classNames } from '@/shared/lib'
import cls from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export const Logo = memo((props: LogoProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.Logo, {}, [className])}>
      <div className={cls.block}></div>
      <div className={cls.block}></div>
    </div>
  )
})

Logo.displayName = 'Logo'
