<template>
  <header>
    <div class="wrapper">
      <div class="logo-wrapper">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        <p>Litauris</p>
      </div>

      <button>
        <span>Case Study</span>
        <img src="@/assets/icons/arrow-down.svg" alt="Arrow" />
      </button>

      <div class="menu-wrapper">
        <button>Аdvantages</button>
        <button>Services</button>
        <button class="grey">Let's talk</button>
      </div>
    </div>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
header {
  padding-block: 20px;
  background-color: var(--background-color-soft);
  border-bottom: 1px solid #bbbcbd;

  font-family: var(--font-secondary);
}
.wrapper {
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-inline: auto;
}
.logo-wrapper {
  display: flex;
  align-items: center;

  font-weight: 500;
}
.logo {
  margin-bottom: 16px;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  gap: 8px;

  background: none;
  border: none;
}
button.grey {
  border-radius: 24px;
  background-color: #bbbcbd;
}

.menu-wrapper {
  display: flex;
}
</style>
