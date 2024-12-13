import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
	const users = ref([
		{
			id: 1,
			name: 'Joe Peach',
			email: 'Joe.Peach@example.com',
			role: 'Admin',
			status: 'Active',
		},
		{
			id: 2,
			name: 'Pierre Dunn',
			email: 'Pierre.Dunn@example.com',
			role: 'User',
			status: 'Inactive',
		},
		{
			id: 3,
			name: 'Jack Swallows',
			email: 'Jack.Swallows@example.com',
			role: 'Moderator',
			status: 'Active',
		},
	])

	// Удаление пользователя
	const deleteUser = (id: number) => {
		users.value = users.value.filter(user => user.id !== id)
	}

	return { users, deleteUser }
})
