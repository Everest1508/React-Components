import { BaseComponentProps } from './index'

export interface NerdTableColumn {
  key: string
  title: string
  dataIndex: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (value: any, record: any, index: number) => React.ReactNode
}

export interface NerdTableProps extends BaseComponentProps {
  columns: NerdTableColumn[]
  data: any[]
  theme?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  loading?: boolean
  pagination?: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
  onRowClick?: (record: any, index: number) => void
  emptyText?: string
  sticky?: boolean
}