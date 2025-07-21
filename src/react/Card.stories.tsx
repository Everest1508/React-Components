import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from './Button'
import { Input } from './Input'
import {
    BarChart3,
    Users,
    DollarSign,
    ShoppingCart,
    TrendingUp,
    TrendingDown,
    Activity,
    Settings,
    MoreVertical,
    Star,
    Heart,
    Bookmark,
    Share,
    MessageCircle,
    Eye,
    Calendar,
    Clock,
    MapPin,
    User,
    Mail,
    Phone
} from 'lucide-react'
import React from 'react'

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['elevated', 'outlined', 'filled', 'ghost'],
        },
        padding: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
        radius: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
        },
        shadow: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
        theme: {
            control: { type: 'select' },
            options: ['light', 'dark'],
        },
        border: {
            control: { type: 'boolean' },
        },
        hover: {
            control: { type: 'boolean' },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
                <p className="text-gray-600">This is a simple card with default styling.</p>
            </div>
        ),
    },
}

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Outlined Card</h3>
                <p className="text-gray-600">This card has a prominent border.</p>
            </div>
        ),
    },
}

export const Filled: Story = {
    args: {
        variant: 'filled',
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Filled Card</h3>
                <p className="text-gray-600">This card has a filled background.</p>
            </div>
        ),
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ghost Card</h3>
                <p className="text-gray-600">This card has no background or border.</p>
            </div>
        ),
    },
}

export const WithHover: Story = {
    args: {
        hover: true,
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hover Effect</h3>
                <p className="text-gray-600">Hover over this card to see the effect.</p>
            </div>
        ),
    },
}

export const LargePadding: Story = {
    args: {
        padding: 'xl',
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Padding</h3>
                <p className="text-gray-600">This card has extra large padding.</p>
            </div>
        ),
    },
}

// Dark Theme Examples
export const DarkTheme: Story = {
    args: {
        theme: 'dark',
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">Dark Theme Card</h3>
                <p className="text-gray-300">This card uses the dark theme styling.</p>
            </div>
        ),
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
}

export const DarkOutlined: Story = {
    args: {
        variant: 'outlined',
        theme: 'dark',
        children: (
            <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">Dark Outlined</h3>
                <p className="text-gray-300">Dark theme with outlined variant.</p>
            </div>
        ),
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
}

export const StatCard: Story = {
    args: {
        children: (
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <p className="text-2xl font-semibold text-gray-900">2,847</p>
                    <div className="flex items-center text-sm text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>12% from last month</span>
                    </div>
                </div>
            </div>
        ),
    },
}

export const DarkStatCard: Story = {
    args: {
        theme: 'dark',
        children: (
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-blue-400" />
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Revenue</p>
                    <p className="text-2xl font-semibold text-gray-100">$54,239</p>
                    <div className="flex items-center text-sm text-green-400">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>8% from last month</span>
                    </div>
                </div>
            </div>
        ),
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
}

export const ProductCard: Story = {
    args: {
        hover: true,
        children: (
            <div>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 h-32"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Name</h3>
                <p className="text-gray-600 mb-4">Product description goes here...</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">$99.99</span>
                    <Button size="sm">Add to Cart</Button>
                </div>
            </div>
        ),
    },
}

export const UserProfileCard: Story = {
    args: {
        children: (
            <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">John Doe</h3>
                <p className="text-gray-500 mb-4">Software Engineer</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>San Francisco</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Joined 2023</span>
                    </div>
                </div>
            </div>
        ),
    },
}

export const Dashboard: Story = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen">
            <Card>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Total Users</p>
                        <p className="text-2xl font-semibold text-gray-900">2,847</p>
                        <div className="flex items-center text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span>12%</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Revenue</p>
                        <p className="text-2xl font-semibold text-gray-900">$54,239</p>
                        <div className="flex items-center text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span>8%</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-yellow-600" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Orders</p>
                        <p className="text-2xl font-semibold text-gray-900">1,429</p>
                        <div className="flex items-center text-sm text-red-600">
                            <TrendingDown className="w-4 h-4 mr-1" />
                            <span>3%</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Conversion</p>
                        <p className="text-2xl font-semibold text-gray-900">3.24%</p>
                        <div className="flex items-center text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span>0.5%</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className="md:col-span-2 lg:col-span-3" padding="lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                    </Button>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">New user registered</p>
                            <p className="text-xs text-gray-500">2 minutes ago</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Payment received</p>
                            <p className="text-xs text-gray-500">5 minutes ago</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <ShoppingCart className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">New order placed</p>
                            <p className="text-xs text-gray-500">10 minutes ago</p>
                        </div>
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                    <Button fullWidth variant="primary" size="sm">
                        Create User
                    </Button>
                    <Button fullWidth variant="outline" size="sm">
                        Generate Report
                    </Button>
                    <Button fullWidth variant="ghost" size="sm">
                        View Settings
                    </Button>
                </div>
            </Card>
        </div>
    ),
    parameters: {
        layout: 'fullscreen',
    },
}

export const DarkDashboard: Story = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-900 min-h-screen">
            <Card theme="dark">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-400" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">Total Users</p>
                        <p className="text-2xl font-semibold text-gray-100">2,847</p>
                        <div className="flex items-center text-sm text-green-400">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span>12%</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card theme="dark">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-green-400" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">Revenue</p>
                        <p className="text-2xl font-semibold text-gray-100">$54,239</p>
                        <div className="flex items-center text-sm text-green-400">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            <span>8%</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card theme="dark" className="md:col-span-2" padding="lg">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-100">Quick Actions</h3>
                    <Button variant="ghost" theme="dark" size="sm">
                        <Settings className="w-4 h-4" />
                    </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="primary" theme="dark" size="sm">
                        Create User
                    </Button>
                    <Button variant="outline" theme="dark" size="sm">
                        Generate Report
                    </Button>
                </div>
            </Card>
        </div>
    ),
    parameters: {
        backgrounds: { default: 'dark' },
        layout: 'fullscreen',
    },
}

export const ContactCard: Story = {
    args: {
        children: (
            <div>
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                        <p className="text-gray-500">Product Manager</p>
                    </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>sarah@company.com</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>New York, NY</span>
                    </div>
                </div>
            </div>
        ),
    },
}

export const LoginCard: Story = {
    args: {
        padding: 'lg',
        children: (
            <div className="w-80">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h2>
                <div className="space-y-4">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        leftIcon={<Mail size={16} />}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        leftIcon={<User size={16} />}
                    />
                    <Button fullWidth variant="primary">
                        Sign In
                    </Button>
                </div>
            </div>
        ),
    },
}