<template>
  <Header />
  <RouterView />
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
