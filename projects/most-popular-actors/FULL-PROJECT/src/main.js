import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowAltCircleLeft);

createApp(App)
	.use(router)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');