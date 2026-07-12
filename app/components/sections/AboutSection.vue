<script setup lang="ts">
  import TechnologyItem from "~/components/TechnologyItem.vue";
  import Section from "~/components/Section.vue";
  import TechnologyHeader from "~/components/TechnologyHeader.vue";
  import { technologies } from "~/data/technologies";

  const hasScrolled = ref(false);

  const handleScroll = (event: any) => {
    hasScrolled.value = event.target.scrollTop > 5;
  }
</script>

<template>
  <Section>
    <section id="about" class="px-5 lg:px-32 pt-32">
      <h2 class="font-bold text-5xl text-center pb-10">About me</h2>
      <div class="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-15
                     lg:gap-20 xl:gap-20">
        <!--        <img src="/aboutmeTemplateImage.jpg" class="hidden lg:block max-w-[30vw] h-96">-->
        <div class="text-md max-w-175">
          <p>I'm a <b class="aboutme-b">passionate software developer</b> who is fascinated by computer science and have enjoyed exploring different programming languages and technologies.</p>
          <br class="aboutme-br">
          <p>The first language I studied in depth was <b class="aboutme-b">Java</b>, and it quickly became my favorite for backend development. Today, I'm expanding my skills with <b class="aboutme-b">Spring Boot</b> to build scalable and modern web applications.</p>
          <br class="aboutme-br">
          <p>Alongside backend development, I enjoy creating intuitive and responsive user interfaces. I've worked with everything from plain HTML and CSS to modern frameworks like <b class="aboutme-b">React and Vue</b>, and I enjoy combining clean design with functional, maintainable code.</p>
          <br class="aboutme-br">
          <p>I'm <b class="aboutme-b">currently studying electronics</b>, where I continue to develop both my software and hardware skills. One of the projects I'd like to build in the coming months is an IoT smart gate.</p>
          <br class="aboutme-br">
          <p>I <b class="aboutme-b">enjoy building all kinds of software</b>—from full-stack web applications to solving algorithmic and coding challenges. While I appreciate low-level programming, my primary interests lie in backend systems, web technologies, and software architecture.</p>
          <br class="aboutme-br">
          <p>I'm always eager to learn new technologies, improve my skills, and take on projects that challenge me to grow as a developer.</p>
        </div>
        <div class="block md:relative w-64 shrink-0">
          <div class="block md:absolute inset-0">
            <div class="relative myBorder border-border-color-light w-full h-full hover:scale-[1.02] transition duration-200">

              <div class="hidden md:block md:absolute inset-x-0 top-0 h-12 pointer-events-none bg-linear-to-b from-background-primary to-transparent rounded-2xl z-10"></div>

              <div @scroll="handleScroll" class="flex flex-col gap-2 p-2 w-full h-full overflow-y-scroll">
                <TechnologyHeader v-for="techCategory in technologies" :key="techCategory.name" class="pt-2" header="Backend">
                  <TechnologyItem v-for="tech in techCategory.technologies" :key="tech.name" :technology="tech.name" :icon="tech.icon"/>
                </TechnologyHeader>
              </div>

              <div
                  :class="[hasScrolled ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-0']"
                  class="hidden md:absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-linear-to-t from-background-primary md:flex flex-col justify-end items-center gap-1 pb-1 z-20 transition-all duration-200 rounded-2xl">
                <Icon name="mdi:arrow-down" class="text-text-primary w-6 h-6 shrink-0 animate-bounce"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Section>
</template>

<style scoped>
  @reference "tailwindcss";

  .aboutme-b {
    @apply text-lime-700
  }

  .dark .aboutme-b {
    @apply text-green-200
  }
</style>