<script setup lang="ts">
import TodoItem from '../components/TodoItem.vue'
import type { Todo } from '../interfaces/Todo'

defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  deleteTodo: [todo: Todo]
  updateFilters: []
  updateTodo: [todo: Todo]
}>()

const onDeleteTodo = (todo: Todo) => {
  emit('deleteTodo', todo)
}
</script>

<template>
  <div class="container">
    <TransitionGroup name="list">
      <div :key="todo.id" v-for="(todo, index) in todos">
        <TodoItem
          :key="index"
          :todo="todo"
          @deleteTodo="onDeleteTodo"
          @updateFilters="emit('updateFilters')"
          @updateTodo="(todo) => emit('updateTodo', todo)"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 1s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
