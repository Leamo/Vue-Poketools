<template>
  <div id="app">
    <header class="navbar">
      <section class="navbar-section">
        <router-link to="/" class="btn btn-link">Pokedex</router-link>
      </section>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('init')
  }
}
</script>

<style src="spectre.css/dist/spectre.min.css"></style>
<style src="spectre.css/dist/spectre-exp.min.css"></style>
<style src="spectre.css/dist/spectre-icons.min.css"></style>
<style type="text/css">
    p {
        margin: 0;
    }
</style>