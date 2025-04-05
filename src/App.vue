<script setup>
import { useHead } from '@unhead/vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Copyright from './components/Copyright.vue';

useHead({
  titleTemplate: '%s | Lowcode Agency',
});
</script>

<template>
  <Header class="header" />
  <RouterView class="main" />
  <Footer />
  <Copyright />
</template>

<style scoped>
.header {
  inset-inline: 0;
  position: fixed;
  top: 0;
  z-index: 1;
}
.main {
  margin-top: 81px;
}
</style>
