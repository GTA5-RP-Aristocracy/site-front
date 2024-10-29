import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { languages, defaultLocale } from './locales/index'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import App from './App.vue'
import router from './router'

const messages = Object.assign(languages)
const i18n = createI18n({
	legacy: false,
	locale: defaultLocale,
	fallbackLocale: 'ru',
	messages,
})

const app = createApp(App, {})

app.use(VueReCaptcha, {
	siteKey: '6LdPXmwqAAAAAJ2tOYDb_lbpoS3vjeV7E-zfsuTB',
	loaderOptions: {
		autoHideBadge: true, // скрытие значка reCAPTCHA
		explicitRenderParameters: {
			theme: 'light', // можно изменить тему, например, на 'dark'
		},
	},
})
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
