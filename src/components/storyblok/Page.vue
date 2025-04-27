<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'

defineProps<{
  blok: SbBlokData
}>()
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent v-for="inblok in blok.body" :blok="inblok" :key="inblok._uid" />
  </div>
</template>
