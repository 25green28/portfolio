<script setup lang="ts">
  import AppHeader from "~/components/AppHeader.vue";
  import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div class="bg-zinc-950 text-zinc-100">
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-zinc-950 text-zinc-100;
  }
</style>
