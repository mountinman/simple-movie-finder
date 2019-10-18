<template>
  <div class="main-home-container d-flex pa-2">
   <v-carousel
    cycle
    height="400"
   
    show-arrows-on-hover
   >
     <v-carousel-item
     v-for="movie in popularMovies"
     :key="movie.title"
     :src="movie.imageUrl"
     >
     <div class="carousel-title">
       <p>{{movie.title}}</p>
     </div>
     </v-carousel-item>
   </v-carousel>
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
.carousel-title{
  color:white;
  position: relative;
  top: 350px;
  font-size: 30px;
  margin-left: 20px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>