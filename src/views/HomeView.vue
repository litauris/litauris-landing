<script setup>
import { onMounted } from 'vue';
import { useHead } from '@unhead/vue';

import HeroBanner from '../components/HeroBanner.vue';
import Banner from '../components/Banner.vue';
import Advantages from '../components/Advantages.vue';
import Services from '../components/Services.vue';
import Portfolio from '../components/Portfolio.vue';
import Questions from '../components/Questions.vue';

useHead({
  title: 'Litauris',
});

onMounted(() => {
  window.fbq('track', 'PageView');
});
</script>

<template>
  <main>
    <HeroBanner />
    <Banner />
    <Advantages />
    <Services />
    <Portfolio />
    <Questions />
  </main>
</template>
