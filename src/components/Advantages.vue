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
  name: 'Advantages',
};
</script>
<style scoped>
section {
  background-color: var(--background-color-dark);
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-block: 100px;
  color: var(--text-color-light);
}
.wrapper h2 {
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 400;
}
.advantages {
  display: flex;
  flex-direction: column;
  gap: 200px;
}
.advantages p {
  font-family: var(--font-secondary);
  font-size: 18px;
  line-height: 25px;
}
.slider h3 {
  font-size: 40px;
  font-weight: 500;
}
.slider h3 span {
  color: var(--text-color-soft);
}

@media (width >= 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .wrapper h2 {
    font-size: 20px;
  }
  .advantages p {
    font-size: 22px;
  }
  .slider h2 {
    font-size: 50px;
  }
}
</style>
