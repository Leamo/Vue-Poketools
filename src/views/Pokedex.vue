<template>
    <div class="pokedex">
        <select class="form-select" v-model="generation">
            <option v-for="generation in Generations" :key="generation.id" :value="generation">{{generation.name}}</option>
        </select>
        <div class="columns">
            <div class="column col-1" :class="[pokemon.name ? '' : 'unknown']" v-for="pokemon in pokemonsFromGeneration" :key="pokemon.id">
                <div class="card">
                    <div class="card-image">
                        <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png'"/>
                    </div>
                    <div class="card-body">
                        <p>{{pokemon.name ? pokemon.name : "???"}}</p>
                    </div>
                    <div class="card-footer">
                        <router-link :to="'/pokemon/'+pokemon.id" class="btn btn-success"><i class="icon icon-search"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Generations from '../config/generations.json'

  export default {
    name: 'pokedex',
    data(){
        return {
            Generations,
            generation: Generations[0]
        }
    },
    computed: {
        pokemonsFromGeneration: function() {
            return this.$store.state.pokemons.filter(function (pokemon) {
                if (this.firstPkmnId <= pokemon.id && pokemon.id <= this.lastPkmnId) {
                    return pokemon
                }
            }, this.generation)
        }
    }
  }
</script>

<style type="text/css">
  .columns {
    padding: 25px;
  }

  .card {
    border: 5px solid #345345;
    background-color: #B30000;
  }

  .card-image {
    margin: 10px auto 0;
    background-color: #FFF;
    width: 80%;
    text-align: center;
  }

  .card-image image {
    display: inline-block;
  }

  .card-body, .card-footer {
    text-align: center;
    color: #FFF;
  }

  .column {
    padding-bottom: .4rem;
  }

  .card-footer .btn {
    width: 80%;
  }

  .unknown {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
</style>