<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Litauris" width="40" />
        <span>Litauris</span>
      </div>

      <router-link class="case" to="/case">
        <span>Case Study</span>
        <img src="@/assets/icons/arrow-down.svg" alt="Arrow" />
      </router-link>

      <div class="menu-wrapper">
        <a href="#">Аdvantages</a>
        <a href="#">Services</a>
        <a class="outline" href="https://calendly.com/ceo-glu6">Let's talk</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
header {
  background-color: var(--background-color-soft);
  border-bottom: 1px solid #bbbcbd;
  font-family: var(--font-secondary);
  padding: 20px 10px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  max-width: var(--max-content-width);
  width: 100%;
}

.logo {
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
  font-weight: 500;
}
.logo span {
  margin-top: 0.5rem;
}

.case {
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
}

.menu-wrapper {
  align-items: center;
  column-gap: 2rem;
  display: flex;
}
</style>
