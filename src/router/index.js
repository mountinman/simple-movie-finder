import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import AllMovies from "@/components/AllMovies";
import MovieDetails from "@/components/MovieDetails";
import MovieRoulette from "@/components/MovieRoulette";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/movies",
      name: "AllMovies",
      component: AllMovies
    },
    {
      path: "/movies/:id",
      name: "MovieDetails",
      props: true,
      component: MovieDetails
    },
    {
      path: "/movie-roulette",
      name: "MovieRoulette",
      component: MovieRoulette
    }
  ],
  mode: "history"
});
