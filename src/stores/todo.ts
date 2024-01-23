import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '../interfaces/Todo'
import { Status } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'

export const useTodos = defineStore('todos', () => {
  const todos = ref([] as Todo[])

  const addTodo = (text: string) => {
    todos.value.push({ text, id: uuidv4(), status: Status.created })
  }

  const updateTodo = (todo: Todo) => {
    const index = todos.value.findIndex(({ id }) => id === todo.id)
    if (index !== -1) {
      todos.value[index] = todo
    }
  }

  const deleteTodo = (todo: Todo) => {
    todos.value = todos.value.filter(({ id }) => id !== todo.id)
  }

  const createdTodos = computed(() => todos.value.filter(({ status }) => status === Status.created))
  const completedTodos = computed(() =>
    todos.value.filter(({ status }) => status === Status.completed)
  )
  const inProgressTodos = computed(() =>
    todos.value.filter(({ status }) => status === Status.in_progress)
  )

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    createdTodos,
    completedTodos,
    inProgressTodos
  }
})
