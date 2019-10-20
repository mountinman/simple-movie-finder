import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    popularMovies: [],
    genreId:null
  },
  mutations: {
    setPopularMovies: (state, popularMovies) => {
      state.popularMovies = popularMovies;
    },
    setGenreId: (state, genreId) => {
      state.genreId = genreId
    }
  },
  actions: {
    async fetchPopularMovies ({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ae56d736d615cdd0ba87516da9dc0134&language=en-US&page=1"
      );

      commit("setPopularMovies", response.data.results);
    }
  },
  getters: {
    getPopularMovies (state) {
      return state.popularMovies;
    },
    movieDetails (state) {
      return movieId => {
        return state.popularMovies.find(movie => {
          return movie.id === movieId;
        });
      };
    },
    movieByGenre (state) {
      return genreId => {
        const movies = state.popularMovies.filter(movie =>
          movie.genre_ids.includes(genreId)
        );

        return movies[Math.floor(Math.random() * movies.length)];
      };
    },
    getGenreId (state) {
      return state.genreId
    }
  }
});
