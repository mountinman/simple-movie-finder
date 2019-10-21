<template>
  <v-container>
    <div>
      <h2 style="margin-left:65px;">{{movie.title}}</h2>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%" :src="picBasePath + movie.poster_path"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h2>Random movie from your movie-roulette search</h2>
          <p class="basic-movie-info">
            <span style="font-weight:700">Average Rating:</span>
            {{movie.vote_average}}
          </p>
          <p>
            <span style="font-weight:700">Popularity:</span>
            {{movie.popularity}}
          </p>
          <p>
            <span style="font-weight:700">Language:</span>
            {{movie.original_language}}
          </p>
          <p>
            <span style="font-weight:700">Release date:</span>
            {{movie.release_date}}
          </p>
        </div>
        <div class="movie-overview">
          <p style="text-align:justify;">
            <span style="font-weight:700">OVERVIEW:</span>
            {{movie.overview}}
          </p>
        </div>
        <v-btn @click="backToAllMovies">BACK TO ALL MOVIES</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  
  data () {
    return {
      picBasePath: "http://image.tmdb.org/t/p/w500/",
    }
  },
  methods: {
    backToAllMovies () {
      this.$router.push('/movies')
    }
  },
  computed: {
    movie() {
      return this.$store.getters
      .movieByGenre(this.$store.getters.getGenreId);
    }
  }
};
</script>


