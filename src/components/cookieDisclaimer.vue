<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n(); 

const showCookieBanner = ref<boolean>(true);

function closeBanner(): void {
  showCookieBanner.value = false;
}

const translate = t;
</script>

<template>
  <div v-if="showCookieBanner" class="cookie-notification">
    <p>
      {{ translate('cookieDisclaimer.cookieText') }}<router-link to="/agreement">{{ translate('cookieDisclaimer.cookieLink') }}</router-link>
    </p>
    <button @click="closeBanner">Понятно</button>
    <div class="cookie-character">
      <img src="../assets/images/cookie.png" alt="cookie">
    </div>
  </div>
</template>


<style scoped>
.cookie-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 303px;
  padding: 15px;
  background-color: #1bcbc8;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #333;
  font-family: var(--font-family-outfit);
	font-weight: var(--font-weight-regular);
  z-index: 1;
}

.cookie-notification p {
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
}

.cookie-notification button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #663399;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}

.cookie-notification button:hover {
  background-color: #7b3f9a; 
}

.cookie-character {
  position: absolute;
  top: 35px;
  right: 30px;
  width: 80px; 
  height: auto; 
  z-index: 10;
}

.cookie-character img {
  width: 100%; 
  height: auto;
}
</style>
