import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    moviesByyGenre: [],
    popularMovies: []
  },
  mutations: {
    setPopularMovies: (state, popularMovies) => {
      state.popularMovies = popularMovies;
    }
  },
  actions: {
    async fetchPopularMovies({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ae56d736d615cdd0ba87516da9dc0134&language=en-US&page=1"
      );

      commit("setPopularMovies", response.data.results);
    }
  },
  getters: {
    getPopularMovies(state) {
      return state.popularMovies;
    },
    allMovies(state) {
      return state.allMovies;
    },
    loadedMovie(state) {
      return (movieId) => {
        return state.popularMovies.find((movie) => {
          return movie.id === movieId;
        });
      };
    }
  }
});
