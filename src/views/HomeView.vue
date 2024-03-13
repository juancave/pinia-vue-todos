<script setup lang="ts">
import TodosList from '../components/TodosList.vue'
import TodoFilters from '../components/TodoFilters.vue'
import AddTodo from '../components/AddTodo.vue'
import type { Todo } from '../interfaces/Todo'

import { storeToRefs } from 'pinia'
import { useTodos } from '../stores/todo'

const todosStore = useTodos()
const { todos, filteredTodos } = storeToRefs(todosStore)

const handleDeleteTodo = (todo: Todo) => {
  todosStore.deleteTodo(todo)
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
    <TodosList :todos="filteredTodos" @deleteTodo="handleDeleteTodo" @updateTodo="handleUpdateTodo" />
    <TodoFilters v-if="todos.length" :counter="filteredTodos.length" />
  </div>
</template>
