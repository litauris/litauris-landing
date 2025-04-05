<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  blok: {
    title: string
    content: string
  }
}>()

const contentParagraphs = computed(() => {
  return props.blok.content.split('\n')
})
</script>

<template>
  <div class="info">
    <h3>{{ blok.title }}</h3>
    <p v-for="(paragraph, index) in contentParagraphs" :key="index">{{ paragraph }}</p>
  </div>
</template>
