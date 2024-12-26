import { defineStore} from 'pinia'
import {ref} from 'vue'

export const useUserSettings = defineStore('user', () => {
	const uuid = ref('') // ID пользователя

	const setUUID = (id: string) => {
		uuid.value = id // Устанавливаем UUID
	}

	const clearUserData = () => {
		uuid.value = '' // Сбрасываем данные пользователя
	}

	return {
		uuid, // Экспортируем состояние
		setUUID, // Экспортируем действия
		clearUserData,
	}
})
