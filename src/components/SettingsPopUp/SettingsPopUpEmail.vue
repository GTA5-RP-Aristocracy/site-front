<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue'
import { useUserSettings } from '@/stores/userSettings'

const email = ref<string>('') // введённый email
const password = ref<string>('') // Введённый пароль
const errorMessage = ref<string>('') // Сообщение об ошибке

const correctPassword = '1234' // Пример правильного пароля для проверки

// Получаем доступ к хранилищу
const userSettings = useUserSettings()
const emit = defineEmits(['close', 'email-changed'])

// Функция для проверки валидации email
function emailValidation(email: string): string {
	const emailPattern: RegExp =
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	if (!emailPattern.test(email)) {
		return 'Invalid email format. Only Latin characters and certain symbols are allowed.'
	}
	return ''
}

// Обработчик валидации и обновления email
function handleEmailValidation(): void {
	const validationResult = emailValidation(email.value)
	if (validationResult) {
		errorMessage.value = validationResult
		return
	}

	// Проверка правильности пароля
	if (password.value !== correctPassword) {
		errorMessage.value = 'Incorrect password.'
		return
	}

	// Обновление email
	const updateEmail = async () => {
		const uuid = userSettings.uuid
		if (!uuid) {
			errorMessage.value = 'User not logged in'
			return
		}

		try {
			const response = await fetch(
				`https://aristocracy-rp.ru/api/user/update?uuid=${uuid}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzUyMTIzMTksImlkIjoiYzUxN2UxNjUtNzg2Yi00NGI2LTg5YTktNzljNTkyZDc1ZmY1In0.9HygVX5acNMS-fTvEQDtPWXSLMeTdr_V4Qv15bdlEVg'
					},
					body: JSON.stringify({ email: email.value }),
				}
			)

			const data = await response.json()

			if (data.passwordUsed) {
				errorMessage.value =
					'This password was used before. Please choose a different one.'
				return false
			} else {
				errorMessage.value = ''
				return true
			}
		} catch (error) {
			errorMessage.value = 'Server connection error'
			return false
		}
	}

	// Вызов функции обновления email
	updateEmail()
}

// Функция для сброса данных формы
function resetForm(): void {
	email.value = '' // Сброс email
	password.value = '' // Сброс пароля
}

// Следим за изменением email, чтобы скрывать ошибку при вводе
watch(email, () => {
	if (errorMessage.value) {
		errorMessage.value = '' // Убираем ошибку при изменении email
	}
})

// Следим за изменением пароля, чтобы скрывать ошибку при вводе
watch(password, () => {
	if (errorMessage.value) {
		errorMessage.value = '' // Убираем ошибку при изменении пароля
	}
})

// Функция закрытия попапа при клике на серую зону
function closePopUp(): void {
	resetForm()
	emit('close')
}
</script>

<template>
	<div class="SettingsPopUpEmail" @click.self="closePopUp">
		<div class="SettingsPopUpEmail__container" @click.stop>
			<input v-model="email" type="text" placeholder="Email" />
			<input v-model="password" type="password" placeholder="Password" />
			<p class="error">{{ errorMessage }}</p>
			<button @click="handleEmailValidation" class="SettingsPopUpEmail__btn">
				Request changes
			</button>
		</div>
	</div>
</template>

<style scoped>
.SettingsPopUpEmail {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
}
.SettingsPopUpEmail__container {
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

.SettingsPopUpEmail__container input {
	height: 30px;
	width: 400px;
	border: 2px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	color: #333;
	padding-left: 10px;
}

.SettingsPopUpEmail__container button {
	margin-top: -10px;
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

.SettingsPopUpEmail__container button:hover {
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
</style>
