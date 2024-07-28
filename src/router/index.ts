import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/shop',
			name: 'shop',

			component: () => import('@/views/Shop.vue'),
		},
		{
			path: '/rules',
			name: 'rules',

			component: () => import('@/views/Rules.vue'),
		},
		{
			path: '/download',
			name: 'download',

			component: () => import('@/views/Download.vue'),
		},
		{
			path: '/test',
			name: 'test',

			component: () => import('@/views/TEST.vue'),
		},
	],
})

export default router
