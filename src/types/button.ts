import { BaseComponentProps } from './index'

export interface NerdButtonProps extends BaseComponentProps {
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