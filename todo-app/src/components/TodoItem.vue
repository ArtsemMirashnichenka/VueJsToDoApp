<template>
  <v-list-item>
    <template #prepend>
      <v-checkbox
        v-model="localCompleted"
        @change="toggle"
        :label="todo.text"
      />
    </template>

    <template #append>
      <v-btn icon @click="$emit('delete-todo', todo.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-list-item>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  todo: Object
})
const emit = defineEmits(['toggle-completed', 'delete-todo'])

const localCompleted = computed({
  get: () => props.todo.completed,
})

function toggle() {
  emit('toggle-completed', props.todo.id)
}
</script>