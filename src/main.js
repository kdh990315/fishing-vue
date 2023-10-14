import { createApp } from 'vue';
import App from './App.vue';

import router from '@/routers.js';

import BaseChoiceButton from '@/ul/BaseChoiceButton.vue';

import '@/scss/reset.scss';

const app = createApp(App);

app.use(router);

app.component('BaseChoiceButton', BaseChoiceButton);

app.mount('#app');