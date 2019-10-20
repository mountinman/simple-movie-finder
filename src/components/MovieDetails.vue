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
        <star-rating v-model="rating"></star-rating>
        <h3>
          Your Rating:
          <span style="font-weight:400">{{rating}}</span>
        </h3>
        <p v-if="rating === null ? ratingMessage = 'you didn\'t vote yet' : ''">{{ratingMessage}}</p>
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
      rating: null,
      ratingMessage: ''
    };
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
  /* border: 1px solid gray; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
}
</style>

