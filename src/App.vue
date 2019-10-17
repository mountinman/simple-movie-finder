<template>
  <v-app>
    <v-app-bar app>
      
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">MovieFINDER</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
      to="/about"
      text>
        <span class="mr-2">ABOUT</span>
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
    return {
      sideNav: true
    };
  }
};
</script>

