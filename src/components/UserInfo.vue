<template>
  <div>
    <div 
    class="movie-rating"
    v-for="movie in popularMovies" 
    :key="movie.id">
      <h4>{{movie.title}}</h4>
      <star-rating @rating-selected="updateMovie" :max-rating="10" v-model="movie.rating"></star-rating>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  data() {
    return {};
  },
  components: {
    StarRating
  },
  computed: {
    popularMovies() {
      return this.$store.getters.getPopularMovies.filter(movie => {
        if (movie.rating) {
          return movie;
        }
      });
    }
  }
};
</script>


<style>
.movie-rating{
  padding: 20px;
  border: 1px solid gray;
  width: 700px;
  margin: 20px auto;
}
</style>
