<script setup lang="ts">
  const props = defineProps({
    technology: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-row justify-center items-center gap-2 border border-white/5 transition-colors duration-200 rounded-full px-3 py-1">
    <Icon :name="icon" class="w-5 h-5 shrink-0"/>
    <p>{{ technology }}</p>
  </div>
</template>

<style scoped>

</style>