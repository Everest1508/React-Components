import type { Meta, StoryObj } from '@storybook/react'
import { NerdTable } from './NerdTable'
import { NerdButton } from './NerdButton'
import { 
  Eye,
  Edit,
  Trash2,
  User,
  Mail,
  Calendar,
  MapPin,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react'

const meta: Meta<typeof NerdTable> = {
  title: 'Nerd/NerdTable',
  component: NerdTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    bordered: {
      control: { type: 'boolean' },
    },
    striped: {
      control: { type: 'boolean' },
    },
    hoverable: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    sticky: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data for the table
const sampleUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-15',
    actions: 'actions'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'inactive',
    lastLogin: '2024-01-10',
    actions: 'actions'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Moderator',
    status: 'active',
    lastLogin: '2024-01-20',
    actions: 'actions'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'User',
    status: 'pending',
    lastLogin: '2024-01-12',
    actions: 'actions'
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-18',
    actions: 'actions'
  }
]

// Basic columns
const basicColumns = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
  },
]

// Advanced columns with custom rendering
const advancedColumns = [
  {
    key: 'name',
    title: 'User',
    dataIndex: 'name',
    sortable: true,
    render: (value: string, record: any) => (
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-gray-500">{record.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
    render: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === 'Admin' ? 'bg-purple-100 text-purple-800' :
        value === 'Moderator' ? 'bg-blue-100 text-blue-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {value}
      </span>
    ),
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
    render: (value: string) => (
      <div className="flex items-center space-x-2">
        {value === 'active' && <CheckCircle className="w-4 h-4 text-green-500" />}
        {value === 'inactive' && <XCircle className="w-4 h-4 text-red-500" />}
        {value === 'pending' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
        <span className="capitalize">{value}</span>
      </div>
    ),
  },
  {
    key: 'lastLogin',
    title: 'Last Login',
    dataIndex: 'lastLogin',
    sortable: true,
    render: (value: string) => (
      <div className="flex items-center space-x-2">
        <Calendar className="w-4 h-4 text-gray-400" />
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    dataIndex: 'actions',
    align: 'center' as const,
    render: () => (
      <div className="flex items-center justify-center space-x-2">
        <NerdButton size="sm" variant="ghost">
          <Eye className="w-4 h-4" />
        </NerdButton>
        <NerdButton size="sm" variant="ghost">
          <Edit className="w-4 h-4" />
        </NerdButton>
        <NerdButton size="sm" variant="ghost">
          <Trash2 className="w-4 h-4" />
        </NerdButton>
      </div>
    ),
  },
]

export const Default: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
  },
}

export const DarkTheme: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Bordered: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
    bordered: true,
  },
}

export const Striped: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
    striped: true,
  },
}

export const Small: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
    size: 'lg',
  },
}

export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyText: 'No users found',
  },
}

export const WithPagination: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
    pagination: {
      current: 1,
      pageSize: 3,
      total: 5,
      onChange: (page: number, pageSize: number) => {
        console.log('Page changed:', page, pageSize)
      },
    },
  },
}

export const AdvancedTable: Story = {
  args: {
    columns: advancedColumns,
    data: sampleUsers,
    hoverable: true,
    onRowClick: (record: any) => {
      console.log('Row clicked:', record)
    },
  },
}

export const DarkAdvancedTable: Story = {
  args: {
    columns: advancedColumns.map(col => ({
      ...col,
      render: col.key === 'actions' ? () => (
        <div className="flex items-center justify-center space-x-2">
          <NerdButton size="sm" variant="ghost" theme="dark">
            <Eye className="w-4 h-4" />
          </NerdButton>
          <NerdButton size="sm" variant="ghost" theme="dark">
            <Edit className="w-4 h-4" />
          </NerdButton>
          <NerdButton size="sm" variant="ghost" theme="dark">
            <Trash2 className="w-4 h-4" />
          </NerdButton>
        </div>
      ) : col.render
    })),
    data: sampleUsers,
    theme: 'dark',
    hoverable: true,
    onRowClick: (record: any) => {
      console.log('Row clicked:', record)
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const LogsTable: Story = {
  args: {
    columns: [
      {
        key: 'action',
        title: 'ACTION',
        dataIndex: 'action',
        sortable: true,
      },
      {
        key: 'name',
        title: 'NAME',
        dataIndex: 'name',
        sortable: true,
      },
      {
        key: 'timestamp',
        title: 'TIMESTAMP',
        dataIndex: 'timestamp',
        sortable: true,
      },
      {
        key: 'details',
        title: 'DETAILS',
        dataIndex: 'details',
      },
    ],
    data: [
      {
        action: 'LOGIN',
        name: 'admin',
        timestamp: '7/17/2024, 7:35:53 PM',
        details: 'User logged in to the system',
      },
      {
        action: 'LOGIN',
        name: 'admin',
        timestamp: '7/16/2024, 3:34:57 PM',
        details: 'User logged in to the system',
      },
    ],
    bordered: true,
    size: 'sm',
  },
}

export const FullFeaturedTable: Story = {
  args: {
    columns: advancedColumns,
    data: sampleUsers,
    theme: 'light',
    size: 'md',
    bordered: true,
    striped: true,
    hoverable: true,
    pagination: {
      current: 1,
      pageSize: 3,
      total: 5,
      onChange: (page: number, pageSize: number) => {
        console.log('Page changed:', page, pageSize)
      },
    },
    onRowClick: (record: any) => {
      console.log('Row clicked:', record)
    },
  },
}