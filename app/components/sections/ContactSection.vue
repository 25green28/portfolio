<script setup lang="ts">
  import SocialBadge from "~/components/SocialBadge.vue";
  import FormInputField from "~/components/FormInputField.vue";

  const status = ref('idle')
  const formElement = ref<HTMLFormElement | null>(null)

  const handleSubmit = async () => {
    if (!formElement.value) return

    status.value = 'loading'

    const formData = new FormData(formElement.value)

    const name = formData.get('name')

    formData.append(
        'access_key',
        useRuntimeConfig().public.web3formsKey
    )

    formData.append(
        'subject',
        `${name} sent a message from portfolio website`
    )

    formData.append('from_name', 'Portfolio Contact Form')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error("Web3Forms request failed")
      }

      const result = await response.json();

      if (result.success) {
        status.value = 'success'
        formElement.value?.reset()
      } else {
        status.value = 'error'
      }

      document.body.classList.add('overflow-hidden')
    } catch (err) {
      document.body.classList.add('overflow-hidden')
      status.value = 'error'
    }
  }

  const closeModal = () => {
    status.value = 'idle'
    document.body.classList.remove('overflow-hidden')
  }

  onBeforeUnmount(() => {
    document.body.classList.remove('overflow-hidden')
  })
</script>

<template>
  <div @click="closeModal()" role="dialog" aria-modal="true" v-if="status === 'success' || status === 'error'" class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center  z-50">
    <div @click.stop class="p-10 myBorder border-border-color-light bg-background-primary/80 flex flex-col items-center gap-5">
      <p v-if="status === 'success'">Message sent successfully</p>
      <p v-if="status === 'error'">Something went wrong. Please try again later.</p>
      <button @click="closeModal()" class="myBorder border-border-color-strong bg-primary-button hover:bg-primary-button-hover transition-colors duration-200 py-1 px-20 w-fit">Close</button>
    </div>
  </div>
  <Section>
    <section id="contact" class="px-5 lg:px-32 pt-32">
      <h2 class="font-bold text-5xl text-center pb-10">Contact me</h2>
      <p class="text-text-secondary text-center pb-10">Do you have a question or want to get in touch?</p>
      <div class="flex items-center justify-center">
        <form ref="formElement" @submit.prevent="handleSubmit" class="flex flex-col gap-4 lg:gap-6 items-center justify-self-center self-center w-96 lg:w-lg myBorder border-border-color-light p-4">
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
          <FormInputField id="name" icon="material-symbols:person" placeholder="Name"/>
          <FormInputField id="email" icon="mdi:email" placeholder="Email"/>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-start pt-3 pl-3 pointer-events-none ">
              <Icon name="mdi:message" class="w-5 h-5 shrink-0 text-lg"/>
            </div>
            <textarea name="message" id="message" type="text" placeholder="Message" class="myBorder border-border-color-strong bg-white/5 pl-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 min-h-20 hover:bg-white/7" required/>
          </div>

          <button type="submit" :disabled="status === 'loading'" class="rounded-2xl bg-primary-button hover:bg-primary-button-hover text-primary-button-text transition-colors duration-200 py-1.5 px-20 w-fit cursor-pointer">
            {{ status === 'loading' ? 'Sending...' : 'Send Message'}}
          </button>
        </form>
      </div>
      <div class="flex flex-row items-center justify-center gap-5 pt-16">
        <SocialBadge icon="mdi:github" href="https://github.com/25green28"/>
        <SocialBadge icon="mdi:instagram" href="https://instagram.com/25green28"/>
        <SocialBadge icon="simple-icons:hyperskill" href="https://hyperskill.org/my-learning/622461615"/>
      </div>
    </section>
  </Section>
</template>

<style scoped>

</style>