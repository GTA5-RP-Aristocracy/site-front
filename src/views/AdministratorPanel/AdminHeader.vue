<script lang='ts' setup>

</script>

<template>
  <header class="admin-header">
    <div class="admin-header__left">
      Admin<span>P</span>anel
    </div>
    <div class="admin-header__right">
      <span class="admin-header__name">Admin Name</span>
      <img src="/src/assets/images/admin_avatar.webp" alt="Admin Avatar" class="admin-header__avatar" />
    </div>
  </header>
</template>

<style scoped>
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.admin-header__left {
  margin-left: 50px;
  display: flex;
  align-items: center;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
}

.admin-header__left span {
  color:#f5216f
}

.admin-header__logo {
  height: 40px;
}

.admin-header__right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.admin-header__name {
  font-size: 16px;
  font-weight: 500;
}

.admin-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
