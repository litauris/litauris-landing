<template>
  <Header class="header" />
  <RouterView class="main" />
  <Footer />
  <Copyright />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Copyright from './components/Copyright.vue';

export default {
  components: {
    Header,
    Footer,
    Copyright,
  },
};
</script>

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
