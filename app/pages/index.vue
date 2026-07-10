<script setup lang="ts">
  import Section from "~/components/Section.vue";
  import ProjectCard from "~/components/ProjectCard.vue";
  import TechnologyPill from "~/components/TechnologyPill.vue";
  import TechnologyItem from "~/components/TechnologyItem.vue";
  import TechnologyHeader from "~/components/TechnologyHeader.vue"
  import Button from "~/components/Button.vue";
  import FormInputField from "../components/FormInputField.vue";
  import SocialBadge from "../components/SocialBadge.vue"

  const experienceIn = ["Java", "React", "Spring Boot", "Next.js"]
  const actionOptions = ["My projects", "Contact me"]

  const hasScrolled = ref(false);

  const handleScroll = (event: any) => {
    hasScrolled.value = event.target.scrollTop > 5;
  }

  const backendTechnologies = [
    {
      name: "Java",
      icon: "devicon:java"
    },
    {
      name: "Spring Boot",
      icon: "devicon:spring"
    }
  ]

  const frontendTechnologies = [
    {
      name: "JavaScript",
      icon: "devicon:javascript"
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript"
    },
    {
      name: "React",
      icon: "devicon:react"
    },
    {
      name: "Vue",
      icon: "devicon:vuejs"
    },
    {
      name: "Next.js",
      icon: "devicon:nextjs"
    },
    {
      name: "Nuxt",
      icon: "devicon:nuxt"
    },
    {
      name: "Tailwind CSS",
      icon: "devicon:tailwindcss"
    }
  ]

  const toolsTechnologies = [
    {
      name: "Git",
      icon: "devicon:git"
    },
    {
      name: "GitHub",
      icon: "mdi:github"
    },
    {
      name: "Docker",
      icon: "devicon:docker"
    },
    {
      name: "JetBrains",
      icon: "devicon:jetbrains"
    }
  ]
</script>

<template>
  <Section>
    <section id="home" class="min-h-screen">
      <div class="w-full h-[100vh] flex flex-col items-center justify-center">
        <div class="h-fit max-w-full lg:m-10 p-5 lg:dark:bg-background-primary/40 lg:backdrop-blur-md
                    lg:myBorder lg:border-border-color-light flex flex-col lg:flex-row lg:items-center justify-center gap-5
                    lg:gap-20 xl:gap-64">
          <div class="flex flex-col justify-center gap-6">
            <h1 class="text-5xl flex flex-col gap-3 font-bold">
              <span>
                A Full Stack
              </span>
              <span class="text-primary">
                Developer
              </span>
            </h1>
            <h3 class="text-text-secondary">
              A passionate developer who has loved building and creating since 2019.
            </h3>
            <div class="flex flex-col gap-8 w-full md:w-fit">
              <div class="flex flex-col justify-center gap-3 text-zinc-200">
                <div class="flex flex-row items-space gap-3 lg:gap-5 min-w-full flex-wrap">
                  <TechnologyPill v-for="item in experienceIn" :key="item">
                    {{item}}
                  </TechnologyPill>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row gap-5 min-w-full">
                <a :href="index === 0 ? '#projects' : '#contact'" v-for="(item, index) in actionOptions" :key="item">
                  <Button :class="index === 0 ? 'bg-primary-button hover:bg-primary-button-hover' : 'bg-secondary-button hover:bg-secondary-button-hover'">
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
  <Section>
    <section id="projects" class="min-h-screen pt-32">
      <h2 class="font-bold text-5xl text-center">My Projects</h2>
      <p class="text-text-secondary text-center pt-12">Everything from hobbist projects to real world-like applications</p>
      <div class="flex flex-row flex-wrap justify-center gap-x-12 gap-y-16 pt-16 mx-12">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section>
  </Section>
  <Section>
    <section id="about" class="min-h-screen px-5 lg:px-32 pt-32">
      <h2 class="font-bold text-5xl text-center pb-10">About me</h2>
      <div class="flex flex-row items-stretch justify-center gap-5
                     lg:gap-20 xl:gap-20">
<!--        <img src="/aboutmeTemplateImage.jpg" class="hidden lg:block max-w-[30vw] h-96">-->
        <div class="text-md max-w-[700px]">
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
        <div class="hidden md:block relative w-64 shrink-0">
          <div class="absolute inset-0">
            <div class="relative myBorder border-border-color-light w-full h-full hover:scale-[1.02] transition duration-200">

              <div class="absolute inset-x-0 top-0 h-12 pointer-events-none bg-linear-to-b from-background-primary to-transparent rounded-2xl z-10"></div>

              <div @scroll="handleScroll" class="flex flex-col gap-2 p-2 w-full h-full overflow-y-scroll">
                <TechnologyHeader class="pt-2" header="Backend">
                  <TechnologyItem v-for="tech in backendTechnologies" :key="tech.name" :technology="tech.name" :icon="tech.icon"/>
                </TechnologyHeader>
                <TechnologyHeader class="pt-6" header="Frontend">
                  <TechnologyItem v-for="tech in frontendTechnologies" :key="tech.name" :technology="tech.name" :icon="tech.icon"/>
                </TechnologyHeader>
                <TechnologyHeader class="pt-6" header="Tools">
                  <TechnologyItem v-for="tech in toolsTechnologies" :key="tech.name" :technology="tech.name" :icon="tech.icon"/>
                </TechnologyHeader>
              </div>

              <div
                  :class="[hasScrolled ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-0']"
                  class="absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-linear-to-t from-background-primary flex flex-col justify-end items-center gap-1 pb-1 z-20 transition-all duration-200 rounded-2xl">
                <Icon name="mdi:arrow-down" class="text-white w-6 h-6 shrink-0 animate-bounce"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Section>
  <Section>
    <section id="contact" class="min-h-screen lg:px-32 pt-32">
      <h2 class="font-bold text-5xl text-center pb-10">Contact me</h2>
      <p class="text-text-secondary text-center pb-10">Do you have a question or want to get in touch?</p>
      <form class="flex flex-col gap-4 lg:gap-6 items-center justify-self-center self-center w-96 lg:w-lg myBorder border-border-color-light p-4">
        <FormInputField icon="material-symbols:person" placeholder="Name"/>
        <FormInputField icon="mdi:email" placeholder="Email"/>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-start pt-3 pl-3 pointer-events-none ">
            <Icon name="mdi:message" class="w-5 h-5 shrink-0 text-lg"/>
          </div>
          <textarea type="text" placeholder="Message" class="myBorder border-border-color-strong bg-white/5 pl-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 min-h-20" required/>
        </div>
<!--        <textarea placeholder="Message" class="myBorder border-border-color-light"></textarea>-->
        <button type="submit" class="myBorder border-border-color-strong bg-primary-button hover:bg-primary-button-hover transition-colors duration-200 py-1 px-20 w-fit">Send</button>
      </form>
      <div class="flex flex-row items-center justify-center gap-5 pt-16">
        <SocialBadge icon="mdi:github" href="https://github.com/25green28"/>
        <SocialBadge icon="mdi:instagram" href="https://instagram.com/25green28"/>
        <SocialBadge icon="simple-icons:hyperskill" href="https://hyperskill.org/my-learning/622461615"/>
      </div>
    </section>
  </Section>
</template>

<style scoped>
  @reference "tailwindcss";

  .aboutme-br {
  }

  .aboutme-b {
    @apply text-green-200
  }
</style>