<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue';

const newUsername = ref<string>(''); // Новый никнейм
const password = ref<string>(''); // Пароль
const errorMessage = ref<string>(''); // Сообщение об ошибке
const correctPassword = '1234'; // Пример правильного пароля

const emit = defineEmits(['close', 'nickname-changed']); // Эмит событий

// Функция для сброса формы
function resetForm() {
  newUsername.value = '';  
  password.value = '';     
  errorMessage.value = ''; 
}

// Функция для закрытия попапа
function closePopUp() {
  resetForm(); // Сброс формы
  emit('close'); // Эмит события закрытия
}

// Функция для сохранения изменений
function saveChanges() {
  if (newUsername.value.length < 4) {
    errorMessage.value = 'Nickname must be at least 4 characters long.';
    return;
  }

  if (password.value !== correctPassword) {
    errorMessage.value = 'Incorrect password.';
    return;
  }

  emit('nickname-changed', newUsername.value); // Эмит нового ника
  closePopUp(); // Закрываем попап
}

// Слежение за паролем для скрытия ошибок
watch(password, () => {
  if (errorMessage.value) {
    errorMessage.value = '';  
  }
});
</script>

<template>
  <div class="SettingsPopUp" @click.self="closePopUp">
    <div class="SettingsPopUp__container">
      <input v-model="newUsername" type="text" placeholder="Nickname">
      <input v-model="password" type="password" placeholder="Password"> 
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
</style>
