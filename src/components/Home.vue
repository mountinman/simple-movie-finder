<template>
  <div class="main-home-container">
    <div class="movie-slideshow" style="text-align:center;">
      <div class="mover-1">
        <h4>
          YOU CAN SEE THE MOST POPULAR MOVIES HERE ON
          THIS HOME PAGE. FOR MORE MOVIES CHECK OUT SECTION ALL MOVIES
          AND FIND YOUR FAVORITE MOVIE GY GENRE, SEE YOU THERE, ENJOY!
        </h4>
      </div>
    </div>

    <v-carousel cycle height="650" show-arrows-on-hover>
      <v-carousel-item
        style="cursor:pointer"
        v-for="movie in popularMovies"
        :key="movie.title"
        :src="apiUrl + movie.poster_path"
        @click="loadRouterLink(movie.id)"
      >
        <div class="carousel-title">
          <p>{{movie.title}}</p>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div style="text-align:center;">
      <p>...click on picture to see details!</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      apiUrl: "http://image.tmdb.org/t/p/w500/"
    };
  },
  methods: {
    ...mapActions(["fetchPopularMovies"]),
    loadRouterLink(movieId) {
      this.$router.push({ name: "MovieDetails", params: { id: movieId } });
    }
  },
  computed: {
    popularMovies() {
      return this.$store.getters.getPopularMovies.slice(0, 7);
    }
  },
  created() {
    this.fetchPopularMovies();
  }
};
</script>

<style lang="scss">
@import "../scss/_variables";

.v-image__image--cover {
  background-size: initial !important;
}
.main-home-container {
  color: $primary-color;
}
.carousel-title {
  color: gray;
  position: relative;
  top: 600px;
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.movie-slideshow {
  height: 30px;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
.movie-slideshow > div {
  height: 200px;
  width: 2526px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
.movie-slideshow .mover-1 {
  animation: moveSlideshow 16s linear infinite;
}
@keyframes moveSlideshow {
  100% {
    transform: translateX(-66.6666%);
  }
}
</style>