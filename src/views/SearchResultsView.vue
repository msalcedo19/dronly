<template>
  <div class="results-bg">
    <div class="results-header">
      <el-button class="back-btn" text @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <span class="results-title">{{ searchTerm }}</span>
    </div>
    <div class="results-filters">
      <el-button class="filter-btn" round @click="toggleGeneric">{{ isGeneric ? 'Nombre Comercial' : 'Genérico' }}</el-button>
      <el-button class="filter-btn" round>% Des. Max</el-button>
    </div>
    <div class="results-subtitle">
      Resultados búsqueda para <b>"{{ searchTerm }}"</b>
    </div>
    <div class="results-list">
      <div v-for="result in results" :key="result.id" class="result-row">
        <el-card class="result-product" @click="goToProduct(result)">
          <div class="product-img">
            <img :src="getProductImage(result.id)" :alt="result.productName" class="product-image" />
          </div>
          <div class="product-info">
            <div class="product-name">{{ isGeneric ? result.genericName : result.comercialName }}</div>
            <div class="product-desc">{{ result.productDesc }}</div>
          </div>
        </el-card>
        <el-card class="result-price" @click="goToProduct(result)">
          <div class="pharmacy-name">{{ result.pharmacy }}</div>
          <div class="price-row">
            <div class="price-info">
              <div class="original-price" v-if="result.discount">${{ Math.floor(result.price / (1 - result.discount/100)).toLocaleString() }}</div>
              <div class="price">${{ result.price.toLocaleString() }}</div>
              <div class="discount" v-if="result.discount">
                <span class="discount-label">{{ result.discount }}% OFF</span>
              </div>
            </div>
            <div class="pum">PUM Tableta a ${{ result.pum }}</div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'

import img40mg from '@/assets/images/lipitor-40mg.jpg'
import img10mg from '@/assets/images/lipitor-10mg.jpg'
import img20mg from '@/assets/images/lipitor-20mg.jpg'
import img80mg from '@/assets/images/lipitor-80mg.jpg'

interface SearchResult {
  id: string
  productName: string
  productDesc: string
  pharmacy: string
  discount: number | null
  price: number
  pum: number
  genericName: string
  comercialName: string
}

interface ProductImages {
  [key: string]: string;
}

const route = useRoute()
const router = useRouter()
const searchTerm = computed(() => route.query.q as string || '')
const isGeneric = ref(false)

const results = ref<SearchResult[]>([
  {
    id: '1',
    productName: 'Lipitor Tabletas Recubiertas 40 mg',
    productDesc: 'Caja x 30',
    pharmacy: 'PFIZER.',
    discount: 24,
    price: 190000,
    pum: 6333,
    genericName: 'Astorvastatina Tabletas Recubiertas 40 mg',
    comercialName: 'Lipitor Tabletas Recubiertas 40 mg'
  },
  {
    id: '2',
    productName: 'Lipitor Tabletas Recubiertas 10 mg',
    productDesc: 'Caja x 30',
    pharmacy: 'PFIZER.',
    discount: 18,
    price: 105000,
    pum: 6333,
    genericName: 'Astorvastatina Tabletas Recubiertas 10 mg',
    comercialName: 'Lipitor Tabletas Recubiertas 10 mg'
  },
  {
    id: '3',
    productName: 'Lipitor Tabletas Recubiertas 20 mg',
    productDesc: 'Caja x 30',
    pharmacy: 'PFIZER.',
    discount: 21,
    price: 110000,
    pum: 6333,
    genericName: 'Astorvastatina Tabletas Recubiertas 20 mg',
    comercialName: 'Lipitor Tabletas Recubiertas 20 mg'
  },
  {
    id: '4',
    productName: 'Lipitor Tabletas Recubiertas 80 mg',
    productDesc: 'Caja x 30',
    pharmacy: 'PFIZER.',
    discount: 23,
    price: 320000,
    pum: 6333,
    genericName: 'Astorvastatina Tabletas Recubiertas 80 mg',
    comercialName: 'Lipitor Tabletas Recubiertas 80 mg'
  }
])

const productImages: ProductImages = {
  '1': img40mg,
  '2': img10mg,
  '3': img20mg,
  '4': img80mg
}

function getProductImage(id: string): string {
  return productImages[id] || ''
}

function goBack() {
  router.push({ name: 'search' })
}

function goToProduct(result: SearchResult) {
  router.push({ name: 'product-compare', params: { id: result.id } })
}

function toggleGeneric() {
  isGeneric.value = !isGeneric.value
}
</script>

<style scoped>
.results-bg {
  min-height: 100vh;
  padding: 32px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  position: relative;
}

.results-header {
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;
  background: #fff;
  padding: 16px 0;
  z-index: 10;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
}

.back-btn {
  position: absolute;
  left: 24px;
  color: #0891b2;
  font-size: 1.3rem;
}

.results-title {
  font-size: 2rem;
  font-weight: 700;
  color: #0891b2;
  font-style: italic;
  letter-spacing: 1px;
}

.results-filters {
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 18px;
  padding: 12px 0;
  background: #fff;
  z-index: 10;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
}

.filter-btn {
  background: #fff;
  color: #10b981;
  border: 2px solid #10b981;
  font-weight: 700;
  font-size: 1.05rem;
  border-radius: 999px;
  padding: 8px 22px;
  transition: background 0.15s, color 0.15s;
}

.filter-btn:hover {
  background: #10b981;
  color: #fff;
}

.results-subtitle {
  margin-top: 120px;
  font-size: 1.1rem;
  color: #22336c;
  margin-bottom: 18px;
}

.results-list {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
  overflow-y: auto;
  padding: 0 16px;
}

.result-row {
  display: flex;
  gap: 24px;
}

.result-product, .result-price {
  flex: 1;
  border-radius: 14px;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}

.result-product:hover, .result-price:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px 0 rgba(34,51,108,0.13);
}

.result-product {
  align-items: flex-start;
  background: #f8fafc;
  min-width: 240px;
  max-width: 320px;
}

.product-img {
  width: 100%;
  height: 128px;
  background: #e0e7ef;
  color: #b0b6c3;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
}

.product-name {
  font-weight: 700;
  color: #22336c;
  font-size: 1.05rem;
  margin-bottom: 2px;
}

.product-desc {
  color: #64748b;
  font-size: 0.98rem;
}

.result-price {
  align-items: flex-start;
  background: #fff;
  min-width: 200px;
  max-width: 280px;
  border-left: 3px solid #06b6d4;
}

.pharmacy-name {
  font-weight: 700;
  color: #22336c;
  font-size: 1.05rem;
  margin-bottom: 12px;
}

.price-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.price-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.original-price {
  color: #94a3b8;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: line-through;
}

.price {
  color: #0891b2;
  font-weight: 800;
  font-size: 1.3rem;
}

.discount {
  display: flex;
  align-items: center;
}

.discount-label {
  color: #ef4444;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pum {
  color: #94a3b8;
  font-size: 0.95rem;
  font-weight: 500;
}
</style> 