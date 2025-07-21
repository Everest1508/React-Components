import React from 'react'
import { NerdInputProps } from '../types/input'
import { createNerdInputProps } from '../core/nerdInput'

export const NerdInput: React.FC<NerdInputProps> = (props) => {
  const { label, helperText, leftIcon, rightIcon, error, theme, ...inputProps } = createNerdInputProps(props)

  const labelColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
  const helperColor = error 
    ? (theme === 'dark' ? 'text-red-400' : 'text-red-600')
    : (theme === 'dark' ? 'text-gray-400' : 'text-gray-500')
  const iconColor = error 
    ? (theme === 'dark' ? 'text-red-400' : 'text-red-500')
    : (theme === 'dark' ? 'text-gray-400' : 'text-gray-500')

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className={`block text-sm font-medium ${labelColor} mb-2`}>
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Input container */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className={iconColor}>
              {leftIcon}
            </span>
          </div>
        )}
        
        {/* Input field */}
        <input
          {...inputProps}
          className={`${inputProps.className} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`}
          onChange={(e) => props.onChange?.(e.target.value)}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        
        {/* Right icon */}
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className={iconColor}>
              {rightIcon}
            </span>
          </div>
        )}
      </div>
      
      {/* Helper text or error message */}
      {helperText && (
        <p className={`mt-2 text-sm ${helperColor}`}>
          {helperText}
        </p>
      )}
    </div>
  )
}