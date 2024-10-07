<script lang='ts' setup>
import Footer from '@/components/Footer.vue';

const downloadFile = () => {
  const fileId = "1uabrm9Lg3QRicNvSn2iRgdIFZreKXFVu"; // нужно будет заменить ссылку на лаунчер
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`; // вставляем в дефолтный шаблон наш id лаунчера

  // Создаем временную ссылку и кликаем по ней
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = ''; // Пустое значение позволяет браузеру определить имя файла автоматически
  a.click();
};
</script>

<template>
  <div>
    <div class="download">
      <img src="../assets/images/download-car.svg" alt="download-car">
    </div>
    <div class="download__content">
      <img class="download__content__arrows-top" src="../assets/images/arrows-top.svg" alt="arrows-top">
      <div class="download__content__register">
        <p class="download__content__step">ШАГ 1</p>
        <h1 class="download__content__main"><br>зарегистрируйтесь<br/> на сайте</h1>
        <p class="download__content__description">вам потребуется официальная копия игры Grand Theft Auto V.</p>
        <button class="download__content__btn">РЕГИСТРАЦИЯ</button>
      </div>
      <div class="download__content__launcher">
        <p class="download__content__step">ШАГ 2</p>
        <h1 class="download__content__main"><br>скачайте<br/> лаунчер</h1>
        <p class="download__content__description">вам нужен наш лаунчер для игры на сервере.</p>
        <button class="download__content__btn" @click="downloadFile">СКАЧАТЬ</button>
      </div>
      <img class="download__content__arrows-bottom" src="../assets/images/arrows-bottom.svg" alt="arrows-bottom.svg">
      <div class="download__content__read">
        <p class="download__content__step">ШАГ 3</p>
        <h1 class="download__content__main"><br>прочитайте<br/> правила сервера</h1>
        <p class="download__content__description">чтобы играть на нашем сервере, вам необходимо знать наши правила.</p>
        <button class="download__content__btn">ЧИТАТЬ ПРАВИЛА</button>
      </div>
    </div>
    <Footer id="only__download"/>
  </div>
</template>


<style scoped>

.download img {
  width: 100%; 
  height: auto;
  box-shadow:0px 0px 10px 0px #000;
}

.download__content {
  margin-top: -4px;
  padding-top: 76px;
  padding-bottom: 200px;
  background-color: #000;
  box-shadow:0px 0px 5px 0px #000;
  color: white;
}

.download__content__register {
  width: 385px;
  height: 290px;
  margin-left: 191px;
}

.download__content__arrows-top {
  width: 40%;
  position: absolute;
  z-index: 1;
  margin-left: 420px;
  bottom: -54%;
  transform: rotate(349deg);
}

.download__content__arrows-bottom {
  width: 46%;
  height: auto;
  position: absolute;
  z-index: 1;
  margin-left: 300px;
  bottom: -110%;
  transform: rotate(357deg);
}


.download__content__launcher {
  margin-left: 1000px;
  margin-bottom: 100px;
  width: 385px;
  height: 290px; 
}


.download__content__read {
  margin-left: 191px;
  margin-bottom: 50px;
  width: 385px;
  height: 290px;
}

.download__content__step {
  font-family: var(--font-family-outfit);
  font-weight: var(----font-weight-black);
  font-size: 30px;
  text-transform: uppercase;
  color: #ff7a00;
}
.download__content__main {
  font-family: var(--font-family-outfit);
  font-weight: var(----font-weight-bold);
  font-size: 40px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
}
.download__content__description {
  font-family: var(--font-family-outfit);
  font-weight: var(--font-weight);
  font-size: 20px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff;
}

.download__content__btn {
  font-family: var(--font-family-outfit);
  font-weight: var(--font-weight);
  font-size: 32px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  border-radius: 10px;
  width: 385px;
  height: 100px;
  box-shadow: inset 0 0 4px 0 #000;
  background: #ff7a00;
  cursor: pointer;
  transition: opacity 0.3s;
  transition: background-color 0.3s;
}

.download__content__btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  transform: scale(1.1);
  background-color: #ff9500;
}





#only__download {
  margin-top: 60px;
}

</style>