import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allMovies: [
      {
        id: "4983rp",
        title: "pop1",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "hjf9h3",
        title: "pop2",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "4783rp",
        title: "pop1",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "hjD9h3",
        title: "pop2",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "4782rp",
        title: "pop1",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "hj39h3",
        title: "pop2",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "hjDre9h3",
        title: "pop2",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "4782rerp",
        title: "pop1",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      },
      {
        id: "hj3rew9h3",
        title: "pop2",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
      }
    ],
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
    popularMovies(state) {
      return state.popularMovies.slice(0, 7);
    },
    allMovies(state) {
      return state.allMovies;
    },
    loadedMovie(state) {
      return movieId => {
        return state.allMovies.find(movie => {
          return movie.id === movieId;
        });
      };
    }
  }
});
