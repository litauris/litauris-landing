<script setup lang="ts">
import type { SbBlokData } from '@storyblok/vue'
import type { SBImage } from '@/api/SBImage.ts'
import { ref } from 'vue'

const props = defineProps<{
  blok: {
    services: Array<
      SbBlokData & {
        title: string
        content: string
        image: SBImage
      }
    >
  }
}>()

const visible = ref<boolean[]>(props.blok.services.map(() => false))

const toggleVisibility = (index: number) => {
  visible.value[index] = !visible.value[index]
}
</script>

<template>
  <section>
    <a class="anchor" id="services" />
    <div class="row wrapper">
      <h2>Services</h2>
      <div class="services">
        <div
          class="line"
          :class="{ active: visible[index] }"
          v-for="(inblok, index) in blok.services"
          :key="inblok._uid"
          @click="toggleVisibility(index)"
        >
          <h3>{{ inblok.title }}</h3>
          <div class="column">
            <p>{{ inblok.content }}</p>
            <button title="Show">
              <img src="@/assets/icons/arrow-left-down.svg" alt="arrow" aria-hidden="true" />
            </button>
          </div>
          <div class="service-img-wrapper">
            <img class="service-img" :src="inblok.image.filename" :alt="inblok.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
