<template>
  <section>
    <div class="wrapper">
      <p>What are you waiting for?</p>
      <h2>Get a stunning mobile app designed and online<span> within the next 10 days</span></h2>
      <button>
        <span>Get an instant quote</span>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style scoped>
section {
  border-bottom: 1px solid #f3f3f3;
}
.wrapper {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-width: var(--max-content-width);
  width: 100%;
  padding-block: 100px;
}
h2 {
  font-size: 60px;
  font-weight: 500;
  width: 600px;
}
h2 span {
  color: #bab9be;
}
button {
  background-color: #1a4dd1;
  border: none;
  border-radius: 60px;
  width: 120px;
  height: 120px;
  position: relative;
}
button span {
  color: var(--heading-color-light);
  position: absolute;
  top: 16px;
  right: 30px;
}
</style>
