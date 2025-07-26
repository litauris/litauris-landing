<script setup lang="ts">
import type { SBImage } from '@/api/SBImage.ts'

defineProps<{
  blok: {
    title?: string
    image: SBImage
  }
}>()
</script>

<template>
  <section>
    <div class="wrapper">
      <img :src="blok.image.filename" :alt="blok.image.alt" />
      <h2 class="desktop-only" v-if="blok.title">{{ blok.title }}</h2>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper img {
  width: 100%;
}
@media (width < 1024px) {
  section {
    height: 50vh;
  }
  .wrapper {
    height: 100%;
  }
  .wrapper img {
    height: 100%;
    object-fit: cover;
  }
}

@media (width >= 1024px) {
  .wrapper h2 {
    color: var(--heading-color-light);
    font-size: 60px;
    font-weight: 500;
    position: absolute;
    text-align: center;
    max-width: 500px;
  }
}
</style>
