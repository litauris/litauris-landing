<template>
  <main class="case">
    <HeroBannerCase />
    <BannerCase />
    <AboutCase />
    <h1>This is a Case page</h1>
    <ProcessCase />
  </main>
</template>
<script>
import ProcessCase from '../components/ProcessCase.vue';
import HeroBannerCase from '../components/HeroBannerCase.vue';
import BannerCase from '../components/BannerCase.vue';
import AboutCase from '../components/AboutCase.vue';

export default {
  name: 'CaseView',
  components: {
    ProcessCase,
    HeroBannerCase,
    BannerCase,
    AboutCase,
  },
};
</script>
