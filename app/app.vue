<script setup lang="ts">
  import AppHeader from "~/components/AppHeader.vue";
  import AppFooter from "~/components/AppFooter.vue";

  const colorMode = useColorMode();

  colorMode.preference = "system";
</script>

<template>
  <div class="bg-background-primary text-text-primary">
    <AppHeader/>
    <NuxtPage/>
    <AppFooter/>
  </div>
</template>

<style>
  @reference "tailwindcss";

  html {
    scroll-behavior: smooth;
  }
</style>
