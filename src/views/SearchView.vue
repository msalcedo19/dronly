<template>
  <div class="search-container">
      <!-- Welcome Message -->
      <div class="welcome-message">
        <h1 class="welcome-title">Encuentra los mejores precios</h1>
        <p class="welcome-subtitle">Compara precios de medicamentos en todas las farmacias</p>
      </div>

      <!-- Search Bar -->
      <el-input
        v-model="searchQuery"
        placeholder="Buscar nombre de producto"
        size="large"
        prefix-icon="Search"
        class="search-input"
        clearable
        @input="handleSearch"
        @keyup.enter="goToResults"
      />

      <!-- Ad/Promo Area -->
      <el-card class="ad-card">
        <div class="ad-content">
          <el-icon class="ad-icon"><Promotion /></el-icon>
          <span class="ad-text">Espacio para Publicidad de Farmacias o productos</span>
        </div>
      </el-card>

      <!-- Pilares de Bienestar -->
      <el-card class="wellness-card">
        <span class="wellness-title">Pilares de Bienestar</span>
      </el-card>
      <div class="wellness-buttons">
        <el-button class="wellness-btn" round disabled>
          <el-icon><Dish /></el-icon>Fit/Gym
        </el-button>
        <el-button class="wellness-btn" round disabled>
          <el-icon><User /></el-icon>Medicos
        </el-button>
        <el-button class="wellness-btn" round disabled>
          <el-icon><Apple /></el-icon>Nutricion
        </el-button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Promotion, Dish, User, Apple } from '@element-plus/icons-vue'

interface Product {
  id: string
  name: string
  description: string
  price: number
}

const searchQuery = ref('')
const router = useRouter()
const loading = ref(false)
const products = ref<Product[]>([])

const handleSearch = () => {
  // TODO: Implement search logic with API
  loading.value = true
  // Simulated API call
  setTimeout(() => {
    products.value = [
      {
        id: '1',
        name: 'Sample Product 1',
        description: 'This is a sample product description',
        price: 29.99
      },
      {
        id: '2',
        name: 'Sample Product 2',
        description: 'Another sample product description',
        price: 39.99
      }
    ]
    loading.value = false
  }, 1000)
}

const goToResults = () => {
  if (searchQuery.value.trim()) {
    router.push({ name: 'search-results', query: { q: searchQuery.value.trim() } })
  }
}

</script>

<style scoped>
.search-container {
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.welcome-message {
  text-align: center;
  margin-bottom: 8px;
}

.welcome-title {
  color: #22336c;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.welcome-subtitle {
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
}

.search-input {
  border-radius: 999px;
  box-shadow: 0 2px 8px 0 rgba(34, 51, 108, 0.06);
  background: #fff;
}

.ad-card {
  border: 2px dashed #06b6d4;
  background: #ecfeff;
  border-radius: 18px;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
}

.ad-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.ad-icon {
  color: #06b6d4;
  font-size: 2rem;
}

.ad-text {
  color: #334155;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}

.wellness-card {
  background: #cffafe;
  border: 1px solid #a5f3fc;
  border-radius: 14px;
  text-align: center;
  margin-bottom: 0;
}

.wellness-title {
  color: #0891b2;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.wellness-buttons {
  display: flex;
  gap: 12px;
  margin-top: 0;
}

.wellness-btn {
  flex: 1;
  background: #a5f3fc !important;
  color: #155e75 !important;
  border: none !important;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 2px 8px 0 rgba(6, 182, 212, 0.08);
}
</style>

<!-- Add Element Plus icon registration -->
<script lang="ts">
import { defineComponent } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    ...ElementPlusIconsVue,
  },
})
</script>