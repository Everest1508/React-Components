# Universal UI Components Library

A modern, framework-agnostic UI components library that works seamlessly with React, Vue.js, and Next.js.

## Features

- 🚀 **Framework Agnostic**: Works with React, Vue, and Next.js
- 💪 **TypeScript**: Full TypeScript support with type definitions
- 🎨 **Tailwind CSS**: Beautiful, customizable styling
- 📦 **Tree Shakeable**: Import only what you need
- 🔧 **Customizable**: Easy to theme and extend
- 📚 **Storybook**: Interactive component documentation

## Installation

```bash
npm install nerd-components
# or
yarn add nerd-components
# or
pnpm add nerd-components
```

## Usage

### React / Next.js

```tsx
import { Button, Input, Card } from 'nerd-components/react'

function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Submit
      </Button>
    </Card>
  )
}
```

### Vue.js

```vue
<template>
  <Card>
    <Input v-model="name" placeholder="Enter your name" />
    <Button variant="primary" @click="handleSubmit">
      Submit
    </Button>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Input, Card } from 'nerd-components/vue'

const name = ref('')

const handleSubmit = () => {
  console.log('Name:', name.value)
}
</script>
```

## Components

### Button

```tsx
<Button 
  variant="primary" // primary | secondary | outline | ghost
  size="md"        // sm | md | lg
  loading={false}
  disabled={false}
  onClick={() => {}}
>
  Click me
</Button>
```

### Input

```tsx
<Input
  type="text"           // text | email | password | number
  placeholder="Enter text"
  value={value}
  onChange={(val) => setValue(val)}
  disabled={false}
  required={false}
/>
```

### Card

```tsx
<Card
  padding="md"    // sm | md | lg
  shadow={true}
>
  Content goes here
</Card>
```

## Styling

This library uses Tailwind CSS. Make sure to include the styles in your project:

```css
@import 'nerd-components/styles';
```

Or if you're using Tailwind CSS in your project, you can extend the content paths:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your existing paths
    './node_modules/nerd-components/dist/**/*.{js,ts,jsx,tsx,vue}'
  ],
  // ... rest of config
}
```

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build the library
npm run build

# Run Storybook
npm run storybook

# Run tests
npm test
```

## License

MIT