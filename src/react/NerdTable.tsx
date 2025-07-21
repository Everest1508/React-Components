import React from 'react'
import { NerdTableProps } from '../types/table'
import { createNerdTableProps } from '../core/nerdTable'
import { ChevronUp, ChevronDown, Loader2 } from 'lucide-react'

export const NerdTable: React.FC<NerdTableProps> = (props) => {
  const {
    columns,
    data,
    theme,
    loading,
    pagination,
    onRowClick,
    emptyText,
    getHeaderClasses,
    getCellClasses,
    getRowClasses,
    ...tableProps
  } = createNerdTableProps(props)

  const [sortConfig, setSortConfig] = React.useState<{
    key: string
    direction: 'asc' | 'desc'
  } | null>(null)

  // Handle sorting
  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey)
    if (!column?.sortable) return

    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key: columnKey, direction })
  }

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [data, sortConfig])

  // Handle pagination
  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData
    
    const start = (pagination.current - 1) * pagination.pageSize
    const end = start + pagination.pageSize
    return sortedData.slice(start, end)
  }, [sortedData, pagination])

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        <Loader2 className="animate-spin h-6 w-6 mr-2" />
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table {...tableProps}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`${getHeaderClasses()} ${column.align ? `text-${column.align}` : ''} ${
                  column.sortable ? 'cursor-pointer select-none hover:bg-opacity-80' : ''
                }`}
                style={{ width: column.width }}
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center gap-1">
                  <span>{column.title}</span>
                  {column.sortable && (
                    <div className="flex flex-col">
                      <ChevronUp 
                        className={`h-3 w-3 ${
                          sortConfig?.key === column.key && sortConfig.direction === 'asc'
                            ? (theme === 'dark' ? 'text-blue-400' : 'text-blue-600')
                            : (theme === 'dark' ? 'text-gray-500' : 'text-gray-400')
                        }`}
                      />
                      <ChevronDown 
                        className={`h-3 w-3 -mt-1 ${
                          sortConfig?.key === column.key && sortConfig.direction === 'desc'
                            ? (theme === 'dark' ? 'text-blue-400' : 'text-blue-600')
                            : (theme === 'dark' ? 'text-gray-500' : 'text-gray-400')
                        }`}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length} 
                className={`${getCellClasses()} text-center py-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            paginatedData.map((record, index) => (
              <tr
                key={index}
                className={getRowClasses(!!onRowClick)}
                onClick={() => onRowClick?.(record, index)}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`${getCellClasses(index % 2 === 0)} ${column.align ? `text-${column.align}` : ''}`}
                  >
                    {column.render
                      ? column.render(record[column.dataIndex], record, index)
                      : record[column.dataIndex]
                    }
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      
      {/* Pagination */}
      {pagination && (
        <div className={`flex items-center justify-between mt-4 px-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className="text-sm">
            Showing {((pagination.current - 1) * pagination.pageSize) + 1} to{' '}
            {Math.min(pagination.current * pagination.pageSize, pagination.total)} of{' '}
            {pagination.total} entries
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1 rounded text-sm ${
                pagination.current === 1
                  ? (theme === 'dark' ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 cursor-not-allowed')
                  : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100')
              }`}
              disabled={pagination.current === 1}
              onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
            >
              Previous
            </button>
            <span className="text-sm">
              Page {pagination.current} of {Math.ceil(pagination.total / pagination.pageSize)}
            </span>
            <button
              className={`px-3 py-1 rounded text-sm ${
                pagination.current >= Math.ceil(pagination.total / pagination.pageSize)
                  ? (theme === 'dark' ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 cursor-not-allowed')
                  : (theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100')
              }`}
              disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
              onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}