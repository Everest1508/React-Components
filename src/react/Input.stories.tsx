import type { Meta, StoryObj } from '@storybook/react'
import { NerdInput } from './Input'

const meta: Meta<typeof NerdInput> = {
  title: 'Nerd/NerdInput',
  component: NerdInput,
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
      options: ['terminal', 'matrix', 'cyber', 'neon', 'hologram', 'glitch'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    scanline: {
      control: { type: 'boolean' },
    },
    glow: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TerminalHacker: Story = {
  args: {
    variant: 'terminal',
    placeholder: 'root@nerd:~$ ',
    scanline: true,
  },
}

export const MatrixCode: Story = {
  args: {
    variant: 'matrix',
    placeholder: 'Enter the code...',
    glow: true,
  },
}

export const CyberPassword: Story = {
  args: {
    variant: 'cyber',
    type: 'password',
    placeholder: 'Access key required',
    glow: true,
    scanline: true,
  },
}

export const NeonEmail: Story = {
  args: {
    variant: 'neon',
    type: 'email',
    placeholder: 'nerd@future.com',
    glow: true,
  },
}

export const HologramSearch: Story = {
  args: {
    variant: 'hologram',
    placeholder: 'Search the multiverse...',
    glow: true,
    scanline: true,
  },
}

export const GlitchError: Story = {
  args: {
    variant: 'glitch',
    placeholder: 'ERROR_404_NOT_FOUND',
    disabled: true,
  },
}

export const TerminalWithScanlines: Story = {
  args: {
    variant: 'terminal',
    placeholder: 'Scanning systems...',
    scanline: true,
    glow: true,
  },
}

export const CyberNumber: Story = {
  args: {
    variant: 'cyber',
    type: 'number',
    placeholder: 'Enter coordinates',
    glow: true,
  },
}

export const MatrixRequired: Story = {
  args: {
    variant: 'matrix',
    placeholder: 'Required field *',
    required: true,
    glow: true,
    scanline: true,
  },
}