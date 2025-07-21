import React from 'react'
import { NerdInputProps } from '../types'
import { createNerdInputProps } from '../core/input'

export const NerdInput: React.FC<NerdInputProps> = (props) => {
  const { variant, scanline, glow, ...inputProps } = createNerdInputProps(props)

  return (
    <div className="relative">
      <input
        {...inputProps}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
      
      {/* Terminal cursor effect */}
      {variant === 'terminal' && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-green-400 animate-pulse" />
      )}
      
      {/* Matrix digital rain effect */}
      {variant === 'matrix' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-2 text-xs text-green-500/30 animate-pulse">
            {'> '}
          </div>
        </div>
      )}
      
      {/* Cyber grid overlay */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
      )}
      
      {/* Neon glow effect */}
      {variant === 'neon' && glow && (
        <div className="absolute inset-0 pointer-events-none border-2 border-pink-400/50 animate-pulse rounded" />
      )}
      
      {/* Hologram interference lines */}
      {variant === 'hologram' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse" />
        </div>
      )}
      
      {/* Glitch effect */}
      {variant === 'glitch' && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-red-500/10 to-transparent animate-pulse" />
      )}
      
      {/* Scanline effect */}
      {scanline && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" />
        </div>
      )}
    </div>
  )
}