<script lang='ts' setup>
import { ref } from 'vue';


const login = ref<string>('')
const password = ref<number>(0)

function loginValidation (login: string) : string {
  if( login.length < 4) {
    return 'Логин должен иметь минимум 4 символа'
  }
  else if(login.length > 32){
    return "Логин должен иметь меньше 40 символов"
  }
  else return login
}

// function passwordValidation (password: number) : number {
//   if( password.value < 4) {
//     return 'Логин должен иметь минимум 4 символа'
//   }
// }

</script>

<template>
    <div class="video-pop-up__overlay">
        <div class="video-pop-up__interface">
          <strong>Aristocracy</strong>
            <div class="video-pop-up__interface__container">
                <input  v-model="login" type="text" placeholder="Имя пользователя / эл.почта" minlength="4" maxlength="32">
                    <input type="password" placeholder="Пароль" minlength="4" maxlength="40">
                        <button type="submit">Войти</button>
                    </div>
                    <div class="video-pop-up__reset-password">
                        <a href="#">Забыли пароль?</a>
                        <a href="#">Зарегистрироваться сейчас</a>
                    </div>
                </div>
            </div>
        </template>

<style scoped>
body {
  font-family: var(--font-family-outfit);
}

a {
  color: inherit; 
  text-decoration: none !important;
}

strong {
  position: absolute;
  color: rgb(173, 16, 16);
  font-family: var(--font-family-satisfy);
  right: 40%;
  top: 5%;
  font-size: 46px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

  .video-pop-up__overlay {
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}


.video-pop-up__interface {
  background-image: url(../assets/images/girl.png);
  position: relative;
  border-radius: 5%;
  margin-left: 400px;
  margin-top: 150px;
  width: 700px;
  height: 500px;
  background-color: white;
  z-index: 11;
  background-size: contain; 
  background-repeat: no-repeat; 
}

.video-pop-up__interface__container {
  
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 500px;
}


.video-pop-up__interface input {
  margin-left: 150px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
}

.video-pop-up__interface button {
    margin-left: 250px;
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

.video-pop-up__interface button:hover {
    background-color: #FFA500;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.video-pop-up__reset-password {
  margin-top: 100px;
  display: flex;
  gap: 15px;
  margin-left: 190px;
  font-weight: var(--font-weight-bold);
}

.video-pop-up__reset-password a:hover {
    color: #FFA500;
    transform: scale(1.1);
}


</style>