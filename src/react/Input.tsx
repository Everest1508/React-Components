import React from 'react'
import { InputProps } from '../types'
import { createInputProps } from '../core/input'

export const Input: React.FC<InputProps> = (props) => {
  const inputProps = createInputProps(props)

  return (
    <input
      {...inputProps}
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  )
}