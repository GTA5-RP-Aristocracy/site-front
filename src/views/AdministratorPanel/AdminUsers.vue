<script lang="ts" setup>
import { useUserStore } from '@/stores/userStore'
import { ref, computed, reactive } from 'vue'

const userStore = useUserStore()

const confirmDelete = (id: number) => {
	const confirmation = confirm('Are you sure you want to delete this user?')
	if (confirmation) {
		userStore.deleteUser(id)
	}
}

const users = userStore.users

const filters = reactive({
	status: '', // Фильтрация по статусу
	role: '', // Фильтрация по роли
	search: '', // Поиск по имени или email
	alphabetical: null as 'asc' | 'desc' | null, // по алфавиту
	dateAdded: null as 'newest' | 'oldest' | null // по дате добавления
})

const filteredUsers = computed(() => {
  let result = [...users];

  // Фильтр по статусу
  if (filters.status) {
    result = result.filter((user) => user.status === filters.status);
  }

  // Фильтр по роли
  if (filters.role) {
    result = result.filter((user) => user.role === filters.role);
  }

  // Поиск по имени или email
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    result = result.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
  }

  // Сортировка по алфавиту
if (filters.alphabetical) {
    result.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (filters.alphabetical === 'asc') {
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else if (filters.alphabetical === 'desc') {
            return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
        return 0;
    });
}


  // Сортировка по дате добавления (допустим, дата в поле `createdAt`)
  if (filters.dateAdded) {
    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return filters.dateAdded === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }

  return result;
});

const visibleUsersCount = ref<number>(5)

const toggleUserCount = () => {
	visibleUsersCount.value = visibleUsersCount.value === 5 ? users.length : 5
}

const displayedUsers = computed(() => {
  return filteredUsers.value.slice(0, visibleUsersCount.value);
})
</script>

<template>
	<div>
		<h2>User Management</h2>
		<div class="admin-filters">
			<!-- Фильтры -->
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
						<button
							class="admin-button-unblock"
							@click="confirmDelete(user.id)"
						>
							Unblock
						</button>
					</td>
				</tr>
			</tbody>
			<button class="filter" @click="toggleUserCount">
				{{ visibleUsersCount === 5 ? 'Show All' : 'Only 5' }}
			</button>
		</table>
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

.filter {
	background-color: rgb(48, 176, 255);
	margin-top: 10px;
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

h2 {
	margin-left: 50px;
}
</style>
