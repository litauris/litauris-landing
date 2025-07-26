<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useStoryblok } from '@storyblok/vue'

const story = await useStoryblok('contact-us', { version: 'draft' })

useHead({
  title: 'Contact Us',
})
</script>

<template>
  <main class="contact">
    <h1 class="contact__title">Contact Us</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<style scoped>
.contact {
  background-color: var(--background-color-soft);
}
.contact__title {
  padding-block: 1rem;
  text-align: center;
}
</style>
