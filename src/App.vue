<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Avatar from './components/Avatar.vue';
import { defineAsyncComponent, Suspense } from 'vue';
import { useI18n } from 'vue-i18n';


const {t, locale} = useI18n({useScope: 'global'})
const Loader = defineAsyncComponent(() => import('@/components/Loader.vue'));

//подстраиваем стили в зависимости от языка
onMounted(() => {
  document.documentElement.setAttribute('lang', locale.value);
});

watch(locale, (newLang) => {
  document.documentElement.setAttribute('lang', newLang);
});
</script>.

<template>
  <Suspense>
    <template #default>
      <div>
        <div class="nav">
          <div class="nav__content">
            <div class="nav__server-status">
              <img
                src="./assets/images/server-status.svg"
                :alt="t('images.serverStatusAlt')"
                @error="console.error('Error loading server-status.svg')"
              />
              <div class="nav__server-status-column">
                <p>{{ t('nav.serverStatus.title') }} <span>{{ t('nav.serverStatus.online') }}</span></p>
                <p>
                  <strong>{{ t('nav.serverStatus.playersOnline') }}</strong>
                </p>
              </div>
            </div>
            <div class="nav__pages">
              <ul class="nav__pages-list">
                <li>
                  <router-link to="/">{{ t('nav.pages.home') }}</router-link>
                </li>
                <li>
                  <router-link to="/shop">{{ t('nav.pages.shop') }}</router-link>
                </li>
                <li>
                  <router-link to="/rules">{{ t('nav.pages.rules') }}</router-link>
                </li>
                <li>
                  <a href="https://discord.gg/K4QADYZx" target="_blank">{{ t('nav.pages.discord') }}</a>
                </li>
                <li>
                  <router-link to="/download">{{ t('nav.pages.download') }}</router-link>
                </li>
                <li>
                  <Avatar />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <router-view />
      </div>
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>


<style scoped>
.nav {
  background-color: #fff;
}

.nav__content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.nav__server-status {
  margin-left: 140px;
  margin-top: 41px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-family: var(--font-family-outfit);
  font-weight: var(--font-weight-bold);
}

.nav__server-status img {
  width: 60px;
  height: 60px;
}

.nav__server-status-column p {
  padding-top: 7px;
  margin: 0;
}

.nav__server-status-column span {
  font-family: var(--font-family-outfit);
  font-weight: var(--font-weight-regular);
  color: hsl(123, 67%, 43%);
  text-shadow: 1px 1px 1px #00ff48;
}

.nav__server-status-column strong {
  font-family: var(--font-family-outfit);
  font-weight: var(--font-weight-regular);
}

.nav__pages {
  margin: 47px 190px 0 0;
}

.nav__pages-list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 18px;
  font-family: var(--font-family-outfit);
  font-weight: var(--font-weight-regular);
}

.nav__pages-list img {
  width: 30px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.nav__pages-list img:hover {
  transform: scale(1.2);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.playing {
  animation: pulse 1s infinite;
}

.nav__pages-list li {
  display: inline;
  margin-right: 20px;
}

.nav__pages-list a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav__pages-list a:hover {
  color: var(--color-transition);
}
</style>
