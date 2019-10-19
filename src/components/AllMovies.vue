<template>
  <v-container v-if="movieIndex < popularMovies.length" class="grey lighten-5">
    <v-row>
      <v-col :key="movieIndex" v-for="movieIndex in moviesToShow" cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="picBasePath + popularMovies[movieIndex].poster_path"
          >
            <v-card-title>{{popularMovies[movieIndex].title}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0 vote">
            <span style="font-weight:700"></span>
            {{popularMovies[movieIndex].vote_average}}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <p style="padding:20px 10px 0 0">
              <u>release date: {{popularMovies[movieIndex].release_date}}</u>
            </p>
            <div>
              <span style="font-weight:700">DESCRIPTION:</span>
              {{popularMovies[movieIndex].overview.substring(0,110)+"..."}}
            </div>
            <span>({{popularMovies[movieIndex].original_language}})</span>
          </v-card-text>

          <v-card-actions>
            <v-btn text>
              <router-link
                :to="{ name: 'MovieDetails', params: { id: popularMovies[movieIndex].id }}"
              >VIEW MORE</router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div style="text-align:center;">
      <v-btn @click="moviesToShow += 6" color="orange">LOAD MORE</v-btn>
    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn id="floating-btn" color="primary" dark v-on="on">FIND MOVIE</v-btn>
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
      picBasePath: "http://image.tmdb.org/t/p/w500/",
      dialog: false,
      moviesToShow: 6,
      movieIndex: null
    };
  },
  methods: {
    ...mapActions(["fetchPopularMovies"]),
  },

  computed: {
    popularMovies() {
      return this.$store.getters.getPopularMovies;
    }
  },
  created() {
    this.fetchPopularMovies();
  }
};
</script>

<style lang="scss">
@import "../scss/_variables";

.vote {
  position: absolute;
  top: 0px;
  right: 0;
  background: #1976d1;
  color: white !important;
  font-weight: 900 !important;
  padding: 3px !important;
}
#floating-btn {
  position: fixed;
  right: 50px;
  bottom: 12px;
  background: $btn-color;
  color: aliceblue;
}
</style>>

