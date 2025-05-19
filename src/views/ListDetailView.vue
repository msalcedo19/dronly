<template>
  <div class="list-detail-bg">
    <div class="list-detail-header">
      <el-button class="back-btn" text @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <span class="list-detail-title">DETALLE DE LISTA</span>
    </div>
    <div class="list-detail-filters">
      <el-button class="filter-btn" round>Genérico</el-button>
    </div>
      <el-button class="add-product-btn" type="info" plain icon="Plus" round>
        Agrega otro producto
      </el-button>
      <el-card class="savings-summary">
        <span>AHORRO hasta de <span class="savings-amount">$ 81.000</span></span>
      </el-card>
      <div class="compare-all-row">
        <span class="compare-all-link" @click="groupByPharmacy = true"><span class="compare-all-underline">Compara tu lista en todas las farmacias</span></span>
      </div>
      <template v-if="!groupByPharmacy">
        <div class="list-table">
          <div class="list-table-header">
            <span class="col-index"> </span>
            <span class="col-product">Productos</span>
            <span class="col-price">Precio</span>
            <span class="col-pharmacy">Farmacia</span>
            <span class="col-link"></span>
          </div>
          <div v-for="(item, idx) in items" :key="item.id" class="list-table-row">
            <span class="col-index">{{ idx + 1 }}</span>
            <div class="col-product">
              <span class="product-name">{{ item.productName }}</span>
              <span class="product-desc">
                {{ item.productDesc }}
              </span>
              <span class="product-lab">{{ item.lab }}</span>
            </div>
            <span class="col-price">
              <template v-if="item.discount">
                <div class="price-stack">
                  <span class="original-price">${{ (item.price / (1 - item.discount/100)).toLocaleString() }}</span>
                  <span class="discounted-price">${{ item.price.toLocaleString() }}</span>
                  <span class="discount-label">{{ item.discount }}% OFF</span>
                </div>
              </template>
              <template v-else>
                <span class="discounted-price">${{ item.price.toLocaleString() }}</span>
              </template>
            </span>
            <div class="col-pharmacy">
              <span class="pharmacy-name" :class="{ underline: item.underline }">{{ item.pharmacy }}</span>
              <span class="pharmacy-stars">★★★★★</span>
            </div>
            <a class="col-link list-site-link" href="#">Ir al sitio</a>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="pharmacy-group-list">
          <div v-for="pharmacy in pharmacyGroups" :key="pharmacy.id" class="pharmacy-group">
            <div class="pharmacy-group-header">
              <span class="pharmacy-group-name" :class="{ underline: pharmacy.underline }">{{ pharmacy.name }}</span>
              <span class="pharmacy-stars">★★★★★</span>
            </div>
            <div class="list-table-header">
            <span class="col-index"> </span>
            <span class="col-product">Productos</span>
            <span class="col-price">Precio</span>
            <span class="col-pharmacy">Farmacia</span>
            <span class="col-link"></span>
          </div>
          <div v-for="(item, idx) in pharmacy.products" :key="item.id" class="list-table-row">
            <span class="col-index">{{ idx + 1 }}</span>
            <div class="col-product">
              <span class="product-name">{{ item.productName }}</span>
              <span class="product-desc">
                {{ item.productDesc }}
              </span>
              <span class="product-lab">{{ item.lab }}</span>
            </div>
            <span class="col-price">
              <template v-if="item.discount">
                <div class="price-stack">
                  <span class="original-price">${{ (item.price / (1 - item.discount/100)).toLocaleString() }}</span>
                  <span class="discounted-price">${{ item.price.toLocaleString() }}</span>
                  <span class="discount-label">{{ item.discount }}% OFF</span>
                </div>
              </template>
              <template v-else>
                <span class="discounted-price">${{ item.price.toLocaleString() }}</span>
              </template>
            </span>
            <div class="col-pharmacy">
              <span class="pharmacy-name" :class="{ underline: item.underline }">{{ item.pharmacy }}</span>
              <span class="pharmacy-stars">★★★★★</span>
            </div>
            <a class="col-link list-site-link" href="#">Ir al sitio</a>
          </div>
          </div>
        </div>
      </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'

