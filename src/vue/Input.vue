<template>
  <input
    v-bind="inputProps"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { InputProps } from '../types'
import { createInputProps } from '../core/input'

interface Props extends Omit<InputProps, 'onChange' | 'value'> {
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputProps = computed(() => {
  const { onChange, ...rest } = createInputProps(props as InputProps)
  return rest
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>