<script setup lang="ts">
  import SocialBadge from "~/components/SocialBadge.vue"

  const mobileMenuOpen = ref(false)
  const activeSection = ref('home')

  const links = [
    {
      name: 'Home',
      href: 'home'
    },
    {
      name: 'Projects',
      href: 'projects'
    },
    {
      name: 'About',
      href: 'about'
    },
    {
      name: 'Contact',
      href: 'contact'
    }
  ]

  onMounted(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeSection.value = entry.target.id
              console.log(activeSection.value);
            }
          })
        }, {
          threshold: 0.3
        }
    )

    sections.forEach((section) => observer.observe(section))
  })
</script>

<template>
  <div v-if="mobileMenuOpen" class="fixed inset-0 z-10 min-w-screen min-h-screen transparent" @click="mobileMenuOpen = false"/>
  <nav class="fixed top-0 left-0 w-full z-20">
    <div class="w-[90%] mx-auto my-5 py-3 px-6 flex flex-col myBorder border-border-color-light bg-background-primary/50 dark:bg-background-primary/50 backdrop-blur-md top-0 left-0">
      <div class="flex flex-row justify-between items-center">
        <a href="#">
          <h2 class="text-[1.3rem] md:text-[1.45rem] tracking-wide ">
            Mateusz Łaski
          </h2>
        </a>
        <div class="hidden md:flex flex-row gap-10 items-center">
          <ul class="flex flex-row gap-6">
            <li v-for="link in links" :key="link.href">
              <a :href="'#' + link.href" class="linkStyle" :class="activeSection === link.href ? 'linkActive' : 'linkDeactivate'">{{link.name}}</a>
            </li>
          </ul>
          <SocialBadge href="https://github.com/25green28" icon="mdi:github" class="p-1"/>
        </div>
        <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <Icon :name="mobileMenuOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'" :class="['h-8 w-8 transition-all duration-300', mobileMenuOpen ? 'rotate-90' : 'rotate-0']"/>
        </button>
      </div>
      <div class="overflow-hidden transition-all duration-300" :class="mobileMenuOpen ? 'max-h-64 opacity-100 translate-y-0 mt-4 pt-4' : 'max-h-0 opacity-0 -translate-y-2 mt-0 pt-0'">
<!--        <div class="my-4 w-full h-[1px] bg-white/10 dark:bg-zinc-950/40 mb-5 rounded-full"></div>-->
        <ul class="flex flex-col gap-5 py-2">
          <li v-for="link in links" :key="link.href">
            <a @click="mobileMenuOpen = false" :href="'#' + link.href" class="block rounded-lg px-2 py-1 hover:bg-white/5 transition cursor-pointer" :class="activeSection === link.href ? 'linkActive' : 'linkDeactivate'">{{link.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="absolute inset-x-0 top-0 left-0 h-12 pointer-events-none bg-linear-to-b from-background-primary to-transparent"></div>
  </nav>
</template>

<style scoped>
  @reference "tailwindcss";

  .linkActive {
    @apply relative font-bold text-primary
  }

  .linkDeactivate {
    color: var(--color-text-secondary);
    transition: color 0.2s ease;
  }

  .linkDeactivate:hover {
    color: var(--color-text-primary);
  }

  .linkStyle   {
    @apply relative cursor-pointer
      after:content-['']
      after:absolute
      after:w-0
      after:h-[0.125em]
      after:bottom-[-0.05em]
      after:left-0
      after:bg-primary
      hover:after:w-full
      after:transition-all
      after:duration-200
      after:rounded-full
  }
</style>