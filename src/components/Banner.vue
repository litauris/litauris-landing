<template>
  <section>
    <div class="wrapper">
      <img src="@/assets/content/banner.jpg" alt="banner" />
      <h2>5X Faster Time to Market</h2>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Banner',
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper img {
  position: relative;
  width: 100%;
}
h2 {
  display: none;
}
@media (width < 1024px) {
  section {
    height: 340px;
  }
  .wrapper {
    height: 100%;
  }
  .wrapper img {
    height: 100%;
    object-fit: cover;
  }
}

@media (width >= 1024px) {
  .wrapper h2 {
    color: var(--heading-color-light);
    display: block;
    font-size: 60px;
    font-weight: 500;
    position: absolute;
    text-align: center;
    width: 500px;
  }
}
</style>
