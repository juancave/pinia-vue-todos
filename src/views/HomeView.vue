<script setup lang="ts">
import TodosList from '../components/TodosList.vue'
import TodoFilters from '../components/TodoFilters.vue'
import AddTodo from '../components/AddTodo.vue'
import type { Todo } from '../interfaces/Todo'

import { storeToRefs } from 'pinia'
import { useTodos } from '../stores/todo'

const todosStore = useTodos()
const { todos } = storeToRefs(todosStore);

const handleDeleteTodo = (todo: Todo) => {
  todosStore.deleteTodo(todo)
}

const handleUpdateFilters = () => {
  console.log('Filters.', todos)
}

const handleAddTodo = (text: string) => {
  todosStore.addTodo(text)
}

const handleUpdateTodo = (todo: Todo) => {
  todosStore.updateTodo(todo)
}
</script>

<template>
  <div class="container">
    <AddTodo @addTodo="handleAddTodo" />
    <TodosList :todos="todos" @deleteTodo="handleDeleteTodo" @updateFilters="handleUpdateFilters" @updateTodo="handleUpdateTodo" />
    <TodoFilters v-if="todos.length" :counter="todos.length" @updateFilter="handleUpdateFilters" />
  </div>
</template>
