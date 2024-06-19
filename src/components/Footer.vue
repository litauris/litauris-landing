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
  font-size: 1rem;
  font-weight: 400;
}
h3 {
  font-size: 60px;
  font-weight: 500;
  width: 600px;
}
h3 span {
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
