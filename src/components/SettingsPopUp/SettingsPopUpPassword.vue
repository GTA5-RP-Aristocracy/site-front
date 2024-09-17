<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue';

const errorMessage = ref<string>('')

</script>

<template>
  <div class="SettingsPopUp">
    <div class="SettingsPopUp__container">
      <input type="password" placeholder="Current password">
      <input  type="password" placeholder="New password"> 
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>Security level</p>
      <input type="password" placeholder="New password confirmation">
      <button  class="SettingsPopUp__btn">Save changes</button>
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
