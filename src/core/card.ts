import { NerdCardProps } from '../types'
import { getNerdCardClasses } from '../utils'

// Core nerd card logic that can be used by any framework
export const createNerdCardProps = (props: NerdCardProps) => {
  const {
    variant = 'terminal',
    padding = 'md',
    shape = 'rectangle',
    glow = false,
    scanlines = false,
    border = 'solid',
    className = '',
    ...rest
  } = props

  const classes = getNerdCardClasses(variant, padding, shape, glow, scanlines, border)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    className: finalClassName,
    variant,
    shape,
    glow,
    scanlines,
    border,
    ...rest
  }
}