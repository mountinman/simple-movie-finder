import Vue from "vue";
import Router from "vue-router";
import Home from '@/components/Home';
import FindMovie from '@/components/FindMovie';


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
    }
  ],
  mode: 'history'
});
