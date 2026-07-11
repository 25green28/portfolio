<script setup lang="ts">
  defineProps({
    placeholder: String,
    icon: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
      <Icon :name="icon" class="w-5 h-5 shrink-0 text-lg"/>
    </div>
    <input :name="id" :id="id" type="text" :placeholder="placeholder" class="myBorder border-border-color-strong bg-white/5 pl-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 hover:bg-white/7" required/>
  </div>
</template>

<style scoped>

</style>