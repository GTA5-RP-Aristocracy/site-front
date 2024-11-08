<script lang="ts" setup>
import { ref, type Ref } from 'vue';

const imageSrc: Ref<string> = ref(new URL('@/assets/images/Forbidden.png', import.meta.url).href);
</script>

<template>
<div class="forbidden">
    <img :src="imageSrc" alt="Forbidden 403 access denied" />
  </div>
</template>

<style scoped>
.forbidden {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>