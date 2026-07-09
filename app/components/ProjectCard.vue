<script setup lang="ts">
  import Button from "~/components/Button.vue";

  const usedTechnologies = ["Java", "Spring Boot", "PostgreSQL", "Python", "MySQL"]
</script>

<template>
  <article class="relative min-h-[20rem] min-w-[20rem] max-w-[20rem] myBorder border-border-color-strong overflow-hidden
                  transition duration-200 hover:bg-white/2 hover:shadow-lg hover:scale-[1.02] group">
    <img src="/templateProjectImg.png" alt="Project preview image" class="h-[14rem] w-full object-cover rounded-xl"/>
    <ul class="absolute w-full px-2 opacity-0 group-hover:opacity-100 top-[11.75rem] left-0
                flex overflow-x-auto justify-center gap-2 transition-opacity duration-200 scrollbar-none">
        <span
            v-for="tech in usedTechnologies"
            :key="tech"
            class="px-2 lg:px-3 py-[0.2rem] border border-white/5 rounded-xl text-text-secondary text-sm bg-zinc-800/50 whitespace-nowrap"
        >
          {{ tech }}
        </span>
    </ul>
    <div class="flex flex-col w-full justify-center px-3 py-4 gap-4">
      <h4 class="text-2xl font-bold px-2 ">Project name</h4>
      <p class="text-text-secondary text-sm px-2">
        This initiative leverages innovative data analytics and sustainable practices to streamline daily operations.
      </p>
      <div class="flex flex-row flex-wrap gap-2 px-2 items-center">
        <Button class="group/liveDemoIco px-4 py-2 bg-primary-button hover:bg-primary-button-hover overflow-hidden gap-0 hover:gap-2">
          <Icon name="famicons:open-outline" class="w-5 h-5 shrink-0"/>
          <p class="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/liveDemoIco:max-w-20 group-hover/liveDemoIco:opacity-100 text-sm">Live demo</p>
        </Button>
        <Button class="group/githubIco px-4 py-2 bg-secondary-button hover:bg-secondary-button-hover overflow-hidden gap-0 hover:gap-2">
          <Icon name="mynaui:github" class="w-5 h-5 shrink-0"/>
          <p class="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/githubIco:max-w-20 group-hover/githubIco:opacity-100 text-sm">Github</p>
        </Button>
      </div>
    </div>
  </article>
</template>

<style scoped>
</style>