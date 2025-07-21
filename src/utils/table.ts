import { cn } from './index'

export const getNerdTableClasses = (
  theme: string = 'light',
  size: string = 'md',
  bordered: boolean = false,
  striped: boolean = false,
  hoverable: boolean = false,
  sticky: boolean = false
): string => {
  const baseClasses = 'w-full border-collapse'
  
  const themeClasses = theme === 'dark' 
    ? 'bg-gray-800 text-gray-100' 
    : 'bg-white text-gray-900'
  
  const borderClasses = bordered 
    ? (theme === 'dark' ? 'border border-gray-600' : 'border border-gray-200')
    : ''
  
  const stickyClasses = sticky ? 'sticky top-0 z-10' : ''
  
  return cn(baseClasses, themeClasses, borderClasses, stickyClasses)
}

export const getNerdTableHeaderClasses = (
  theme: string = 'light',
  size: string = 'md',
  bordered: boolean = false
): string => {
  const baseClasses = 'text-left font-semibold'
  
  const themeClasses = theme === 'dark'
    ? 'bg-gray-700 text-gray-200 border-gray-600'
    : 'bg-gray-50 text-gray-700 border-gray-200'
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  }
  
  const borderClasses = bordered ? 'border-b border-r last:border-r-0' : 'border-b'
  
  return cn(
    baseClasses,
    themeClasses,
    sizeClasses[size as keyof typeof sizeClasses],
    borderClasses
  )
}

export const getNerdTableCellClasses = (
  theme: string = 'light',
  size: string = 'md',
  bordered: boolean = false,
  striped: boolean = false,
  hoverable: boolean = false,
  isEven: boolean = false
): string => {
  const baseClasses = 'transition-colors duration-150'
  
  const themeClasses = theme === 'dark'
    ? 'text-gray-300 border-gray-600'
    : 'text-gray-900 border-gray-200'
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base'
  }
  
  const borderClasses = bordered ? 'border-b border-r last:border-r-0' : 'border-b'
  
  const stripedClasses = striped && isEven
    ? (theme === 'dark' ? 'bg-gray-750' : 'bg-gray-50')
    : ''
  
  const hoverClasses = hoverable
    ? (theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100')
    : ''
  
  return cn(
    baseClasses,
    themeClasses,
    sizeClasses[size as keyof typeof sizeClasses],
    borderClasses,
    stripedClasses,
    hoverClasses
  )
}

export const getNerdTableRowClasses = (
  theme: string = 'light',
  hoverable: boolean = false,
  clickable: boolean = false
): string => {
  const baseClasses = 'transition-colors duration-150'
  
  const hoverClasses = hoverable
    ? (theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50')
    : ''
  
  const clickableClasses = clickable ? 'cursor-pointer' : ''
  
  return cn(baseClasses, hoverClasses, clickableClasses)
}