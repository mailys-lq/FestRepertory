<template>
  <div id="app">
    <ul>
      <fest-editions v-for="(edition, index) in editions" :key="index" :edition="edition" />
    </ul>
    
  </div>
</template>

<script>
import FestEditions from './components/FestEditions.vue'

export default {
  name: 'App',
  components: {
    FestEditions
  },
  data() {
    return{
      editions:[
        {
          year:'2021',
          editionNumber: '7'
        },
        {
          year:'2020',
          editionNumber: '6'
        },
        {
          year:'2019',
          editionNumber: '5'
        },
        {
          year:'2018',
          editionNumber: '4'
        },
        {
          year:'2017',
          editionNumber: '3'
        },
        {
          year:'2016',
          editionNumber: '2'
        },
      ],
    }
  }
}
</script>

<style>
  /* @import './app.css'; */
</style>