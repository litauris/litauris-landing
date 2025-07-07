<script setup lang="ts">
import type { SBImage } from '@/api/SBImage.ts'

defineProps<{
  blok: {
    title: string
    content: string
    image: SBImage
  }
}>()
</script>

<template>
  <div class="row wrapper">
    <div class="text-content">
      <h2>{{ blok.title }}</h2>
      <p>{{ blok.content }}</p>
    </div>
    <img :src="blok.image.filename" :alt="blok.title" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 70px;
}
.wrapper:last-of-type {
  margin-bottom: 70px;
}
.text-content {
  display: flex;
}
.text-content h2 {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: -1px;
}
.text-content p {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -1px;
}

@media (width < 1024px) {
  .text-content {
    flex-direction: column;
    gap: 16px;
  }
  img {
    margin-inline: -20px;
  }
}
@media (width >= 1024px) {
  .wrapper {
    gap: 100px;
    margin-top: 100px;
  }
  .wrapper:last-of-type {
    margin-bottom: 100px;
  }
  .text-content {
    justify-content: space-between;
  }
  .text-content h2 {
    font-size: 32px;
  }
  .text-content p {
    font-size: 18px;
    max-width: 680px;
  }
}
</style>
