import type { Meta, StoryObj } from '@storybook/react'
import { NerdButton } from './Button'

const meta: Meta<typeof NerdButton> = {
  title: 'Nerd/NerdButton',
  component: NerdButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0f0f0f' },
        { name: 'matrix', value: '#001100' },
        { name: 'cyber', value: '#0a0a0a' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['cyber', 'neon', 'glitch', 'matrix', 'retro', 'hologram', 'plasma'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: { type: 'select' },
      options: ['hexagon', 'diamond', 'circle', 'pill', 'skew', 'triangle'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    pulse: {
      control: { type: 'boolean' },
    },
    glow: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const CyberHexagon: Story = {
  args: {
    children: 'HACK',
    variant: 'cyber',
    shape: 'hexagon',
    glow: true,
  },
}

export const NeonDiamond: Story = {
  args: {
    children: 'NEON',
    variant: 'neon',
    shape: 'diamond',
    pulse: true,
  },
}

export const GlitchTriangle: Story = {
  args: {
    children: 'ERROR',
    variant: 'glitch',
    shape: 'triangle',
    glow: true,
  },
}

export const MatrixCircle: Story = {
  args: {
    children: 'ENTER',
    variant: 'matrix',
    shape: 'circle',
    pulse: true,
  },
}

export const HologramSkew: Story = {
  args: {
    children: 'FUTURE',
    variant: 'hologram',
    shape: 'skew',
    glow: true,
  },
}

export const PlasmaPill: Story = {
  args: {
    children: 'ENERGY',
    variant: 'plasma',
    shape: 'pill',
    pulse: true,
  },
}

export const RetroHexagon: Story = {
  args: {
    children: '80s VIBES',
    variant: 'retro',
    shape: 'hexagon',
    size: 'lg',
  },
}

export const LoadingCyber: Story = {
  args: {
    children: 'LOADING...',
    variant: 'cyber',
    shape: 'hexagon',
    loading: true,
    glow: true,
  },
}

export const DisabledMatrix: Story = {
  args: {
    children: 'DISABLED',
    variant: 'matrix',
    shape: 'diamond',
    disabled: true,
  },
}

export const MegaButton: Story = {
  args: {
    children: 'MEGA NERD',
    variant: 'hologram',
    shape: 'hexagon',
    size: 'xl',
    glow: true,
    pulse: true,
  },
}

export const TinyGlitch: Story = {
  args: {
    children: 'X',
    variant: 'glitch',
    shape: 'circle',
    size: 'xs',
    glow: true,
  },
}