<template>
  <section>
    <div class="row wrapper">
      <div class="contact">
        <h2>Write to Us</h2>
        <div class="email">
          <a href="mailto:hello@litauris.com">
            <span>Hello@Litauris.com</span>
            <img src="@/assets/icons/arrow-right.svg" alt="Arrow" />
          </a>
          <p class="mobile-only">If we don't respond in a second, we'll respond within an hour</p>
        </div>
        <button @click="scrollToTop">Back to Top</button>
      </div>
      <div class="copyright">
        <p class="desktop-only">If we don't respond in a second, we'll respond within an hour</p>
        <p class="mobile-only">Privacy Policy</p>
        <p>&copy;&nbsp;{{ currentYear }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Copyright',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  font-family: var(--font-secondary);

  padding-block: 32px;
  gap: 100px;
}
.contact,
.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact {
  display: grid;
  grid-template-areas:
    'a c'
    'b b';
  row-gap: 50px;
}
.contact h2 {
  font-size: 16px;
  font-weight: 400;
}
.email a {
  display: flex;
  align-items: center;
  gap: 10px;
}
.contact button {
  background-color: #f4f4f5;
  border: none;
  border-radius: 24px;
  color: #202020;
  padding: 8px 20px;
  grid-area: c;
}
@media (width < 1024px) {
  .email p {
    color: #616161;
    margin-top: 16px;
  }
  .copyright {
    color: #b6b6b6;
  }
}

@media (width >= 1024px) {
  .wrapper {
    gap: 300px;
    padding-top: 100px;
  }
  .contact {
    grid-template-areas: 'a b b c';
  }
}
</style>
