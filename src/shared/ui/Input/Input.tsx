import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { classNames } from '@/shared/lib'
import { VStack } from '@/shared/ui'
import cls from './Input.module.scss'

type OmitHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'>

interface InputProps extends OmitHTMLProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <VStack className={classNames(cls.container, {}, [className])}>
      <input
        onChange={onChangeHandler}
        value={value}
        className={cls.input}
        type='text'
        {...otherProps}
      />
      {placeholder && (
        <label
          className={classNames(cls.label, { [cls.filled]: Boolean(value) })}
        >
          {placeholder}
        </label>
      )}
    </VStack>
  )
})

Input.displayName = 'Input'

// <input
//   className={classNames(cls.Input, mods, [className])}
//   {...otherProps}
// />
