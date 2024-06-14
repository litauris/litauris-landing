<template>
  <section>
    <div class="wrapper">
      <img src="@/assets/content/banner.svg" alt="banner" />
      <h2>5X Faster Time to Market</h2>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Banner'
}
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
  color: var(--heading-color-light);
  font-size: 60px;
  font-weight: 500;
  position: absolute;
  width: 500px;
  text-align: center;
}
</style>
