import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { classNames, type Mods } from '@/shared/lib'
import { VStack } from '@/shared/ui'
import cls from './Input.module.scss'

type OmitHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends OmitHTMLProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  validateError?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    validateError,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.error]: Boolean(validateError)
  }

  const modsLabel = {
    [cls.filled]: Boolean(value) || Boolean(validateError)
  }

  return (
    <VStack className={classNames(cls.container, mods, [className])}>
      <input
        onChange={onChangeHandler}
        value={value}
        className={cls.input}
        {...otherProps}
      />
      {placeholder && (
        <label
          className={classNames(cls.label, modsLabel)}
        >
          {validateError || placeholder}
        </label>
      )}
    </VStack>
  )
})

Input.displayName = 'Input'
