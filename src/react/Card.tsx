import React from 'react'
import { NerdCardProps } from '../types'
import { createNerdCardProps } from '../core/card'

export const NerdCard: React.FC<NerdCardProps> = (props) => {
  const { children, variant, shape, glow, scanlines, border, ...cardProps } = createNerdCardProps(props)

  return (
    <div {...cardProps}>
      {/* Terminal header bar */}
      {variant === 'terminal' && (
        <div className="absolute top-0 left-0 right-0 h-6 bg-green-600 flex items-center px-2 text-xs text-black font-bold">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-2">NERD_TERMINAL_v2.1</span>
        </div>
      )}
      
      {/* Matrix code rain background */}
      {variant === 'matrix' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-2 left-2 text-xs font-mono animate-pulse">
            01001000 01100101 01101100 01101100 01101111
          </div>
          <div className="absolute top-8 right-4 text-xs font-mono animate-pulse delay-500">
            01010111 01101111 01110010 01101100 01100100
          </div>
        </div>
      )}
      
      {/* Cyber grid pattern */}
      {variant === 'cyber' && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_24px,rgba(6,182,212,0.1)_25px,rgba(6,182,212,0.1)_26px,transparent_27px,transparent_74px,rgba(6,182,212,0.1)_75px,rgba(6,182,212,0.1)_76px,transparent_77px),linear-gradient(rgba(6,182,212,0.1)_24px,transparent_25px,transparent_26px,rgba(6,182,212,0.1)_27px,rgba(6,182,212,0.1)_74px,transparent_75px,transparent_76px,rgba(6,182,212,0.1)_77px)] bg-[length:100px_100px]"></div>
        </div>
      )}
      
      {/* Hologram shimmer effect */}
      {variant === 'hologram' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        </div>
      )}
      
      {/* Neon underglow */}
      {variant === 'neon' && glow && (
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
      )}
      
      {/* Glass morphism effect */}
      {variant === 'glass' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"></div>
        </div>
      )}
      
      {/* Plasma energy effect */}
      {variant === 'plasma' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-yellow-500/20 animate-pulse"></div>
        </div>
      )}
      
      {/* Content wrapper with proper spacing for terminal header */}
      <div className={variant === 'terminal' ? 'pt-8' : ''}>
        {/* Diamond shape content correction */}
        <div className={shape === 'diamond' ? '-rotate-45 transform' : ''}>
          {children}
        </div>
      </div>
      
      {/* Scanlines overlay */}
      {scanlines && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      )}
    </div>
  )
}