const router = useRouter()
const groupByPharmacy = ref(false)

interface Product {
  id: number;
  productName: string;
  productDesc: string;
  lab: string;
  price: number;
  pharmacy?: string;
  underline?: boolean;
  discount: number;
  distance?: number;
}

interface PharmacyGroup {
  id: number;
  name: string;
  underline: boolean;
  total: number;
  products: Product[];
}

const items = ref<Product[]>([
  {
    id: 1,
    productName: 'Lipitor Tabletas Recubiertas 40 mg',
    productDesc: 'Caja x 30',
    lab: 'PFIZER',
    price: 190000,
    pharmacy: 'Cruz Verde',
    underline: false,
    discount: 24
  },
  {
    id: 2,
    productName: 'Alegra Pediatrico 30 mg 5 ml Suspensión oral',
    productDesc: '',
    lab: 'SANOFI',
    price: 51000,
    pharmacy: 'Farmatodo',
    underline: true,
    discount: 0
  }
])

const pharmacyGroups = ref<PharmacyGroup[]>([
  {
    id: 1,
    name: 'Cruz Verde',
    underline: false,
    total: 254000,
    products: [
      {
        id: 1,
        productName: 'Lipitor Tabletas Recubiertas 40 mg',
        productDesc: 'Caja x 30',
        lab: 'PFIZER',
        price: 190000,
        distance: 0.5,
        discount: 24
      },
      {
        id: 2,
        productName: 'Alegra Pediatrico 30 mg 5 ml Suspensión oral',
        productDesc: '',
        lab: 'SANOFI',
        price: 64000,
        distance: 0.5,
        discount: 0
      }
    ]
  },
  {
    id: 2,
    name: 'Farmatodo',
    underline: true,
    total: 279000,
    products: [
      {
        id: 1,
        productName: 'Lipitor Tabletas Recubiertas 40 mg',
        productDesc: 'Caja x 30',
        lab: 'PFIZER',
        price: 200000,
        distance: 0.8,
        discount: 10
      },
      {
        id: 2,
        productName: 'Alegra Pediatrico 30 mg 5 ml Suspensión oral',
        productDesc: '',
        lab: 'SANOFI',
        price: 79000,
        distance: 0.8,
        discount: 0
      }
    ]
  }
])

function goBack() {
  router.back()
}
</script>

