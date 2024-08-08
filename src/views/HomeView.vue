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

<script>
import HeroBanner from '../components/HeroBanner.vue';
import Banner from '../components/Banner.vue';
import Advantages from '../components/Advantages.vue';
import Services from '../components/Services.vue';
import Portfolio from '../components/Portfolio.vue';
import Questions from '../components/Questions.vue';

export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    Banner,
    Advantages,
    Services,
    Portfolio,
    Questions,
  },
  head: {
    title: 'Litauris | Lowcode Agency',
  },
};
</script>
