<script lang="ts" setup>
import AdminHeader from './AdminHeader.vue';
import AdminUsers from './AdminUsers.vue';
import AdminSidebar from './AdminSidebar.vue';
import AdminDashboard from './AdminDashboard.vue';
</script>

<template>
  <AdminHeader/>
  <AdminSidebar/>
  <div class="admin-panel">
    <AdminUsers />
    <AdminDashboard />
  </div>
</template>

<style scoped>
.admin-panel {
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  margin-left: 50px;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}
</style>
