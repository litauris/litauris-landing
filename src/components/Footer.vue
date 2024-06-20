<template>
  <section>
    <div class="row wrapper">
      <h2>What are you waiting for?</h2>
      <h3>Get a stunning mobile app designed and online<span> within the next 10 days</span></h3>
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
  padding-block: 100px;
}
h2 {
  letter-spacing: -1px;
  color: #777777;
  font-size: 16px;
  font-weight: 500;
}
h3 {
  letter-spacing: -2px;
  font-weight: 500;
  font-size: 35px;
  width: 320px;
}
h3 span {
  color: #bab9be;
}
button {
  background-color: #1a4dd1;
  border: none;
}
button span {
  color: var(--heading-color-light);
}
@media (width < 1024px) {
  .wrapper {
    gap: 30px;
  }
  button {
    padding: 10px;
    border-radius: 60px;
  }
}
@media (width >= 1024px) {
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 60px;
    width: 600px;
  }
  button {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: relative;
  }
  button span {
    position: absolute;
    top: 16px;
    right: 30px;
  }
}
</style>
