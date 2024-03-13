<script setup lang="ts">
import TodoItem from '../components/TodoItem.vue'
import type { Todo } from '../interfaces/Todo'

defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  deleteTodo: [todo: Todo]
  updateTodo: [todo: Todo]
}>()

const onDeleteTodo = (todo: Todo) => {
  emit('deleteTodo', todo)
}

const onUpdateTodo = (todo: Todo) => {
  emit('updateTodo', todo)
}
</script>

<template>
  <div class="list-container">
    <TransitionGroup name="list">
      <div :key="todo.id" v-for="(todo, index) in todos">
        <TodoItem
          :key="index"
          :todo="todo"
          @deleteTodo="onDeleteTodo"
          @updateTodo="onUpdateTodo"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
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
