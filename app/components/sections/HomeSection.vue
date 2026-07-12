<script setup lang="ts">
  import TechnologyPill from "~/components/TechnologyPill.vue";
  import Button from "~/components/Button.vue";
  import Section from "~/components/Section.vue";
  import { experience } from "~/data/experience";
  import { heroPhrases } from "~/data/heroPhrases";

  const parentRef = ref<HTMLElement | null>(null)
  const h3Width = ref<string>('auto')

  let resizeObserver: ResizeObserver | null = null

  const actionOptions = ["My projects", "Contact me"]

  const displayedText = ref("")
  const charDelay = 100
  const pauseDelay = 2000

  async function typePhrase(text: string) {
    displayedText.value = ""

    for (const char of text) {
      displayedText.value += char
      await new Promise(resolve => setTimeout(resolve, charDelay))
    }
  }

  async function deletePhrase() {
    while (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.slice(0, -1)
      await new Promise(resolve => setTimeout(resolve, charDelay))
    }
  }

  async function startTyping() {
    let index = 0;

    while (true) {
      await typePhrase(heroPhrases[index]!)

      await new Promise(resolve => setTimeout(resolve, pauseDelay))

      await deletePhrase()

      await new Promise(resolve => setTimeout(resolve, charDelay * 3))

      index = (index + 1) % heroPhrases.length
    }
  }

  function updateWidth() {
    if (parentRef.value) {
      const width = parentRef.value.clientWidth
      h3Width.value = `${width}px`
    }
  }

  onMounted(() => {
    startTyping()

    if (parentRef.value) {
      resizeObserver = new ResizeObserver(() => {
        updateWidth()
      })
      resizeObserver.observe(parentRef.value)
    }
  })

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

</script>

<template>
  <Section>
    <section id="home" class="min-h-screen">
      <div class="w-full min-h-screen py-20 flex flex-col items-center justify-center">
        <div class="h-fit max-w-full lg:m-10 p-5 lg:dark:bg-background-primary/40 lg:backdrop-blur-md
                    lg:myBorder lg:border-border-color-light flex flex-col lg:flex-row lg:items-center justify-center gap-5
                    lg:gap-20 xl:gap-64">
          <div ref="parentRef" class="flex flex-col justify-center gap-6">
            <h1 class="text-5xl flex flex-col gap-3 font-bold">
              <span>
                A Full Stack
              </span>
              <span class="text-primary">
                Developer
              </span>
            </h1>
            <h3 :style="{ 'width': h3Width }" class="text-text-secondary break-words box-border">
              {{ displayedText }}
              <span class="inline-block w-1 h-[1em] bg-primary animate-pulse align-middle"></span>
            </h3>
            <div class="flex flex-col gap-8 w-full md:w-fit">
              <div class="flex flex-col justify-center gap-3 text-zinc-200">
                <div class="flex flex-row items-space gap-3 lg:gap-5 min-w-full flex-wrap">
                  <TechnologyPill v-for="item in experience" :key="item">
                    {{item}}
                  </TechnologyPill>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row gap-5 min-w-full">
                <a :href="index === 0 ? '#projects' : '#contact'" v-for="(item, index) in actionOptions" :key="item">
                  <Button :class="index === 0 ? 'bg-primary-button hover:bg-primary-button-hover text-primary-button-text'
                          : 'bg-secondary-button hover:bg-secondary-button-hover myBorder border-border-color-light'">
                    <Icon v-if="index === 0" name="eos-icons:application" class="w-5 h-5 shrink-0"/>
                    <Icon v-if="index === 1" name="ic:outline-email" class="w-5 h-5 shrink-0"/>
                    {{item}}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div class="max-w-sm max-h-sm hidden lg:block">
            <img class="object-contain rounded-2xl" src="/avatar.jpg" alt="Profile image">
          </div>
        </div>
      </div>
    </section>
  </Section>
</template>

<style scoped>
</style>