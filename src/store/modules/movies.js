
const state = {
  allMovies: [{ title: "movie1" }, { title: "movie2" }],
  popularMovies: [
    { 
      title: "pop1",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    }, 
    { 
      title: "pop2",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    }
  ]
};

const getters = {
  allMovies: state => state.allMovies,
  popularMovies: state => state.popularMovies
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
