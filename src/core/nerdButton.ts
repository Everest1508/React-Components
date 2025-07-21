import { NerdButtonProps } from '../types/button'
import { getNerdButtonClasses } from '../utils/button'

// Core nerd button logic that can be used by any framework
export const createNerdButtonProps = (props: NerdButtonProps) => {
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

  const classes = getNerdButtonClasses(variant, size, theme, disabled, loading, fullWidth)
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