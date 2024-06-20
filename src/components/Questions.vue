<template>
  <section>
    <div class="row wrapper">
      <div>
        <h2>FAQ</h2>
        <img src="@/assets/content/square-dark.svg" alt="square" />
      </div>
      <div class="accordion"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Questions',
};
</script>
<style scoped>
section {
  background-color: var(--background-color-dark);
}
.wrapper {
  color: var(--text-color-light);
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding-block: 100px;
}
h2 {
  font-size: 16px;
  font-weight: 400;
}
</style>
