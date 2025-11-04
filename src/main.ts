import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createHead } from '@unhead/vue/client'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'

import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import { initStoryblokComponents } from '@/components/storyblok'

const app = createApp(App)

app.use(router)

app.use(createHead())

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(ToastService)

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.NODE_ENV !== 'production',
  use: [apiPlugin],
})

initStoryblokComponents(app)

app.mount('#app')
