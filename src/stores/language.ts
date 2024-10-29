import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
	const locale = ref(localStorage.getItem('locale') || 'ru')

	const setLocale = (newLocale: string) => {
		locale.value = newLocale
		localStorage.setItem('locale', newLocale)
		const { locale: i18nLocale } = useI18n()
		i18nLocale.value = newLocale
	}

	const currentLocale = computed(() => locale.value)

	return {
		locale: currentLocale,
		setLocale,
	}
})
