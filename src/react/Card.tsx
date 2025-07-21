import React from 'react'
import { CardProps } from '../types'
import { createCardProps } from '../core/card'

export const Card: React.FC<CardProps> = (props) => {
  const { children, ...cardProps } = createCardProps(props)

  return (
    <div {...cardProps}>
      {children}
    </div>
  )
}