import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from './views/Pokedex.vue'
import Pokemon from './views/Pokemon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pokedex',
      component: Pokedex
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: Pokemon
    }
  ]
})
