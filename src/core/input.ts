import { NerdInputProps } from '../types'
import { getNerdInputClasses } from '../utils'

// Core nerd input logic that can be used by any framework
export const createNerdInputProps = (props: NerdInputProps) => {
  const {
    type = 'text',
    variant = 'terminal',
    disabled = false,
    scanline = false,
    glow = false,
    className = '',
    onChange,
    ...rest
  } = props

  const classes = getNerdInputClasses(variant, disabled, scanline, glow)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    type,
    className: finalClassName,
    disabled,
    variant,
    scanline,
    glow,
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement
      onChange?.(target.value)
    },
    ...rest
  }
}