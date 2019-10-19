<template>
  <p>{{movie.title}}</p>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ['id'],
    methods: mapActions(["fetchPopularMovies"]),
    
    computed: {
    movie () {
        return this.$store.getters.loadedMovie(this.id)
    }
    },
    created() {
    this.fetchPopularMovies();
  }
}
</script>

<style>

</style>