<style scoped>
.list-detail-header {
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
.list-detail-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0891b2;
  font-style: italic;
  letter-spacing: 1px;
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
.list-detail-bg {
  min-height: 100vh;
  padding: 32px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  position: relative;
}
.list-bg {
  min-height: 100vh;
  padding: 32px 0 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
}
.list-header-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 18px;
}
.list-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0891b2;
  font-style: italic;
  letter-spacing: 1px;
}
.list-detail-filters {
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
.add-product-btn {
  margin-top: 120px;
  width: 100%;
  max-width: 480px;
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 1.1rem;
  background: #f8fafc;
  color: #0891b2;
  border-radius: 999px;
  border: none;
}
.savings-summary {
  width: 100%;
  max-width: 480px;
  margin-bottom: 18px;
  background: #f1f5f9;
  border-radius: 12px;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 600;
  color: #64748b;
  border: 2px solid #b0b6c3;
}
.savings-label {
  color: #64748b;
  font-weight: 700;
}
.savings-amount {
  color: #2563eb;
  font-weight: 800;
  font-size: 1.15rem;
}
.compare-all-row {
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
}
.compare-all-link {
  color: #059669;
  font-weight: 700;
  font-size: 1.1rem;
}
.compare-all-underline {
  text-decoration: underline;
}
.compare-all-underline:hover {
  cursor: pointer;
}
.list-table {
  width: 100%;
  min-width: 100vh;
  max-width: 1200px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px 0 rgba(34,51,108,0.06);
  padding: 12px 0 0 0;
  margin-bottom: 18px;
}
.list-table-header {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #059669;
  font-size: 1.08rem;
  padding: 0 24px 8px 32px;
  gap: 24px;
  text-align: center;
}
.col-index, .col-price, .col-pharmacy, .col-link {
  text-align: center;
}
.list-table-row {
  display: flex;
  align-items: flex-start;
  font-size: 1.05rem;
  padding: 8px 24px 8px 32px;
  gap: 24px;
  border-top: 1px solid #f1f5f9;
}
.col-index {
  width: 18px;
  color: #64748b;
  font-weight: 600;
  margin-right: 8px;
}
.col-product {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.product-name {
  font-weight: 700;
  color: #22336c;
}
.product-desc {
  color: #64748b;
  font-size: 0.98rem;
}
.product-lab {
  color: #b0b6c3;
  font-size: 0.97rem;
  font-weight: 600;
}
.col-price {
  flex: 1;
  font-weight: 700;
  color: #22336c;
  align-self: center;
}
.col-pharmacy {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #22336c;
  align-self: center;
  text-align: center;
}
.pharmacy-name {
  font-weight: 700;
  color: #22336c;
}
.pharmacy-name.underline {
  text-decoration: underline;
  color: #ef4444;
}
.pharmacy-stars {
  color: #fbbf24;
  font-size: 1.1rem;
  font-weight: 700;
}
.col-link {
  flex: 1;
  align-self: center;
}
.list-site-link {
  color: #2563eb;
  font-size: 1.01rem;
  font-weight: 600;
  text-decoration: underline;
}
.list-filters {
  display: flex;
  gap: 18px;
  margin-top: 12px;
}
.list-filter-btn {
  background: #fff;
  color: #10b981;
  border: 2px solid #10b981;
  font-weight: 700;
  font-size: 1.05rem;
  border-radius: 999px;
  padding: 8px 22px;
  transition: background 0.15s, color 0.15s;
}
.list-filter-btn:hover {
  background: #10b981;
  color: #fff;
}
.pharmacy-group-list {
  width: 100%;
  min-width: 100vh;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 18px;
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  padding-right: 8px;
}

.pharmacy-group-list::-webkit-scrollbar {
  width: 8px;
}

.pharmacy-group-list::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.pharmacy-group-list::-webkit-scrollbar-thumb {
  background: #0891b2;
  border-radius: 4px;
}

.pharmacy-group-list::-webkit-scrollbar-thumb:hover {
  background: #0e7490;
}

.pharmacy-group {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px 0 rgba(34,51,108,0.06);
  padding: 18px 0 0 0;
}
.pharmacy-group-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  color: #059669;
  font-size: 1.15rem;
  padding: 0 24px 8px 32px;
}
.pharmacy-group-name {
  color: #059669;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: underline;
}
.pharmacy-group-name.underline {
  color: #ef4444;
}
.pharmacy-group-table-header {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #059669;
  font-size: 1.08rem;
  padding: 0 24px 8px 32px;
  gap: 24px;
}
.pharmacy-group-row {
  display: flex;
  align-items: flex-start;
  font-size: 1.05rem;
  padding: 8px 24px 8px 32px;
  gap: 24px;
  border-top: 1px solid #f1f5f9;
}
.col-dist {
  flex: 0.7;
  color: #059669;
  font-weight: 700;
  align-self: center;
}
.col-total {
  flex: 1.2;
  font-weight: 700;
  color: #22336c;
  align-self: center;
}
.original-price {
  color: #94a3b8;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: line-through;
  margin-right: 6px;
}
.discounted-price {
  color: #0891b2;
  font-weight: 800;
  font-size: 1.1rem;
  margin-right: 6px;
}
.discount-label {
  color: #ef4444;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.price-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style> 