import { defineStore } from 'pinia'

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

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    currentProduct: null as Product | null,
    loading: false,
    error: null as string | null,
    searchQuery: ''
  }),

  getters: {
    getProductById: (state) => (id: string) => {
      return state.products.find(product => product.id === id)
    },

    filteredProducts: (state) => {
      if (!state.searchQuery) return state.products
      
      const query = state.searchQuery.toLowerCase()
      return state.products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.manufacturer.toLowerCase().includes(query) ||
        product.activeIngredients.some(ingredient => 
          ingredient.toLowerCase().includes(query)
        )
      )
    }
  },

  actions: {
    async searchProducts(query: string) {
      this.loading = true
      this.error = null
      this.searchQuery = query
      
      try {
        // TODO: Implement API call to search products
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.products = [
          {
            id: '1',
            name: 'Product A',
            description: 'This is product A',
            category: 'Medication',
            manufacturer: 'Pharma A',
            activeIngredients: ['Ingredient 1', 'Ingredient 2'],
            pharmacies: [
              {
                id: '1',
                name: 'Pharmacy X',
                location: '123 Main St',
                price: 29.99
              },
              {
                id: '2',
                name: 'Pharmacy Y',
                location: '456 Oak St',
                price: 32.99
              }
            ]
          },
          {
            id: '2',
            name: 'Product B',
            description: 'This is product B',
            category: 'Medication',
            manufacturer: 'Pharma B',
            activeIngredients: ['Ingredient 3', 'Ingredient 4'],
            pharmacies: [
              {
                id: '3',
                name: 'Pharmacy Z',
                location: '789 Oak St',
                price: 39.99
              }
            ]
          }
        ]
      } catch (error) {
        this.error = 'Failed to search products'
        console.error('Error searching products:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchProductDetails(id: string) {
      this.loading = true
      this.error = null
      
      try {
        // TODO: Implement API call to fetch product details
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        const product = this.products.find(p => p.id === id)
        if (!product) throw new Error('Product not found')
        
        this.currentProduct = product
      } catch (error) {
        this.error = 'Failed to fetch product details'
        console.error('Error fetching product details:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    clearSearch() {
      this.searchQuery = ''
      this.products = []
    }
  }
}) 