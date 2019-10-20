<template>
  <div>
    <p>{{movie.title}}</p>
  </div>
</template>

<script>
export default {

  computed: {
    movie() {
      return this.$store.getters.movieByGenre(this.$store.getters.getGenreId);
    }
  }
};
</script>


