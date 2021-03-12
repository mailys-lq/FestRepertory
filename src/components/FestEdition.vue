<template>
  <h2>Année {{edition.year}}</h2>
  <p>Edition n°{{edition.editionNumber}}</p>
  <p> Groupes : </p>
  <ul v-for="groupe  in edition.groupes" :key="groupe">
    <li>
      <p>{{groupe.name}}</p>
      <p>Genre : {{groupe.genre}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FestEdition',
  props:{
    edition: Object,
  }
}
</script>

<style>
  /* @import 'pokemon.css'; */
</style>
