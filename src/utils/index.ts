// Utility functions for component styling and behavior
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const getButtonClasses = (
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

export const getInputClasses = (
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

export const getCardClasses = (
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