<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My Todo App</v-toolbar-title>
      <v-btn to="/" text>Todos</v-btn>
      <v-btn to="/settings" text>Settings</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup></script>
