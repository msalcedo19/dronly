<template>
  <div class="home-page-bg">
    <div class="home-centered-container">
      <el-card class="header-card">
        <template #header>
          <span class="header-title">Bienvenido a Dronly</span>
        </template>
      </el-card>
      <div class="home-cards">
        <el-card class="feature-card">
          <h2 class="feature-title">Buscar productos médicos</h2>
          <p class="feature-desc">Encuentra y compara precios de productos médicos en diferentes farmacias.</p>
          <router-link to="/search">
            <el-button type="primary" class="feature-btn">Comenzar búsqueda</el-button>
          </router-link>
        </el-card>
        <el-card class="feature-card">
          <h2 class="feature-title">Tus listas</h2>
          <p class="feature-desc">Administra tus listas de productos guardadas y compara precios.</p>
          <router-link to="/lists">
            <el-button type="success" class="feature-btn">Ver listas</el-button>
          </router-link>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped>
.home-page-bg {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-centered-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.header-card {
  background: #22336c;
  border: none;
  box-shadow: 0 4px 24px 0 rgba(34,51,108,0.10);
  border-radius: 16px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 600px;
}
.header-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
  display: block;
}
.home-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 600px;
}
@media (min-width: 700px) {
  .home-cards {
    flex-direction: row;
    justify-content: center;
  }
}
.feature-card {
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(34,51,108,0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
  flex: 1;
}
.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #22336c;
  margin-bottom: 4px;
}
.feature-desc {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 12px;
}
.feature-btn {
  font-weight: 600;
  font-size: 1rem;
  margin-top: 8px;
}
</style> 