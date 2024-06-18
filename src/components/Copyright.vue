<template>
  <section>
    <div class="row wrapper">
      <div class="contact">
        <a href="#">Write to Us</a>
        <a href="#">
          <span>Hello@Litauris.com</span>
          <img src="@/assets/icons/arrow-right.svg" alt="Arrow" />
        </a>
        <button>Back to Top</button>
      </div>
      <div class="copyright">
        <p>If we don't respond in a second, we'll respond within an hour</p>
        <p>&#169; 2024</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Copyright',
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
  border-radius: 60px;
  color: #202020;
  padding: 8px 20px;
}
</style>
