<script setup lang="ts">
defineProps<{
  blok: {
    title: string
    description: string
  }
}>()
</script>

<template>
  <section>
    <div class="row wrapper">
      <h2>{{ blok.title }}</h2>
      <div class="herobanner">
        <p>{{ blok.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color-soft);
}
.wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 40px;
  padding-block: 60px;
}
h2 {
  display: flex;
  flex-direction: column;

  color: var(--heading-color);
  font-size: 34px;
  font-weight: 500;
  line-height: 38px;
  max-width: 320px;
}
.herobanner {
  display: flex;
  justify-content: end;
  align-items: end;
}
.herobanner p {
  font-family: var(--font-secondary);
  max-width: 300px;
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 22px;
}

@media (width < 1024px) {
  section {
    height: calc(50vh - 81px);
  }
}
@media (width >= 1024px) {
  .wrapper {
    align-items: flex-end;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    padding-block: 100px;
  }
  h2 {
    font-size: 58px;
    max-width: 770px;
    line-height: 58px;
  }
  .herobanner p {
    max-width: 440px;
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
