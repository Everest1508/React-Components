import { ButtonProps } from '../types'
import { getButtonClasses } from '../utils'

// Core button logic that can be used by any framework
export const createButtonProps = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    className = '',
    onClick,
    children,
    ...rest
  } = props

  const classes = getButtonClasses(variant, size, disabled, loading)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    className: finalClassName,
    disabled: disabled || loading,
    onClick: disabled || loading ? undefined : onClick,
    'aria-disabled': disabled || loading,
    'aria-busy': loading,
    loading,
    children,
    ...rest
  }
}