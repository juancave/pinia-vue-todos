<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  counter: number
}>()

const emit = defineEmits<{
  updateFilter: []
}>()

const filter = ref('')
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
          value=""
          name="filter"
          @change="emit('updateFilter')"
        />
      </label>
      <label>
        Completed
        <input
          v-model="filter"
          type="radio"
          value="completed"
          name="filter"
          @change="emit('updateFilter')"
        />
      </label>
      <label>
        To do
        <input
          v-model="filter"
          type="radio"
          value="toDo"
          name="filter"
          @change="emit('updateFilter')"
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
