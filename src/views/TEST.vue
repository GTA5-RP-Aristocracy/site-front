<script lang='ts' setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <div class="test">
      <button class="test__btn">
            <router-link to="/settings">Settings demo</router-link>
      </button>
    </div>
    <Footer/>
  </div>
  <router-view />
</template>

<style  scoped>
.test__btn {
  font-family: var(--font-weight-bold);
  font-size: 24px;
  border: 5px solid rgb(255, 0, 174);
  padding: 50px; /* Увеличиваем padding для более аккуратного вида */
  margin-left: 500px;
  background-color: black;
  transform: rotate(45deg); /* Поворачиваем контейнер на 45 градусов */
  width: 200px; /* Ширина контейнера */
  height: 200px; /* Высота контейнера */
  text-align: center;
  position: relative; /* Для корректного позиционирования текста */
}

.test__btn a {
  color: white; /* Цвет текста по умолчанию */
  text-decoration: none; /* Убираем подчеркивание */
  display: block; /* Делаем ссылку блочным элементом */
  transform: rotate(-45deg); /* Возвращаем текст в нормальное положение */
  position: absolute; /* Позиционируем текст внутри ромба */
  top: 50%; /* Центрируем по вертикали */
  left: 50%; /* Центрируем по горизонтали */
  transform: translate(-50%, -50%) rotate(-45deg); /* Центрируем текст и поворачиваем обратно */
}

.test__btn a:hover {
  transition: color 0.3s ease, transform 0.3s ease; /* Добавляем плавный переход */
  transform: translate(-50%, -50%) scale(1.2) rotate(-45deg); /* Увеличиваем текст и сохраняем его положение */
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(-45deg); /* Исходное состояние */
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1) rotate(-45deg); /* Увеличенное состояние */
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(-45deg); /* Возвращение в исходное состояние */
  }
}

.test__btn a:visited {
  color: white; /* Цвет после посещения */
}

.test__btn a:active,
.test__btn a:focus {
  color: white; /* Цвет при нажатии и фокусе */
  outline: none; /* Убираем обводку при фокусе */
}

</style>