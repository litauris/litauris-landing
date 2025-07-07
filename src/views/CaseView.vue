<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

import { useStoryblok } from '@storyblok/vue'

const story = await useStoryblok('case', { version: 'draft' })

useHead({
  title: 'Case Study',
})

onMounted(() => {
  window.fbq('track', 'PageView')
})
</script>

<template>
  <main class="case">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
