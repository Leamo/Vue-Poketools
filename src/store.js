import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: []
  },
  mutations: {
    init(state) {
      const POKEMON_NUMBER = 807
      for (var i = 1; i <= POKEMON_NUMBER; i++) {
        state.pokemons.push({'id': i})
      }
    }
  },
  actions: {
    init ({commit}) {
      commit('init')
    }
  }
})
