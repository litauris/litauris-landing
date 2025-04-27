<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'

defineProps<{
  blok: {
    features: SbBlokData[]
  }
}>()
</script>

<template>
  <section>
    <StoryblokComponent v-for="inblok in blok.features" :blok="inblok" :key="inblok._uid" />
  </section>
</template>
