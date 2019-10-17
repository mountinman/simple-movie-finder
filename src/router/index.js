import Vue from "vue";
import Router from "vue-router";
import Home from '@/components/Home';
import FindMovie from '@/components/FindMovie';
import About from '@/components/About';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/find-movie",
      name: "FindMovie",
      component: FindMovie
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ],
  mode: 'history'
});
