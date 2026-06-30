<script setup lang="ts">
  const experienceIn = ["Java", "React", "Spring Boot", "Next.js"]
  const actionOptions = ["My projects", "Contact me"]
</script>

<template>
  <div class="w-full h-[100vh] flex flex-col items-center justify-center">
    <div class="h-fit max-w-full lg:m-10 p-5 lg:bg-white/5 lg:dark:bg-zinc-950/40 lg:backdrop-blur-md lg:border
                lg:border-white/10 lg:rounded-2xl flex flex-col lg:flex-row lg:items-center justify-center gap-5
                 lg:gap-20 xl:gap-60">
      <div class="flex flex-col justify-center gap-6">
        <h1 class="text-5xl flex flex-col gap-3 font-bold">
          <span>
            A Full Stack
          </span>
          <span class="text-green-400">
            Developer
          </span>
        </h1>
        <h3 class="text-zinc-300">
          A passionate developer who has loved building and creating since 2019.
        </h3>
        <div class="flex flex-col gap-8 w-full md:w-fit">
          <div class="flex flex-col justify-center gap-3 text-zinc-200">
            <div class="flex flex-row items-space gap-3 lg:gap-5 min-w-full flex-wrap">
              <span class="border px-3 lg:px-4 py-1 border-white/5 rounded-full text-zinc-200 text-sm bg-zinc-800/50"
                    v-for="item in experienceIn" :key="item">
                {{item}}
              </span>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-5 min-w-full">
            <a v-for="(item, index) in actionOptions" :key="item">
              <div class="border px-10 py-2 border-white/20 rounded-2xl flex flex-row justify-center items-center
                    gap-3 transition-color duration-200"
                   :class="index === 0 ? 'bg-green-700 hover:bg-green-800' : 'hover:bg-white/15'">
                <Icon v-if="index === 0" name="eos-icons:application" class="w-5 h-5 shrink-0"/>
                <Icon v-if="index === 1" name="ic:outline-email" class="w-5 h-5 shrink-0"/>
                {{item}}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-sm max-h-sm hidden lg:block">
        <img class="object-contain rounded-2xl" src="/avatar.jpg" alt="Profile image">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>