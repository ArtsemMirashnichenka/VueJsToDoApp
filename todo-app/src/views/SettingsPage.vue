<template>
  <v-container max-width="600">
    <v-form>
      <v-checkbox
        label="Show weather on main menu"
        v-model="showWeather"
        dense
        outlined
        hide-details
      />
      <v-text-field v-model="userName"></v-text-field>
    </v-form>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const showWeather = computed({
  get: () => store.getters.isShowWeather,
  set: () => store.commit('toggleShowWeather'),
})

const userName = computed({
  get: () => store.getters.userName,
  set: (val) => store.commit('setUsername', val),
})
</script>
