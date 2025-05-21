<template>
  <div class="app-bg">
    <nav class="navbar" v-if="route.path !== '/login'">
      <div class="navbar-left">
        <router-link to="/" class="nav-btn" aria-label="Home">
          <el-icon><HomeFilled /></el-icon>
        </router-link>
        <span class="nav-title">Dronly</span>
      </div>
      <div class="navbar-right">
        <router-link to="/lists" class="nav-btn" aria-label="Lists">
          <el-icon><List /></el-icon>
        </router-link>
      </div>
    </nav>
    <main :class="['main-centered', { 'no-padding': route.path === '/login' }]">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { HomeFilled, List } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.app-bg {
  background: #fff;
}
.navbar {
  width: 100%;
  height: 56px;
  background: #22336c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.08);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.navbar-left, .navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-title {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-left: 8px;
}
.nav-btn {
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.15s;
}
.nav-btn:hover {
  color: #38bdf8;
}
.main-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  min-height: calc(100vh - 56px);
}
.no-padding {
  padding-top: 0 !important;
  min-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 