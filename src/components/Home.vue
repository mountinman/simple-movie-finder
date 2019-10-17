<template>
  <div class="main-home-container">
    <div v-for="movie in allMovies" :key="movie.title">
      <p>{{movie.title}}</p>
    </div>
    <div v-for="popular in popularMovies" :key="popular.title">
      <p>{{popular.title}}</p>
    </div>
    <v-btn id="floating-btn" to="/find-movie" text>
      <span class>FIND</span>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(['allMovies', 'popularMovies'])
};
</script>

<style lang="scss">
@import "../scss/_variables";
.main-home-container {
  color: $primary-color;
}
#floating-btn {
  position: fixed;
  right: 50px;
  bottom: 50px;
  background: $btn-color;
}
</style>