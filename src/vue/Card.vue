<template>
  <div v-bind="cardProps">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CardProps } from '../types'
import { createCardProps } from '../core/card'

interface Props extends Omit<CardProps, 'children'> {}

const props = withDefaults(defineProps<Props>(), {
  padding: 'md',
  shadow: true
})

const cardProps = computed(() => {
  const { children, ...rest } = createCardProps(props as CardProps)
  return rest
})
</script>