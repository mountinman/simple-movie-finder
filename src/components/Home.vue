<template>
  <div class="main-home-container d-flex pa-2 flex-column">
    <div style="text-align:center;">
      <h4>OUR MOST POPULAR MOVIES</h4>
    </div>

    <v-carousel cycle height="400" show-arrows-on-hover>
      <v-carousel-item
        style="cursor:pointer"
        v-for="movie in popularMovies"
        :key="movie.title"
        :src="movie.imageUrl"
      >
        <div class="carousel-title">
          <p>{{movie.title}}</p>
        </div>
      </v-carousel-item>
    </v-carousel>
    <div style="text-align:center;">
      <p>...click on picture to see details!</p>
    </div>
    <v-btn id="floating-btn" to="/find-movie" text>
      <span class>FIND</span>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allMovies", "popularMovies"])
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
  color: aliceblue;
}
.carousel-title {
  color: white;
  position: relative;
  top: 350px;
  font-size: 30px;
  margin-left: 20px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>