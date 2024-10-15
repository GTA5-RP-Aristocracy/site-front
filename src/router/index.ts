import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(() => import('@/views/Home.vue'))


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
			path: '/settings',
			name: 'settings',
			component: defineAsyncComponent(
				() => import('@/views/UserProfile/Setting.vue')
			),
		},
		{
			path: '/registration',
			name: 'registration',
			component: defineAsyncComponent(
				() => import('@/views/UserProfile/RegistrationForm.vue')
			),
		},
	],
})

export default router
