<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'

const props = defineProps<{
  blok: {
    details: SbBlokData[]
  }
}>()

const detailsWithLetters = props.blok.details.map((detail, index) => ({
  ...detail,
  letter: `'${String.fromCharCode(65 + index)}'`,
}))
</script>

<template>
  <section>
    <div class="row wrapper">
      <h2>Process with Us</h2>
      <ol>
        <li
          class="line"
          v-for="inblok in detailsWithLetters"
          :key="inblok._uid"
          :style="{ '--detail-letter': inblok.letter }"
        >
          <StoryblokComponent :blok="inblok" />
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color-dark);
  color: var(--text-color-light);
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-block: 100px;
}
h2 {
  font-size: 16px;
  font-weight: 400;
}
.line {
  border-bottom: 1px solid #222528cc;
  column-gap: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  padding-block: 20px;
}
.line:first-child {
  padding-top: 0;
}
.line:last-child {
  border: none;
}
.line::before {
  align-items: center;
  background-color: #28292e;
  border-radius: 60px;
  content: var(--detail-letter, '');
  display: flex;
  justify-content: center;
  margin-top: 4px;
  width: 30px;
  height: 30px;
}
.line:deep() h3 {
  font-size: 24px;
  letter-spacing: -1px;
  margin-bottom: 16px;
}
.line:deep() p {
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 400;
  grid-column: 2;
  letter-spacing: -1px;
  line-height: 18px;
}
@media (width < 1024px) {
  .wrapper {
    gap: 32px;
    grid-template-columns: 1fr;
  }
}
@media (width >= 1024px) {
  h2 {
    font-size: 22px;
  }
  .line {
    column-gap: 62px;
    padding-block: 32px;
  }
  .line:deep() h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .line:deep() p {
    font-size: 22px;
    line-height: 25px;
  }
}
</style>
