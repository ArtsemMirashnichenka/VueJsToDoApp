<template>
  <v-list>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-completed="$emit('toggle-completed', $event)"
      @delete-todo="$emit('delete-todo', $event)"
    />
  </v-list>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

defineProps({
  todos: Array,
})
defineEmits(['toggle-completed', 'delete-todo'])
</script>
