<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useStoryblok } from '@storyblok/vue'
import Portfolio from '../components/Portfolio.vue'

const story = await useStoryblok('home', { version: 'draft' })

useHead({
  title: 'Litauris',
})

onMounted(() => {
  window.fbq?.('track', 'PageView')
})
</script>

<template>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <Portfolio />
  </main>
</template>
