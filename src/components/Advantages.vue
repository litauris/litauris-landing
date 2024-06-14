<template>
  <section>
    <div class="wrapper">
      <p>Advantages</p>
      <div class="advantages">
        <p>
          Thanks to the No Code approach, there is no need to attract highly qualified development
          teams, which reduces costs.
        </p>
        <div class="slider">
          <h2>
            Ease Support.
            <span>It’s no need to attract highly qualified development.</span>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Advantages'
}
</script>
<style scoped>
section {
  background-color: var(--background-color-dark);
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-block: 100px;
  margin-inline: auto;
  max-width: var(--max-content-width);
  width: 100%;
  color: var(--text-color-light);
}
.advantages {
  display: flex;
  flex-direction: column;
  gap: 200px;
}
h2 {
  font-size: 50px;
  font-weight: 500;
}
h2 span {
  color: var(--text-color-soft);
}
</style>
