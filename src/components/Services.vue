<template>
  <section>
    <div class="row wrapper">
      <h2>Services</h2>
      <div class="services">
        <div class="line">
          <h3>Mobile App</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <img src="@/assets/icons/arrow-left-down.svg" alt="arrow" />
          </div>
        </div>
        <div class="line">
          <h3>Web App</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <img src="@/assets/icons/arrow-left-down.svg" alt="arrow" />
          </div>
        </div>
        <div class="line">
          <h3>Admin Panel</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <img src="@/assets/icons/arrow-left-down.svg" alt="arrow" />
          </div>
        </div>
        <div class="line">
          <h3>Backend</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <img src="@/assets/icons/arrow-left-down.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Services',
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;

  gap: 100px;
  padding-block: 100px;
}
h2 {
  font-size: 1rem;
  font-weight: 400;
}
.line {
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  padding-block: 20px;
  display: flex;
  justify-content: space-between;
}
.line:last-child {
  border: none;
}
h3 {
  font-size: 30px;
  color: #bebfc4;
}
.colomn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.colomn p {
  width: 400px;
}
</style>
