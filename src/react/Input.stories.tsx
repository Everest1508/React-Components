import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { 
  Search,
  Mail,
  Lock,
  User,
  Phone as PhoneIcon,
  Key,
  Globe,
  Hash,
  AtSign,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'flushed', 'unstyled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
}

export const Required: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Choose a username',
    helperText: 'Username must be at least 3 characters long',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search users...',
    leftIcon: <Search size={16} />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    rightIcon: <Mail size={16} />,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    leftIcon: <Lock size={16} />,
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Company Name',
    placeholder: 'Enter company name',
  },
}

export const Flushed: Story = {
  args: {
    variant: 'flushed',
    label: 'Title',
    placeholder: 'Enter title',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
  },
}

// Dark Theme Examples
export const DarkTheme: Story = {
  args: {
    label: 'Dark Theme Input',
    placeholder: 'Enter text...',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const DarkWithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search in dark mode...',
    leftIcon: <Search size={16} />,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const DarkError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Please enter a valid email address',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const SearchWithIcon: Story = {
  args: {
    type: 'search',
    placeholder: 'Search products...',
    leftIcon: <Search size={16} />,
    variant: 'filled',
  },
}

export const LoginForm: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Sign In</h2>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        leftIcon={<Mail size={16} />}
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        leftIcon={<Lock size={16} />}
        required
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const DarkLoginForm: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Sign In</h2>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        leftIcon={<Mail size={16} />}
        theme="dark"
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        leftIcon={<Lock size={16} />}
        theme="dark"
        required
      />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
}

export const UserProfile: Story = {
  render: () => (
    <div className="w-96 space-y-4 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">User Profile</h3>
      <Input
        label="Full Name"
        placeholder="John Doe"
        leftIcon={<User size={16} />}
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        leftIcon={<Mail size={16} />}
        helperText="We'll never share your email"
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const ValidationStates: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-6">
      <Input
        label="Valid Input"
        placeholder="This is valid"
        rightIcon={<CheckCircle size={16} className="text-green-500" />}
        helperText="Looks good!"
      />
      <Input
        label="Invalid Input"
        placeholder="This has an error"
        error={true}
        rightIcon={<AlertCircle size={16} />}
        helperText="Please fix this error"
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const InputTypes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Input
        label="Email"
        type="email"
        placeholder="user@example.com"
        leftIcon={<AtSign size={16} />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        leftIcon={<Key size={16} />}
      />
      <Input
        label="Website"
        type="url"
        placeholder="https://example.com"
        leftIcon={<Globe size={16} />}
      />
      <Input
        label="Age"
        type="number"
        placeholder="25"
        leftIcon={<Hash size={16} />}
      />
      <Input
        label="Search"
        type="search"
        placeholder="Search..."
        leftIcon={<Search size={16} />}
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}

export const InputVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        variant="default"
        label="Default"
        placeholder="Default input"
      />
      <Input
        variant="filled"
        label="Filled"
        placeholder="Filled input"
      />
      <Input
        variant="flushed"
        label="Flushed"
        placeholder="Flushed input"
      />
      <Input
        variant="unstyled"
        label="Unstyled"
        placeholder="Unstyled input"
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
}