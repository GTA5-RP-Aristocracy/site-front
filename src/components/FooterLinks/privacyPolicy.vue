<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FooterSection from '@/components/FooterSection.vue'

const { t } = useI18n();

const translate = t
</script>


<template>
  <div class="privacy-container">
    <h1 class="privacy-title">{{ translate("privacy.title") }}</h1>
    
    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[0].header") }}</h2>
      <p>{{ translate("privacy.sections[0].content[0]") }}</p>
      <p>{{ translate("privacy.sections[0].content[1]") }}</p>
      <p>{{ translate("privacy.sections[0].content[2]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[1].header") }}</h2>
      <p>{{ translate("privacy.sections[1].content[0]") }}</p>
      <p>{{ translate("privacy.sections[1].content[1]") }}</p>
      <p>{{ translate("privacy.sections[1].content[2]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[2].header") }}</h2>
      <p>{{ translate("privacy.sections[2].content[0]") }}</p>
      <p>{{ translate("privacy.sections[2].content[1]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[3].header") }}</h2>
      <p>{{ translate("privacy.sections[3].content[0]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[4].header") }}</h2>
      <p>{{ translate("privacy.sections[4].content[0]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[5].header") }}</h2>
      <p>{{ translate("privacy.sections[5].content[0]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[6].header") }}</h2>
      <p>{{ translate("privacy.sections[6].content[0]") }}</p>
    </section>

    <section class="privacy-section">
      <h2>{{ translate("privacy.sections[7].header") }}</h2>
      <p>{{ translate("privacy.sections[7].content[0]") }}</p>
    </section>
  </div>
  <FooterSection id="only__privacy" />
</template>

<style scoped>
.privacy-container {
  padding-top: 10px;
  height: 1150px;
  color: white;
  background-color: black;
  font-family: var(--font-family-outfit);
  box-shadow: 0px 0px 5px 0px #000;
}

html[lang='en'] .privacy-container {
  padding-top: 10px;
  height: 1100px;
  color: white;
  background-color: black;
  font-family: var(--font-family-outfit);
  box-shadow: 0px 0px 5px 0px #000;
}

.privacy-title {
  margin-left: 20px;
}

.privacy-section ol {
  list-style-type: decimal;
}

.privacy-section li {
  margin-bottom: 10px;
}

h2, h3, p {
  margin-left: 20px;
}

#only__privacy {
  margin-top: 60px;
}
</style>

