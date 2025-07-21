import { NerdButtonProps } from '../types'
import { getNerdButtonClasses } from '../utils'

// Core nerd button logic that can be used by any framework
export const createNerdButtonProps = (props: NerdButtonProps) => {
  const {
    variant = 'cyber',
    size = 'md',
    shape = 'hexagon',
    disabled = false,
    loading = false,
    pulse = false,
    glow = false,
    className = '',
    onClick,
    children,
    ...rest
  } = props

  const classes = getNerdButtonClasses(variant, size, shape, disabled, loading, pulse, glow)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    className: finalClassName,
    disabled: disabled || loading,
    onClick: disabled || loading ? undefined : onClick,
    'aria-disabled': disabled || loading,
    'aria-busy': loading,
    loading,
    children,
    variant,
    shape,
    pulse,
    glow,
    ...rest
  }
}