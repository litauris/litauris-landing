<template>
  <main class="case">
    <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <HeroBannerCase />
    <BannerCase />
    <AboutCase />
    <ProcessCase />
  </main>
</template>
<script>
import ProcessCase from '../components/ProcessCase.vue';
import HeroBannerCase from '../components/HeroBannerCase.vue';
import BannerCase from '../components/BannerCase.vue';
import AboutCase from '../components/AboutCase.vue';
import { useMeta } from 'vue-meta';

export default {
  name: 'CaseView',
  components: {
    ProcessCase,
    HeroBannerCase,
    BannerCase,
    AboutCase,
  },
  setup() {
    useMeta({
      title: 'Case Study | Lowcode Agency',
    });
  },
};
</script>
