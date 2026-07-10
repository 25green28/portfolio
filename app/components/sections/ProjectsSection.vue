<script setup lang="ts">
  import ProjectCard from "~/components/ProjectCard.vue";
  import Section from "~/components/Section.vue";
</script>

<template>
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
</template>

<style scoped>

</style>