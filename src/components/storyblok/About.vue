<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'

defineProps<{
  blok: {
    type: string
    niche: string
    development: string
    details: SbBlokData[]
  }
}>()
</script>

<template>
  <section>
    <div class="row wrapper">
      <div class="keys-wrapper">
        <p>{{ blok.type }}</p>
        <div class="keys">
          <p>Niche: {{ blok.niche }}</p>
          <p>Development: {{ blok.development }}</p>
        </div>
      </div>
      <div class="about">
        <h2>About the&nbsp;project</h2>
        <div>
          <StoryblokComponent v-for="inblok in blok.details" :blok="inblok" :key="inblok._uid" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color-dark);
  font-family: var(--font-secondary);
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-block: 100px;
  color: var(--text-color-light);
}
.keys-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.keys {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}
.about {
  display: flex;
  flex-direction: column;
}
.about h2 {
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 25px;
}
.about:deep() h3 {
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
.about:deep() p {
  font-size: 20px;
  line-height: 26px;
  padding-block: 20px;
  letter-spacing: -1px;
}

@media (width < 1024px) {
  .keys-wrapper p {
    border-bottom: 1px solid #222528;
    padding-block: 16px;
    line-height: 22px;
    letter-spacing: -1px;
  }
  h2 {
    margin-bottom: 28px;
  }
}

@media (width >= 1024px) {
  .keys-wrapper {
    align-items: center;
    border-bottom: 1px solid #222528;
    display: grid;
    padding-bottom: 60px;
    grid-template-columns: 1fr 1fr;
  }
  .keys {
    flex-direction: row;
  }
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .about h2 {
    max-width: 370px;
    font-size: 50px;
    line-height: 60px;
  }
  .about:deep() h3 {
    font-size: 22px;
    line-height: 25px;
  }
  .about:deep() p {
    font-size: 28px;
    line-height: 36px;
  }
}
</style>
