<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FooterSection from './FooterSection.vue'

const { t } = useI18n()

const translate = t
</script>

<template>
	<div class="cookie-policy">
		<h1>{{ translate('agreementPage.title') }}</h1>
		<p>{{ translate('agreementPage.intro') }}</p>

		<h2>{{ translate('agreementPage.sections[0].header') }}</h2>
		<p>{{ translate('agreementPage.sections[0].content') }}</p>

		<h2>{{ translate('agreementPage.sections[1].header') }}</h2>
		<p>{{ translate('agreementPage.sections[1].content') }}</p>

		<h2>{{ translate('agreementPage.sections[2].header') }}</h2>
		<p>{{ translate('agreementPage.sections[2].content') }}</p>

		<h2>{{ translate('agreementPage.sections[3].header') }}</h2>
		<p>{{ translate('agreementPage.sections[3].content') }}</p>

		<h2>{{ translate('agreementPage.sections[4].header') }}</h2>
		<p>{{ translate('agreementPage.sections[4].content') }}</p>

		<h2>{{ translate('agreementPage.sections[5].header') }}</h2>
		<p>{{ translate('agreementPage.sections[5].content') }}</p>
	</div>
	<FooterSection id="only_agreement" />
</template>

<style scoped>
.cookie-policy {
	width: 100%;
	max-width: none;
	margin: 0;
  padding-top: 50px;
	padding-bottom: 50px;
	font-family: var(--font-family-outfit);
	line-height: 1.6;
	color: #ffffff;
	background-color: #000000;
}

.cookie-policy h1 {
  margin-left: 10px;
	font-size: 24px;
	margin-bottom: 20px;
}

.cookie-policy h2 {
  margin-left: 10px;
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 10px;
}

.cookie-policy p,
.cookie-policy ul {
  margin-left: 10px;
	margin-bottom: 15px;
}

.cookie-policy a {
	color: #663399;
	text-decoration: none;
}

.cookie-policy a:hover {
	text-decoration: underline;
}

.cookie-policy a:visited {
	color: #ffffff;
}

#only_agreement {
	margin-top: 60px;
}
</style>
