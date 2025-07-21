// Common component props and types
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
}

// Re-export all component types
export * from './button'
export * from './input'
export * from './card'
export * from './table'

// Legacy exports for backward compatibility
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'light' | 'dark'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode | string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  variant?: 'default' | 'filled' | 'flushed' | 'unstyled'
  size?: 'sm' | 'md' | 'lg'
  theme?: 'light' | 'dark'
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  error?: boolean
  helperText?: string
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export interface CardProps extends BaseComponentProps {
  children: React.ReactNode
  variant?: 'elevated' | 'outlined' | 'filled' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'light' | 'dark'
  border?: boolean
  hover?: boolean
}