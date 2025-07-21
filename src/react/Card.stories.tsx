import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import React from 'react'

const meta: Meta<typeof Card> = {
  title: 'React/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    shadow: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a card with default styling.',
  },
}

export const SmallPadding: Story = {
  args: {
    children: 'This is a card with small padding.',
    padding: 'sm',
  },
}

export const LargePadding: Story = {
  args: {
    children: 'This is a card with large padding.',
    padding: 'lg',
  },
}

export const NoShadow: Story = {
  args: {
    children: 'This is a card without shadow.',
    shadow: false,
  },
}

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold' }}>
          Card Title
        </h3>
        <p style={{ margin: '0 0 16px 0', color: '#666' }}>
          This is a more complex card with multiple elements inside it.
        </p>
        <button style={{ 
          padding: '8px 16px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Action Button
        </button>
      </div>
    ),
  },
}