<script lang="ts" setup>
import { ref, type Ref } from 'vue';

const imageSrc: Ref<string> = ref(new URL('@/assets/images/404.png', import.meta.url).href);
</script>

<template>
<div class="not-found">
    <img :src="imageSrc" alt="Page not found" />
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

