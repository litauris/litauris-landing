<template>
  <header>
    <div class="row wrapper">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Litauris" width="40" height="40" />
        <span>Litauris</span>
      </div>

      <nav class="nav-wrapper">


 
        <RouterLink class="case desktop-only" to="/" v-else @click="routerClick">
          <span>About us</span>
          <img src="@/assets/icons/plus.svg" alt="Plus" />
        </RouterLink>

        <div class="menu-wrapper">
          <a class="desktop-only" href="#advantages" v-if="!isCasePage">Advantages</a>
          <a class="desktop-only" href="#services" v-if="!isCasePage">Services</a>
          <a class="calendly" href="https://calendly.com/ceo-glu6">
            {{ isCasePage ? 'Book a Call' : `Let's talk` }}
          </a>

          <button class="drawer-button mobile-only" @click="openMenu" title="Menu" />
          <Drawer class="drawer" v-model:visible="visible" position="right">
            <template v-slot:header>
              <div class="logo drawer-header">
                <img src="@/assets/logo.svg" alt="Litauris" width="40" height="40" />
                <span>Litauris</span>
              </div>
            </template>

            <div class="drawer-content">
              <RouterLink class="case" to="/case" v-if="!isCasePage" @click="routerClick">
                <span>Case Study</span>
                <img src="@/assets/icons/arrow-down.svg" alt="Arrow" />
              </RouterLink>
              <RouterLink class="case" to="/" v-else @click="routerClick">
                <span>About us</span>
                <img src="@/assets/icons/plus.svg" alt="Plus" />
              </RouterLink>
              <a href="#advantages" v-if="!isCasePage" @click="closeMenu">Advantages</a>
              <a href="#services" v-if="!isCasePage" @click="closeMenu">Services</a>
            </div>
          </Drawer>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Drawer from 'primevue/drawer';

export default {
  name: 'Header',
  components: {
    Drawer,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    isCasePage() {
      return this.$route.name === 'case';
    },
  },
  methods: {
    openMenu() {
      this.visible = true;
    },
    closeMenu() {
      this.visible = false;
    },
    routerClick() {
      this.closeMenu();

      window.scrollTo({ top: 0, behavior: 'smooth' });
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
  align-items: center;
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

.case {
  align-items: center;
  column-gap: 0.5rem;
  display: flex;
}

.menu-wrapper {
  align-items: center;
  column-gap: 1rem;
  display: flex;
}
.calendly {
  background-color: #1a4dd1;
  border-radius: 24px;
  color: var(--heading-color-light);
  padding: 8px 20px;
}

@media (width < 1024px) {
  .drawer-button {
    background: none;
    border: none;
    width: 24px;
  }
  .drawer-button::before,
  .drawer-button::after {
    background-color: var(--text-color);
    display: block;
    content: '';
    height: 1px;
  }
  .drawer-button::after {
    margin-top: 4px;
  }
  .drawer-header span {
    color: var(--text-color);
    font-family: var(--font-secondary);
  }
  .drawer-content {
    color: var(--text-color);
    display: flex;
    flex-direction: column;
  }
  .drawer-content .case {
    border-bottom: 1px solid #c4c4c4;
    justify-content: space-between;
    margin-bottom: 64px;
    padding-top: 16px;
  }
  .drawer-content .case img {
    width: 30px;
  }
  .drawer-content a {
    font-size: 32px;
    font-weight: 500;
    padding-bottom: 16px;
  }
}

@media (width >= 1024px) {
  .nav-wrapper {
    display: flex;
    flex-basis: 70%;
    justify-content: space-between;
  }
  .menu-wrapper {
    column-gap: 2rem;
  }
}
</style>
<style>
.drawer {
  max-width: 480px;
  width: 100% !important;

  --p-drawer-background: var(--background-color-soft);

  --p-button-text-secondary-active-background: none;
  --p-button-text-secondary-hover-background: none;
  --p-button-text-secondary-color: var(--text-color);
  --p-icon-size: 24px;
}
.drawer .p-drawer-header {
  border-bottom: 1px solid #c4c4c4;
}
</style>
