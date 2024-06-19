<template>
  <header>
    <div class="row wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Litauris" width="40" height="40" />
        <span>Litauris</span>
      </div>

      <nav class="nav-wrapper">
        <RouterLink class="case" to="/case" v-if="!isCasePage">
          <span>Case Study</span>
          <img src="@/assets/icons/arrow-down.svg" alt="Arrow" />
        </RouterLink>
        <RouterLink class="case" to="/" v-else>
          <span>About us</span>
          <img src="@/assets/icons/plus.svg" alt="Plus" />
        </RouterLink>

        <div class="menu-wrapper">
          <!-- @TODO: Mobile -->
          <a href="#" v-if="!isCasePage">Advantages</a>
          <a href="#" v-if="!isCasePage">Services</a>
          <a class="outline" href="https://calendly.com/ceo-glu6">
            {{ isCasePage ? 'Book a Call' : `Let's talk` }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isCasePage() {
      return this.$route.name === 'case';
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--background-color-soft);
  border-bottom: 1px solid #bbbcbd;
  font-family: var(--font-secondary);
  padding-block: 20px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
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

.nav-wrapper {
  display: flex;
  flex-basis: 70%;
  justify-content: space-between;
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
