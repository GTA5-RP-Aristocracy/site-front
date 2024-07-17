<template>
  <div class="shop">
    <div class="shop__dodge">
      <img src="/src/assets/images/dodge-challenger.png" alt="dodge">
    </div>
    <div class="shop__cars">
      <div class="shop__cars-frame" v-for="(car, index) in cars" :key="index">
        <div class="shop__cars-marks">
          {{ car.id }}
        </div>
        <div class="shop__cars-content"
          @mouseover="showLogo(car.logoId)" @mouseleave="hideLogo(car.logoId)">
          <h1 :style="car.style">{{ car.name }}</h1>
          <p>{{ car.description }}</p>
          <img :src="car.image" :alt="car.name">
          <div class="logo-overlay" :id="car.logoId" :style="{ backgroundImage: `url(${car.logoPath})` }"></div>
        </div>
        <div class="shop__cars-marks-buy">
          buy now
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue';

// Определите интерфейс для объектов в массиве
interface Car {
  id: string;
  name: string;
  description: string;
  image: string;
  logoId: string;
  logoPath: string; // Добавлено новое свойство
  style: string;
}

// Объявляем реактивный массив с типом
const cars = ref<Car[]>([
  {
    id: '01',
    name: 'Buffalo',
    description: 'The Bravado marketing department know just what we need - another resurrected 1960s muscle car for the over-muscled EDM generation. It\'s a vehicle with aggressive lines for aggressive drivers.',
    image: 'src/assets/images/cars/buffalo.svg',
    logoId: 'buffalo-logo-01',
    logoPath: 'src/assets/images/cars/buffalo-logo.png', 
    style: 'font-family: var(--font-family-buffalo); letter-spacing: 10px; font-size: 50px;',
  },
  {
    id: '02',
    name: 'Jester',
    description: 'The Bravado marketing department know just what we need - another resurrected 1960s muscle car for the over-muscled EDM generation. It\'s a vehicle with aggressive lines for aggressive drivers.',
    image: 'src/assets/images/cars/jester.svg',
    logoId: 'jester-logo-02',
    logoPath: 'src/assets/images/cars/jester-logo.png', 
    style: '',
  },
  {
    id: '03',
    name: 'Redwood Gauntlet',
    description: 'The Bravado marketing department know just what we need - another resurrected 1960s muscle car for the over-muscled EDM generation. It\'s a vehicle with aggressive lines for aggressive drivers.',
    image: 'src/assets/images/cars/RedwoodGauntlet.svg',
    logoId: 'redwood-logo-03',
    logoPath: 'src/assets/images/cars/redwood-logo.png', 
    style: '',
  },
   {
    id: '04',
    name: 'Buffalo',
    description: 'The Bravado marketing department know just what we need - another resurrected 1960s muscle car for the over-muscled EDM generation. It\'s a vehicle with aggressive lines for aggressive drivers.',
    image: 'src/assets/images/cars/buffalo.svg',
    logoId: 'buffalo-logo-01',
    logoPath: 'src/assets/images/cars/buffalo-logo.png', 
    style: 'font-family: var(--font-family-buffalo); letter-spacing: 10px; font-size: 50px;',
  },
  {
    id: '05',
    name: 'Jester',
    description: 'The Bravado marketing department know just what we need - another resurrected 1960s muscle car for the over-muscled EDM generation. It\'s a vehicle with aggressive lines for aggressive drivers.',
    image: 'src/assets/images/cars/jester.svg',
    logoId: 'jester-logo-02',
    logoPath: 'src/assets/images/cars/jester-logo.png',
    style: '',
  },
  {
    id: '06',
    name: 'Redwood Gauntlet',
    description: 'The Bravado marketing department know just what we need - another resurrected 1960s muscle car for the over-muscled EDM generation. It\'s a vehicle with aggressive lines for aggressive drivers.',
    image: 'src/assets/images/cars/RedwoodGauntlet.svg',
    logoId: 'redwood-logo-03',
    logoPath: 'src/assets/images/cars/redwood-logo.png', 
    style: '',
  },
]);

</script>

<style scoped>
.shop__dodge img {
  width: 100%; 
  height: auto; 
}

.shop__cars {
  color: white;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 78px;
}

.shop__cars-frame {
  position: relative; /* Для позиционирования вложенных элементов */
}

.shop__cars-content {
  position: relative; /* Для позиционирования вложенных элементов */
  margin: 140px 0 140px 90px;
  width: 290px;
  height: 390px;
  border: 5px solid #f1c505;
  padding: 20px;
}

.logo-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 150px; 
  height: 150px; 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  opacity: 0.3; 
  pointer-events: none;
  z-index: 1; /* Находится выше содержимого, но ниже при наведении */
  transition: opacity 0.3s ease; /* Плавное изменение прозрачности */
}

.shop__cars-content:hover .logo-overlay {
  opacity: 1; /* Устанавливаем непрозрачность при наведении */
}
</style>

