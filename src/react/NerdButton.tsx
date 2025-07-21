import React from 'react'
import { NerdButtonProps } from '../types/button'
import { createNerdButtonProps } from '../core/nerdButton'
import { Loader2 } from 'lucide-react'

export const NerdButton: React.FC<NerdButtonProps> = (props) => {
  const { children, loading, leftIcon, rightIcon, theme, ...buttonProps } = createNerdButtonProps(props)

  return (
    <button {...buttonProps}>
      {/* Left icon */}
      {leftIcon && !loading && (
        <span className="flex-shrink-0">
          {leftIcon}
        </span>
      )}
      
      {/* Loading spinner */}
      {loading && (
        <div className="flex items-center">
          <Loader2 className="animate-spin h-4 w-4" />
        </div>
      )}
      
      {/* Button text */}
      {children && (
        <span className="truncate">
          {children}
        </span>
      )}
      
      {/* Right icon */}
      {rightIcon && !loading && (
        <span className="flex-shrink-0">
          {rightIcon}
        </span>
      )}
    </button>
  )
}