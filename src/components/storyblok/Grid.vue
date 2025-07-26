<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'

defineProps<{
  blok: SbBlokData & {
    columns: SbBlokData[]
  }
}>()
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent v-for="inblok in blok.columns" :blok="inblok" :key="inblok._uid" />
  </div>
</template>
