<template>
  <div class="search-mobile-preview-bg">
    <div class="mobile-preview">
      <!-- Welcome Message -->
      <div class="welcome-message">
        <h1 class="welcome-title">Consulta y descubre el mejor precio para tu salud</h1>
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
        <el-carousel height="350px" indicator-position="outside" :interval="3000" autoplay>
          <el-carousel-item v-for="(img, idx) in promoImages" :key="idx">
            <img :src="img" class="promo-img" />
          </el-carousel-item>
        </el-carousel>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Dish, User, Apple } from '@element-plus/icons-vue'

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

const promoImages = [
  new URL('@/assets/images/promo1.jpg', import.meta.url).href,
  new URL('@/assets/images/promo2.jpg', import.meta.url).href,
  new URL('@/assets/images/promo3.jpg', import.meta.url).href,
  new URL('@/assets/images/promo4.jpg', import.meta.url).href
]

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
.search-mobile-preview-bg {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f4f6;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}

.mobile-preview {
  width: 740px;
  background: #f9fafb;
  border-radius: 24px;
  box-shadow: 0 4px 24px 0 rgba(34,51,108,0.10);
  padding: 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  max-height: 90vh;
  overflow-y: auto;
}

.search-container {
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.welcome-message {
  text-align: center;
}

.welcome-title {
  margin: 0px;
  color: #22336c;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.search-input {
  border-radius: 999px;
  box-shadow: 0 2px 8px 0 rgba(34, 51, 108, 0.06);
  background: #fff;
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

.ad-card {
  background: #ecfeff;
  border-radius: 18px;
  padding: 0;
}

.ad-card .el-card__body {
  height: 100%;
  padding: 0;
  display: flex;
}

.el-carousel,
.el-carousel__container {
  width: 100% !important;
  height: 100% !important;
}

.promo-img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: block;
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