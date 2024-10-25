<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// Определение событий
const emit = defineEmits(['close'])
const { t } = useI18n()

const login = ref<string>('')
const password = ref<string>('')
const loginError = ref<string>('')
const passwordError = ref<string>('')
const isPopupVisible = ref<boolean>(true)

function validateInput() {
	loginError.value = loginValidation(login.value)
	passwordError.value = passwordValidation(password.value)
}

function loginValidation(login: string): string {
	if (login.length < 4) {
		return t('auth.loginErrorShort')
	} else if (login.length > 32) {
		return t('auth.loginErrorLong')
	} else return ''
}

function passwordValidation(password: string): string {
	if (password.length < 4) {
		return t('auth.passwordErrorShort')
	} else if (password.length > 40) {
		return t('auth.passwordErrorLong')
	} else return ''
}

// Очистка ошибок при изменении значений полей ввода
watch(login, newValue => {
	if (loginError.value) {
		loginError.value = loginValidation(newValue)
	}
})

watch(password, newValue => {
	if (passwordError.value) {
		passwordError.value = passwordValidation(newValue)
	}
})

// Вычисляемое свойство для отслеживания валидности данных
const isFormValid = computed(() => {
	return (
		login.value.length >= 4 &&
		login.value.length <= 32 &&
		password.value.length >= 4 &&
		password.value.length <= 40 &&
		!loginError.value &&
		!passwordError.value
	)
})

// Очистка полей ввода
function clearInputs() {
	login.value = ''
	password.value = ''
	loginError.value = ''
	passwordError.value = ''
}

function handleSubmit() {
	validateInput()
	if (isFormValid.value) {
		clearInputs()
	}
}

function closePopup() {
	isPopupVisible.value = false
	// Эмитим событие close в родительский компонент
	emit('close')
}

function handleOverlayClick(event: MouseEvent) {
	const target = event.target as HTMLElement
	if (target.classList.contains('authorization-pop-up__overlay')) {
		closePopup()
	}
}

function handleKeyDown(event: KeyboardEvent) {
	if (event.key === 'Enter') {
		validateInput()
	}
}
</script>

<template>
	<div
		v-if="isPopupVisible"
		class="authorization-pop-up__overlay"
		@click="handleOverlayClick"
	>
		<div class="authorization-pop-up__interface" @keydown="handleKeyDown">
			<strong>Aristocracy</strong>
			<div class="authorization-pop-up__interface__container">
				<input
					v-model="login"
					@input="loginError = ''"
					type="text"
					:placeholder="t('auth2.loginPlaceholder')"
					minlength="4"
					maxlength="32"
				/>
				<p v-if="loginError" class="error-message-login">{{ loginError }}</p>
				<input
					v-model="password"
					@input="passwordError = ''"
					type="password"
					:placeholder="t('auth2.passwordPlaceholder')"
					minlength="4"
					maxlength="40"
				/>
				<p v-if="passwordError" class="error-message-password">
					{{ passwordError }}
				</p>
				<button :disabled="!isFormValid" @click="handleSubmit">
					{{ t('auth2.loginButton') }}
				</button>
			</div>
			<div class="authorization-pop-up__reset-password">
				<a href="#">{{ t('auth2.forgotPassword') }}</a>
				<a @click="$router.push('/registration')">{{
					t('auth2.registerNow')
				}}</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
body {
	font-family: var(--font-family-outfit);
}

a {
	color: inherit;
	cursor: pointer;
	text-decoration: none !important;
}

strong {
	position: absolute;
	color: rgb(173, 16, 16);
	font-family: var(--font-family-satisfy);
	right: 40%;
	top: 5%;
	font-size: 46px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.authorization-pop-up__overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
}

.authorization-pop-up__interface {
	background-image: url(../assets/images/girl.png);
	position: relative;
	border-radius: 5%;
	margin-left: 400px;
	margin-top: 150px;
	width: 700px;
	height: 500px;
	background-color: white;
	z-index: 11;
	background-size: contain;
	background-repeat: no-repeat;
}

.authorization-pop-up__interface__container {
	padding-top: 100px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 500px;
}

.authorization-pop-up__interface input {
	position: relative;
	margin-left: 150px;
	padding: 10px;
	border: 2px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	color: #333;
}

.error-message-login {
	position: absolute;
	z-index: 896;
	bottom: 64%;
	left: 22%;
	color: rgb(173, 16, 16);
}
.error-message-password {
	position: absolute;
	z-index: 896;
	bottom: 49%;
	left: 22%;
	color: rgb(173, 16, 16);
}

.authorization-pop-up__interface button {
	margin-left: 250px;
	border: none;
	border-radius: 10%;
	width: 160px;
	height: 50px;
	font-family: var(--font-family-outfit);
	font-weight: var(--font-weight-bold);
	font-size: 20px;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s, transform 0.3s ease;
}

.authorization-pop-up__interface button:disabled {
	background-color: #ccc;
	color: #666;
	cursor: not-allowed;
}

.authorization-pop-up__interface button:hover:not(:disabled) {
	background-color: #ffa500;
	color: white;
	transform: scale(1.1);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.authorization-pop-up__reset-password {
	margin-top: 100px;
	display: flex;
	gap: 15px;
	margin-left: 190px;
	font-weight: var(--font-weight-bold);
}

.authorization-pop-up__reset-password a:hover {
	color: #ffa500;
	transform: scale(1.1);
}
</style>
