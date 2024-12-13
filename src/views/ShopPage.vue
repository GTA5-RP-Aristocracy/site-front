<script lang="ts" setup>
import { ref } from 'vue'
import Footer from '@/components/FooterSection.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Определите интерфейс для объектов в массиве
interface Car {
	id: string
	name: string
	description: string
	image: string
	logoId: string
	logoPath: string
	style: string
}

// Объявляем реактивный массив с типом
const cars = ref<Car[]>([
	{
		id: '01',
		name: 'Buffalo',
		description: 'buffalo.description',
		image: new URL('@/assets/images/cars/buffalo.svg', import.meta.url).href,
		logoId: 'buffalo-logo-01',
		logoPath: new URL('@/assets/images/cars/buffalo-logo.png', import.meta.url).href,
		style: 'font-family: var(--font-family-buffalo); letter-spacing: 10px; font-size: 50px;',
	},
	{
		id: '02',
		name: 'Jester',
		description: 'jester.description',
		image: new URL('@/assets/images/cars/jester.svg', import.meta.url).href,
		logoId: 'jester-logo-02',
		logoPath: new URL('@/assets/images/cars/dinka.png', import.meta.url).href,
		style: 'font-family: var(--font-family-jester); letter-spacing: 10px; font-size: 50px;',
	},
	{
		id: '03',
		name: 'Redwood gauntlet',
		description: 'redwood_gauntlet.description',
		image: new URL('@/assets/images/cars/RedwoodGauntlet.svg', import.meta.url).href,
		logoId: 'redwood-logo-03',
		logoPath: new URL('@/assets/images/cars/Bravado.webp', import.meta.url).href,
		style: 'font-family: var(--font-family-redwood); letter-spacing: 5px; font-size: 40px;',
	},
	{
		id: '04',
		name: 'Buffalo',
		description: 'buffalo.description',
		image: new URL('@/assets/images/cars/buffalo.svg', import.meta.url).href,
		logoId: 'buffalo-logo-01',
		logoPath: new URL('@/assets/images/cars/buffalo-logo.png', import.meta.url).href,
		style: 'font-family: var(--font-family-buffalo); letter-spacing: 10px; font-size: 50px;',
	},
	{
		id: '05',
		name: 'Jester',
		description: 'jester.description',
		image: new URL('@/assets/images/cars/jester.svg', import.meta.url).href,
		logoId: 'jester-logo-02',
		logoPath: new URL('@/assets/images/cars/dinka.png', import.meta.url).href,
		style: 'font-family: var(--font-family-jester); letter-spacing: 10px; font-size: 50px;',
	},
	{
		id: '06',
		name: 'Redwood gauntlet',
		description: 'redwood_gauntlet.description',
		image: new URL('@/assets/images/cars/RedwoodGauntlet.svg', import.meta.url).href,
		logoId: 'redwood-logo-03',
		logoPath: new URL('@/assets/images/cars/Bravado.webp', import.meta.url).href,
		style: 'font-family: var(--font-family-redwood); letter-spacing: 5px; font-size: 40px;',
	},
])
</script>

<template>
	<div class="shop">
		<div class="shop__dodge">
			<img src="/src/assets/images/dodge-challenger.png" alt="dodge" />
		</div>
		<div class="shop__cars">
			<div class="shop__cars-frame" v-for="(car, index) in cars" :key="index">
				<div class="shop__cars-marks">
					{{ car.id }}
				</div>
				<div class="shop__cars-content">
					<h1 :style="car.style">{{ t(car.name) }}</h1>
					<p>{{ t(car.description) }}</p>
					<img :src="car.image" :alt="car.name" />
					<div
						class="logo-overlay"
						:id="car.logoId"
						:style="{ backgroundImage: `url(${car.logoPath})` }"
					></div>
				</div>
				<div class="shop__cars-marks-buy">
					{{ t('shop.buy_now') }}
				</div>
			</div>
		</div>
		<Footer id="only__shop" />
	</div>
</template>

<style scoped>
.shop__dodge img {
	width: 100%;
	height: auto;
	box-shadow: 0px 0px 10px 0px #000;
}

.shop__cars {
	box-shadow: 0px 0px 10px 0px #000;
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
	height: 430px;
	border: 5px solid #f1c505;
	padding: 20px;
}

html[lang='ru'] .shop__cars-content {
	position: relative;
	margin: 140px 0 140px 90px;
	width: 290px;
	height: 430px;
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
