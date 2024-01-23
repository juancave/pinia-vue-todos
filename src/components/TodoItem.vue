<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '../interfaces/Todo'
import { Status } from '../interfaces/Todo'

const props = defineProps<{
  todo: Todo
}>()

const isChecked = ref(props.todo.status === Status.completed)

const emit = defineEmits<{
  deleteTodo: [todo: Todo]
  updateFilters: [],
  updateTodo: [todo: Todo]
}>()

const onDeleteTodo = () => {
  emit('deleteTodo', props.todo)
}

const onUpdateTodo = () => {
  const updated = { ...props.todo, status: isChecked.value ? Status.completed : Status.in_progress }
  emit('updateTodo', updated)
  emit('updateFilters')
}
</script>

<template>
  <div class="item-container">
    <input v-model="isChecked" @change="onUpdateTodo" type="checkbox" />
    <span class="name" :class="{ completed: todo.status === Status.completed }">{{
      todo.text
    }}</span>
    <button type="button" @click="onDeleteTodo">X</button>
  </div>
</template>

<style scoped>
.item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-bottom: 3px solid white;
  border-radius: 5px;
}

.name {
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
}

.completed {
  text-decoration-line: line-through;
}
</style>
