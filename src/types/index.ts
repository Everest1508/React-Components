// Common component props and types
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
}

export interface NerdButtonProps extends BaseComponentProps {
  variant?: 'cyber' | 'neon' | 'glitch' | 'matrix' | 'retro' | 'hologram' | 'plasma'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'hexagon' | 'diamond' | 'circle' | 'pill' | 'skew' | 'triangle'
  disabled?: boolean
  loading?: boolean
  pulse?: boolean
  glow?: boolean
  children: React.ReactNode | string
  onClick?: () => void
}

export interface NerdInputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number'
  variant?: 'terminal' | 'matrix' | 'cyber' | 'neon' | 'hologram' | 'glitch'
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  scanline?: boolean
  glow?: boolean
  onChange?: (value: string) => void
}

export interface NerdCardProps extends BaseComponentProps {
  children: React.ReactNode
  variant?: 'terminal' | 'hologram' | 'cyber' | 'matrix' | 'neon' | 'glass' | 'plasma'
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'rectangle' | 'hexagon' | 'diamond' | 'rounded' | 'skew'
  glow?: boolean
  scanlines?: boolean
  border?: 'solid' | 'dashed' | 'dotted' | 'animated' | 'none'
}