import { InputProps } from '../types'
import { getInputClasses } from '../utils'

// Core input logic that can be used by any framework
export const createInputProps = (props: InputProps) => {
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

  const classes = getInputClasses(variant, size, theme, disabled, error)
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