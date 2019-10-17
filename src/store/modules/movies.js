
const state = {
  allMovies: [{ title: "movie1" }, { title: "movie2" }],
  popularMovies: [{ title: "pop1" }, { title: "pop2" }]
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
