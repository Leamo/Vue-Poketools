<template>
    <div class="columns pokemon-list">
        <div class="column col-1" v-for="pokemon in pokemons" :key="pokemon.id">
          <div class="card">
            <div class="card-image">
              <img :src="pokemon.sprites.front_default">
            </div>
            <div class="card-body">
              <p>{{pokemon.name}}</p>
            </div>
            <div class="card-footer">
              <router-link to="/pokemon" class="btn btn-success"><i class="icon icon-search"></i></router-link>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'pokemon-list',
  data () {
    return {
      pokemons: {}
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      let vm = this
      let requestArray = []
      for (var i = 1; i < 252; i++) {
        requestArray.push(
          this.$http({
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon/'+i+'/'
          })
        )
      }

    this.$http.all(requestArray)
      .then(this.$http.spread(function (...results) {
        results.forEach(function(result) {
          vm.$set(vm.pokemons, result.data.id, result.data)
        })
      }))
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
</style>