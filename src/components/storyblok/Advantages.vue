<script setup lang="ts">
import Carousel from 'primevue/carousel'

defineProps<{
  blok: {
    description: string
    advantages: Array<{
      title: string
      content: string
    }>
  }
}>()
</script>

<template>
  <section>
    <a class="anchor" id="advantages" />
    <div class="row wrapper">
      <h2>Advantages</h2>
      <div class="advantages">
        <p>{{ blok.description }}</p>
      </div>
      <div class="slider">
        <Carousel
          :value="blok.advantages"
          :autoplayInterval="3000"
          :showNavigators="false"
          :circular="true"
        >
          <template #item="slotProps">
            <p>
              <strong>{{ slotProps.data.title }}</strong>
              {{ slotProps.data.content }}
            </p>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color-dark);
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;

  padding-block: 100px;
  color: var(--text-color-light);
}
.wrapper h2 {
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 400;
}
.advantages {
  display: flex;
  flex-direction: column;
}
.advantages p {
  font-family: var(--font-secondary);
  font-size: 18px;
  line-height: 25px;
}

/*  Slider  */
.slider {
  grid-column: 2;
  max-width: 680px;
}
.slider p {
  color: var(--text-color-soft);
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -1px;
}
.slider p strong {
  color: #e0e5e8;
  font-weight: inherit;
}
.slider:deep(.p-carousel-content-container) {
  flex-direction: column-reverse;
}
.slider:deep(.p-carousel-indicator-list) {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 24px 0;
}
.slider:deep(.p-carousel-indicator-button) {
  background: #28292e;
  border-radius: 0;
  height: 1px;
  width: 100%;
}
.slider:deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  background: #e0e5e8;
}
@media (width < 1024px) {
  .slider {
    margin-top: 60px;
  }
}
@media (width >= 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 160px 20px;
  }
  .wrapper h2 {
    font-size: 20px;
  }
  .advantages p {
    font-size: 22px;
  }
  .slider p {
    font-size: 60px;
  }
}
</style>
