<script setup lang="ts">
  defineProps({
    header: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-col gap-2">
    <h4 class="sticky top-0 z-10 text-center pb-2 text-white font-bold">{{header}}</h4>
    <slot/>
  </div>
</template>

<style scoped>

</style>