<template>
  <section>
    <div class="wrapper">
      <div>
        <p>FAQ</p>
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

  margin-inline: auto;
  max-width: var(--max-content-width);
  width: 100%;

  padding-block: 100px;
}
</style>
