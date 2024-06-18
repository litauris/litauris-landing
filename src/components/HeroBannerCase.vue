<template>
  <section>
    <div class="wrapper">
      <h2>The Wondr Restaurant Mobile Application 2 Months Post-launch</h2>
      <div class="herobanner">
        <span>
          The story of the two-month launch journey of the mobile application into the market, from
          ideation to full implementation.
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroBannerCase',
};
</script>
<style scoped>
section {
  background-color: var(--background-color-soft);
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-inline: auto;
  max-width: var(--max-content-width);
  width: 100%;

  gap: 100px;
  padding-block: 100px;
}
h2 {
  display: flex;
  flex-direction: column;

  color: var(--heading-color);
  font-size: 30px;
  font-weight: 500;
  width: 770px;
}
.herobanner {
  display: flex;
  justify-content: end;
  align-items: end;
}
.herobanner span {
  width: 440px;
  font-size: 22px;
}

@media (width >= 1024px) {
  h2 {
    font-size: 60px;
  }
}
</style>
