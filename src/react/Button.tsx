import React from 'react'
import { NerdButtonProps } from '../types'
import { createNerdButtonProps } from '../core/button'

export const NerdButton: React.FC<NerdButtonProps> = (props) => {
  const { children, loading, shape, variant, ...buttonProps } = createNerdButtonProps(props)

  return (
    <button {...buttonProps}>
      {/* Glitch effect overlay */}
      {variant === 'glitch' && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 animate-pulse pointer-events-none" />
      )}
      
      {/* Matrix rain effect */}
      {variant === 'matrix' && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="animate-pulse text-xs">01010101</div>
        </div>
      )}
      
      {/* Loading spinner - more cyberpunk style */}
      {loading && (
        <div className="flex items-center mr-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Button content with special effects for diamond shape */}
      <span className={shape === 'diamond' ? '-rotate-45 transform' : ''}>
        {children}
      </span>
      
      {/* Hologram shimmer effect */}
      {variant === 'hologram' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse pointer-events-none" />
      )}
    </button>
  )
}