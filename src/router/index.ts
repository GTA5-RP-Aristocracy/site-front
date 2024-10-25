import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(() => import('@/views/HomePage.vue'))

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
			component: defineAsyncComponent(() => import('@/views/ShopPage.vue')),
		},
		{
			path: '/rules',
			name: 'rules',
			component: defineAsyncComponent(() => import('@/views/RulesPage.vue')),
		},
		{
			path: '/download',
			name: 'download',
			component: defineAsyncComponent(() => import('@/views/DownloadPage.vue')),
		},
		{
			path: '/settings',
			name: 'settings',
			component: defineAsyncComponent(
				() => import('@/views/UserProfile/SettingPage.vue')
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
