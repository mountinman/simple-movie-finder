<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">MovieFINDER</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in dynamicMenu" 
      :key="item.title" 
      :to="item.link" text>
        <v-icon left dark>{{ item.icon }}</v-icon>
        <span class="mr-2">{{item.title}}</span>
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
      dynamicMenu: [
        { icon: "home", title: "HOME", link: "/" },
        { icon: "movie", title: "ALL MOVIES", link: "/movies" },
        { icon: "person", title: "ABOUT", link: "/about" }
      ]
    };
  }
};
</script>

