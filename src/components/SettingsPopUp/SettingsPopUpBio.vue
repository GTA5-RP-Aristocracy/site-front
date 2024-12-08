<script lang="ts" setup>
import { ref, watch } from 'vue'
const countChar = ref<number>(0)
const watchCountChar = ref<string>('')
const bioError = ref<string>('')

const emit = defineEmits(['close', 'bio-changed'])

function resetForm() {
	watchCountChar.value = ''
	bioError.value = ''
}

function closePopUp() {
	resetForm()
	emit('close')
}

watch(watchCountChar, (newValue: string) => {
	countChar.value = newValue.length
})

function bioErrorClear() {
	if (bioError.value) {
		bioError.value = ''
	}
}

const ChangeBio = async () => {
	try {
		const response = await fetch('http://185.218.0.121:8080/user/bio', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				bio: watchCountChar.value,
			}),
		})

		if (response.ok) {
			const data = await response.json()

			if (data.success) {
				bioError.value = ''
				bioError.value = 'Invalid characters are used'
			}
		} else {
			bioError.value = 'Failed to process the request'
		}
	} catch {
		bioError.value = 'Server connection error'
	}
}
</script>

<template>
	<div class="SettingsPopUpBio" @click.self="closePopUp">
		<div class="SettingsPopUpBio__container">
			<textarea
				name="bio"
				placeholder="Update status..."
				maxlength="300"
				v-model="watchCountChar"
				@focus="bioErrorClear"
			></textarea>
			<p v-if="bioError" class="error">{{ bioError }}</p>
			<p :class="{ 'max-char': countChar >= 300 }">{{ countChar }}/ 300</p>
			<button class="SettingsPopUpBio__btn" @click.prevent="ChangeBio">
				Request changes
			</button>
		</div>
	</div>
</template>

<style scoped>
textarea {
	margin-top: 50px;
	margin-left: 120px;
	background-color: #f3f3f3;
	border: 2px solid black;
	padding: 15px;
	border-radius: 10px;
	width: 400px;
	height: 200px;
	font-size: 16px;
	color: black;
	resize: none;
	outline: none;
	transition: background-color 0.3s ease;
}

textarea::placeholder {
	color: #999;
}

textarea:focus {
	background-color: #f7f7f7;
	border-color: #ffa500;
}

p {
	margin-left: 85px;
	color: #333;
	font-size: 14px;
}

.max-char {
	color: red;
}

.SettingsPopUpBio__btn {
	border: none;
	border-radius: 10%;
	width: 160px;
	height: 50px;
	font-family: var(--font-family-outfit);
	font-weight: var(--font-weight-bold);
	font-size: 20px;
	text-align: center;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s, transform 0.3s ease;
	margin-left: 100px;
}

.SettingsPopUpBio__btn:hover {
	background-color: #ffa500;
	transform: scale(1.05);
}

.SettingsPopUpBio {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
}

.SettingsPopUpBio__container {
	background-image: url(@/assets/images/Bandit-PopUp-Settings.png);
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-radius: 5%;
	margin-left: 400px;
	margin-top: 150px;
	justify-content: center;
	align-items: center;
	width: 700px;
	height: 500px;
	background-color: white;
	z-index: 11;
	background-size: 26%;
	background-repeat: no-repeat;
	background-position: 10px 15px;
}

.error {
	color: red;
}
</style>
