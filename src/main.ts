import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createHead } from '@unhead/vue/client'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ToastService from 'primevue/toastservice'

import { StoryblokVue, apiPlugin } from '@storyblok/vue'

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

const modules = import.meta.glob('./components/storyblok/**/*.vue')

for (const path in modules) {
  modules[path]().then((mod) => {
    const componentName = path
      .replace('./components/storyblok/', '')
      .replace(/\.\w+$/, '')
      .split(/[-/]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')

    app.component(componentName, mod.default)
  })
}

app.mount('#app')
