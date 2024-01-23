<script setup lang="ts">
import TodoItem from '../components/TodoItem.vue';
import type { Todo } from '../interfaces/Todo'

defineProps<{
  todos: Todo[],
}>()

const emit = defineEmits<{
  deleteTodo: [todo: Todo],
  updateFilters: [],
}>()

const onDeleteTodo = (todo: Todo) => {
  emit('deleteTodo', todo)
}

</script>

<template>
  <div class="container">
    <transition-group name="list">
      <div
        :key="todo.id"
        v-for="(todo, index) in todos">
        <TodoItem
          :key="index"
          :todo="todo"
          @deleteTodo="onDeleteTodo"
          @updateFilters="emit('updateFilters')" />
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
