<template>
  <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col 
      v-for="movie in allMovies"
      :key="movie.id"
      cols="12" md="6">
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="movie.imageUrl"
    >
      <v-card-title>{{movie.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">POPULARITY</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>DESCRIPTION</div>

      
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
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