<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  change: {
    type: String,
    default: ''
  },
  positive: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="p-4 bg-white rounded-xl shadow flex items-center justify-between">
    <div>
      <h3 class="text-sm font-medium text-gray-500">{{ props.title }}</h3>
      <p class="text-xl font-bold">{{ props.value }}</p>
      <p v-if="props.change" :class="props.positive ? 'text-green-500 text-sm' : 'text-red-500 text-sm'">
        {{ props.change }}
      </p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
