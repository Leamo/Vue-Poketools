<template>
  <div class="pokemon">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="pokemon" class="content">
        {{ pokemon.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pokemon',
  data () {
    return {
      loading: false,
      pokemon: {},
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      console.log('fetchData')
      this.error = this.post = null
      this.loading = true
      let vm = this
      this.$http.get('https://pokeapi.co/api/v2/pokemon-species/'+this.$route.params.id)
        .then(function (response) {
            vm.pokemon.name = response.data.names.find(function(name) { 
                return name.language.name == "fr"
            }).name

            vm.loading = false
        })
        .catch(function (error) {
            console.log(error)
        })
    }
  }
}

</script>
