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
        <div class="shop__cars-content">
          <h1 :style="car.style">{{ car.name }}</h1>
          <p>{{ car.description }}</p>
          <img :src="car.image" :alt="car.name">
          <div class="logo-overlay" :id="car.logoId" :style="{ backgroundImage: `url(${car.logoPath})` }">
          </div>
        </div>
            <div class="shop__cars-marks-buy">
                buy now
            </div>
      </div>
    </div>
    <Footer id="only__shop"/>
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
  logoPath: string;
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
    description: 'A Japanese hybrid-electric sportscar with a front-end designed to look like an angry grin might be too whimsical for some, but with a 4-liter V6 engine, 420 hp and a top speed of 180mph, the Dinka Jester still packs a serious punchline.',
    image: 'src/assets/images/cars/jester.svg',
    logoId: 'jester-logo-02',
    logoPath: 'src/assets/images/cars/dinka.png', 
    style: 'font-family: var(--font-family-jester); letter-spacing: 10px; font-size: 50px;',
  },
  {
    id: '03',
    name: 'Redwood Gauntlet',
    description: 'An American muscle car in a class by itself. Roll down the windows and scream in testosterone-filled rage as you gun the engine while stuck in traffic. DNA wipes easily off the leather seats. Now available with exclusive Redwood Livery.',
    image: 'src/assets/images/cars/RedwoodGauntlet.svg',
    logoId: 'redwood-logo-03',
    logoPath: 'src/assets/images/cars/Bravado.webp', 
    style: 'font-family: var(--font-family-redwood);letter-spacing: 5px; font-size: 40px;',
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
    description: 'A Japanese hybrid-electric sportscar with a front-end designed to look like an angry grin might be too whimsical for some, but with a 4-liter V6 engine, 420 hp and a top speed of 180mph, the Dinka Jester still packs a serious punchline.',
    image: 'src/assets/images/cars/jester.svg',
    logoId: 'jester-logo-02',
    logoPath: 'src/assets/images/cars/dinka.png',
    style: 'font-family: var(--font-family-jester); letter-spacing: 10px; font-size: 50px;',
  },
  {
    id: '06',
    name: 'Redwood Gauntlet',
    description: 'An American muscle car in a class by itself. Roll down the windows and scream in testosterone-filled rage as you gun the engine while stuck in traffic. DNA wipes easily off the leather seats. Now available with exclusive Redwood Livery.',
    image: 'src/assets/images/cars/RedwoodGauntlet.svg',
    logoId: 'redwood-logo-03',
    logoPath: 'src/assets/images/cars/Bravado.webp', 
    style: 'font-family: var(--font-family-redwood);letter-spacing: 5px; font-size: 40px;',
  },
]);

</script>

<style scoped>
.shop__dodge img {
  width: 100%; 
  height: auto;
  box-shadow:0px 0px 10px 0px #000;
}


.shop__cars {
  box-shadow:0px 0px 10px 0px #000;
  margin-top: -4px;
  color: white;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
}

.shop__cars-frame {
  position: relative;
}

.shop__cars-marks {
  font-family: var(--font-family-outfit);
  font-size: 28px;
  margin-left: 90px;
  margin-top: 105px;
  position: absolute;
  width: 56px;
  height: 35px;
  text-align: center;
  border-top-left-radius: 20px; 
  background-color: #f1c505;
}


.shop__cars-content {
  position: relative; 
  margin: 140px 0 140px 90px;
  width: 290px;
  height: 390px;
  border: 5px solid #f1c505;
  padding: 20px;
}

.shop__cars-content h1 {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.shop__cars-content p {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.logo-overlay {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 150px; 
  height: 150px; 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  opacity: 0.3; 
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.shop__cars-content:hover .logo-overlay {
  opacity: 1;
}

.shop__cars-marks-buy {
  font-family: var(--font-family-outfit);
  font-size: 24px;
  margin-left: 325px;
  margin-top: -179px;
  position: absolute;
  width: 100px;
  height: 35px;
  cursor: pointer;
  text-align: end;
  border-top-left-radius: 20px; 
  background-color: #f1c505;
  transition: all 0.3s;
}

.shop__cars-marks-buy:hover {
  background-color: #b7981c;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

#only__shop {
  margin-top: 60px;
}

</style>

