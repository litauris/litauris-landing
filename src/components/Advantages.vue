<template>
  <section>
    <div class="row wrapper">
      <h2>Advantages</h2>
      <div class="advantages">
        <p>
          Thanks to the No Code approach, there is no need to attract highly qualified development
          teams, which reduces costs.
        </p>
        <div class="slider">
          <h3>
            Ease Support.
            <span>It’s no need to attract highly qualified development.</span>
          </h3>
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
  color: var(--text-color-light);
}
h2 {
  font-size: 1rem;
  font-weight: 400;
}
.advantages {
  display: flex;
  flex-direction: column;
  gap: 200px;
}
h3 {
  font-size: 50px;
  font-weight: 500;
}
h3 span {
  color: var(--text-color-soft);
}
</style>
