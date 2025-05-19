<template>
  <div class="compare-bg">
    <div class="compare-header">
      <el-button class="back-btn" text @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <span class="compare-title">COMPARA PRECIOS</span>
    </div>
    <div class="compare-filters">
      <el-button class="filter-btn" round>Genérico</el-button>
    </div>
    <el-input
      v-model="searchQuery"
      placeholder="Buscar nombre de producto"
      size="large"
      prefix-icon="Search"
      class="compare-search"
      clearable
      @keyup.enter="searchNewProduct"
    />
    <div class="compare-summary-row">
      <el-card class="compare-product-card">
        <div class="pharmacy-label">PFIZER.</div>
        <div class="compare-product-name">Lipitor Tabletas Recubiertas 40 mg</div>
        <div class="compare-product-desc">Caja x 30</div>
      </el-card>
      <el-card class="compare-price-card">
        <div class="price-info">
          <div class="original-price">$250.000</div>
          <div class="compare-best-price">$190.000</div>
          <div class="discount">
            <span class="discount-label">24% OFF</span>
          </div>
        </div>
        <div class="compare-best-label">Mejor Precio</div>
        <div class="compare-pum">PUM Tableta a $6.333</div>
      </el-card>
    </div>
    <div class="compare-table-header">
      <span class="compare-sort">Ordenar por: <a href="#" class="compare-sort-link">Menor Precio</a></span>
    </div>
    <div class="compare-table-list">
      <div v-for="pharmacy in pharmacies" :key="pharmacy.id" class="compare-table-row" @click="showListsModal">
        <div class="compare-pharmacy-info">
          <span class="compare-pharmacy-name underline">{{ pharmacy.name }}</span>
          <el-rate v-model="pharmacy.stars" :max="5" disabled show-score text-color="#f7ba2a" score-template="{value}" class="pharmacy-stars" />
        </div>
        <div class="compare-pharmacy-distance">{{ pharmacy.distance }} Km</div>
        <div class="compare-price-info">
          <div class="original-price">${{ (pharmacy.price).toLocaleString() }}</div>
          <div class="compare-pharmacy-price">${{ pharmacy.price.toLocaleString() }}</div>
          <div class="discount">
            <span class="discount-label">24% OFF</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for lists -->
    <el-dialog v-model="listsModalVisible" title="Selecciona una lista" width="400px" :close-on-click-modal="false">
      <div class="lists-modal-content">
        <div v-for="list in lists" :key="list.id" class="list-modal-row" @click="goToList(list)">
          <el-icon class="list-modal-icon"><List /></el-icon>
          <span class="list-modal-name">{{ list.name }}</span>
        </div>
      </div>
      <template #footer>
        <el-button @click="listsModalVisible = false">Cancelar</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, List } from '@element-plus/icons-vue'

const router = useRouter()
const searchQuery = ref('Lipitor')

const pharmacies = ref([
  { id: 1, name: 'Cruz Verde', distance: 0.5, price: 190000, underline: false, stars: 5 },
  { id: 2, name: 'Drogas la Rebaja', distance: 0.1, price: 238000, underline: false, stars: 4 },
  { id: 3, name: 'Farmatodo', distance: 1.5, price: 249000, underline: true, stars: 3 },
  { id: 4, name: 'Droguería Comfandi', distance: 2.0, price: 251000, underline: true, stars: 2 },
  { id: 5, name: 'Droguería Olimpica', distance: 2.5, price: 251000, underline: true, stars: 1 },
])

const listsModalVisible = ref(false)
const lists = ref([
  { id: 1, name: 'Mi Lista Principal' },
  { id: 2, name: 'Para mi familia' },
  { id: 3, name: 'Viaje' }
])

function goBack() {
  router.back()
}

function searchNewProduct() {
  if (searchQuery.value.trim()) {
    router.push({ name: 'search-results', query: { q: searchQuery.value.trim() } })
  }
}

function showListsModal() {
  listsModalVisible.value = true
}

function goToList(list: { id: number, name: string }) {
  listsModalVisible.value = false
  router.push({ name: 'list-detail', params: { id: list.id } })
}
</script>

<style scoped>
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
.compare-bg {
  min-height: 100vh;
  padding: 32px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  position: relative;
}
.compare-header {
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
  padding: 16px 32px;
  z-index: 10;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
}
.back-btn {
  position: absolute;
  left: 24px;
  color: #0891b2;
  font-size: 1.3rem;
}
.compare-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0891b2;
  font-style: italic;
  letter-spacing: 1px;
}
.compare-search {
  margin-top: 120px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 18px;
}
.compare-summary-row {
  display: flex;
  gap: 18px;
  margin-bottom: 18px;
  width: 100%;
  max-width: 600px;
}
.compare-product-card, .compare-price-card {
  flex: 1;
  border-radius: 14px;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.compare-product-card {
  align-items: flex-start;
  background: #f8fafc;
  min-width: 240px;
  max-width: 320px;
}
.pharmacy-label {
  font-weight: 700;
  color: #22336c;
  font-size: 1.05rem;
  margin-bottom: 8px;
}
.compare-product-name {
  font-weight: 700;
  color: #22336c;
  font-size: 1.05rem;
  margin-bottom: 4px;
}
.compare-product-desc {
  color: #64748b;
  font-size: 0.98rem;
}
.compare-price-card {
  align-items: flex-start;
  background: #fff;
  min-width: 200px;
  max-width: 280px;
  border-left: 3px solid #06b6d4;
  position: relative;
}
.price-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}
.original-price {
  color: #94a3b8;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: line-through;
}
.compare-best-price {
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
.compare-best-label {
  color: #059669;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 12px;
}
.compare-pum {
  color: #94a3b8;
  font-size: 0.95rem;
  font-weight: 500;
}
.compare-table-header {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 12px;
}
.compare-sort {
  color: #64748b;
  font-size: 1rem;
}
.compare-sort-link {
  color: #0891b2;
  font-weight: 600;
  text-decoration: none;
}
.compare-table-col {
  color: #059669;
  font-weight: 700;
  font-size: 1.08rem;
  text-align: right;
  width: 120px;
}
.compare-table-list {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
}
.compare-table-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 2px 8px 0 rgba(34,51,108,0.06);
  cursor: pointer;
  transition: background 0.15s;
}
.compare-table-row:hover {
  background: #f0f9ff;
}
.compare-pharmacy-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
}
.compare-pharmacy-name {
  font-weight: 700;
  color: #0891b2;
  font-size: 1.05rem;
  text-decoration: underline;
  cursor: pointer;
}
.pharmacy-stars {
  margin-top: 0;
  font-size: 1rem;
}
.compare-filters {
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
.compare-pharmacy-distance {
  color: #64748b;
  font-size: 0.95rem;
  min-width: 80px;
  text-align: right;
}
.compare-price-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  min-width: 200px;
}
.compare-pharmacy-price {
  color: #0891b2;
  font-weight: 800;
  font-size: 1.3rem;
}
.lists-modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-modal-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
}
.list-modal-row:hover {
  background-color: #f1f5f9;
}
.list-modal-icon {
  color: #0891b2;
  font-size: 1.2rem;
}
.list-modal-name {
  color: #22336c;
  font-weight: 600;
  font-size: 1.05rem;
}
</style> 