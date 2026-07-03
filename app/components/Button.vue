<script setup lang="ts">
  import { cn } from '~/composables/useCn'

  defineOptions({ inheritAttrs: false });
</script>

<template>
  <div :class="cn('border px-10 py-2 border-white/20 rounded-2xl transition-color duration-200 ' +
                  'flex flex-row justify-center items-center gap-3', $attrs.class)">
       <slot />
  </div>
</template>

<style scoped>

</style>