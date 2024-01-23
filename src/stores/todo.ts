import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '../interfaces/Todo'
import { Status } from '../interfaces/Todo'

export const useTodos = defineStore('todos', () => {
  const todos = ref([{ id: "1", text: "Created todo", status: Status.created }, { id: "3", text: "Completed todo", status: Status.completed }] as Todo[])

  function addTodo(text: string) {
    todos.value.push({ text, id: '2', status: Status.created })
  }

  const createdTodos = computed(() => todos.value.filter(({ status }) => status === Status.created))
  const completedTodos = computed(() => todos.value.filter(({ status }) => status === Status.completed))
  const inProgressTodos = computed(() => todos.value.filter(({ status }) => status === Status.in_progress))

  return {
    todos,
    addTodo,
    createdTodos,
    completedTodos,
    inProgressTodos
  }
})
