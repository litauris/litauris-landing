<template>
  <section id="services">
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
            <button><img src="@/assets/icons/arrow-left-down.svg" alt="arrow" /></button>
          </div>
          <img class="service-img" src="@/assets/content/service-1.jpg" alt="Mobile App" />
        </div>
        <div class="line">
          <h3>Web App</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <button><img src="@/assets/icons/arrow-left-down.svg" alt="arrow" /></button>
          </div>
          <img class="service-img" src="@/assets/content/service-2.jpg" alt="Web App" />
        </div>
        <div class="line">
          <h3>Admin Panel</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <button><img src="@/assets/icons/arrow-left-down.svg" alt="arrow" /></button>
          </div>
          <img class="service-img" src="@/assets/content/service-3.jpg" alt="Admin Panel" />
        </div>
        <div class="line">
          <h3>Backend</h3>
          <div class="colomn">
            <p>
              We design and develop exceptional digital products & services, eCommerce, and brand
              communication solutions.
            </p>
            <button><img src="@/assets/icons/arrow-left-down.svg" alt="arrow" /></button>
          </div>
          <img class="service-img" src="@/assets/content/service-4.jpg" alt="Backend" />
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
  gap: 40px;
  padding-block: 80px;
}
h2 {
  font-size: 16px;
  font-weight: 400;
}
.line {
  transition: all 3s ease-in-out;
  border-bottom: 1px solid #f3f3f3;
  padding-block: 20px;
  position: relative;
}
.line:last-child {
  border: none;
}
.line .service-img {
  display: none;
}
.line:hover .service-img {
  display: block;
}

h3 {
  font-size: 28px;
  color: #524f4f;
  transition: color 0.3s ease-in-out;
}
.line:hover h3 {
  color: #131313;
}
.colomn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.colomn p {
  color: #62646e;
  transition: color 0.3s ease-in-out;
}
.line:hover .colomn p {
  color: #131313;
}
.colomn button {
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 60px;
}
.colomn button img {
  transition: all 0.1s linear;
}
.line:hover .colomn button img {
  transform: rotate(90deg);
}
@media (width < 1024px) {
  .service-img {
    width: 100%;
  }
  .colomn {
    position: relative;
  }
  .colomn button {
    position: absolute;
    right: 0;
    bottom: 100%;
  }
}
@media (width >= 1024px) {
  .wrapper {
    gap: 100px;
    padding-block: 100px;
  }
  .line {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .line .service-img {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 40%;
    width: 200px;
    height: 200px;
    z-index: 1;
  }
  h3 {
    font-size: 30px;
    color: #bebfc4;
  }
  .colomn p {
    max-width: 330px;
  }
}
</style>
