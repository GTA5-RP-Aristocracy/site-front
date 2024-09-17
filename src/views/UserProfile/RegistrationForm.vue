<script lang="ts" setup>
import { ref } from 'vue';

const nickname = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const verificationCode = ref<string>('');
const errorNickname = ref<string>('')
const errorEmail = ref<string>('')
const errorPassword = ref<string>('')

// функция проверки валидации nickname
function nicknameValidation(nickname: string): string {
  const nicknamePattern: RegExp =/^[a-zA-Z\s]+$/;
  if (!nicknamePattern.test(nickname)) {
    return "Invalid name format. Only Latin characters are allowed.";
  }
  else if(nickname.length < 5 ) {
    return "Your nickname is less than 5 characters long"
  }
  else if(nickname.length > 20) {
    return "Your nickname is more than 20 characters long"
  }
}

// функция проверки валидации email
function emailValidation(email: string): string {
  const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return "Invalid email format. Only Latin characters and certain symbols are allowed.";
  }
}

function passwordValidation(password: string): string {
  if (password.length < 4) {
    return 'Password must have a minimum of 4 characters';
  } else if (password.length > 40) {
    return 'Password must not exceed 40 characters';
  } else return '';
}

// Функция для присваивания ошибки для errorText
function handleNicknameValidation() {
  const validationResult: string = nicknameValidation(nickname.value)
  if(validationResult) {
    errorNickname.value = validationResult;
    return
  }
}

function handleEmailValidation() {
  const validationResult: string = emailValidation(email.value)
  if(validationResult) {
    errorEmail.value = validationResult;
    return
  }
}

function handlePasswordValidation() {
  const validationResult: string = passwordValidation(password.value)
  if(validationResult) {
    errorPassword.value = validationResult;
    return
  }
}

//Сброс инпута при ошибки
function clearNicknameError() {
  if (errorNickname.value) {
    nickname.value = '';  // сбрасываем значение
    errorNickname.value = '';  // очищаем текст ошибки
  }
}

function clearEmailError() {
  if ( errorEmail.value) {
    email.value = '';  // сбрасываем значение
     errorEmail.value = '';  // очищаем текст ошибки
  }
}

function clearPasswordError() {
  if ( errorPassword.value) {
    password.value = '';  // сбрасываем значение
     errorPassword.value = '';  // очищаем текст ошибки
  }
}

function MainValidation() {
handleNicknameValidation();
handleEmailValidation();
handlePasswordValidation();
}
</script>

<template>
  <div class="registrationForm">
    <div class="registrationForm__container">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Name" v-model="nickname" @focus="clearNicknameError"/>
        <p class="error"> {{ errorNickname }}</p>
        <input type="email" placeholder="Email" v-model="email" @focus="clearEmailError"/>
        <p class="error"> {{ errorEmail }}</p>
        <div class="verification-code-wrapper">
        <input type="text" placeholder="Verification Code" v-model="verificationCode"/>
        <button class="verification-code__btn">Send</button>
        </div>
        <input type="password" placeholder="Password" v-model="password" @focus="clearPasswordError"/>
        <p class="error"> {{ errorPassword }}</p>
        <button type="submit" @click.prevent="MainValidation">Register</button>
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
  margin: 0 auto;
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
