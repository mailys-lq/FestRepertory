<template>
  <li>  
    <a href="#" @click="changeView()"><img :src='getImgUrl(edition.year)' alt=""></a>
  </li>
</template>

<script>
// import FestEdition from './FestEdition.vue'

export default {
  name: 'FestEdition',
  props: {
    edition:Object,
  },
  components: {
    // FestEdition
  },
  methods: {
    getImgUrl(id){
      var images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + id + ".jpg")
    },


  }
}
</script>

<style>
  img{
    width: 10%; 
    height: 100%; 
  }
</style>
