<script setup lang="ts">
import { Status } from '../interfaces/Todo'

import { storeToRefs } from 'pinia'
import { useFilters } from '../stores/filters'

defineProps<{
  counter: number
}>()

const filtersStore = useFilters()
const { filter } = storeToRefs(filtersStore)

</script>

<template>
  <div class="container">
    <hr />
    <div class="common-actions">
      <label>
        All
        <input
          v-model="filter"
          type="radio"
          value="all"
          name="filter"
          @change="filtersStore.updateFilter('all')"
        />
      </label>
      <label>
        Completed
        <input
          v-model="filter"
          type="radio"
          :value="Status.completed"
          name="filter"
          @change="filtersStore.updateFilter(Status.completed)"
        />
      </label>
      <label>
        To do
        <input
          v-model="filter"
          type="radio"
          :value="Status.created"
          name="filter"
          @change="filtersStore.updateFilter(Status.created)"
        />
      </label>
    </div>
    <hr />
    <div class="counter"><b>Total: </b> {{ counter }}</div>
  </div>
</template>

<style scoped>
.common-actions {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

label {
  cursor: pointer;
}

.counter {
  display: flex;
  justify-content: flex-end;
}
</style>
