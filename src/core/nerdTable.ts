import { NerdTableProps } from '../types/table'
import { getNerdTableClasses, getNerdTableHeaderClasses, getNerdTableCellClasses, getNerdTableRowClasses } from '../utils/table'

// Core nerd table logic that can be used by any framework
export const createNerdTableProps = (props: NerdTableProps) => {
  const {
    columns,
    data,
    theme = 'light',
    size = 'md',
    bordered = false,
    striped = false,
    hoverable = true,
    loading = false,
    pagination,
    onRowClick,
    emptyText = 'No data available',
    sticky = false,
    className = '',
    ...rest
  } = props

  const tableClasses = getNerdTableClasses(theme, size, bordered, striped, hoverable, sticky)
  const finalClassName = `${tableClasses} ${className}`.trim()

  // Helper functions for getting row and cell classes
  const getHeaderClasses = () => getNerdTableHeaderClasses(theme, size, bordered)
  
  const getCellClasses = (isEven: boolean = false) => 
    getNerdTableCellClasses(theme, size, bordered, striped, hoverable, isEven)
  
  const getRowClasses = (clickable: boolean = false) => 
    getNerdTableRowClasses(theme, hoverable, clickable || !!onRowClick)

  return {
    className: finalClassName,
    columns,
    data,
    theme,
    size,
    bordered,
    striped,
    hoverable,
    loading,
    pagination,
    onRowClick,
    emptyText,
    sticky,
    getHeaderClasses,
    getCellClasses,
    getRowClasses,
    ...rest
  }
}