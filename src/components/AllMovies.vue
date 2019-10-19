<template>
  <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col v-for="movie in popularMovies" :key="movie.id" cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="apiUrl + movie.poster_path">
            <v-card-title>{{movie.title}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            <span style="font-weight:700">AVERAGE VOTE:</span>
            {{movie.vote_average}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{movie.overview.substring(0,140)+"..."}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn :to="'/movies/' + movie.id" color="orange" text>VIEW MORE</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn 
          id="floating-btn" 
          color="primary" 
          dark v-on="on">FIND MOVIE</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      apiUrl: "http://image.tmdb.org/t/p/w500/",
      dialog: false
    };
  },
  methods: mapActions(["fetchPopularMovies"]),
  // computed: {
  //   popularMovies() {
  //     return this.$store.getters.popularMovies;
  //   }
  // },
  computed: {
    popularMovies() {
      return this.$store.getters.popularMovies;
    }
  },
  created() {
    this.fetchPopularMovies();
  }
};
</script>

<style lang="scss">
@import "../scss/_variables";

#floating-btn {
  position: fixed;
  right: 50px;
  bottom: 40px;
  background: $btn-color;
  color: aliceblue;
}
</style>>

