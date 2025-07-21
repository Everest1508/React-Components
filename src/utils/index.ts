// Utility functions for component styling and behavior
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const getButtonClasses = (
  variant: string = 'primary',
  size: string = 'md',
  disabled: boolean = false,
  loading: boolean = false
): string => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-500',
    ghost: 'hover:bg-gray-100 focus-visible:ring-gray-500'
  }
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
  }
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    sizeClasses[size as keyof typeof sizeClasses],
    loading && 'cursor-wait',
    disabled && 'cursor-not-allowed'
  )
}

export const getInputClasses = (disabled: boolean = false): string => {
  return cn(
    'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
    disabled && 'bg-gray-50'
  )
}

export const getCardClasses = (
  padding: string = 'md',
  shadow: boolean = true
): string => {
  const baseClasses = 'rounded-lg border border-gray-200 bg-white'
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const shadowClass = shadow ? 'shadow-sm' : ''
  
  return cn(
    baseClasses,
    paddingClasses[padding as keyof typeof paddingClasses],
    shadowClass
  )
}