<script setup lang="ts">
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
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="w-fit border border-white/5 p-1 rounded-xl flex flex-row justify-center items-center transition-color duration-200 hover:bg-white/5">
    <Icon :name="icon" class="h-8 w-8 shrink-0 bg-white/40 text-3xl"/>
  </a>
</template>

<style scoped>

</style>