import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { 
  Plus, 
  Trash2, 
  Edit, 
  Check, 
  X,
  Download,
  Settings,
  Search,
  Mail,
  User,
  Save,
  Send,
  Upload,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Heart,
  Star,
  Play,
  Pause,
  Power
} from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'success', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
}

export const Success: Story = {
  args: {
    children: 'Save Changes',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
}

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <Plus size={16} />,
    variant: 'primary',
  },
}

export const WithRightIcon: Story = {
  args: {
    children: 'Download',
    rightIcon: <Download size={16} />,
    variant: 'outline',
  },
}

export const IconOnly: Story = {
  args: {
    children: <Settings size={16} />,
    variant: 'ghost',
    size: 'sm',
  },
}

// Dark Theme Examples
export const DarkTheme: Story = {
  args: {
    children: 'Dark Theme Button',
    variant: 'primary',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const DarkSecondary: Story = {
  args: {
    children: 'Secondary Dark',
    variant: 'secondary',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const DarkOutline: Story = {
  args: {
    children: 'Outline Dark',
    variant: 'outline',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="outline" leftIcon={<Edit size={16} />}>
        Edit
      </Button>
      <Button variant="destructive" leftIcon={<Trash2 size={16} />}>
        Delete
      </Button>
      <Button variant="success" leftIcon={<Check size={16} />}>
        Approve
      </Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const DashboardActions: Story = {
  render: () => (
    <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900">Dashboard Actions</h3>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" leftIcon={<Plus size={16} />}>
          Create New
        </Button>
        <Button variant="secondary">
          View All
        </Button>
        <Button variant="outline" rightIcon={<Download size={16} />}>
          Export Data
        </Button>
        <Button variant="ghost" leftIcon={<Settings size={16} />}>
          Settings
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const DarkDashboard: Story = {
  render: () => (
    <div className="space-y-4 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-100">Dark Dashboard</h3>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" theme="dark" leftIcon={<Plus size={16} />}>
          Create New
        </Button>
        <Button variant="secondary" theme="dark">
          View All
        </Button>
        <Button variant="outline" theme="dark" rightIcon={<Download size={16} />}>
          Export Data
        </Button>
        <Button variant="ghost" theme="dark" leftIcon={<Settings size={16} />}>
          Settings
        </Button>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
}

export const ActionButtons: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <Button variant="primary" leftIcon={<Save size={16} />} size="sm">
        Save
      </Button>
      <Button variant="secondary" leftIcon={<Send size={16} />} size="sm">
        Send
      </Button>
      <Button variant="outline" leftIcon={<Upload size={16} />} size="sm">
        Upload
      </Button>
      <Button variant="ghost" leftIcon={<RefreshCw size={16} />} size="sm">
        Refresh
      </Button>
    </div>
  ),
}

export const StatusButtons: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Button variant="success" leftIcon={<CheckCircle size={16} />}>
        Success
      </Button>
      <Button variant="destructive" leftIcon={<X size={16} />}>
        Error
      </Button>
      <Button variant="warning" leftIcon={<AlertTriangle size={16} />}>
        Warning
      </Button>
    </div>
  ),
}

export const MediaControls: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="outline" size="sm">
        <Play size={16} />
      </Button>
      <Button variant="outline" size="sm">
        <Pause size={16} />
      </Button>
      <Button variant="destructive" size="sm">
        <Power size={16} />
      </Button>
    </div>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Button loading>Loading...</Button>
      <Button variant="secondary" loading>Processing</Button>
      <Button variant="outline" loading leftIcon={<Upload size={16} />}>
        Uploading
      </Button>
    </div>
  ),
}