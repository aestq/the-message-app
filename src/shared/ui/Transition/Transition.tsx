import { type CSSProperties, type ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { type Additional, classNames, type Mods } from '@/shared/lib'
import cls from './Transition.module.scss'

interface TransitionProps {
  className?: string
  children: ReactNode
  isShow?: boolean
  fromX?: number
  fromY?: number
  toX?: number
  toY?: number
  delay?: number
  timeout: number
  animation?: 'in' | 'out'
}

export const Transition = (props: TransitionProps) => {
  const {
    className,
    children,
    fromX = 0,
    fromY = 0,
    toX = 0,
    toY = 0,
    delay = 0,
    timeout,
    isShow = true,
    animation = 'in'
  } = props
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const styles = useMemo(() => ({
    '--from-x': `${fromX}px`,
    '--from-y': `${fromY}px`,
    '--to-x': `${toX}px`,
    '--to-y': `${toY}px`,
    '--timeout': `${timeout}ms`
  }), [fromX, fromY, toX, toY, timeout])

  const additional: Additional = [
    className,
    cls[animation]
  ]

  const mods: Mods = {
    [cls.mounted]: mounted
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setMounted(isShow)
    }, delay)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [delay, isShow])

  return (
    <div
      className={classNames(cls.Transition, mods, additional)}
      style={styles as CSSProperties}
    >
      {children}
    </div>
  )
}
