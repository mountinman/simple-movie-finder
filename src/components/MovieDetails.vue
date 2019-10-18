<template>
  <p>{{movie.title}}</p>
</template>

<script>
export default {
    props: ['id'],
    computed: {
    movie () {
        return this.$store.getters.loadedMovie(this.id)
    }
    }
}
</script>

<style>

</style>