<template>
  <v-container max-width="600">
    <h1>Hello, {{ userName }}!</h1>
    <h1 v-if="showWeather">Weather here</h1>
    <TodoInputForm @add-todo="addTodo" />

    <TodoList :todos="todos" @toggle-completed="toggleTodo" @delete-todo="deleteTodo" />
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import TodoInputForm from '@/components/TodoInputForm.vue'
import TodoList from '@/components/TodoList.vue'
import { useStore } from 'vuex'

const todos = ref([
  { id: 1, text: 'Test task 1', completed: false },
  { id: 2, text: 'Test task 2', completed: true },
])

const store = useStore()

const userName = computed(() => {
  return store.getters.userName
})

const showWeather = computed(() => {
  return store.getters.isShowWeather
})

function addTodo(text) {
  todos.value.push({
    id: Date.now(),
    text,
    completed: false,
  })
}

function toggleTodo(id) {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) todo.completed = !todo.completed
}

function deleteTodo(id) {
  todos.value = todos.value.filter((t) => t.id !== id)
}
</script>
