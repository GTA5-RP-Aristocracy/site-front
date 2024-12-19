<script setup lang="ts">
import { useRoute } from 'vue-router'
import {  ref } from 'vue'
import {
	faBars,
	faGauge,
	faUsers,
	faGear,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const route = useRoute() // Получаем текущий маршрут

const isCollapsed = ref<boolean>(false) // Панель развернута по умолчанию

const toggleSidebar = () => {
	isCollapsed.value = !isCollapsed.value // Переключение состояния панели при нажатии на "бургер"
}

// Функция для проверки активного маршрута
const isActive = (path: string) => route.path === path
</script>

<template>
	<div :class="['sidebar', { collapsed: isCollapsed }]">
		<button @click="toggleSidebar" class="burger-btn">
			<font-awesome-icon :icon="faBars" />
		</button>
		<nav>
			<ul>
				<li>
					<router-link
						to="/admin/dashboard"
						:class="{ active: isActive('/admin/dashboard') }"
					>
						<div class="menu-item">
							<font-awesome-icon :icon="faGauge" class="icon" />
							<span class="text highlight">Manager</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link
						to="/admin/users"
						:class="{ active: isActive('/admin/users') }"
					>
						<div class="menu-item">
							<font-awesome-icon :icon="faUsers" class="icon" />
							<span class="text">Users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link
						to="/admin/settings"
						:class="{ active: isActive('/admin/settings') }"
					>
						<div class="menu-item">
							<font-awesome-icon :icon="faGear" class="icon" />
							<span class="text">Settings&nbsp;</span>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/logout" :class="{ active: isActive('/logout') }">
						<div class="menu-item">
							<font-awesome-icon :icon="faRightFromBracket" class="icon" />
							<span class="text">Log out&nbsp;&nbsp;</span>
						</div>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style scoped>
/* Основные стили боковой панели */
.sidebar {
	width: 250px;
	height: 100vh;
	background-color: #333;
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	padding: 10px 0;
	transition: width 0.3s ease;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.sidebar.collapsed {
	width: 50px;
}

/* Кнопка бургер */
.burger-btn {
	background: none;
	border: none;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 50px;
	margin-bottom: 10px;
}

/* Стили для списка */
nav ul {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
}

nav ul li {
	margin: 0;
}

nav ul li a {
	color: #fff;
	text-decoration: none;
	padding: 10px;
	display: flex;
	align-items: center;
	transition: background 0.3s ease;
}

/* Подсвечиваем только иконку при наведении */
nav ul li a:hover .icon {
	color: #ffcc00; /* Задайте желаемый цвет подсветки */
}

/* Подсвечиваем только иконку при активной ссылке */
nav ul li a.active .icon {
	color: #ffcc00; /* Задайте желаемый цвет для активной ссылки */
}

/* Внутренний контейнер ссылки */
.menu-item {
	display: flex;
	align-items: center;
	gap: 10px;
	height: 50px;
	width: 100%;
	position: relative;
}

.menu-item .icon {
	min-width: 20px;
	text-align: center;
	transition: color 0.3s ease;
}

.menu-item .text {
	visibility: visible;
	opacity: 1;
	transition: visibility 0.3s, opacity 0.3s;
}

.sidebar.collapsed .menu-item .text {
	visibility: hidden;
	opacity: 0;
}

/* Центрирование иконок в свернутом состоянии */
.sidebar.collapsed .menu-item {
	justify-content: center;
}

.sidebar.collapsed .menu-item .icon {
	text-align: center;
	margin: 0 auto;
}

</style>