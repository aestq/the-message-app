import { memo } from 'react'
import { type Additional, classNames } from '@/shared/lib'
import cls from './Text.module.scss'

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl'
type TextAlign = 'left' | 'right' | 'center'
type TextTheme = 'secondary' | 'primary' | 'error' | 'clear'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  xs: 'h5',
  s: 'h4',
  m: 'h3',
  l: 'h2',
  xl: 'h1'
}

interface TextProps {
  className?: string
  children: string
  title?: boolean
  size?: TextSize
  align?: TextAlign
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    children,
    title,
    size = 'm',
    align = 'left',
    theme = 'secondary'
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  const additional: Additional = [
    className,
    cls[size],
    cls[align],
    cls[theme]
  ]

  if(title) {
    return (
      <HeaderTag className={classNames(cls.Text, {}, additional)}>
        {children}
      </HeaderTag>
    )
  }

  return (
    <p className={classNames(cls.Text, {}, additional)}>
      {children}
    </p>
  )
})

Text.displayName = 'Text'
