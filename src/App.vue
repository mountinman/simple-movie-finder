<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Movie</span>
        <span class="font-weight-light">FINDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">FIND MOVIE</span>
      </v-btn>
    </v-app-bar>
    <main style="margin-top:70px;">
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

