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
		{
			path: '/agreement',
			name: 'agreement',
			component: defineAsyncComponent(
				() => import('@/components/agreementPage.vue')
			),
		},
		{
			path: '/terms',
			name: 'terms',
			component: defineAsyncComponent(
				() => import('@/components/FooterLinks/termsConditions.vue')
			),
		},
		{
			path: '/policy',
			name: 'policy',
			component: defineAsyncComponent(
				() => import('@/components/FooterLinks/privacyPolicy.vue')
			),
		},
		{
			path: '/affiliate',
			name: 'affiliate',
			component: defineAsyncComponent(
				() => import('@/components/FooterLinks/affiliatePage.vue')
			),
		},
		{
			path: '/:pathMatch(.*)*', // Обрабатывает все несуществующие пути
			name: 'NotFound',
			component: defineAsyncComponent(
				() => import('@/components/ErrorsPages/NotFound.vue')
			),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'forbidden',
			component: defineAsyncComponent(
				() => import('@/components/ErrorsPages/ForbiddenError.vue')
			),
		},
		{
			path: '/admin',
			name: 'Admin',
			component: defineAsyncComponent(
				() => import('@/views//AdministratorPanel/AdminPanel.vue')
			),
		},
	],
})

export default router
