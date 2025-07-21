// Utility functions for component styling and behavior
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const getNerdButtonClasses = (
  variant: string = 'cyber',
  size: string = 'md',
  shape: string = 'hexagon',
  disabled: boolean = false,
  loading: boolean = false,
  pulse: boolean = false,
  glow: boolean = false
): string => {
  const baseClasses = 'relative inline-flex items-center justify-center font-mono font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none overflow-hidden'
  
  const variantClasses = {
    cyber: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75',
    neon: 'bg-black text-pink-400 border-2 border-pink-400 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/75 hover:text-pink-300',
    glitch: 'bg-red-600 text-white border-2 border-red-400 shadow-lg shadow-red-500/50 hover:shadow-red-500/75 animate-pulse',
    matrix: 'bg-black text-green-400 border-2 border-green-400 shadow-lg shadow-green-500/50 hover:shadow-green-500/75',
    retro: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-500/50',
    hologram: 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white border-2 border-blue-300 shadow-lg shadow-blue-500/50',
    plasma: 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white border-2 border-orange-400 shadow-lg shadow-orange-500/50'
  }
  
  const sizeClasses = {
    xs: 'h-6 px-2 text-xs min-w-[2rem]',
    sm: 'h-8 px-3 text-sm min-w-[3rem]',
    md: 'h-12 px-6 text-base min-w-[4rem]',
    lg: 'h-16 px-8 text-lg min-w-[5rem]',
    xl: 'h-20 px-10 text-xl min-w-[6rem]'
  }
  
  const shapeClasses = {
    hexagon: 'clip-path-hexagon',
    diamond: 'rotate-45 transform',
    circle: 'rounded-full aspect-square',
    pill: 'rounded-full',
    skew: 'skew-x-12 transform',
    triangle: 'clip-path-triangle'
  }
  
  const effectClasses = cn(
    pulse && 'animate-pulse',
    glow && 'animate-ping',
    loading && 'animate-spin cursor-wait',
    disabled && 'opacity-50 cursor-not-allowed grayscale'
  )
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    sizeClasses[size as keyof typeof sizeClasses],
    shapeClasses[shape as keyof typeof shapeClasses],
    effectClasses
  )
}

export const getNerdInputClasses = (
  variant: string = 'terminal',
  disabled: boolean = false,
  scanline: boolean = false,
  glow: boolean = false
): string => {
  const baseClasses = 'flex h-12 w-full font-mono text-sm transition-all duration-300 focus:outline-none relative overflow-hidden'
  
  const variantClasses = {
    terminal: 'bg-black text-green-400 border-2 border-green-400 placeholder:text-green-600 focus:shadow-lg focus:shadow-green-500/50',
    matrix: 'bg-gray-900 text-green-300 border-2 border-green-500 placeholder:text-green-700 focus:shadow-lg focus:shadow-green-500/50',
    cyber: 'bg-slate-900 text-cyan-400 border-2 border-cyan-400 placeholder:text-cyan-600 focus:shadow-lg focus:shadow-cyan-500/50',
    neon: 'bg-black text-pink-400 border-2 border-pink-400 placeholder:text-pink-600 focus:shadow-lg focus:shadow-pink-500/50',
    hologram: 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border-2 border-blue-400 placeholder:text-blue-600 focus:shadow-lg focus:shadow-blue-500/50',
    glitch: 'bg-red-900 text-red-300 border-2 border-red-400 placeholder:text-red-600 focus:shadow-lg focus:shadow-red-500/50 animate-pulse'
  }
  
  const effectClasses = cn(
    scanline && 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-white/5 before:to-transparent before:animate-pulse',
    glow && 'animate-pulse',
    disabled && 'opacity-50 cursor-not-allowed grayscale'
  )
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    'px-4 py-3',
    effectClasses
  )
}

export const getNerdCardClasses = (
  variant: string = 'terminal',
  padding: string = 'md',
  shape: string = 'rectangle',
  glow: boolean = false,
  scanlines: boolean = false,
  border: string = 'solid'
): string => {
  const baseClasses = 'relative transition-all duration-300 font-mono overflow-hidden'
  
  const variantClasses = {
    terminal: 'bg-black text-green-400 border-2 border-green-400 shadow-lg shadow-green-500/25',
    hologram: 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm text-blue-300 border-2 border-blue-400 shadow-lg shadow-blue-500/25',
    cyber: 'bg-gradient-to-br from-slate-900 to-cyan-900 text-cyan-400 border-2 border-cyan-400 shadow-lg shadow-cyan-500/25',
    matrix: 'bg-gray-900 text-green-300 border-2 border-green-500 shadow-lg shadow-green-500/25',
    neon: 'bg-black text-pink-400 border-2 border-pink-400 shadow-lg shadow-pink-500/25',
    glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg shadow-white/10',
    plasma: 'bg-gradient-to-br from-orange-900/50 to-red-900/50 text-orange-300 border-2 border-orange-400 shadow-lg shadow-orange-500/25'
  }
  
  const paddingClasses = {
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }
  
  const shapeClasses = {
    rectangle: 'rounded-none',
    hexagon: 'clip-path-hexagon-card',
    diamond: 'rotate-45 transform',
    rounded: 'rounded-2xl',
    skew: 'skew-y-3 transform'
  }
  
  const borderClasses = {
    solid: '',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    animated: 'animate-pulse border-dashed',
    none: 'border-none'
  }
  
  const effectClasses = cn(
    glow && 'animate-pulse',
    scanlines && 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-white/5 before:to-transparent before:animate-pulse before:pointer-events-none'
  )
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    paddingClasses[padding as keyof typeof paddingClasses],
    shapeClasses[shape as keyof typeof shapeClasses],
    borderClasses[border as keyof typeof borderClasses],
    effectClasses
  )
}