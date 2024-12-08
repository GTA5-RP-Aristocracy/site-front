<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Инициализация i18n и reCAPTCHA
const { t } = useI18n();

// Переменные для отслеживания инпутов
const nickname = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const passwordTest = ref<string>('');
const verificationCode = ref<string>('');
const errorNickname = ref<string>('');
const errorEmail = ref<string>('');
const errorPassword = ref<string>('');
const errorPasswordTest = ref<string>('');

// Функция проверки валидации nickname
function nicknameValidation(nickname: string): string {
  const nicknamePattern: RegExp = /^[a-zA-Z0-9\s]+$/;
  if (!nicknamePattern.test(nickname)) {
    return 'Invalid name format. Only Latin characters are allowed.';
  } else if (nickname.length < 5) {
    return 'Your nickname is less than 5 characters long';
  } else if (nickname.length > 20) {
    return 'Your nickname is more than 20 characters long';
  }
  return '';
}

function emailValidation(email: string): string {
  const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return 'Invalid email format. Only Latin characters and certain symbols are allowed.';
  }
  return '';
}

function passwordValidation(password: string): string {
  if (password.length < 4) {
    return 'Password must have a minimum of 4 characters';
  } else if (password.length > 40) {
    return 'Password must not exceed 40 characters';
  }
  return '';
}

function passwordTestValidation(passwordTest: string): string {
  if (passwordTest !== password.value) {
    return 'Passwords do not match';
  }
  return '';
}

// Функции для валидации и очистки ошибок
function handleNicknameValidation() {
  errorNickname.value = nicknameValidation(nickname.value);
}

function handleEmailValidation() {
  errorEmail.value = emailValidation(email.value);
}

function handlePasswordValidation() {
  errorPassword.value = passwordValidation(password.value);
}

function handlePasswordTestValidation() {
  errorPasswordTest.value = passwordTestValidation(passwordTest.value);
}

function clearNicknameError() {
  if (errorNickname.value) nickname.value = '';
  errorNickname.value = '';
}

function clearEmailError() {
  if (errorEmail.value) email.value = '';
  errorEmail.value = '';
}

function clearPasswordError() {
  if (errorPassword.value) password.value = '';
  errorPassword.value = '';
}

function clearPasswordTestError() {
  if (errorPasswordTest.value) passwordTest.value = '';
  errorPasswordTest.value = '';
}

// Логика отправки формы
async function MainValidation() {
  handleNicknameValidation();
  handleEmailValidation();
  handlePasswordValidation();
  handlePasswordTestValidation();

  if (errorNickname.value || errorEmail.value || errorPassword.value || errorPasswordTest.value) {
    return;
  }

  // Создание данных формы
  const formData = new FormData();
  formData.append('email', email.value);
  formData.append('name', nickname.value);
  formData.append('password', password.value);

  // Отправка данных на сервер
  try {
    const response = await fetch('http://185.218.0.121:8080/user/signup', {
      method: 'POST',
      body: formData,
    });

    // check 201 status
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // TODO: redirect to login page
    // remove data parsing
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<template>
  <div class="registrationForm">
    <div class="registrationForm__container">
      <h1>{{ t('registration.title') }}</h1>
      <form @submit.prevent="MainValidation">
        <input
          type="text"
          :placeholder="t('registration.namePlaceholder')"
          v-model="nickname"
          @focus="clearNicknameError"
        />
        <p class="error">{{ errorNickname }}</p>

        <input
          type="email"
          :placeholder="t('registration.emailPlaceholder')"
          v-model="email"
          @focus="clearEmailError"
        />
        <p class="error">{{ errorEmail }}</p>

        <div class="verification-code-wrapper">
          <input
            type="text"
            :placeholder="t('registration.verificationCodePlaceholder')"
            v-model="verificationCode"
          />
          <button type="button" class="verification-code__btn">
            {{ t('registration.sendButton') }}
          </button>
        </div>

        <input
          type="password"
          :placeholder="t('registration.passwordPlaceholder')"
          v-model="password"
          @focus="clearPasswordError"
        />
        <p class="error">{{ errorPassword }}</p>

        <input
          type="password"
          :placeholder="t('registration.passwordTestPlaceholder')"
          v-model="passwordTest"
          @focus="clearPasswordTestError"
        />
        <p class="error">{{ errorPasswordTest }}</p>

        <button type="submit">{{ t('registration.registerButton') }}</button>
      </form>
    </div>
  </div>
</template>



<style scoped>
body {
	font-family: var(--font-family-outfit);
}

.registrationForm__container {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;
	margin-bottom: 100px;
	margin-left: 500px;
	background-color: #272c36;
	padding: 50px;
	border-radius: 10px;
}

.registrationForm h1 {
	color: #fff;
	font-size: 36px;
	margin-bottom: 20px;
}

.registrationForm input {
	width: 100%;
	padding: 12px;
	margin-bottom: 20px;
	border: 2px solid #ccc;
	border-radius: 5px;
	font-size: 16px;
	color: #333;
}

.verification-code-wrapper {
	width: 106%;
	display: flex;
	gap: 10px;
	margin-bottom: 20px;
}

.verification-code__btn {
	height: 45px;
	width: 40%;
}

.verification-code-wrapper input {
	flex-grow: 1;
}

.send-code-button {
	padding: 12px 20px;
	background-color: #ffa500;
	border: none;
	border-radius: 5px;
	color: white;
	cursor: pointer;
	transition: background-color 0.3s;
}

.send-code-button:hover {
	background-color: #ff7f00;
}

button:disabled {
	background-color: #ccc;
	color: #666;
	cursor: not-allowed;
}

button {
	margin-left: 15px;
	width: 100%;
	padding: 12px;
	background-color: #ffa500;
	border: none;
	border-radius: 5px;
	color: white;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.3s ease;
}

button:hover:not(:disabled) {
	background-color: #ff7f00;
	transform: scale(1.05);
}

.error {
	color: red;
	margin-top: 5px;
	font-size: 14px;
	align-self: flex-start;
}
</style>
