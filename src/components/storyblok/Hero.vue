<script setup lang="ts">
defineProps<{
  blok: {
    title: string
    title_accent?: string
    description: string
  }
}>()
</script>

<template>
  <section>
    <div class="row wrapper">
      <h2>
        {{ blok.title }}
        <span class="light" v-if="blok.title_accent">{{ blok.title_accent }}</span>
      </h2>
      <div class="herobanner">
        <img src="@/assets/content/square.svg" alt="Square" />
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
  flex-direction: column;
  justify-content: space-between;

  gap: 100px;
  padding-block: 100px;
}
h2 {
  display: flex;
  flex-direction: column;

  color: var(--heading-color);
  font-size: 40px;
  line-height: 44px;
  font-weight: 500;
}
h2 span {
  color: var(--heading-color-light);
}
.herobanner {
  display: flex;
  gap: 100px;
  flex-direction: column-reverse;
}
.herobanner img {
  width: 150px;
  height: 90px;
}
.herobanner p {
  font-family: var(--font-secondary);
  font-size: 18px;
  line-height: 22px;
}

@media (width < 1024px) {
  section {
    height: calc(100vh - 81px);
  }
}

@media (width >= 1024px) {
  h2 {
    font-size: 60px;
    line-height: 60px;
    max-width: 770px;
  }
  .herobanner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .herobanner img {
    width: 280px;
    height: 165px;
  }
  .herobanner p {
    max-width: 440px;
    font-size: 22px;
    line-height: 30px;
  }
}
</style>
