import { cn } from './index'

export const getNerdButtonClasses = (
  variant: string = 'primary',
  size: string = 'md',
  theme: string = 'light',
  disabled: boolean = false,
  loading: boolean = false,
  fullWidth: boolean = false
): string => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50'
  
  // Light theme variants
  const lightVariants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300 shadow-sm hover:shadow-md',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md',
    ghost: 'text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md',
    success: 'bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm hover:shadow-md'
  }
  
  // Dark theme variants
  const darkVariants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600 shadow-sm hover:shadow-md',
    outline: 'border border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-sm hover:shadow-md',
    ghost: 'text-gray-200 hover:bg-gray-700',
    destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md',
    success: 'bg-green-500 text-white hover:bg-green-600 shadow-sm hover:shadow-md',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm hover:shadow-md'
  }
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base'
  }
  
  const variantClasses = theme === 'dark' ? darkVariants : lightVariants
  const widthClass = fullWidth ? 'w-full' : ''
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    sizeClasses[size as keyof typeof sizeClasses],
    widthClass,
    loading && 'cursor-wait',
    disabled && 'cursor-not-allowed'
  )
}