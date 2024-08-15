import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const Home = () => import('@/views/Home.vue')


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
			component: defineAsyncComponent(() => import('@/views/Shop.vue')),
		},
		{
			path: '/rules',
			name: 'rules',
			component: defineAsyncComponent(() => import('@/views/Rules.vue')),
		},
		{
			path: '/download',
			name: 'download',
			component: defineAsyncComponent(() => import('@/views/Download.vue')),
		},
		{
			path: '/test',
			name: 'test',
			component: defineAsyncComponent(() => import('@/views/TEST.vue')),
		},
	],
})

export default router
