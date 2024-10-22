<script lang='ts' setup>
import { onMounted, ref } from 'vue';

const countries = ref<string[]>([]);
const isOpen = ref(false);  // Управление открытием/закрытием списка
const selectedCountry = ref<string | null>(null);  // Сохранение выбранной страны

const emit = defineEmits(['close', 'region-changed'])

function resetForm () {
  countries.value = []
}

function closePopUp(){
  resetForm()
  emit('close')
}

onMounted(async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    countries.value = data.map((country: any) => country.name.common);
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
});

// Функция для выбора страны и закрытия списка
function selectCountry(country: string) {
  selectedCountry.value = country;
  isOpen.value = false; 
}

// Функция для отправки изменений на сервер
async function submitChanges() {
  if (selectedCountry.value) {
    try {
      const response = await fetch('https://your-server-endpoint.com/update-country', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: selectedCountry.value }),
      });

      if (response.ok) {
        console.log('Changes submitted successfully');
      } else {
        console.error('Failed to submit changes');
      }
    } catch (error) {
      console.error('Error while submitting changes:', error);
    }
  } else {
    console.warn('No country selected');
  }
}
</script>

<template>
  <div class="SettingsPopUpRegion" @click.self="closePopUp">
    <div class="SettingsPopUpRegion__container">
      <div class="SettingsPopUpRegion__country-select" @click="isOpen = !isOpen">
        <span>{{ selectedCountry ? selectedCountry : 'Select your country' }}</span>
        <ul v-if="isOpen" class="SettingsPopUpRegion__country-list">
          <li 
            v-for="country in countries" 
            :key="country" 
            :value="country"
            @click="selectCountry(country)"
          >
            {{ country }}
          </li>
        </ul>
      </div>
      <button class="SettingsPopUpRegion__btn" @click="submitChanges">Request changes</button>
    </div>
  </div>
</template>
<style scoped>
.SettingsPopUpRegion {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.SettingsPopUpRegion__container {
  background-image: url(@/assets/images/Bandit-PopUp-Settings.png);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 200px;
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

.SettingsPopUpRegion__country-select {
  margin-top: 50px;
  margin-left: 120px;
  background-color: #f3f3f3;
  border: 2px solid black;
  padding: 15px;
  border-radius: 10px;
  width: 400px;  /* Это ширина списка */
  font-size: 16px;
  color: black;
  outline: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
  position: relative;
}

.SettingsPopUpRegion__country-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  background-color: #f3f3f3;
  border: 2px solid black;
  position: absolute;
  top: 60px;
  width: 96%;  /* Ширина списка соответствует ширине контейнера */
  z-index: 100;
}

.SettingsPopUpRegion__country-list li {
  padding: 10px;
  cursor: pointer;
}

.SettingsPopUpRegion__country-list li:hover {
  background-color: #ffa500;
}

.SettingsPopUpRegion__btn {
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

.SettingsPopUpRegion__btn:hover {
  background-color: #ffa500;
  transform: scale(1.05);
}

.error {
  color: red;
}
</style>
