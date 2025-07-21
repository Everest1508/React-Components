import { cn } from './index'

export const getNerdCardClasses = (
  variant: string = 'elevated',
  padding: string = 'md',
  radius: string = 'md',
  shadow: string = 'sm',
  theme: string = 'light',
  border: boolean = false,
  hover: boolean = false
): string => {
  const baseClasses = 'transition-all duration-200'
  
  // Light theme variants
  const lightVariants = {
    elevated: 'bg-white border border-gray-200',
    outlined: 'bg-white border-2 border-gray-300',
    filled: 'bg-gray-50 border border-gray-200',
    ghost: 'bg-transparent'
  }
  
  // Dark theme variants
  const darkVariants = {
    elevated: 'bg-gray-800 border border-gray-700',
    outlined: 'bg-gray-800 border-2 border-gray-600',
    filled: 'bg-gray-700 border border-gray-600',
    ghost: 'bg-transparent'
  }
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-full'
  }
  
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  const variantClasses = theme === 'dark' ? darkVariants : lightVariants
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''
  const borderClass = border ? (theme === 'dark' ? 'border-2 border-gray-600' : 'border-2 border-gray-300') : ''
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    paddingClasses[padding as keyof typeof paddingClasses],
    radiusClasses[radius as keyof typeof radiusClasses],
    shadowClasses[shadow as keyof typeof shadowClasses],
    hoverClasses,
    borderClass
  )
}