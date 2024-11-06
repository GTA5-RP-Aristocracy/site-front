<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue'

const currentPassword = ref<string>('')
const newPassword = ref<string>('')
const testPassword = ref<string>('')
const passwordStrengthClass = ref<string>('strength-empty')
const passwordStrengthText = ref<string>('')
const errorMessageCurrentPassword = ref<string>('')
const errorMessageNewPassword = ref<string>('')
const errorMessageTestPassword = ref<string>('')

const emit = defineEmits(['close', 'password-changed'])

function resetForm() {
	currentPassword.value = ''
	newPassword.value = ''
	testPassword.value = ''
	passwordStrengthClass.value = ''
	passwordStrengthText.value = ''
	errorMessageCurrentPassword.value = ''
	errorMessageNewPassword.value = ''
	errorMessageTestPassword.value = ''
}

// Функция для закрытия попапа
function closePopUp() {
	resetForm()
	emit('close')
}

// отправка сравнения текущего пароля на сервер
const checkCurrentPassword = async () => {
	try {
		const response = await fetch(
			'http://185.218.0.121:8080/user/check_current_password',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password: currentPassword.value,
				}),
			}
		)

		const data = await response.json()

		if (data.success) {
			errorMessageCurrentPassword.value = ''
		} else
			errorMessageCurrentPassword.value = 'The current password is incorrect'
	} catch (error) {
		errorMessageCurrentPassword.value = 'Server connection error'
	}
}

// Изменение пароля на сервере
const changePassword = async () => {
	try {
		const response = await fetch(
			'http://185.218.0.121:8080/user/change_password',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					newPassword: newPassword.value,
				}),
			}
		)

		const data = await response.json()

		if (data.success) {
			errorMessageNewPassword.value = ''
		} else {
			errorMessageNewPassword.value = 'Error changing password'
		}
	} catch (error) {
		errorMessageNewPassword.value = 'Server connection error'
	}

	closePopUp()
}

// Функция для проверки сложности пароля
function validationPasswordStrength() {
	const password = newPassword.value
	const invalidChar = /[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/.test(password)

	if (invalidChar) {
		errorMessageNewPassword.value =
			'Cyrillic and inappropriate characters are not allowed'
		passwordStrengthClass.value = 'strength-empty'
		passwordStrengthText.value = ''
		return
	}

	// Логика для проверки сложности пароля

	const hasUpperCase = /[A-Z]/.test(password)
	const hasLowerCase = /[a-z]/.test(password)
	const hasNumber = /[0-9]/.test(password)
	const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

	if (password.length === 0) {
		passwordStrengthClass.value = 'strength-empty'
		passwordStrengthText.value = ''
	} else if (password.length < 6) {
		passwordStrengthClass.value = 'strength-weak'
		passwordStrengthText.value = 'Too short'
	} else if (
		password.length >= 6 &&
		(hasUpperCase || hasLowerCase) &&
		hasNumber
	) {
		passwordStrengthClass.value = 'strength-medium'
		passwordStrengthText.value = 'Good password'
	} else if (
		password.length >= 10 &&
		hasUpperCase &&
		hasLowerCase &&
		hasNumber &&
		hasSpecialChar
	) {
		passwordStrengthClass.value = 'strength-strong'
		passwordStrengthText.value = 'Excellent password'
	} else {
		passwordStrengthClass.value = 'strength-medium'
		passwordStrengthText.value = 'Good password'
	}
	errorMessageNewPassword.value = ''
}

watch(newPassword, newValue => {
	validationPasswordStrength()
})

// Проверка на совпадение паролей
function CheckTestPassword() {
	if (newPassword.value !== testPassword.value) {
		errorMessageTestPassword.value = 'Passwords do not match'
	} else {
		errorMessageTestPassword.value = ''
	}
}

// Проверка, использовался ли пароль ранее
const checkPasswordHistory = async () => {
	try {
		const response = await fetch(
			'http://185.218.0.121:8080/user/check_password_history',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					password: newPassword.value,
				}),
			}
		)

		const data = await response.json()

		if (data.passwordUsed) {
			//TODO нужно сравнить с эндпоинтом на сервере
			errorMessageNewPassword.value =
				'This password was used before. Please choose a different one.'
			return false
		} else {
			errorMessageNewPassword.value = ''
			return true
		}
	} catch (error) {
		errorMessageNewPassword.value = 'Server connection error'
		return false
	}
}

// Очищаем инпуты
function clearCurrentPasswordError() {
	if (errorMessageCurrentPassword.value) {
		currentPassword.value = ''
		errorMessageCurrentPassword.value = ''
	}
}

function clearNewPasswordError() {
	if (errorMessageNewPassword.value) {
		newPassword.value = ''
		errorMessageNewPassword.value = ''
	}
}

