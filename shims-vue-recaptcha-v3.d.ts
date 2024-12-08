declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$recaptcha: (action: string) => Promise<string>
		$recaptchaLoaded: () => Promise<boolean>
		$recaptchaInstance: {
			execute: (action: string) => Promise<string>
			render?: () => void
		}
	}
}
