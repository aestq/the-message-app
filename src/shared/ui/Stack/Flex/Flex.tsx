import { type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import { type Additional, classNames, type Mods } from '@/shared/lib'
import cls from './Flex.module.scss'

type FlexJustify = 'start' | 'center' | 'end' | 'between'
type FlexAlign = 'start' | 'center' | 'end'
type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32
}

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  as?: ElementType
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
}

const DEFAULT_ELEMENT: ElementType = 'div'

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    as,
    justify = 'start',
    align = 'start',
    direction = 'row',
    gap,
    max,
    ...otherProps
  } = props

  const additional: Additional = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  const mods: Mods = {
    [cls.max]: max
  }

  const Element = as ?? DEFAULT_ELEMENT

  return (
    <Element
      className={classNames(cls.Flex, mods, additional)}
      {...otherProps}
    >
      {children}
    </Element>
  )
}
