<template>
  <div class="pokedex">
    <pokemon-list></pokemon-list>
  </div>
</template>

<script>
  import PokemonList from '../components/PokemonList.vue'

  export default {
    name: 'lightbox',
    components: { PokemonList }
  }
</script>
