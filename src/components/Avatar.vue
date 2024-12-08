<script lang="ts" setup>
import { ref, watch } from 'vue';
import AuthorizationPopUp from './AuthorizationPopUp.vue';
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from '../stores/language';

// Локализация
const { t, locale } = useI18n(); // Подключаем локализацию через useI18n

// Подключаем хранилище языка (Pinia)
const languageStore = useLanguageStore();

// Устанавливаем начальный язык в I18n из хранилища Pinia
locale.value = languageStore.locale;

// Следим за изменением языка в Pinia и обновляем I18n
watch(() => languageStore.locale, (newLocale) => {
  locale.value = newLocale;
});

// Переменная для отслеживания состояния пользователя (залогинен или нет)
const isLoggedIn = ref<boolean>(false);

// Переменная для отслеживания видимости меню
const isMenuVisible = ref<boolean>(false);

// Переменная для отслеживания видимости компонента AuthorizationPopUp
const isPopUpVisible = ref<boolean>(false);

// Функция для переключения видимости меню
const toggleMenuVisibility = (): void => {
  isMenuVisible.value = !isMenuVisible.value;
};

// Функция для отображения AuthorizationPopUp при нажатии на "Sign In"
const showPopUp = (): void => {
  isPopUpVisible.value = true;
};

// Функция для скрытия AuthorizationPopUp при закрытии попапа
const closePopUp = (): void => {
  isPopUpVisible.value = false;
};

// Функция для переключения состояния пользователя (для тестирования)
const toggleLogin = (): void => {
  isLoggedIn.value = !isLoggedIn.value;
  isMenuVisible.value = false; // Скрываем меню при переключении состояния
};

// Функция для переключения языка на русский
const switchToRussian = (): void => {
  languageStore.setLocale('ru'); // Меняем язык через Pinia store
};

// Функция для переключения языка на английский
const switchToEnglish = (): void => {
  languageStore.setLocale('en'); // Меняем язык через Pinia store
};
</script>

<template>
  <div class="avatar">
    <button class="avatar__btn" @click="toggleMenuVisibility"></button>
    
    <div v-if="!isLoggedIn" :class="['avatar__container-anonym', { 'is-visible': isMenuVisible }]">
      <div class="avatar__container-languages" :class="{ 'move-right': isMenuVisible }">
        <img src="../assets/images/russia_flags_flag.png" alt="russian" @click="switchToRussian">
        <img src="../assets/images/united_kingdom_flag.png" alt="english" @click="switchToEnglish">
      </div>
      <div class="avatar__container-one" @click="showPopUp">{{ t('auth.signIn') }}</div>
      <div class="avatar__container-two" @click="$router.push('/registration')">{{ t('auth.signUp') }}</div>
    </div>
    
    <!-- Меню для залогиненного пользователя -->
    <div v-if="isLoggedIn" :class="['avatar__container-user', { 'is-visible': isMenuVisible }]">
      <div class="avatar__container-user-one">Account</div>
      <div class="avatar__container-user-two" @click="toggleLogin">Log out</div>
    </div>
  </div>

  <!-- Компонент AuthorizationPopUp -->
  <AuthorizationPopUp v-if="isPopUpVisible" @close="closePopUp" />
</template>


<style scoped>
.avatar {
  margin-top: -10px;
}

.avatar__btn {
  background-image: url(../assets/images/default-avatar.jpg);
  height: 50px;
  width: 50px;
  color: brown;
  border-radius: 50%;
  background-size: cover;
  background-position: -11px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
}

.avatar__btn:hover {
  transform: scale(1.1);
  border: 2px solid var(--color-transition);
}

.avatar__container-anonym,
.avatar__container-user {
  margin-top: 65px;
  gap: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  z-index: 99;
  position: absolute;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.avatar__container-anonym.is-visible,
.avatar__container-user.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.avatar__container-languages {
  scale: 0.5;
  position: absolute;
  display: flex;
  gap: 20px;
  margin-top: -140px;
  margin-left: 20px;
  transition: transform 0.4s ease;
}

.avatar__container-languages.move-right {
  transform: translateX(50px);
}

.avatar__container-languages img {
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease; 
}

.avatar__container-languages img:hover {
  transform: scale(1.2);
  opacity: 0.8;
}

.avatar__container-languages img:active {
  transform: scale(1.1);
  opacity: 0.6;
}


.avatar__container-one,
.avatar__container-user-one,
.avatar__container-two,
.avatar__container-user-two {
  border-radius: 5%;
  width: 140px;
  padding: 10px;
  border: 2px solid #938d8d;
  background-image: linear-gradient(to right, #171a21, #3c3f48);
  cursor: pointer;
}

.avatar__container-one:hover,
.avatar__container-two:hover,
.avatar__container-user-one:hover,
.avatar__container-user-two:hover {
  color: var(--color-transition);
}
</style>
