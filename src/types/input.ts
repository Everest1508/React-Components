import { BaseComponentProps } from './index'

export interface NerdInputProps extends BaseComponentProps {
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