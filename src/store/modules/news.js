// initial state
const state = () => ({
    newsData: {
        "technology":[],
        "entertainment":[],
        "business":[],
        "science":[],
    },
    activeCategory: "business",
    bookmarkData:[]
})

// getters
const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}