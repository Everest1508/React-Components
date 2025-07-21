import { CardProps } from '../types'
import { getCardClasses } from '../utils'

// Core card logic that can be used by any framework
export const createCardProps = (props: CardProps) => {
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

  const classes = getCardClasses(variant, padding, radius, shadow, theme, border, hover)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    className: finalClassName,
    theme,
    ...rest
  }
}