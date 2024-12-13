<script lang="ts" setup>
import AdminUsers from '@/views/AdministratorPanel/AdminUsers.vue';
</script>

<template>
  <div class="admin-panel">
    <h1>Admin Panel</h1>
    <AdminUsers />
  </div>
</template>

<style scoped>
.admin-panel {
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
</style>
