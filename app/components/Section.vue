<script setup lang="ts">
  const el = ref<HTMLElement | null>(null);
  const visible = ref(false);

  onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry !== undefined && entry.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    })

    if (el.value) observer.observe(el.value)
  })
</script>

<template>
  <div ref="el" class="transition-all duration-700 ease-out" :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'">
    <slot />
  </div>
</template>