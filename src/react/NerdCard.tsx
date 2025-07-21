import React from 'react'
import { NerdCardProps } from '../types/card'
import { createNerdCardProps } from '../core/nerdCard'

export const NerdCard: React.FC<NerdCardProps> = (props) => {
  const { children, theme, ...cardProps } = createNerdCardProps(props)

  return (
    <div {...cardProps}>
      {children}
    </div>
  )
}