function clearTestPasswordError() {
	if (errorMessageTestPassword.value) {
		testPassword.value = ''
		errorMessageTestPassword.value = ''
	}
}

async function MainValidation() {
	validationPasswordStrength()
	const isPasswordUsed = await checkPasswordHistory()
	if (!isPasswordUsed) return // Если пароль использовался, прекращаем валидацию

	checkCurrentPassword()
	CheckTestPassword()

	// Регулярное выражение для проверки пароля (не содержит кириллицу и содержит спецсимволы)
	const passwordPattern = /^(?!.*[а-яА-ЯёЁ])[!@#$%^&*(),.?":{}|<>a-zA-Z0-9]+$/

	// Проверяем длину пароля
	if (newPassword.value.length < 6) {
		errorMessageNewPassword.value =
			'Password must be at least 6 characters long'
	}
	// Проверяем, соответствует ли пароль регулярному выражению (без кириллицы и со спецсимволами)
	else if (!passwordPattern.test(newPassword.value)) {
		errorMessageNewPassword.value =
			'Password must contain at least one special character and no Cyrillic letters'
	}
	// Проверяем совпадение пароля и подтверждения
	else if (newPassword.value !== testPassword.value) {
		errorMessageTestPassword.value = 'Passwords do not match'
	}
	// Если все проверки пройдены, сбрасываем ошибки и отправляем запрос на сервер
	else {
		errorMessageNewPassword.value = ''
		errorMessageTestPassword.value = ''
		changePassword()
	}
}
</script>

<template>
	<div class="SettingsPopUp" @click.self="closePopUp">
		<div class="SettingsPopUp__container">
			<input
				type="password"
				placeholder="Current password"
				v-model="currentPassword"
				@focus="clearCurrentPasswordError"
			/>
			<p v-if="errorMessageCurrentPassword" class="error">
				{{ errorMessageCurrentPassword }}
			</p>

			<input
				type="password"
				placeholder="New password"
				v-model="newPassword"
				@focus="clearNewPasswordError"
				@input="validationPasswordStrength"
			/>
			<p v-if="errorMessageNewPassword" class="error">
				{{ errorMessageNewPassword }}
			</p>

			<!-- Шкала сложности пароля -->
			<div class="SettingsPopUp__password-strength-bar">
				<div
					:class="passwordStrengthClass"
					class="SettingsPopUp__password-strength-fill"
				></div>
			</div>
			<p
				class="SettingsPopUp__security-level"
				v-if="newPassword.length > 0 && !errorMessageNewPassword"
			>
				{{ passwordStrengthText }}
			</p>

			<!-- Подтверждение нового пароля -->
			<input
				type="password"
				placeholder="New password confirmation"
				v-model="testPassword"
				@focus="clearTestPasswordError"
				@input="CheckTestPassword"
			/>
			<p v-if="errorMessageTestPassword" class="error">
				{{ errorMessageTestPassword }}
			</p>

			<!-- Кнопка сохранения изменений -->
			<button class="SettingsPopUp__btn" @click.prevent="MainValidation">
				Save changes
			</button>
		</div>
	</div>
</template>

<style scoped>
.SettingsPopUp {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
}

.SettingsPopUp__container {
	background-image: url(@/assets/images/Bandit-PopUp-Settings.png);
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-radius: 5%;
	margin-left: 400px;
	margin-top: 150px;
	justify-content: center;
	align-items: center;
	width: 700px;
	height: 500px;
	background-color: white;
	z-index: 11;
	background-size: 26%;
	background-repeat: no-repeat;
	background-position: 10px 15px;
}

.SettingsPopUp__container input {
	height: 30px;
	width: 400px;
	border: 2px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	color: #333;
	padding-left: 10px;
}

.SettingsPopUp__container button {
	margin-top: 30px;
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

.SettingsPopUp__container button:hover {
	background-color: #ffa500;
	color: white;
	transform: scale(1.1);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.error {
	color: red;
	margin-top: 5px;
	font-size: 14px;
	align-self: flex-start;
	margin-left: 150px;
}

.SettingsPopUp__password-strength-bar {
	width: 59%;
	height: 5px;
	background-color: #e0e0e0;
	border-radius: 5px;
	margin-top: 5px;
	position: relative;
}

.SettingsPopUp__password-strength-fill {
	height: 100%;
	border-radius: 5px;
	transition: width 0.3s ease, background-color 0.3s ease;
}

.SettingsPopUp__security-level {
	color: black;
}

.strength-empty {
	width: 0%;
	background-color: transparent;
}

.strength-weak {
	width: 33%;
	background-color: red;
}

.strength-medium {
	width: 66%;
	background-color: yellow;
}

.strength-strong {
	width: 100%;
	background-color: green;
}
</style>
