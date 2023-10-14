import { createRouter, createWebHashHistory } from "vue-router";
import MainView from '@/views/MainView.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: MainView,
			component: MainView,
		}
	]
});

export default router;