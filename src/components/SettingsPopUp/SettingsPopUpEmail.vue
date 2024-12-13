<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue'

const email = ref<string>('') // введённый email
const password = ref<string>('') // Введённый пароль
const errorMessage = ref<string>('') // Сообщение об ошибке

const correctPassword = '1234' // Пример правильного пароля для проверки //TODO ждем связь с сервером что бы реализовать логику пароля

const emit = defineEmits(['close', 'email-changed'])

// Функция для проверки валидации email
function emailValidation(email: string): string {
	const emailPattern: RegExp =
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // регулярное выражение
	if (!emailPattern.test(email)) {
		return 'Invalid email format. Only Latin characters and certain symbols are allowed.'
	}
  return '' //заглушка после связи с сервером нужно удалить и заменить на правильную логику
	//TODO ждем настройку серверной части для внедрение логики проверки почты
}

function handleEmailValidation() : void {
	// Проверка валидности email
	const validationResult = emailValidation(email.value)
	if (validationResult) {
		errorMessage.value = validationResult // Присваиваем сообщение об ошибке
		return // Прерываем выполнение функции, если есть ошибка
	}

	// Проверка правильности пароля
	if (password.value !== correctPassword) {
		errorMessage.value = 'Incorrect password.'
		return
	}

	saveChanges()
}

// Функция для сброса данных формы
function resetForm() : void {
	email.value = '' // Сброс поля с email
	password.value = '' // Сброс поля с паролем
}

// Функция для сохранения изменений
function saveChanges() : void {
	// Проверка длины нового email
	if (email.value.length < 4) {
		errorMessage.value = 'Email must be at least 4 characters long.'
		return
	}

	resetForm() // Сброс формы после успешного сохранения
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
function closePopUp() : void {
	resetForm()
	emit('close')
}
</script>

<template>
	<div class="SettingsPopUpEmail" @click.self="closePopUp">
		<!-- Закрываем попап и сбрасываем форму -->
		<div class="SettingsPopUpEmail__container" @click.stop>
			<!-- Предотвращаем закрытие при клике на форму -->
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
