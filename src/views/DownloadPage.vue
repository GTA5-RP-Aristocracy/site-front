<script lang="ts" setup>
import Footer from '@/components/FooterSection.vue'
</script>

<template>
	<div>
		<div class="download">
			<img
				src="../assets/images/download-car.svg"
				:alt="$t('downloadCarAlt')"
			/>
		</div>
		<div class="download__content">
			<img
				class="download__content__arrows-top"
				src="../assets/images/arrows-top.svg"
				:alt="$t('arrowsTopAlt')"
			/>
			<div class="download__content__register">
				<p class="download__content__step">{{ $t('step1.title') }}</p>
				<h1 class="download__content__main"><br />{{ $t('step1.heading') }}</h1>
				<p class="download__content__description">
					{{ $t('step1.description') }}
				</p>
				<router-link to="/registration" custom v-slot="{ navigate }">
					<button class="download__content__btn" @click="navigate">
						{{ $t('step1.button') }}
					</button>
				</router-link>
			</div>
			<div class="download__content__launcher">
				<p class="download__content__step">{{ $t('step2.title') }}</p>
				<h1 class="download__content__main"><br />{{ $t('step2.heading') }}</h1>
				<p class="download__content__description">
					{{ $t('step2.description') }}
				</p>
				<button class="download__content__btn">
					{{ $t('step2.button') }}
				</button>
			</div>
			<img
				class="download__content__arrows-bottom"
				src="../assets/images/arrows-bottom.svg"
				:alt="$t('arrowsBottomAlt')"
			/>
			<div class="download__content__read">
				<p class="download__content__step">{{ $t('step3.title') }}</p>
				<h1 class="download__content__main"><br />{{ $t('step3.heading') }}</h1>
				<p class="download__content__description">
					{{ $t('step3.description') }}
				</p>
				<router-link to="/rules" custom v-slot="{ navigate }">
					<button class="download__content__btn" @click="navigate">
						{{ $t('step3.button') }}
					</button>
				</router-link>
			</div>
		</div>
		<Footer id="only__download" />
	</div>
</template>

<style scoped>
.download img {
	width: 100%;
	height: auto;
	box-shadow: 0px 0px 10px 0px #000;
}

.download__content {
	margin-top: -4px;
	padding-top: 76px;
	padding-bottom: 200px;
	background-color: #000;
	box-shadow: 0px 0px 5px 0px #000;
	color: white;
}

.download__content__register {
	width: 385px;
	height: 290px;
	margin-left: 191px;
}

.download__content__arrows-top {
	width: 50%;
	position: absolute;
	margin-left: 300px;
	bottom: -54%;
	transform: rotate(353deg);
}

html[lang='ru'] .download__content__arrows-top {
	width: 50%;
	position: absolute;
	margin-left: 300px;
	bottom: -54%;
	transform: rotate(353deg);
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
	transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
	z-index: 77;
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
