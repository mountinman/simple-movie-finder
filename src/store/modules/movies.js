
const state = {
  allMovies: [
    { 
      id:'4983rp',
      title: "pop1",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    }, 
    { 
      id:'hjf9h3',
      title: "pop2",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    },
    { 
      id:'4783rp',
      title: "pop1",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    }, 
    { 
      id:'hjD9h3',
      title: "pop2",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    }
  ],
  popularMovies: [
    { 
      id:'4983rp',
      title: "pop1",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'
    }, 
    { 
      id:'hjf9h3',
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
