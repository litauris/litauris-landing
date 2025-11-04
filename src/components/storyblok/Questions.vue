<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

import type { SbBlokData } from '@storyblok/vue'

defineProps<{
  blok: {
    questions: Array<
      SbBlokData & {
        title: string
        content: string
      }
    >
  }
}>()
</script>

<template>
  <section>
    <div class="row wrapper">
      <h2>FAQ</h2>
      <Accordion class="accordion">
        <AccordionPanel
          class="accordion-panel"
          v-for="inblok in blok.questions"
          :key="inblok._uid"
          :value="inblok._uid"
        >
          <AccordionHeader>
            <span class="accordion-header-title">{{ inblok.title }}</span>
          </AccordionHeader>
          <AccordionContent>
            <p>{{ inblok.content }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <img src="@/assets/content/square-dark.svg" alt="Square" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color-dark);
}
.wrapper {
  color: var(--text-color-light);
  display: grid;

  padding-block: 100px;
}
h2 {
  font-size: 16px;
  font-weight: 400;
}
.accordion {
  --p-accordion-panel-border-color: #222528;
  --p-accordion-panel-border-width: 1px 0 0 0;

  --p-accordion-header-background: none;
  --p-accordion-header-color: var(--text-color-light);
  --p-accordion-header-hover-background: none;
  --p-accordion-header-hover-color: var(--text-color-light);
  --p-accordion-header-active-background: none;
  --p-accordion-header-active-color: var(--text-color-light);
  --p-accordion-header-active-hover-background: none;
  --p-accordion-header-active-hover-color: var(--text-color-light);
  --p-accordion-header-padding: 16px 0;

  --p-accordion-content-background: none;
  --p-accordion-content-padding: 0 0 16px;
  --p-accordion-content-color: var(--text-color-light);
}
.accordion-panel:first-of-type {
  --p-accordion-panel-border-width: 0;
}
.accordion-header-title {
  font-size: 24px;
  font-weight: 500;
}
img {
  max-width: 100%;
}

@media (width < 1024px) {
  .accordion {
    margin-block: 16px 48px;
  }
}

@media (width >= 1024px) {
  .wrapper {
    column-gap: 32px;
    grid-template-areas:
      'a b'
      'c b';
    grid-template-columns: 1fr 1fr;
    min-height: 640px;
  }
  h2 {
    grid-area: a;
    padding-top: 16px;
  }
  .accordion {
    grid-area: b;
  }
  .accordion-header-title {
    font-size: 28px;
  }
  img {
    align-self: flex-end;
    grid-area: c;
  }
}
</style>
