<script lang="ts" setup>
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

const confirmDelete = (id: number) => {
  const confirmation = confirm('Are you sure you want to delete this user?');
  if (confirmation) {
    userStore.deleteUser(id);
  }
};

const users = userStore.users;
</script>

<template>
  <div>
    <h2>User Management</h2>
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.status }}</td>
          <td>
            <button @click="confirmDelete(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.admin-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.admin-table th, .admin-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.admin-table th {
  background-color: #f4f4f4;
  color: #333;
}

.admin-table tbody tr:hover {
  background-color: #f1f1f1;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #ff6347;
  color: white;
}

button:hover {
  background-color: #e55347;
}
</style>
