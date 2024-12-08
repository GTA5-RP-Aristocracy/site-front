import { defineStore } from 'pinia'
import { useReCaptcha } from 'vue-recaptcha-v3'

export const useCaptchaStore = defineStore('captcha', () => {
	const recaptcha = useReCaptcha()

	// Проверяем, что `recaptcha` доступен и получаем `executeRecaptcha`
	const executeCaptcha = async (action: string): Promise<string | null> => {
		if (!recaptcha?.executeRecaptcha || !recaptcha?.recaptchaLoaded) {
			console.error('reCAPTCHA не инициализирована.')
			return null
		}

		try {
			await recaptcha.recaptchaLoaded()
			const token = await recaptcha.executeRecaptcha(action)
			return token
		} catch (error) {
			console.error('Ошибка при выполнении reCAPTCHA:', error)
			return null
		}
	}

	return {
		executeCaptcha,
	}
})
