<script lang="ts" setup>
import { ref, watch } from 'vue';

// Переменные состояния
const newUsername = ref('');         // Введённый ник
const password = ref('');            // Введённый пароль
const errorMessage = ref('');        // Сообщение об ошибке

const correctPassword = '1234';      // Пример правильного пароля для проверки

// Функция для закрытия попапа
function closePopUp() {
  console.log('Закрыть попап');
  // Здесь можно добавить логику для закрытия попапа
}

// Функция для сохранения изменений
function saveChanges() {
  // Проверка длины нового ника
  if (newUsername.value.length < 4) {
    errorMessage.value = 'Enter your password to confirm the username change.';
    return;
  }

  // Проверка правильности пароля
  if (password.value !== correctPassword) {
    errorMessage.value = 'Incorrect password.';
    return;
  }

  // Логика успешного сохранения (например, смена ника)
  console.log('Ник успешно изменён на:', newUsername.value);
  errorMessage.value = '';  // Сбросить сообщение об ошибке
}

// Следим за изменением пароля, чтобы скрывать ошибку при вводе
watch(password, () => {
  if (errorMessage.value) {
    errorMessage.value = '';  // Убираем ошибку при изменении пароля
  }
});
</script>

<template>
  <div class="SettingsPopUp" @click.self="closePopUp">
    <div class="SettingsPopUp__container">
      <input v-model="newUsername" type="text" placeholder="Name"> <!-- TODO: заменить через props на ник пользователя -->
      <input v-model="password" type="password" placeholder="Password"> 
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p> <!-- Сообщение об ошибке под полем пароля -->
      <button @click="saveChanges" class="SettingsPopUp__btn">Save changes</button> 
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
  background-image: url(../assets/images/Bandit-PopUp-Settings.png);
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
</style>
