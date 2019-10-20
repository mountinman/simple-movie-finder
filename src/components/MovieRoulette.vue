<template>
  <div>
    <p>{{movie.title}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters.movieByGenre(28);
    }
  }
};
</script>


