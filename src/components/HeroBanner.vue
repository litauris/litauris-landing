<template>
  <section>
    <div class="row wrapper">
      <h2>
        Web & Mobile Applications.
        <span class="light">Low Code.</span>
      </h2>
      <div class="herobanner">
        <div>
          <img src="@/assets/content/square.svg" alt="Square" />
        </div>
        <span>
          We develop mobile and web applications, admin panels from scratch and on no code
          platforms.
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroBanner',
};
</script>
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
  font-size: 30px;
  font-weight: 500;
}
h2 span {
  color: var(--heading-color-light);
}
.herobanner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.herobanner span {
  width: 400px;
}

@media (width >= 1024px) {
  h2 {
    font-size: 60px;
  }
}
</style>
