<template>
  <main class="case">
    <HeroBannerCase />
    <BannerCase />
    <AboutCase />
    <ContentCase />
    <ProcessCase />
  </main>
</template>
<script>
import ProcessCase from '../components/ProcessCase.vue';
import HeroBannerCase from '../components/HeroBannerCase.vue';
import BannerCase from '../components/BannerCase.vue';
import AboutCase from '../components/AboutCase.vue';
import ContentCase from '../components/ContentCase.vue';

export default {
  name: 'CaseView',
  components: {
    HeroBannerCase,
    BannerCase,
    AboutCase,
    ContentCase,
    ProcessCase,
  },
  head: {
    title: 'Case Study | Lowcode Agency',
  },
  mounted() {
    window.fbq('track', 'PageView');
  },
};
</script>
