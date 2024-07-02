<template>
  <section>
    <div class="wrapper">
      <img src="@/assets/content/banner-case.jpg" alt="banner" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'BannerCase',
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper img {
  width: 100%;
}
@media (width < 1024px) {
  section {
    height: 50vh;
  }
  .wrapper {
    height: 100%;
  }
  .wrapper img {
    object-fit: cover;
    height: 100%;
  }
}
</style>
