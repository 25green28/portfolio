<script setup lang="ts">
  defineProps({
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
  <div class="relative overflow-hidden flex flex-row justify-center items-center gap-2
              border border-white/5 bg-transparent rounded-full px-3 py-1
              before:absolute before:inset-0 before:bg-linear-to-tr before:from-primary/20 before:to-transparent
              before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200">
    <Icon :name="icon" class="w-5 h-5 shrink-0 z-5"/>
    <p class="z-5">{{ technology }}</p>
  </div>
</template>

<style scoped>

</style>