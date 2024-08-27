<template>
  <section>
    <a class="anchor" id="services" />
    <div class="row wrapper">
      <h2>Services</h2>
      <div class="services">
        <div
          class="line"
          :class="{ active: service.visible }"
          v-for="(service, index) in services"
          :key="service.title"
          @click="toggleVisibility(index)"
        >
          <h3>{{ service.title }}</h3>
          <div class="column">
            <p>{{ service.content }}</p>
            <button>
              <img src="@/assets/icons/arrow-left-down.svg" alt="arrow" />
            </button>
          </div>
          <div class="service-img-wrapper">
            <img class="service-img" :src="service.src" alt="Mobile App" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import mobileAppImage from '@/assets/content/service-1.jpg';
import webAppImage from '@/assets/content/service-2.jpg';
import adminPanelImage from '@/assets/content/service-3.jpg';
import backendImage from '@/assets/content/service-4.jpg';

export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Mobile App',
          content:
            'Hello World',
          src: mobileAppImage,
        },
        {
          title: 'Web App',
          content:
            'You design and develop exceptional digital products & services, eCommerce, and brand communication solutions.',
          src: webAppImage,
        },
        {
          title: 'Admin Panel',
          content:
            'We design and develop exceptional digital products & services, eCommerce, and brand communication solutions.',
          src: adminPanelImage,
        },
        {
          title: 'Backend',
          content:
            'We design and develop exceptional digital products & services, eCommerce, and brand communication solutions.',
          src: backendImage,
        },
      ],
    };
  },
  methods: {
    toggleVisibility(index) {
      this.services[index].visible = !this.services[index].visible;
    },
  },
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
.service-img {
  width: 100%;
}

h3 {
  font-size: 28px;
  color: #524f4f;
  transition: color 0.3s ease-in-out;
}
.column {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.column p {
  color: #62646e;
  transition: color 0.3s ease-in-out;
}
.column button {
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 60px;
}
.column button img {
  transition: all 0.1s linear;
}
@media (width < 1024px) {
  .column {
    margin-block: 16px;
    position: relative;
  }
  .column button {
    position: absolute;
    right: 0;
    bottom: calc(100% + 20px);
  }
  .service-img-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 0.3s ease-in-out;
  }
  .service-img {
    overflow: hidden;
  }

  .line.active h3 {
    color: #131313;
  }
  .line.active .column p {
    color: #131313;
  }
  .line.active .service-img-wrapper {
    grid-template-rows: 1fr;
  }
  .line.active .column button img {
    transform: rotate(90deg);
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
  .line .service-img-wrapper {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 40%;
    width: 200px;
    height: 200px;
    z-index: 1;
  }

  .line:hover h3 {
    color: #131313;
  }
  .line:hover .column p {
    color: #131313;
  }
  .line .service-img {
    display: none;
  }
  .line:hover .service-img {
    display: block;
  }
  .line:hover .column button img {
    transform: rotate(90deg);
  }
  h3 {
    font-size: 30px;
    color: #bebfc4;
  }
  .column p {
    max-width: 330px;
  }
}
</style>
