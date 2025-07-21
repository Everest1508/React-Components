import { cn } from './index'

export const getNerdInputClasses = (
  variant: string = 'default',
  size: string = 'md',
  theme: string = 'light',
  disabled: boolean = false,
  error: boolean = false
): string => {
  const baseClasses = 'w-full rounded-lg border transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
  
  // Light theme variants
  const lightVariants = {
    default: 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500',
    filled: 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-500',
    flushed: 'bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 focus:border-blue-500 text-gray-900 placeholder:text-gray-500',
    unstyled: 'bg-transparent border-0 text-gray-900 placeholder:text-gray-500'
  }
  
  // Dark theme variants
  const darkVariants = {
    default: 'bg-gray-800 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:border-blue-400',
    filled: 'bg-gray-700 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:bg-gray-800 focus:border-blue-400',
    flushed: 'bg-transparent border-0 border-b-2 border-gray-600 rounded-none px-0 focus:border-blue-400 text-gray-100 placeholder:text-gray-400',
    unstyled: 'bg-transparent border-0 text-gray-100 placeholder:text-gray-400'
  }
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-4 text-base'
  }
  
  const variantClasses = theme === 'dark' ? darkVariants : lightVariants
  const errorClasses = error 
    ? (theme === 'dark' ? 'border-red-400 focus:border-red-400' : 'border-red-500 focus:border-red-500')
    : ''
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    sizeClasses[size as keyof typeof sizeClasses],
    errorClasses
  )
}