import { defineStore } from 'pinia'

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
}

export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [] as List[],
    loading: false,
    error: null as string | null
  }),

  getters: {
    getListById: (state) => (id: string) => {
      return state.lists.find(list => list.id === id)
    },
    
    getListTotal: (state) => (listId: string) => {
      const list = state.lists.find(list => list.id === listId)
      if (!list) return 0
      return list.items.reduce((total, item) => total + item.pharmacy.price, 0)
    }
  },

  actions: {
    async fetchLists() {
      this.loading = true
      this.error = null
      try {
        // TODO: Implement API call to fetch lists
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.lists = [
          {
            id: '1',
            name: 'My First List',
            items: [
              {
                id: '1',
                product: {
                  id: '1',
                  name: 'Product A'
                },
                pharmacy: {
                  id: '1',
                  name: 'Pharmacy X',
                  price: 29.99
                }
              }
            ]
          }
        ]
      } catch (error) {
        this.error = 'Failed to fetch lists'
        console.error('Error fetching lists:', error)
      } finally {
        this.loading = false
      }
    },

    async createList(name: string) {
      this.loading = true
      this.error = null
      try {
        // TODO: Implement API call to create list
        const newList: List = {
          id: Date.now().toString(),
          name,
          items: []
        }
        this.lists.push(newList)
        return newList
      } catch (error) {
        this.error = 'Failed to create list'
        console.error('Error creating list:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteList(listId: string) {
      this.loading = true
      this.error = null
      try {
        // TODO: Implement API call to delete list
        this.lists = this.lists.filter(list => list.id !== listId)
      } catch (error) {
        this.error = 'Failed to delete list'
        console.error('Error deleting list:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async addToList(listId: string, product: Product, pharmacy: Pharmacy) {
      this.loading = true
      this.error = null
      try {
        // TODO: Implement API call to add item to list
        const list = this.lists.find(list => list.id === listId)
        if (!list) throw new Error('List not found')

        const newItem: ListItem = {
          id: Date.now().toString(),
          product,
          pharmacy
        }
        list.items.push(newItem)
      } catch (error) {
        this.error = 'Failed to add item to list'
        console.error('Error adding item to list:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async removeFromList(listId: string, itemId: string) {
      this.loading = true
      this.error = null
      try {
        // TODO: Implement API call to remove item from list
        const list = this.lists.find(list => list.id === listId)
        if (!list) throw new Error('List not found')

        list.items = list.items.filter(item => item.id !== itemId)
      } catch (error) {
        this.error = 'Failed to remove item from list'
        console.error('Error removing item from list:', error)
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 