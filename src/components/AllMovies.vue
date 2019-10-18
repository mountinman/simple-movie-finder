<template>
  <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col 
      v-for="movie in allMovies"
      :key="movie.id"
      cols="12" md="6">
        <v-card class="pa-2" outlined tile>{{movie.title}}</v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["allMovies", "popularMovies"])
};
</script>

<style>
</style>