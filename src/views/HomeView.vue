<script setup lang="ts">
import TodosList from '../components/TodosList.vue'
import { useTodos } from '../stores/todo'

const todosStore = useTodos()
const todos = todosStore.todos;

const handleDeleteTodo = () => {
  console.log('Delete.');
};

const handleUpdateFilters = () => {
  console.log('Filters.');
};

</script>

<template>
  <div class="container">
    <TodosList :todos="todos" @deleteTodo="handleDeleteTodo" @updateFilters="handleUpdateFilters"/>
  </div>
</template>
