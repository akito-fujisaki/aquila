<template>
  <v-app-bar
    app
    dense
    elevate-on-scroll
    color="white"
  >
    <v-spacer />
    <v-btn icon to="/" nuxt>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon to="/users" nuxt>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>
