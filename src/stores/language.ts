import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', {
	state: () => ({
		locale: localStorage.getItem('locale') || 'ru',
	}),
	actions: {
		setLocale(newLocale: string) {
			this.locale = newLocale
			localStorage.setItem('locale', newLocale)
			const { locale } = useI18n()
			locale.value = newLocale
		},
	},
})
