import { NerdCardProps } from '../types/card'
import { getNerdCardClasses } from '../utils/card'

// Core nerd card logic that can be used by any framework
export const createNerdCardProps = (props: NerdCardProps) => {
  const {
    variant = 'elevated',
    padding = 'md',
    radius = 'md',
    shadow = 'sm',
    theme = 'light',
    border = false,
    hover = false,
    className = '',
    ...rest
  } = props

  const classes = getNerdCardClasses(variant, padding, radius, shadow, theme, border, hover)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    className: finalClassName,
    theme,
    ...rest
  }
}