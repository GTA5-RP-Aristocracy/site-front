<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FooterSection from '@/components/FooterSection.vue'

const { t } = useI18n();

const translate = t
</script>

<template>
  <div class="affiliate-container">
    <h1 class="affiliate-title">{{ translate("affiliateProgram.title") }}</h1>
    
    <section class="affiliate-section">
      <h2>{{ translate("affiliateProgram.sections[0].header") }}</h2>
      <p>{{ translate("affiliateProgram.sections[0].content[0]") }}</p>
      <p>{{ translate("affiliateProgram.sections[0].content[1]") }}</p>
    </section>

    <section class="affiliate-section">
      <h2>{{ translate("affiliateProgram.sections[1].header") }}</h2>
      <p>{{ translate("affiliateProgram.sections[1].content[0]") }}</p>
      <p>{{ translate("affiliateProgram.sections[1].content[1]") }}</p>
    </section>

    <section class="affiliate-section">
      <h2>{{ translate("affiliateProgram.sections[2].header") }}</h2>
      <ol>
        <li>{{ translate("affiliateProgram.sections[2].content[0]") }}</li>
        <li>{{ translate("affiliateProgram.sections[2].content[1]") }}</li>
        <li>{{ translate("affiliateProgram.sections[2].content[2]") }}</li>
        <li>{{ translate("affiliateProgram.sections[2].content[3]") }}</li>
        <li>{{ translate("affiliateProgram.sections[2].content[4]") }}</li>
      </ol>
    </section>

    <section class="affiliate-section">
      <h2>{{ translate("affiliateProgram.sections[3].header") }}</h2>
      <ul>
        <li>{{ translate("affiliateProgram.sections[3].content[0]") }}</li>
        <li>{{ translate("affiliateProgram.sections[3].content[1]") }}</li>
        <li>{{ translate("affiliateProgram.sections[3].content[2]") }}</li>
        <li>{{ translate("affiliateProgram.sections[3].content[3]") }}</li>
      </ul>
    </section>

    <section class="affiliate-section">
      <h2>{{ translate("affiliateProgram.sections[4].header") }}</h2>
      <p>{{ translate("affiliateProgram.sections[4].content[0]") }}</p>
      <ul>
        <li>{{ translate("affiliateProgram.sections[4].content[1]") }}</li>
        <li>{{ translate("affiliateProgram.sections[4].content[2]") }}</li>
        <li>{{ translate("affiliateProgram.sections[4].content[3]") }}</li>
      </ul>
    </section>

    <section class="affiliate-section">
      <h2>{{ translate("affiliateProgram.sections[5].header") }}</h2>
      <p>{{ translate("affiliateProgram.sections[5].content[0]") }}</p>
      <ul>
        <li>{{ translate("affiliateProgram.sections[5].content[1]") }}</li>
        <li>{{ translate("affiliateProgram.sections[5].content[2]") }}</li>
        <li>{{ translate("affiliateProgram.sections[5].content[3]") }}</li>
      </ul>
    </section>
  </div>
  <FooterSection id="only__affiliate"/>
</template>

<style scoped>
.affiliate-container {
  padding-top: 10px;
  height: 1150px;
  color: white;
  background-color: black;
  font-family: var(--font-family-outfit);
  box-shadow: 0px 0px 5px 0px #000;
}

.affiliate-title {
  margin-left: 20px;
}

.affiliate-section ol,
.affiliate-section ul {
  list-style-type: decimal;
}

.affiliate-section li {
  margin-bottom: 10px;
}

h2, h3, p {
  margin-left: 20px;
}

#only__affiliate {
  margin-top: 60px;
}
</style>



