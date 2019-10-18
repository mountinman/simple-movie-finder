import Vuex from 'vuex';
import Vue from 'vue';

// Load Vuex
Vue.use(Vuex);

// Create store
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
      }
    ],
    popularMovies: [
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
      }
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    popularMovies (state) {
      return state.popularMovies
    },
    allMovies (state) {
      return state.allMovies
    },
    loadedMovie (state) {
      return (movieId) => {
        return state.allMovies.find((movie) => {
          return movie.id === movieId
        })
      }
    }
  }
});