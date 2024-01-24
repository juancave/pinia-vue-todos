import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '../interfaces/Todo'
import { Status } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'
import { useFilters } from './filters'

export const useTodos = defineStore('todos', () => {
  const filtersStore = useFilters()
  const todos = ref([] as Todo[])

  const clearFilters = () => filtersStore.updateFilter('all')

  const addTodo = (text: string) => {
    todos.value.push({ text, id: uuidv4(), status: Status.created })
    clearFilters()
  }

  const updateTodo = (todo: Todo) => {
    const index = todos.value.findIndex(({ id }) => id === todo.id)
    if (index !== -1) {
      todos.value[index] = todo
      clearFilters()
    }
  }

  const deleteTodo = (todo: Todo) => {
    todos.value = todos.value.filter(({ id }) => id !== todo.id)
    clearFilters()
  }

  const filteredTodos = computed(() => todos.value.filter(({ status }) => filtersStore.filter === 'all' || status === filtersStore.filter))

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    filteredTodos
  }
})
