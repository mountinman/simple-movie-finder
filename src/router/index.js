import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import AllMovies from "@/components/AllMovies";
import MovieDetails from "@/components/MovieDetails";
import MovieRoulette from "@/components/MovieRoulette";
import UserInfo from "@/components/UserInfo";




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
    },
    {
      path: "/user-info",
      name: "UserInfo",
      component: UserInfo
    }
  ],
  mode: "history"
});
