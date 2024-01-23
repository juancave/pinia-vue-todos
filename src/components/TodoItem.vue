<script setup lang="ts">
import type { Todo } from '../interfaces/Todo'
import { Status } from '../interfaces/Todo'

const props = defineProps<{
  todo: Todo,
}>()

const emit = defineEmits<{
  deleteTodo: [todo: Todo],
  updateFilters: [],
}>()

const onDeleteTodo = () => {
  emit('deleteTodo', props.todo)
}

</script>

<template>
  <div class="container">
    <input
      @change="emit('updateFilters')"
      type="checkbox" />
    <span
      class="name"
      :class="{ 'completed': todo.status === Status.completed }">{{ todo.text }}</span>
    <button type="button"
      @click="onDeleteTodo">X</button>
  </div>
</template>

<style scoped>
  .container {
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
