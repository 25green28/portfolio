<script setup lang="ts">
  import AppHeader from "~/components/AppHeader.vue";
  import AppFooter from "~/components/AppFooter.vue";

  useSeoMeta({
    author: 'Mateusz Łaski',
    applicationName: 'Matuesz Łaski Portfolio',

    title: 'Mateusz Łaski | Full Stack Developer',
    description: 'Portfolio showcasing my projects and experience.',

    ogTitle: 'Mateusz Łaski',
    ogDescription: 'Full Stack Developer specializing in Java and modern web applications.',
    ogImage: '/ogImage.jpg',
    ogImageAlt: 'Mateusz Łaski Portfolio',
    ogUrl: 'https://mateuszlaski.netlify.app',
    ogType: 'website',

    twitterCard: "summary_large_image",
    twitterTitle: "Matueesz Łaski",
    twitterDescription: 'Full Stack Developer',
    twitterImage: '/ogImage.jpg',
    twitterImageAlt: 'Mateusz Łaski Portfolio'
  })

   useHead({
     link: [
       {
         rel: 'canonical',
         href: 'https://mateuszlaski.netlify.app'
       },
       { rel: 'icon', href: '/favicon.ico' },
       { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
       { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
       { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
       { rel: 'manifest', href: '/site.webmanifest' }
     ],
     meta: [
       {
         name: 'theme-color',
         content: '#0a0a0b'
       }
     ]
   })
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

  body {
    font-family: 'Public Sans', system-ui;
  }

  input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
  }

</style>
