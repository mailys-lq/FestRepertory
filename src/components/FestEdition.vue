<template>
  <div class="fest_edition">
    <img :src='getImgUrl(fest_edition.id)' v-bind:alt='fest_edition.name' width="100" height="100"/>
    <p>[{{fest_edition.id}}] {{fest_edition.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'FestEdition',
  props: {
    fest_edition: Object
  },
  methods: {
    getImgUrl(id){
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + id + ".png")
    }
  }
}
</script>

<style>
  /* @import 'pokemon.css'; */
</style>
