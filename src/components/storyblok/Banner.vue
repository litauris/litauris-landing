<script setup lang="ts">
import type { SBImage } from '@/api/SBImage.ts'

defineProps<{
  blok: {
    image: SBImage
  }
}>()
</script>

<template>
  <section>
    <div class="wrapper">
      <img :src="blok.image.filename" :alt="blok.image.alt" />
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
    object-fit: cover;
    height: 100%;
  }
}
</style>
