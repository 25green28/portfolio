<script setup lang="ts">
  import Button from "~/components/Button.vue";
  import type { Project } from "~/data/projects" ;

  defineProps<{
    project: Project
  }>()

</script>

<template>
  <article class="group/card relative min-h-80 min-w-[20rem] max-w-[20rem] myBorder border-border-color-strong overflow-hidden
                  transition duration-200 hover:bg-white/2 hover:shadow-lg hover:scale-[1.02] group">
    <img :src="project.image" alt="Project preview image" class="min-h-56 max-h-56 w-full object-cover rounded-xl group-hover/card:scale-[1.04] transition-scale duration-200"/>
    <ul class="absolute w-full px-2 opacity-0 group-hover:opacity-100 top-47 left-0
                flex overflow-x-auto justify-center gap-2 transition-opacity duration-200 scrollbar-none">
        <li
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2 lg:px-3 py-[0.2rem] border border-white/5 rounded-xl text-text-secondary text-sm bg-zinc-800/50 whitespace-nowrap"
        >
          {{ tech }}
        </li>
    </ul>
    <div class="flex flex-col w-full justify-center px-3 py-4 gap-4">
      <h4 class="text-2xl font-bold px-2 ">
        {{project.name}}
      </h4>
      <p class="text-text-secondary text-sm px-2">
        {{project.description}}
      </p>
      <div v-if="project.liveDemo || project.github" class="flex flex-row flex-wrap gap-2 px-2 items-center">
        <Button v-if="project.liveDemo" class="group/liveDemoIco px-4 py-2 bg-primary-button hover:bg-primary-button-hover overflow-hidden gap-0 hover:gap-2">
          <Icon name="famicons:open-outline" class="w-5 h-5 shrink-0"/>
          <p class="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/liveDemoIco:max-w-20 group-hover/liveDemoIco:opacity-100 text-sm">Live demo</p>
        </Button>
        <Button v-if="project.github" class="group/githubIco px-4 py-2 bg-secondary-button hover:bg-secondary-button-hover overflow-hidden gap-0 hover:gap-2"
                :class="project.liveDemo ? 'bg-secondary-button hover:bg-secondary-button-hover' : 'bg-primary-button hover:bg-primary-button-hover'">
          <Icon name="mynaui:github" class="w-5 h-5 shrink-0"/>
          <p class="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/githubIco:max-w-20 group-hover/githubIco:opacity-100 text-sm">Github</p>
        </Button>
      </div>
    </div>
  </article>
</template>

<style scoped>
</style>