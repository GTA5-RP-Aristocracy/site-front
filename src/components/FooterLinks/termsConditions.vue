<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FooterSection from '@/components/FooterSection.vue'

const { t } = useI18n();

const translate = t
</script>

<template>
  <div class="terms-container">
    <h1 class="terms-title">{{ translate("terms.title") }}</h1>
    
    <section class="terms-section">
      <h2>{{ translate("terms.sections[0].header") }}</h2>
      <p>{{ translate("terms.sections[0].content[0]") }}</p>
      <p>{{ translate("terms.sections[0].content[1]") }}</p>
    </section>

    <section class="terms-section">
      <h2>{{ translate("terms.sections[1].header") }}</h2>
      <p>{{ translate("terms.sections[1].content[0]") }}</p>
      <p>{{ translate("terms.sections[1].content[1]") }}</p>
      <p>{{ translate("terms.sections[1].content[2]") }}</p>
    </section>

    <section class="terms-section">
      <h2>{{ translate("terms.sections[2].header") }}</h2>
      <p>{{ translate("terms.sections[2].content[0]") }}</p>
      <p>{{ translate("terms.sections[2].content[1]") }}</p>
    </section>

    <section class="terms-section">
      <h2>{{ translate("terms.sections[3].header") }}</h2>
      <p>{{ translate("terms.sections[3].content[0]") }}</p>
      <p>{{ translate("terms.sections[3].content[1]") }}</p>
    </section>

    <section class="terms-section">
      <h2>{{ translate("terms.sections[4].header") }}</h2>
      <p>{{ translate("terms.sections[4].content[0]") }}</p>
      <p>{{ translate("terms.sections[4].content[1]") }}</p>
    </section>

    <section class="terms-section">
      <h2>{{ translate("terms.sections[5].header") }}</h2>
      <p>{{ translate("terms.sections[5].content[0]") }}</p>
      <p>{{ translate("terms.sections[5].content[1]") }}</p>
    </section>
  </div>
  <FooterSection id="only__terms" />
</template>

<style scoped>
h2, p {
  margin-left: 20px;
}

.terms-title {
  margin-left: 20px;
}

.terms-container {
  padding-top: 10px;
  height: 900px;
  color: white;
  background-color: black;
  font-family: var(--font-family-outfit);
  box-shadow: 0px 0px 5px 0px #000;
}


.terms-section ol {
  list-style-type: decimal;
}

.terms-section li {
  margin-bottom: 10px;
}

#only__terms {
	margin-top: 60px;
}
</style>
