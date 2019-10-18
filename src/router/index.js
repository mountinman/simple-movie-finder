import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import FindMovie from "@/components/FindMovie";
import About from "@/components/About";
import AllMovies from "@/components/AllMovies";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/movies",
      name: "AllMovies",
      component: AllMovies
    },
    {
      path: "/find-movie",
      name: "FindMovie",
      component: FindMovie
    }
  ],
  mode: "history"
});
