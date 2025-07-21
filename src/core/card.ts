import { CardProps } from '../types'
import { getCardClasses } from '../utils'

// Core card logic that can be used by any framework
export const createCardProps = (props: CardProps) => {
  const {
    padding = 'md',
    shadow = true,
    className = '',
    ...rest
  } = props

  const classes = getCardClasses(padding, shadow)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    className: finalClassName,
    ...rest
  }
}