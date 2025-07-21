import type { Meta, StoryObj } from '@storybook/react'
import { NerdCard } from './Card'
import { NerdButton } from './Button'
import React from 'react'

const meta: Meta<typeof NerdCard> = {
  title: 'Nerd/NerdCard',
  component: NerdCard,
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
      options: ['terminal', 'hologram', 'cyber', 'matrix', 'neon', 'glass', 'plasma'],
    },
    padding: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: { type: 'select' },
      options: ['rectangle', 'hexagon', 'diamond', 'rounded', 'skew'],
    },
    border: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted', 'animated', 'none'],
    },
    glow: {
      control: { type: 'boolean' },
    },
    scanlines: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TerminalWindow: Story = {
  args: {
    variant: 'terminal',
    shape: 'rectangle',
    padding: 'md',
    scanlines: true,
    children: (
      <div>
        <div className="text-green-400 font-mono text-sm mb-4">
          <div>$ whoami</div>
          <div>nerd_user</div>
          <div>$ ls -la</div>
          <div>drwxr-xr-x  awesome_project/</div>
          <div>-rw-r--r--  README.md</div>
        </div>
      </div>
    ),
  },
}

export const MatrixDataPanel: Story = {
  args: {
    variant: 'matrix',
    shape: 'hexagon',
    padding: 'lg',
    glow: true,
    scanlines: true,
    children: (
      <div className="text-center">
        <h3 className="text-green-300 font-mono text-lg mb-4">MATRIX ACCESS</h3>
        <p className="text-green-400 text-sm mb-4">
          Connection established...
          <br />
          Downloading reality.exe
        </p>
        <div className="text-green-500 text-xs font-mono">
          [████████████████████] 100%
        </div>
      </div>
    ),
  },
}

export const CyberDashboard: Story = {
  args: {
    variant: 'cyber',
    shape: 'skew',
    padding: 'lg',
    glow: true,
    border: 'animated',
    children: (
      <div>
        <h3 className="text-cyan-300 font-mono text-xl mb-4">CYBER DASHBOARD</h3>
        <div className="grid grid-cols-2 gap-4 text-cyan-400 text-sm">
          <div>CPU: 87%</div>
          <div>RAM: 64%</div>
          <div>NET: 1.2GB/s</div>
          <div>TEMP: 42°C</div>
        </div>
        <NerdButton variant="cyber" shape="hexagon" size="sm" className="mt-4">
          HACK
        </NerdButton>
      </div>
    ),
  },
}

export const HologramProfile: Story = {
  args: {
    variant: 'hologram',
    shape: 'diamond',
    padding: 'xl',
    glow: true,
    children: (
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
        <h3 className="text-blue-300 font-mono text-lg mb-2">NERD_USER_2077</h3>
        <p className="text-blue-400 text-sm mb-4">Level 99 Code Wizard</p>
        <div className="text-blue-500 text-xs">
          Skills: React, Vue, TypeScript, Cyberpunk
        </div>
      </div>
    ),
  },
}

export const NeonAlert: Story = {
  args: {
    variant: 'neon',
    shape: 'rounded',
    padding: 'md',
    glow: true,
    border: 'dashed',
    children: (
      <div className="text-center">
        <div className="text-pink-400 text-2xl mb-2">⚠️</div>
        <h3 className="text-pink-300 font-mono text-lg mb-2">SYSTEM ALERT</h3>
        <p className="text-pink-400 text-sm">
          Nerd level exceeding maximum capacity!
        </p>
      </div>
    ),
  },
}

export const GlassMorphism: Story = {
  args: {
    variant: 'glass',
    shape: 'rounded',
    padding: 'lg',
    children: (
      <div className="text-center">
        <h3 className="text-white font-mono text-lg mb-4">GLASS PANEL</h3>
        <p className="text-white/80 text-sm mb-4">
          Transparent future technology interface
        </p>
        <div className="bg-white/20 rounded p-2 text-white text-xs">
          Backdrop blur effect active
        </div>
      </div>
    ),
  },
}

export const PlasmaEnergy: Story = {
  args: {
    variant: 'plasma',
    shape: 'hexagon',
    padding: 'lg',
    glow: true,
    scanlines: true,
    children: (
      <div className="text-center">
        <h3 className="text-orange-200 font-mono text-xl mb-4">PLASMA CORE</h3>
        <div className="text-orange-300 text-sm mb-4">
          Energy Level: 9000+
        </div>
        <div className="w-full bg-orange-900 rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full w-4/5 animate-pulse"></div>
        </div>
        <NerdButton variant="plasma" shape="pill" size="sm">
          UNLEASH
        </NerdButton>
      </div>
    ),
  },
}