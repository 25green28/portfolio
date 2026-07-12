// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mateusz Łaski | Full Stack Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'color-scheme',
          content: 'light dark'
        },
        {
          name: 'description',
          content: 'Full Stack Developer specializing in Java, Spring Boot, Vue, React and modern web applications'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/color-mode', '@nuxt/fonts', '@nuxtjs/sitemap'],
  css: [
      "~/assets/css/main.css"
  ],
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'clsx',
        'tailwind-merge',
      ]
    }
  },
  runtimeConfig: {
    public: {
      web3formsKey: process.env.NUXT_PUBLIC_WEB3FORMS_KEY,
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  }
})