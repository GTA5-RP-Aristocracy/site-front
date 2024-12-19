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
		{
			id: 4,
			name: 'Max Payne',
			email: 'max.payne@bulletmail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 5,
			name: 'Marcus Phoenix',
			email: 'marcus.phoenix@gearsofmail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 6,
			name: 'Naruto Uzumaki',
			email: 'naruto@ramenlove.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 7,
			name: 'Sol Goodman',
			email: 'sol.goodman@bettercallmail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 8,
			name: 'Donald Trump',
			email: 'donald.trump@buildthatmail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 9,
			name: 'The Devil',
			email: 'lucifer@hellmail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 10,
			name: 'Joker',
			email: 'joker@whysoemail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 11,
			name: 'Hideo "Genius" Kojima',
			email: 'hideo.kojima@strandmail.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 12,
			name: 'Jotaro Kujo',
			email: 'jotaro.kujo@starplatinum.com',
			role: 'User',
			status: 'Active',
		},
		{
			id: 13,
			name: 'Vitaly "Arthas" Tsal',
			email: 'uncle.bogdan@slapower.net',
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
