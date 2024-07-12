<template>
  <section>
    <div class="row wrapper">
      <h2>Portfolio</h2>
      <h3>
        We are a creative agency working with brands – building insightful strategy, creating unique
        designs and crafting experiences that bring positive change and value.
      </h3>
      <div ref="sliderWrapper">
        <div class="slider" ref="slider">
          <div class="card" v-for="card in cards" :key="card.title">
            <img :src="card.src" :alt="card.title" />
            <div class="card-text">
              <p>{{ card.title }}</p>
              <span>{{ card.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import mobileAppImage from '@/assets/content/slide-1.jpg';
import adminPanelImage from '@/assets/content/slide-2.jpg';
import mobileApp2Image from '@/assets/content/slide-3.jpg';
import webAppImage from '@/assets/content/slide-4.jpg';

export default {
  name: 'Portfolio',
  data() {
    return {
      cards: [
        {
          title: 'Mobile Application',
          subtitle:
            'Brand Strategy & Voice, Branding & Design, Digital & Web Content & Campaigns, Events & Activations',
          src: mobileAppImage,
        },
        {
          title: 'Admin Panel',
          subtitle: 'Branding & Design',
          src: adminPanelImage,
        },
        {
          title: 'Mobile Application',
          subtitle: 'Branding & Design',
          src: mobileApp2Image,
        },
        {
          title: 'Web Application',
          subtitle: 'Branding & Design',
          src: webAppImage,
        },
      ],
      sliderScrollPosition: 0,
    };
  },
  methods: {
    moveSlider(event) {
      const slider = this.$refs.slider;
      const maxScrollLeft = slider.scrollWidth - slider.offsetWidth;

      let scrollLeft = -this.sliderScrollPosition + event.deltaY;

      if (scrollLeft > 0 && scrollLeft < maxScrollLeft) {
        event.preventDefault();
      }
      if (scrollLeft <= 0) {
        scrollLeft = 0;
      }
      if (scrollLeft >= maxScrollLeft) {
        scrollLeft = maxScrollLeft;
      }

      slider.style.left = -scrollLeft + 'px';
      this.sliderScrollPosition = -scrollLeft;
    },
  },
  mounted() {
    const sliderWrapper = this.$refs.sliderWrapper;
    const options = {
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sliderWrapper.addEventListener('wheel', this.moveSlider);
        } else {
          sliderWrapper.removeEventListener('wheel', this.moveSlider);
        }
      });
    }, options);

    observer.observe(sliderWrapper);
  },
};
</script>
<style scoped>
section {
  overflow: hidden;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 16px;
  font-weight: 400;
}
h3 {
  font-size: 24px;
  font-weight: 500;
  max-width: 700px;
  padding-block: 70px;
}

.slider {
  display: flex;
  gap: 36px;
  left: 0;
}
.card img {
  aspect-ratio: 10 / 8;
  object-fit: cover;
  width: 100%;
}
.card-text {
  display: flex;
  flex-direction: column;
  padding-block: 30px;
  gap: 8px;
}
.card-text p {
  color: #0a0a0a;
  font-weight: 500;
  font-size: 30px;
}
.card-text span {
  color: #b1b1b6;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
}

@media (width < 1024px) {
  .slider {
    flex-direction: column;
  }
}

@media (width >= 1024px) {
  .slider {
    position: relative;
  }
  .card {
    flex-basis: calc(50% - 18px);
    flex-shrink: 0;
  }
}
</style>
