<script lang="ts" setup>
import { useUserStore } from '@/stores/userStore'
import { ref, computed } from 'vue'

const userStore = useUserStore()

const confirmDelete = (id: number) => {
	const confirmation = confirm('Are you sure you want to delete this user?')
	if (confirmation) {
		userStore.deleteUser(id)
	}
}

const users = userStore.users

const visibleUsersCount = ref<number>(5)

const toggleUserCount = () => {
	visibleUsersCount.value = visibleUsersCount.value === 5 ? users.length : 5
}

const displayedUsers = computed(() => users.slice(0, visibleUsersCount.value))
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
  background-color:rgb(48, 176, 255);
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
