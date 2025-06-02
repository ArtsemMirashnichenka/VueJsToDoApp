import SettingsPage from '@/views/SettingsPage.vue'
import TodoPage from '@/views/TodoPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: TodoPage },
  { path: '/settings', component: SettingsPage}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
