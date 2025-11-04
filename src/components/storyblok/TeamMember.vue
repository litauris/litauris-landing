<script setup lang="ts">
import type { SBImage } from '@/api/SBImage.ts'
import type { SbBlokData } from '@storyblok/vue'
import { getParagraphs } from '@/helpers/sb-textarea.ts'

defineProps<{
  blok: {
    avatar: SBImage
    details: Array<
      SbBlokData & {
        title: string
        content: string
      }
    >
  }
}>()
</script>

<template>
  <article class="team-member row wrapper">
    <img class="team-member__avatar" :src="blok.avatar.filename" :alt="blok.avatar.alt" />
    <div class="team-member__details">
      <div class="detail" v-for="inblok in blok.details" :key="inblok._uid">
        <h3>{{ inblok.title }}</h3>
        <p v-for="(paragraph, index) in getParagraphs(inblok.content)" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.team-member {
  align-items: center;
  display: flex;
  gap: 4rem;
  justify-content: center;
  padding-block: 4rem;
}
.team-member__avatar {
  border-radius: 50%;
  width: 200px;
}
.team-member__details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (width < 1024px) {
  .team-member {
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
  }
}
</style>
