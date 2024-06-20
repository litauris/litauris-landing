import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead, VueHeadMixin } from '@unhead/vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(router);
app.use(createHead());
app.mixin(VueHeadMixin);
app.use(PrimeVue, {
  unstyled: true,
});

app.mount('#app');
