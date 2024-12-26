<script lang="ts" setup>
import { useUserStore } from '@/stores/userStore';
import { ref, computed, reactive } from 'vue';

// Подключение хранилища пользователей
const userStore = useUserStore();

// Получаем пользователей из хранилища
const users = computed(() => userStore.users);

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

interface Filters {
  status?: string;
  role?: string;
  search?: string;
}

// Фильтры
const filters = reactive({
  status: '', // Фильтрация по статусу
  role: '', // Фильтрация по роли
  search: '', // Поиск по имени или email
  alphabetical: null as 'asc' | 'desc' | null, // Сортировка по алфавиту
  dateAdded: null as 'newest' | 'oldest' | null // Сортировка по дате добавления
});

// Фильтрация пользователей
const filteredUsers = computed(() => {
  let result: User[] = [...users.value];

  if (filters.status) {
    result = result.filter((user) => user.status === filters.status);
  }

  if (filters.role) {
    result = result.filter((user) => user.role === filters.role);
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    result = result.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
  }

  if (filters.alphabetical) {
    result.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return filters.alphabetical === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }

  if (filters.dateAdded) {
    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return filters.dateAdded === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }

  return result;
});

// Пагинация
const currentPage = ref(1);
const pageSize = ref(20); // Размер страницы по умолчанию

const displayedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredUsers.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / pageSize.value);
});

// Удаление пользователя
const confirmDelete = (id: number) => {
  const confirmation = confirm('Are you sure you want to delete this user?');
  if (confirmation) {
    userStore.deleteUser(id);
  }
};
</script>

<template>
  <div>
    <h2>User Management</h2>

    <!-- Фильтры -->
    <div class="admin-filters">
      <select v-model="filters.status">
        <option value="">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <select v-model="filters.alphabetical">
        <option value="">No Sort</option>
        <option value="asc">Alphabetical (A-Z)</option>
        <option value="desc">Alphabetical (Z-A)</option>
      </select>

      <select v-model="filters.dateAdded">
        <option value="">No Sort</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      <select v-model="filters.role">
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Moderator">Moderator</option>
      </select>

      <input
        type="text"
        v-model="filters.search"
        placeholder="Search by name or email"
      />
    </div>

    <!-- Таблица пользователей -->
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
        <tr v-for="user in displayedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.status }}</td>
          <td class="admin-button">
            <button @click="confirmDelete(user.id)">Block</button>
            <button class="admin-button-unblock" @click="confirmDelete(user.id)">
              Unblock
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Управление пагинацией -->
    <div class="pagination-controls">
      <button @click="currentPage > 1 && currentPage--" :disabled="currentPage === 1">
        Previous
      </button>

      <span>Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        @click="currentPage < totalPages && currentPage++"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>

      <select v-model="pageSize" @change="currentPage = 1">
        <option value="5">5</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.admin-table {
  width: 95%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: 50px;
}

.admin-filters {
  display: flex;
  gap: 10px;
  margin-left: 50px;
  margin-bottom: 20px;
}

.admin-filters select,
.admin-filters input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.admin-table th,
.admin-table td {
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

.admin-button {
  display: flex;
  justify-content: space-evenly;
}

.admin-button-unblock {
  background-color: #13be27;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
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

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

h2 {
  margin-left: 50px;
}
</style>
