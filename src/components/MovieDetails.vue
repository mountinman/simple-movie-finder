<template>
  <v-container>
    <div>
      <h2 style="margin-left:65px;">{{movie.title}}</h2>
    </div>
    <v-row>
      <v-col 
       cols="12" md="6">
        <v-card class="mx-auto" max-width="434" tile>
          <v-img height="100%" :src="picBasePath + movie.poster_path"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <star-rating @rating-selected="updateMovie" :max-rating="10" v-model="movie.rating"></star-rating>
       <p v-if="movie.rating">Your rating for this movie is {{movie.rating}} stars</p>
        <div>
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
import StarRating from "vue-star-rating";

export default {
  props: ["id"],
  components: {
    StarRating
  },
  data() {
    return {
      picBasePath: "http://image.tmdb.org/t/p/w500/",
      didWatched: false
    };
  },
  methods: {
    backToAllMovies() {
      this.$router.push("/movies");
    },
    updateMovie() {
      this.$store.commit("updateMovie", this.movie);
    },
    loadRouterLink(movieId) {
      this.$router.push({ name: "MovieDetails", params: { id: movieId } });
    }
  },
  computed: {
    movie() {
      return this.$store.getters.movieDetails(this.id);
    }
  }
};
</script>

<style lang="scss">
.vue-star-rating-rating-text[data-v-34cbeed1] {
  display: none !important;
}
.basic-movie-info {
  margin-top: 40px;
}
.movie-overview {
  padding: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}
</style>

