import { NerdInputProps } from '../types/input'
import { getNerdInputClasses } from '../utils/input'

// Core nerd input logic that can be used by any framework
export const createNerdInputProps = (props: NerdInputProps) => {
  const {
    type = 'text',
    variant = 'default',
    size = 'md',
    theme = 'light',
    disabled = false,
    error = false,
    className = '',
    onChange,
    onFocus,
    onBlur,
    label,
    helperText,
    leftIcon,
    rightIcon,
    ...rest
  } = props

  const classes = getNerdInputClasses(variant, size, theme, disabled, error)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    type,
    className: finalClassName,
    disabled,
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement
      onChange?.(target.value)
    },
    onFocus,
    onBlur,
    label,
    helperText,
    leftIcon,
    rightIcon,
    error,
    theme,
    ...rest
  }
}