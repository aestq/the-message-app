import { memo } from 'react'
import { type Additional, classNames } from '@/shared/lib'
import cls from './Logo.module.scss'

type LogoSize = 's' | 'm' | 'l'

interface LogoProps {
  className?: string
  size?: LogoSize
}

export const Logo = memo((props: LogoProps) => {
  const { className, size = 'm' } = props

  const additional: Additional = [
    className,
    cls[size]
  ]

  return (
    <div className={classNames(cls.Logo, {}, additional)}>
      <div className={cls.block}></div>
      <div className={cls.block}></div>
    </div>
  )
})

Logo.displayName = 'Logo'
