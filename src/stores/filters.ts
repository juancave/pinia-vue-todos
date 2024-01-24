import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilters = defineStore('filters', () => {
  const filter = ref('all')

  const updateFilter = (option: string) => {
    filter.value = option
  }

  return {
    filter,
    updateFilter,
  }
})
