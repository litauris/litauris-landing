<script setup lang="ts">
import { ref } from 'vue'
import Carousel from 'primevue/carousel'

import mobileAppImage from '@/assets/content/slide-1.jpg'
import adminPanelImage from '@/assets/content/slide-2.jpg'
import mobileApp2Image from '@/assets/content/slide-3.jpg'
import webAppImage from '@/assets/content/slide-4.jpg'

// TODO: Convert this component to storyblok component
const cards = ref([
  {
    title: 'Mobile App for Restaurants',
    subtitle:
      'A loyalty and rewards system for frequent customers, offering points, discounts, and personalized promotions based on their dining preferences.',
    src: mobileAppImage,
  },
  {
    title: 'Admin Panel',
    subtitle:
      'Built-in analytics tools for tracking key metrics like sales, customer behavior, and inventory turnover to inform data-driven decisions.',
    src: adminPanelImage,
  },
  {
    title: 'Mobile App with Discount Offers',
    subtitle:
      'A seamless mobile app that allows customers to browse menus, place orders, and make payments directly from their phones.',
    src: mobileApp2Image,
  },
  {
    title: 'Web Application',
    subtitle:
      'Web version of Discount Offers application, which allows user to interact with system from a desktop browsers.',
    src: webAppImage,
  },
])

const responsiveOptions = [
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
]
</script>

<template>
  <section>
    <div class="row wrapper">
      <h2>Portfolio</h2>
      <h3>
        Our portfolio features high-impact, custom low-code solutions for the restaurant platform,
        delivering fast, cost-effective results.
      </h3>
      <Carousel
        :value="cards"
        :numVisible="2"
        :numScroll="2"
        :responsiveOptions="responsiveOptions"
        circular
      >
        <template #item="{ data }">
          <div class="card">
            <img :src="data.src" :alt="data.title" />
            <div class="card-text">
              <p>{{ data.title }}</p>
              <span>{{ data.subtitle }}</span>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 16px;
  font-weight: 400;
  padding-top: 50px;
}
h3 {
  font-size: 24px;
  font-weight: 500;
  max-width: 700px;
  padding-block: 70px;
}

.card {
  margin: 0.5rem;
}
.card img {
  aspect-ratio: 10 / 8;
  object-fit: cover;
  width: 100%;
}
.card-text {
  display: flex;
  flex-direction: column;
  padding-block: 16px;
  gap: 8px;
}
.card-text p {
  color: #0a0a0a;
  font-weight: 500;
  font-size: 22px;
}
.card-text span {
  color: #b1b1b6;
  font-size: 18px;
  font-weight: 400;
}

@media (width >= 1024px) {
  .card-text {
    padding-block: 30px;
  }
  .card-text p {
    font-size: 30px;
  }
  .card-text span {
    font-size: 20px;
  }
}
</style>
