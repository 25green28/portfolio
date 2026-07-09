<script setup lang="ts">
  import AppHeader from "~/components/AppHeader.vue";
  import AppFooter from "~/components/AppFooter.vue";
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

  .secondText {
    @apply text-zinc-300;
  }
</style>
