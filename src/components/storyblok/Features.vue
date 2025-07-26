<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'
import type { SBImage } from '@/api/SBImage.ts'
import { getParagraphs } from '@/helpers/sb-textarea.ts'

defineProps<{
  blok: {
    features: Array<
      SbBlokData & {
        title: string
        content: string
        image: SBImage
      }
    >
  }
}>()
</script>

<template>
  <section>
    <div class="row wrapper" v-for="inblok in blok.features" :key="inblok._uid">
      <div class="text-content">
        <h2>{{ inblok.title }}</h2>
        <p v-for="(paragraph, index) in getParagraphs(inblok.content)" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <img :src="inblok.image.filename" :alt="inblok.title" />
    </div>
  </section>
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
