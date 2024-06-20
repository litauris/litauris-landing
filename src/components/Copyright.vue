<template>
  <section>
    <div class="row wrapper">
      <div class="contact">
        <a href="#">Write to Us</a>
        <a href="mailto:hello@litauris.com">
          <span>Hello@Litauris.com</span>
          <img src="@/assets/icons/arrow-right.svg" alt="Arrow" />
        </a>
        <button @click="scrollToTop">Back to Top</button>
      </div>
      <div class="copyright">
        <p>If we don't respond in a second, we'll respond within an hour</p>
        <p>&#169; {{ currentYear }}</p>
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

  padding-block: 100px 32px;
  gap: 300px;
}
.contact,
.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact a {
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
}
</style>
