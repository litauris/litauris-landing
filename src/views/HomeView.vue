<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useStoryblok } from '@storyblok/vue'

const story = await useStoryblok('home', { version: 'draft' })

import Portfolio from '../components/Portfolio.vue'

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
