<template>
  <div class="lists-container">
    <el-card class="header-card">
      <template #header>
        <span class="header-title">Tus Listas</span>
      </template>
      <el-button type="primary" class="create-btn" @click="createNewList">Crear nueva lista</el-button>
    </el-card>
    <div v-if="loading" class="loading-text">Cargando...</div>
    <div v-else-if="lists.length > 0" class="lists-grid">
      <el-card v-for="list in lists" :key="list.id" class="list-card">
        <div class="list-header" @click="toggleExpand(list.id)">
          <div class="list-title-row">
            <span class="list-title">{{ list.name }}:</span>
            <span class="expand-icon">
              <el-icon><component :is="expandedId === list.id ? 'ArrowUp' : 'ArrowDown'" /></el-icon>
            </span>
          </div>
          <div class="list-header-row">
            <span class="summary-savings" v-if="list.savings">Ahorro: <b>${{ list.savings }}</b></span>
            <span class="summary-total">Total: <b>${{ calculateTotal(list) }}</b></span>
          </div>
        </div>
        <transition name="fade-expand">
          <div v-if="expandedId === list.id" class="list-details">
            <div class="list-preview">
              <span v-for="item in list.items.slice(0,2)" :key="item.id" class="preview-product">
                {{ item.product.name }}<span v-if="item !== list.items[0]">,&nbsp;</span>
              </span>
              <span v-if="list.items.length > 2">y más...</span>
            </div>
            <div class="list-table">
              <div class="list-table-header">
                <span class="col-product">Producto</span>
                <span class="col-pharmacy">Farmacia</span>
                <span class="col-price">Precio</span>
              </div>
              <div v-for="item in list.items" :key="item.id" class="list-table-row">
                <span class="col-product">{{ item.product.name }}</span>
                <span class="col-pharmacy">{{ item.pharmacy.name }}</span>
                <span class="col-price">${{ item.pharmacy.price }}</span>
              </div>
            </div>
            <el-button type="info" class="go-detail-btn" @click="goToList(list)">Ver detalle</el-button>
          </div>
        </transition>
      </el-card>
    </div>
    <div v-else class="empty-text">
      No has creado ninguna lista aún. ¡Crea tu primera lista para empezar a comparar precios!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Pharmacy {
  id: string
  name: string
  price: number
}

interface Product {
  id: string
  name: string
}

interface ListItem {
  id: string
  product: Product
  pharmacy: Pharmacy
}

interface List {
  id: string
  name: string
  items: ListItem[]
  savings?: number
}

const loading = ref(false)
const lists = ref<List[]>([
  {
    id: '1',
    name: 'Mi Lista Principal',
    savings: 81000,
    items: [
      {
        id: '1',
        product: { id: '1', name: 'Lipitor Tabletas Recubiertas 40 mg' },
        pharmacy: { id: '1', name: 'Cruz Verde', price: 190000 }
      },
      {
        id: '2',
        product: { id: '2', name: 'Alegra Pediatrico 30 mg 5 ml Suspensión oral' },
        pharmacy: { id: '2', name: 'Farmatodo', price: 51000 }
      }
    ]
  },
  {
    id: '2',
    name: 'Mi Lista 2',
    savings: 25000,
    items: [
      {
        id: '1',
        product: { id: '3', name: 'Paracetamol 500mg' },
        pharmacy: { id: '3', name: 'Drogas la Rebaja', price: 12000 }
      },
      {
        id: '2',
        product: { id: '4', name: 'Ibuprofeno 400mg' },
        pharmacy: { id: '4', name: 'Olimpica', price: 18000 }
      }
    ]
  }
])

const expandedId = ref<string | null>(null)
const router = useRouter()

const createNewList = () => {
  // TODO: Implement create new list functionality
  console.log('Creating new list')
}

const calculateTotal = (list: List) => {
  return list.items.reduce((total, item) => total + item.pharmacy.price, 0)
}

function goToList(list: List) {
  router.push({ name: 'list-detail', params: { id: list.id } })
}

function toggleExpand(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<style scoped>
.lists-container {
  width: 100%;
  max-width: 900px;
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
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 32px;
}
.header-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: left;
  display: block;
}
.create-btn {
  margin-top: 8px;
  font-weight: 600;
}
.lists-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}
@media (min-width: 900px) {
  .lists-grid {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .list-card {
    min-width: 320px;
    flex: 1 1 45%;
    align-self: flex-start;
  }
}
.list-card {
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(34,51,108,0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  transition: box-shadow 0.2s;
  align-self: flex-start;
}
.list-card:hover {
  box-shadow: 0 4px 24px 0 rgba(34,51,108,0.13);
}
.list-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  gap: 0;
}
.list-title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
}
.list-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #22336c;
  text-align: start;
  flex: 1;
}
.list-header-row {
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
  gap: 12px;
}
.summary-savings {
  color: #059669;
  font-weight: 700;
  font-size: 1.05rem;
  text-align: left;
}
.summary-total {
  font-size: 1.05rem;
  color: #64748b;
  text-align: right;
}
.expand-icon {
  color: #0891b2;
  font-size: 1.3rem;
  margin-left: 8px;
}
.fade-expand-enter-active, .fade-expand-leave-active {
  transition: all 0.3s cubic-bezier(.55,0,.1,1);
}
.fade-expand-enter-from, .fade-expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.fade-expand-enter-to, .fade-expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
.list-details {
  padding: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-preview {
  color: #64748b;
  font-size: 1.01rem;
  margin-bottom: 8px;
}
.list-table {
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px 0 rgba(34,51,108,0.06);
  padding: 12px 0 0 0;
  margin-bottom: 12px;
}
.list-table-header {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #059669;
  font-size: 1.08rem;
  padding: 0 24px 8px 32px;
  gap: 24px;
}
.list-table-row {
  display: flex;
  align-items: flex-start;
  font-size: 1.05rem;
  padding: 8px 24px 8px 32px;
  gap: 24px;
  border-top: 1px solid #f1f5f9;
}
.col-product {
  flex: 2;
}
.col-pharmacy {
  flex: 1.2;
}
.col-price {
  flex: 1;
  text-align: right;
}
.go-detail-btn {
  align-self: flex-end;
  font-weight: 700;
  font-size: 1.05rem;
  border-radius: 999px;
  padding: 8px 22px;
  background: #f8fafc;
  color: #0891b2;
  border: none;
}
.empty-text {
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 32px;
}
.loading-text {
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 32px;
}
</style> 