<template>
  <div class="details-page-bg">
    <div class="details-container">
      <el-card class="header-card">
        <template #header>
          <span class="header-title">Detalles del Producto</span>
        </template>
      </el-card>
      <el-card v-if="product" class="product-card">
        <div class="product-header">
          <span class="product-title">{{ product.name }}</span>
          <span class="product-category">{{ product.category }}</span>
        </div>
        <div class="product-desc">{{ product.description }}</div>
        <div class="product-info">
          <div><b>Fabricante:</b> {{ product.manufacturer }}</div>
          <div><b>Ingredientes activos:</b> {{ product.activeIngredients.join(', ') }}</div>
        </div>
        <div class="pharmacies-section">
          <div class="pharmacies-title">Comparar precios en farmacias</div>
          <el-card v-for="pharmacy in product.pharmacies" :key="pharmacy.id" class="pharmacy-card">
            <div class="pharmacy-info">
              <span class="pharmacy-name">{{ pharmacy.name }}</span>
              <span class="pharmacy-location">{{ pharmacy.location }}</span>
            </div>
            <div class="pharmacy-actions">
              <span class="pharmacy-price">${{ pharmacy.price }}</span>
              <el-button type="primary" size="small" @click="addToList(product, pharmacy)">Agregar a lista</el-button>
            </div>
          </el-card>
        </div>
      </el-card>
      <div v-else class="empty-text">Producto no encontrado</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Pharmacy {
  id: string
  name: string
  location: string
  price: number
}

interface Product {
  id: string
  name: string
  description: string
  category: string
  manufacturer: string
  activeIngredients: string[]
  pharmacies: Pharmacy[]
}

const route = useRoute()
const product = ref<Product | null>(null)

onMounted(() => {
  // TODO: Implement API call to fetch product details
  // Simulated API call
  product.value = {
    id: route.params.id as string,
    name: 'Sample Product',
    description: 'This is a detailed description of the product.',
    category: 'Medication',
    manufacturer: 'Sample Pharma',
    activeIngredients: ['Ingredient 1', 'Ingredient 2'],
    pharmacies: [
      {
        id: '1',
        name: 'Pharmacy A',
        location: '123 Main St',
        price: 29.99
      },
      {
        id: '2',
        name: 'Pharmacy B',
        location: '456 Oak St',
        price: 32.99
      }
    ]
  }
})

const addToList = (product: Product, pharmacy: Pharmacy) => {
  // TODO: Implement add to list functionality
  console.log('Adding to list:', { product, pharmacy })
}
</script>

<style scoped>
.details-page-bg {
  min-height: 100vh;
  background: linear-gradient(to bottom, #e0e7ff 0%, #fff 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0;
}
.details-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.header-card {
  background: #22336c;
  border: none;
  box-shadow: 0 4px 24px 0 rgba(34,51,108,0.10);
  border-radius: 16px;
  margin-bottom: 8px;
}
.header-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: center;
  display: block;
}
.product-card {
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(34,51,108,0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  padding: 24px 20px;
}
.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.product-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #22336c;
}
.product-category {
  font-size: 1rem;
  color: #0891b2;
  font-weight: 600;
}
.product-desc {
  color: #64748b;
  font-size: 1.05rem;
  margin-bottom: 8px;
}
.product-info {
  color: #334155;
  font-size: 1rem;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pharmacies-section {
  margin-top: 12px;
}
.pharmacies-title {
  font-weight: 700;
  color: #22336c;
  margin-bottom: 8px;
  font-size: 1.1rem;
}
.pharmacy-card {
  background: #f1f5f9;
  border-radius: 10px;
  box-shadow: none;
  padding: 12px 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.pharmacy-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pharmacy-name {
  font-weight: 600;
  color: #22336c;
}
.pharmacy-location {
  font-size: 0.95rem;
  color: #64748b;
}
.pharmacy-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}
.pharmacy-price {
  color: #0891b2;
  font-weight: 700;
  font-size: 1.05rem;
}
.empty-text {
  color: #64748b;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 32px;
}
</style> 