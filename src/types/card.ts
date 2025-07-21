import { BaseComponentProps } from './index'

export interface NerdCardProps extends BaseComponentProps {
  children: React.ReactNode
  variant?: 'elevated' | 'outlined' | 'filled' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'light' | 'dark'
  border?: boolean
  hover?: boolean
}