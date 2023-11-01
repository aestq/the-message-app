import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { type Additional, classNames, type Mods } from '@/shared/lib'
import cls from './Button.module.scss'

type ButtonTheme = 'clear' | 'primary'
type ButtonSize = 's' | 'm' | 'l'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  theme?: ButtonTheme
  size?: ButtonSize
  max?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'clear',
    size = 'm',
    max,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    cls[size],
    cls[theme]
  ]

  const mods: Mods = {
    [cls.max]: max
  }

  return (
    <button
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
