<template>
  <v-form @submit.prevent="handleAdd">
    <v-text-field v-model="text" label="Add a new task" dense outlined hide-details />
    <v-btn type="submit" color="primary" class="mt-2"> Add </v-btn>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-todo'])
const text = ref('')

function handleAdd() {
  if (text.value.trim()) {
    emit('add-todo', text.value.trim())
    text.value = ''
  }
}
</script>
