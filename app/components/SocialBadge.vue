<script setup lang="ts">
  import { cn } from '~/composables/useCn'

  defineProps({
    icon: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  })

  defineOptions({
    inheritAttrs: false
  })
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" :class="cn('w-fit myBorder border-border-color-light ' +
   'p-2 rounded-xl flex flex-row justify-center items-center transition-color duration-200 hover:bg-surface', $attrs.class)">
    <Icon :name="icon" class="h-8 w-8 shrink-0 bg-white/40 text-3xl"/>
  </a>
</template>

<style scoped>

</style>