<script setup>
import { onMounted } from 'vue';
import { useHead } from '@unhead/vue';

import ProcessCase from '../components/ProcessCase.vue';
import HeroBannerCase from '../components/HeroBannerCase.vue';
import BannerCase from '../components/BannerCase.vue';
import AboutCase from '../components/AboutCase.vue';
import ContentCase from '../components/ContentCase.vue';

useHead({
  title: 'Case Study',
});

onMounted(() => {
  window.fbq('track', 'PageView');
});
</script>

<template>
  <main class="case">
    <HeroBannerCase />
    <BannerCase />
    <AboutCase />
    <ContentCase />
    <ProcessCase />
  </main>
</template>
