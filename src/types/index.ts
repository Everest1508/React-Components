// Common component props and types
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode | string
  onClick?: () => void
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  onChange?: (value: string) => void
}

export interface CardProps extends BaseComponentProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  shadow?: boolean
}