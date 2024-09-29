<script lang="ts" setup>
import SettingsPopUpNickname from '@/components/SettingsPopUp/SettingsPopUpNickname.vue';
import SettingsPopUpEmail from '@/components/SettingsPopUp/SettingsPopUpEmail.vue';
import SettingsPopUpPassword from '@/components/SettingsPopUp/SettingsPopUpPassword.vue';
import SettingsPopUpBio from '@/components/SettingsPopUp/SettingsPopUpBio.vue';
import SettingsPopUpRegion from '@/components/SettingsPopUp/SettingsPopUpRegion.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';

// Переменные для инпутов
const nickname = ref<string>('BiscuitJerry');
const email = ref<string>('dreamrunner891@gmail.com');
const password = ref<string>('*****');
const birth = ref<string>('August 4, 1998');
const bio = ref<string>('Top gamer in the world!');
const region = ref<string>('Russian Federation');
const since = ref<string>('August 21, 2024');
const language = ref<string>('Russian');

// Состояние для каждого поп-апа
const isNicknamePopupOpen = ref<boolean>(false);
const isEmailPopupOpen = ref<boolean>(false);
const isPasswordPopupOpen = ref<boolean>(false);
const isBioPopupOpen = ref<boolean>(false);
const isRegionPopupOpen = ref<boolean>(false);

// Функции для открытия поп-апов
function openNicknamePopup() {
  isNicknamePopupOpen.value = true;
}

function openEmailPopup() {
  isEmailPopupOpen.value = true
}

function openPasswordPopup() {
  isPasswordPopupOpen.value = true
}

function openBioPopup() {
  isBioPopupOpen.value = true
}

function openRegionPopup() {
  isRegionPopupOpen.value = true
}

//  Функции для закрытия поп-апов
function closeNicknamePopup() {
  isNicknamePopupOpen.value = false;
}

function closeEmailPopup() {
  isEmailPopupOpen.value = false;
}

function closePasswordPopup() {
  isPasswordPopupOpen.value = false;
}

function closeBioPopup() {
  isBioPopupOpen.value = false 
}
function closeRegionPopup() {
  isRegionPopupOpen.value = false;
}
</script>

<template>
  <div class="settings">
    <div class="settings__container">
      <div class="settings__avatar">
        <img src="@/assets/images/default-avatar.jpg" alt="Avatar">
        <strong>Settings</strong>
      </div>
      <div class="settings__inputs">
        <h1>My Account</h1>
        <ul class="settings__list">
          <SettingsPopUpNickname
          v-if="isNicknamePopupOpen" 
          @close="closeNicknamePopup" 
          @nickname-changed="nickname = $event"
          />
          <li class="settings__item">
            Nickname <span>{{ nickname }}</span>
            <button @click="openNicknamePopup" class="edit-button">edit</button>
          </li>
         <SettingsPopUpEmail
            v-if="isEmailPopupOpen" 
            @close="closeEmailPopup" 
            @email-changed="email = $event"
          />
          <li class="settings__item">
            Email <span>{{ email }}</span> 
            <button @click="openEmailPopup" class="edit-button">edit</button>
          </li>
            <SettingsPopUpPassword
            v-if="isPasswordPopupOpen"
            @close="closePasswordPopup"
            @password-changed="password = $event"
            />
          <li class="settings__item">
            Password <span>{{ password }}</span> 
            <button @click="openPasswordPopup" class="edit-button">edit</button>
          </li>
          <li class="settings__item">
            Date of Birth <span>{{ birth }}</span> 
            <button class="edit-button hidden">edit</button>
          </li>
          <SettingsPopUpBio
          v-if="isBioPopupOpen"
          @close="closeBioPopup"
          @bio-changed="bio = $event"
          />
          <li class="settings__item">
            Bio <span>{{ bio }}</span> 
            <button @click="openBioPopup" class="edit-button">edit</button>
          </li>
          <SettingsPopUpRegion
          v-if="isRegionPopupOpen"
          @close="closeRegionPopup"
          @region-changed="region = $event"
          /> 
          <li class="settings__item">
            Region <span>{{ region }}</span> 
            <button @click="openRegionPopup" class="edit-button">edit</button>
          </li>
          <li class="settings__item">
            Member Since <span>{{ since }}</span> 
            <button class="edit-button hidden">edit</button>
          </li>
          <li class="settings__item">
            Language <span>{{ language }}</span> 
            <button class="edit-button">edit</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer id="only__settings" />
</template>

<style scoped>
span {
  color: gold;
  font-weight: bold;
}

.hidden {
  visibility: hidden;
}

.settings__container {
  max-width: 95%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #272c36;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.settings__avatar {
  font-weight: var(--font-weight-bold);
  font-size: 64px;
  color: white;
  background-color: black;
  padding: 20px;
}

.settings__avatar strong {
  padding-left: 20px;
}

.settings__avatar img {
  border-radius: 50%;
  width: 100px;
  height: auto;
}

.settings__inputs {
  color: white;
  background-image: linear-gradient(to right, #171a21, #3c3f48);
  display: flex;
  flex-direction: column;
}

.settings__inputs h1 {
  border-bottom: 2px solid white;
  margin-left: 40px;
  width: calc(100% - 100px);
  padding-right: 10px;
  margin-right: auto;
}

.settings__item {
  display: flex;
  justify-content: space-between;
  align-items: left;
  font-size: 20px;
  list-style-type: none;
  border-bottom: 2px solid white;
  width: calc(100% - 60px);
  padding-right: 10px;
  padding-top: 50px;
}

.settings__item:hover {
  background-color: #3c3f48;
  color: gold;
}

.edit-button {
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}

#only__settings {
  margin-top: 60px;
}
</style>
