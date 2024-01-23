<script setup lang="ts">
import { ref, computed } from 'vue'

const text = ref('')
const isValid = computed(() => text.value && text.value.length > 5)

const emit = defineEmits<{
  addTodo: [text: string]
}>()

const onAddTodo = () => {
  emit('addTodo', text.value)
  text.value = ''
}
</script>

<template>
  <div class="container">
    <input
      type="text"
      v-on:keyup.enter="onAddTodo"
      v-model="text"
      placeholder="Write here (5 Characters minimum)"
    />
    <button :disabled="!isValid" @click="onAddTodo">Add</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

input[type='text'] {
  width: 70%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 15%;
}
</style>
