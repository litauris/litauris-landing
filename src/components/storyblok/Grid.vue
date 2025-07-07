<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent v-for="inblok in blok.columns" :blok="inblok" :key="inblok._uid" />
  </div>
</template>
