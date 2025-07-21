import { InputProps } from '../types'
import { getInputClasses } from '../utils'

// Core input logic that can be used by any framework
export const createInputProps = (props: InputProps) => {
  const {
    type = 'text',
    disabled = false,
    className = '',
    onChange,
    ...rest
  } = props

  const classes = getInputClasses(disabled)
  const finalClassName = `${classes} ${className}`.trim()

  return {
    type,
    className: finalClassName,
    disabled,
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement
      onChange?.(target.value)
    },
    ...rest
  }
}