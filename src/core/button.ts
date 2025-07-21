import { ButtonProps } from '../types'
import { getButtonClasses } from '../utils'

// Core button logic that can be used by any framework
export const createButtonProps = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'md',
    theme = 'light',
    disabled = false,
    loading = false,
    fullWidth = false,
    className = '',
    onClick,
    children,
    leftIcon,
    rightIcon,
    type = 'button',
    ...rest
  } = props

  const classes = getButtonClasses(variant, size, theme, disabled, loading, fullWidth)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    type,
    className: finalClassName,
    disabled: disabled || loading,
    onClick: disabled || loading ? undefined : onClick,
    'aria-disabled': disabled || loading,
    'aria-busy': loading,
    loading,
    children,
    leftIcon,
    rightIcon,
    theme,
    ...rest
  }
}