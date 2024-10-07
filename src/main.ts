import './assets/main.css'

import { createApp } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { languages, defaultLocale } from './locales/index.ts'

import App from './App.vue'
import router from './router'

const messages = Object.assign(languages)
const i18n = createI18n({
	legacy: false,
	locale: defaultLocale,
	fallbackLocale: 'ru',
	messages
})

	const app = createApp(App, {
		setup(){
			const {t} = useI18n()
			return {t}
		}
	})

	app.use(createPinia())
	app.use(i18n)
	app.use(router)

	app.mount('#app')


