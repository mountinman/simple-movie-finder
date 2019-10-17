<template>
  <div class="main-home-container">
      <v-btn 
      id="floating-btn"
      to="/find-movie"
      text>
        <span class="">FIND</span>
      </v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '../scss/_variables';
    .main-home-container{
        color: $primary-color;
    }
    #floating-btn{
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: $btn-color;
    }
</style>